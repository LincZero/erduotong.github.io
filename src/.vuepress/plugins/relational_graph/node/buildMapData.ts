import type {
  BioChainMapItem,
  LocalMapNodeLink,
  LocalMapItem,
  Page,
  QueueItem,
} from "../types/index.js";

export const bioChainMap: Record<string, BioChainMapItem> = {};
const max_deep = 5;

function generateLocalMap(root: string): LocalMapNodeLink {
  const localMap: Record<string, LocalMapItem> = {};
  const queue: QueueItem[] = [
    {
      path: root,
      depth: 0,
    },
  ];
  const visited = new Set<string>();

  while (queue.length > 0) {
    const { path, depth } = queue.shift()!;

    if (depth > max_deep || visited.has(path)) {
      continue;
    }

    visited.add(path);
    localMap[path] = {
      title: bioChainMap[path].title,
      path: path,
      outlink: [],
      backlink: [],
    };

    const outlinks = bioChainMap[path].outlink;
    const backlinks = bioChainMap[path].backlink;

    outlinks.forEach((link) => {
      if (!visited.has(link) && depth + 1 <= max_deep) {
        queue.push({
          path: link,
          depth: depth + 1,
        });
        localMap[path].outlink.push(link);
      }
    });

    backlinks.forEach((link) => {
      if (!visited.has(link) && depth + 1 <= max_deep) {
        queue.push({
          path: link,
          depth: depth + 1,
        });
        localMap[path].backlink.push(link);
      }
    });
  }
  // 转成node-link的格式
  const localMapNodeLink: LocalMapNodeLink = {
    nodes: [],
    links: [],
  };
  for (const key of Object.keys(localMap)) {
    localMapNodeLink.nodes.push({
      id: key,
      value: {
        ...localMap[key],
      },
    });
    localMap[key].outlink.forEach((link) => {
      localMapNodeLink.links.push({
        source: key,
        target: link,
      });
    });
    localMap[key].backlink.forEach((link) => {
      localMapNodeLink.links.push({
        source: link,
        target: key,
      });
    });
  }
  return localMapNodeLink;
}

export function buildBioChainMap(pages: Page[]): void {
  // 生成双链
  for (const page of pages) {
    if (!page.filePathRelative) {
      continue;
    }
    bioChainMap[page.filePathRelative] = {
      title: page.title,
      outlink: [],
      backlink: [],
    };
  }
  // 第二次遍历，判断出链
  for (const page of pages) {
    const links: string[] = [];
    for (const link of page.links) {
      links.push(decodeURIComponent(link.relative));
    }
    links.forEach((link) => {
      if (bioChainMap[link]) {
        bioChainMap[link].backlink.push(page.filePathRelative);
        bioChainMap[page.filePathRelative].outlink.push(link);
      }
    });
  }

  for (const page of pages) {
    write_to_frontmatter(page);
  }
}

function write_to_frontmatter(page: Page): void {
  // 第三次遍历 写入到页面中
  const bioChain = bioChainMap[page.data.filePathRelative];

  if (!bioChain) {
    return;
  }
  //去个重
  bioChain.outlink = [...new Set(bioChain.outlink)];
  bioChain.backlink = [...new Set(bioChain.backlink)];

  const outlink_array = JSON.parse(JSON.stringify(bioChain.outlink));
  const backlink_array = JSON.parse(JSON.stringify(bioChain.backlink));

  const outlink_result = [];
  for (let i = 0; i < outlink_array.length; i++) {
    let link = outlink_array[i];
    if (link.endsWith(".md")) {
      link = link.replace(/\.md$/, ".html");
    }
    outlink_result.push({
      title: bioChainMap[outlink_array[i]].title,
      link: link,
    });
  }

  const backlink_result = [];
  for (let i = 0; i < backlink_array.length; i++) {
    let link = backlink_array[i];
    if (link.endsWith(".md")) {
      link = link.replace(/\.md$/, ".html");
    }
    backlink_result.push({
      title: bioChainMap[backlink_array[i]].title,
      link: link,
    });
  }
  const localMap = generateLocalMap(page.filePathRelative);
  page.data.bioChainData = {
    outlink: outlink_result,
    backlink: backlink_result,
    localMap: localMap,
  };
}