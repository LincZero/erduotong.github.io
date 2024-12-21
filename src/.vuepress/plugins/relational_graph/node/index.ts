/**
 * @fileOverview index.ts
 * @author erduotong
 */
import { getDirname, path } from "vuepress/utils";
import { bioChainMap, buildBioChainMap } from "./buildMapData.js";
import type { App } from "vuepress/core";

const __dirname = getDirname(import.meta.url);

const relational_graph = () => {
  return {
    name: "vuepress-plugin-relational-graph",
    onInitialized: (app: App) => {
      Object.assign(bioChainMap, {});
      buildBioChainMap(app.pages);
    },
    clientConfigFile: path.resolve(__dirname, "../client/config.ts"),
  };
};

export default relational_graph;
