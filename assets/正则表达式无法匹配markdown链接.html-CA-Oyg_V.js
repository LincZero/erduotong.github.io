import{_ as s,c as e,d as a,o as t}from"./app-CfZ_ajB2.js";const n={};function h(l,i){return t(),e("div",null,i[0]||(i[0]=[a('<h2 id="背景" tabindex="-1"><a class="header-anchor" href="#背景"><span>背景</span></a></h2><p>一般来说，正则表达式很强大，大部分的字符串基本都能处理。 但是，它对于处理markdown链接这一块具有较大的问题。 如下列表达式:</p><div class="language-regex line-numbers-mode" data-highlighter="shiki" data-ext="regex" data-title="regex" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">\\[</span><span style="--shiki-light:#383A42;--shiki-dark:#D19A66;">(</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">[</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">^</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">\\]</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">]</span><span style="--shiki-light:#383A42;--shiki-dark:#D19A66;">+)</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">\\]\\(</span><span style="--shiki-light:#383A42;--shiki-dark:#D19A66;">(</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#383A42;--shiki-dark:#D19A66;">+?)</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">\\)</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>尝试匹配一个这样的字符串:</p><div class="language-markdown line-numbers-mode" data-highlighter="shiki" data-ext="markdown" data-title="markdown" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#986801;--shiki-dark:#ABB2BF;">[</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">IMG1</span><span style="--shiki-light:#986801;--shiki-dark:#ABB2BF;">]</span><span style="--shiki-light:#A626A4;--shiki-dark:#E06C75;">(</span><span style="--shiki-light:#A626A4;--shiki-light-text-decoration:inherit;--shiki-dark:#C678DD;--shiki-dark-text-decoration:underline;">IMG1（1</span><span style="--shiki-light:#A626A4;--shiki-dark:#E06C75;">)</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.png)</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>结果是:</p><div class="language-markdown line-numbers-mode" data-highlighter="shiki" data-ext="markdown" data-title="markdown" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#986801;--shiki-dark:#ABB2BF;">[</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">IMG1</span><span style="--shiki-light:#986801;--shiki-dark:#ABB2BF;">]</span><span style="--shiki-light:#A626A4;--shiki-dark:#E06C75;">(</span><span style="--shiki-light:#A626A4;--shiki-light-text-decoration:inherit;--shiki-dark:#C678DD;--shiki-dark-text-decoration:underline;">IMG1（1</span><span style="--shiki-light:#A626A4;--shiki-dark:#E06C75;">)</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h2 id="原因" tabindex="-1"><a class="header-anchor" href="#原因"><span>原因</span></a></h2><p>正则对这种不规则的嵌套很难处理，哪怕贪婪匹配也无法完成。</p><h2 id="解决办法" tabindex="-1"><a class="header-anchor" href="#解决办法"><span>解决办法</span></a></h2><p>不用正则表达式</p>',11)]))}const k=s(n,[["render",h],["__file","正则表达式无法匹配markdown链接.html.vue"]]),d=JSON.parse('{"path":"/41%20%E7%AC%94%E8%AE%B0/001%20%E5%8D%A1%E7%89%87/%E6%AD%A3%E5%88%99%E8%A1%A8%E8%BE%BE%E5%BC%8F%E6%97%A0%E6%B3%95%E5%8C%B9%E9%85%8Dmarkdown%E9%93%BE%E6%8E%A5.html","title":"正则表达式无法匹配markdown链接","lang":"zh-CN","frontmatter":{"category":["卡片"],"date":"2024-10-03","isOriginal":true,"tags":["debug","正则表达式"],"title":"正则表达式无法匹配markdown链接","description":"背景 一般来说，正则表达式很强大，大部分的字符串基本都能处理。 但是，它对于处理markdown链接这一块具有较大的问题。 如下列表达式: 尝试匹配一个这样的字符串: 结果是: 原因 正则对这种不规则的嵌套很难处理，哪怕贪婪匹配也无法完成。 解决办法 不用正则表达式","head":[["meta",{"property":"og:url","content":"https://erduotong.github.io/41%20%E7%AC%94%E8%AE%B0/001%20%E5%8D%A1%E7%89%87/%E6%AD%A3%E5%88%99%E8%A1%A8%E8%BE%BE%E5%BC%8F%E6%97%A0%E6%B3%95%E5%8C%B9%E9%85%8Dmarkdown%E9%93%BE%E6%8E%A5.html"}],["meta",{"property":"og:site_name","content":"耳朵同的博客"}],["meta",{"property":"og:title","content":"正则表达式无法匹配markdown链接"}],["meta",{"property":"og:description","content":"背景 一般来说，正则表达式很强大，大部分的字符串基本都能处理。 但是，它对于处理markdown链接这一块具有较大的问题。 如下列表达式: 尝试匹配一个这样的字符串: 结果是: 原因 正则对这种不规则的嵌套很难处理，哪怕贪婪匹配也无法完成。 解决办法 不用正则表达式"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-12-28T14:55:16.000Z"}],["meta",{"property":"article:tag","content":"debug"}],["meta",{"property":"article:tag","content":"正则表达式"}],["meta",{"property":"article:published_time","content":"2024-10-03T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-12-28T14:55:16.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"正则表达式无法匹配markdown链接\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2024-10-03T00:00:00.000Z\\",\\"dateModified\\":\\"2024-12-28T14:55:16.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"耳朵同\\",\\"url\\":\\"https://erduotong.github.io\\"}]}"]]},"headers":[{"level":2,"title":"背景","slug":"背景","link":"#背景","children":[]},{"level":2,"title":"原因","slug":"原因","link":"#原因","children":[]},{"level":2,"title":"解决办法","slug":"解决办法","link":"#解决办法","children":[]}],"git":{"createdTime":1735397716000,"updatedTime":1735397716000,"contributors":[{"name":"github-actions[bot]","username":"github-actions[bot]","email":"github-actions[bot]@users.noreply.github.com","commits":1,"url":"https://github.com/github-actions[bot]"}]},"readingTime":{"minutes":0.49,"words":147},"filePathRelative":"41 笔记/001 卡片/正则表达式无法匹配markdown链接.md","localizedDate":"2024年10月3日","excerpt":"<h2>背景</h2>\\n<p>一般来说，正则表达式很强大，大部分的字符串基本都能处理。\\n但是，它对于处理markdown链接这一块具有较大的问题。\\n如下列表达式:</p>\\n<div class=\\"language-regex line-numbers-mode\\" data-highlighter=\\"shiki\\" data-ext=\\"regex\\" data-title=\\"regex\\" style=\\"--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34\\"><pre class=\\"shiki shiki-themes one-light one-dark-pro vp-code\\"><code><span class=\\"line\\"><span style=\\"--shiki-light:#0184BC;--shiki-dark:#56B6C2\\">\\\\[</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#D19A66\\">(</span><span style=\\"--shiki-light:#986801;--shiki-dark:#D19A66\\">[</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">^</span><span style=\\"--shiki-light:#0184BC;--shiki-dark:#56B6C2\\">\\\\]</span><span style=\\"--shiki-light:#986801;--shiki-dark:#D19A66\\">]</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#D19A66\\">+)</span><span style=\\"--shiki-light:#0184BC;--shiki-dark:#56B6C2\\">\\\\]\\\\(</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#D19A66\\">(</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">.</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#D19A66\\">+?)</span><span style=\\"--shiki-light:#0184BC;--shiki-dark:#56B6C2\\">\\\\)</span></span></code></pre>\\n<div class=\\"line-numbers\\" aria-hidden=\\"true\\" style=\\"counter-reset:line-number 0\\"><div class=\\"line-number\\"></div></div></div>","autoDesc":true,"bioChainData":{"outlink":[],"backlink":[],"localMap":{"nodes":[{"id":"41 笔记/001 卡片/正则表达式无法匹配markdown链接.md","value":{"title":"正则表达式无法匹配markdown链接","path":"41 笔记/001 卡片/正则表达式无法匹配markdown链接.md","outlink":[],"backlink":[]}}],"links":[]}}}');export{k as comp,d as data};
