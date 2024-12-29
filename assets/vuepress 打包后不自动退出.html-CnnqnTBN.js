import{_ as e,c as i,d as t,o as a}from"./app-CfZ_ajB2.js";const n="/image/IMG-20241129%20221622538-vuepress%20%E6%89%93%E5%8C%85%E5%90%8E%E4%B8%8D%E8%87%AA%E5%8A%A8%E9%80%80%E5%87%BA.png",l={};function r(p,s){return a(),i("div",null,s[0]||(s[0]=[t('<hr><h1 id="描述" tabindex="-1"><a class="header-anchor" href="#描述"><span>描述</span></a></h1><p>在用Vuepress构建的时候，部分情况会出现<code>Build Successful</code>后，不自动结束进程，导致一直卡住终端不进行下一步。</p><figure><img src="'+n+`" alt="IMG-20241129 221622538-vuepress 打包后不自动退出.png" tabindex="0" loading="lazy"><figcaption>IMG-20241129 221622538-vuepress 打包后不自动退出.png</figcaption></figure><h1 id="原因" tabindex="-1"><a class="header-anchor" href="#原因"><span>原因</span></a></h1><p>在组件中，添加了SetInterval等组件，并且没有释放，如下图</p><div class="language-javascript line-numbers-mode" data-highlighter="shiki" data-ext="javascript" data-title="javascript" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">const</span><span style="--shiki-light:#986801;--shiki-dark:#E5C07B;"> interval</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;"> setInterval</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">calculateTime</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">1000</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">);</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>因为一直没有释放，所以导致<code>Node JS</code>一直无法结束事件循环，哪怕该组件不再使用</p><h1 id="解决办法" tabindex="-1"><a class="header-anchor" href="#解决办法"><span>解决办法</span></a></h1><p>在组件的生命周期中，挂载和卸载计时器</p><div class="language-javascript line-numbers-mode" data-highlighter="shiki" data-ext="javascript" data-title="javascript" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">onMounted</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(() </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">=&gt;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> {  </span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">  const</span><span style="--shiki-light:#986801;--shiki-dark:#E5C07B;"> interval</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;"> setInterval</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">calculateTime</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">1000</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">); </span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">  onUnmounted</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(() </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">=&gt;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> {  </span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">    clearInterval</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">interval</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">);  </span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  });  </span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">});</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,11)]))}const d=e(l,[["render",r],["__file","vuepress 打包后不自动退出.html.vue"]]),o=JSON.parse('{"path":"/41%20%E7%AC%94%E8%AE%B0/001%20%E5%8D%A1%E7%89%87/vuepress%20%E6%89%93%E5%8C%85%E5%90%8E%E4%B8%8D%E8%87%AA%E5%8A%A8%E9%80%80%E5%87%BA.html","title":"vuepress 打包后不自动退出","lang":"zh-CN","frontmatter":{"category":["卡片"],"date":"2024-10-02","isOriginal":true,"tags":["vuepress","debug"],"title":"vuepress 打包后不自动退出","description":"描述 在用Vuepress构建的时候，部分情况会出现Build Successful后，不自动结束进程，导致一直卡住终端不进行下一步。 IMG-20241129 221622538-vuepress 打包后不自动退出.pngIMG-20241129 221622538-vuepress 打包后不自动退出.png 原因 在组件中，添加了SetInterv...","head":[["meta",{"property":"og:url","content":"https://erduotong.github.io/41%20%E7%AC%94%E8%AE%B0/001%20%E5%8D%A1%E7%89%87/vuepress%20%E6%89%93%E5%8C%85%E5%90%8E%E4%B8%8D%E8%87%AA%E5%8A%A8%E9%80%80%E5%87%BA.html"}],["meta",{"property":"og:site_name","content":"耳朵同的博客"}],["meta",{"property":"og:title","content":"vuepress 打包后不自动退出"}],["meta",{"property":"og:description","content":"描述 在用Vuepress构建的时候，部分情况会出现Build Successful后，不自动结束进程，导致一直卡住终端不进行下一步。 IMG-20241129 221622538-vuepress 打包后不自动退出.pngIMG-20241129 221622538-vuepress 打包后不自动退出.png 原因 在组件中，添加了SetInterv..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://erduotong.github.io/image/IMG-20241129 221622538-vuepress 打包后不自动退出.png"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-12-28T14:55:16.000Z"}],["meta",{"property":"article:tag","content":"vuepress"}],["meta",{"property":"article:tag","content":"debug"}],["meta",{"property":"article:published_time","content":"2024-10-02T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-12-28T14:55:16.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"vuepress 打包后不自动退出\\",\\"image\\":[\\"https://erduotong.github.io/image/IMG-20241129 221622538-vuepress 打包后不自动退出.png\\"],\\"datePublished\\":\\"2024-10-02T00:00:00.000Z\\",\\"dateModified\\":\\"2024-12-28T14:55:16.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"耳朵同\\",\\"url\\":\\"https://erduotong.github.io\\"}]}"]]},"headers":[{"level":1,"title":"描述","slug":"描述","link":"#描述","children":[]},{"level":1,"title":"原因","slug":"原因","link":"#原因","children":[]},{"level":1,"title":"解决办法","slug":"解决办法","link":"#解决办法","children":[]}],"git":{"createdTime":1735397716000,"updatedTime":1735397716000,"contributors":[{"name":"github-actions[bot]","username":"github-actions[bot]","email":"github-actions[bot]@users.noreply.github.com","commits":1,"url":"https://github.com/github-actions[bot]"}]},"readingTime":{"minutes":0.6,"words":181},"filePathRelative":"41 笔记/001 卡片/vuepress 打包后不自动退出.md","localizedDate":"2024年10月2日","excerpt":"<hr>\\n<h1>描述</h1>\\n<p>在用Vuepress构建的时候，部分情况会出现<code>Build Successful</code>后，不自动结束进程，导致一直卡住终端不进行下一步。</p>\\n<figure><img src=\\"/image/IMG-20241129 221622538-vuepress 打包后不自动退出.png\\" alt=\\"IMG-20241129 221622538-vuepress 打包后不自动退出.png\\" tabindex=\\"0\\" loading=\\"lazy\\"><figcaption>IMG-20241129 221622538-vuepress 打包后不自动退出.png</figcaption></figure>","autoDesc":true,"bioChainData":{"outlink":[],"backlink":[{"title":"Vuepress相关","link":"41 笔记/000 MOCS/Vuepress相关.html"}],"localMap":{"nodes":[{"id":"41 笔记/001 卡片/vuepress 打包后不自动退出.md","value":{"title":"vuepress 打包后不自动退出","path":"41 笔记/001 卡片/vuepress 打包后不自动退出.md","outlink":[],"backlink":["41 笔记/000 MOCS/Vuepress相关.md"]}},{"id":"41 笔记/000 MOCS/Vuepress相关.md","value":{"title":"Vuepress相关","path":"41 笔记/000 MOCS/Vuepress相关.md","outlink":["41 笔记/001 卡片/防止标题被吞.md","41 笔记/001 卡片/添加Giscus评论.md","41 笔记/001 卡片/jsdom导致无法使用localStorage.md"],"backlink":[]}},{"id":"41 笔记/001 卡片/防止标题被吞.md","value":{"title":"防止标题被吞","path":"41 笔记/001 卡片/防止标题被吞.md","outlink":[],"backlink":[]}},{"id":"41 笔记/001 卡片/添加Giscus评论.md","value":{"title":"添加Giscus评论","path":"41 笔记/001 卡片/添加Giscus评论.md","outlink":[],"backlink":[]}},{"id":"41 笔记/001 卡片/jsdom导致无法使用localStorage.md","value":{"title":"jsdom导致无法使用localStorage","path":"41 笔记/001 卡片/jsdom导致无法使用localStorage.md","outlink":[],"backlink":[]}}],"links":[{"source":"41 笔记/000 MOCS/Vuepress相关.md","target":"41 笔记/001 卡片/vuepress 打包后不自动退出.md"},{"source":"41 笔记/000 MOCS/Vuepress相关.md","target":"41 笔记/001 卡片/防止标题被吞.md"},{"source":"41 笔记/000 MOCS/Vuepress相关.md","target":"41 笔记/001 卡片/添加Giscus评论.md"},{"source":"41 笔记/000 MOCS/Vuepress相关.md","target":"41 笔记/001 卡片/jsdom导致无法使用localStorage.md"}]}}}');export{d as comp,o as data};
