import{_ as i,c as e,d as a,o as s}from"./app-CfZ_ajB2.js";const n="/image/IMG-20241222%20233557089-Github%20Pages%E9%85%8D%E7%BD%AE%E8%87%AA%E5%AE%9A%E4%B9%89%E5%9F%9F%E5%A4%B1%E6%95%88.png",g="/image/IMG-20241222%20234015050-Github%20Pages%E9%85%8D%E7%BD%AE%E8%87%AA%E5%AE%9A%E4%B9%89%E5%9F%9F%E5%A4%B1%E6%95%88.png",o="/image/IMG-20241222%20234044907-Github%20Pages%E9%85%8D%E7%BD%AE%E8%87%AA%E5%AE%9A%E4%B9%89%E5%9F%9F%E5%A4%B1%E6%95%88.png",p={};function h(r,t){return s(),e("div",null,t[0]||(t[0]=[a('<h2 id="描述" tabindex="-1"><a class="header-anchor" href="#描述"><span>描述</span></a></h2><p>众所周知，Github Page中可以自己绑定到自定义域上</p><figure><img src="'+n+'" alt="IMG-20241222 233557089-Github Pages配置自定义域失效.png" tabindex="0" loading="lazy"><figcaption>IMG-20241222 233557089-Github Pages配置自定义域失效.png</figcaption></figure><p>但是有时候，每次重新构建，这个域名都会失效</p><h2 id="解决" tabindex="-1"><a class="header-anchor" href="#解决"><span>解决</span></a></h2><p>原因是 <code>CNAME</code> 文件被覆盖掉导致的</p><p>设置完成后，我们可以看到，github自动帮我们把CNAME文件写了进去</p><figure><img src="'+g+'" alt="IMG-20241222 234015050-Github Pages配置自定义域失效.png" tabindex="0" loading="lazy"><figcaption>IMG-20241222 234015050-Github Pages配置自定义域失效.png</figcaption></figure><p>CNAME文件里面写的就是我们刚刚的域</p><figure><img src="'+o+`" alt="IMG-20241222 234044907-Github Pages配置自定义域失效.png" tabindex="0" loading="lazy"><figcaption>IMG-20241222 234044907-Github Pages配置自定义域失效.png</figcaption></figure><p>因此，我们在部署的时候，直接把这个CNAME文件写进去就行了。 比如Github Action，就可以这样写入</p><div class="language-yaml line-numbers-mode" data-highlighter="shiki" data-ext="yaml" data-title="yaml" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> - </span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">name</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">Add CNAME</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">   run</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">echo &#39;blog.erduotong.com&#39; &gt; src/.vuepress/dist/CNAME</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div>`,12)]))}const u=i(p,[["render",h],["__file","Github Pages配置自定义域失效.html.vue"]]),c=JSON.parse('{"path":"/41%20%E7%AC%94%E8%AE%B0/001%20%E5%8D%A1%E7%89%87/Github%20Pages%E9%85%8D%E7%BD%AE%E8%87%AA%E5%AE%9A%E4%B9%89%E5%9F%9F%E5%A4%B1%E6%95%88.html","title":"Github Pages配置自定义域失效","lang":"zh-CN","frontmatter":{"category":["卡片"],"date":"2024-12-22","isOriginal":true,"tags":["github","github/page"],"title":"Github Pages配置自定义域失效","description":"描述 众所周知，Github Page中可以自己绑定到自定义域上 IMG-20241222 233557089-Github Pages配置自定义域失效.pngIMG-20241222 233557089-Github Pages配置自定义域失效.png 但是有时候，每次重新构建，这个域名都会失效 解决 原因是 CNAME 文件被覆盖掉导致的 设置完成...","head":[["meta",{"property":"og:url","content":"https://erduotong.github.io/41%20%E7%AC%94%E8%AE%B0/001%20%E5%8D%A1%E7%89%87/Github%20Pages%E9%85%8D%E7%BD%AE%E8%87%AA%E5%AE%9A%E4%B9%89%E5%9F%9F%E5%A4%B1%E6%95%88.html"}],["meta",{"property":"og:site_name","content":"耳朵同的博客"}],["meta",{"property":"og:title","content":"Github Pages配置自定义域失效"}],["meta",{"property":"og:description","content":"描述 众所周知，Github Page中可以自己绑定到自定义域上 IMG-20241222 233557089-Github Pages配置自定义域失效.pngIMG-20241222 233557089-Github Pages配置自定义域失效.png 但是有时候，每次重新构建，这个域名都会失效 解决 原因是 CNAME 文件被覆盖掉导致的 设置完成..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://erduotong.github.io/image/IMG-20241222 233557089-Github Pages配置自定义域失效.png"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-12-28T14:55:16.000Z"}],["meta",{"property":"article:tag","content":"github"}],["meta",{"property":"article:tag","content":"github/page"}],["meta",{"property":"article:published_time","content":"2024-12-22T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-12-28T14:55:16.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Github Pages配置自定义域失效\\",\\"image\\":[\\"https://erduotong.github.io/image/IMG-20241222 233557089-Github Pages配置自定义域失效.png\\",\\"https://erduotong.github.io/image/IMG-20241222 234015050-Github Pages配置自定义域失效.png\\",\\"https://erduotong.github.io/image/IMG-20241222 234044907-Github Pages配置自定义域失效.png\\"],\\"datePublished\\":\\"2024-12-22T00:00:00.000Z\\",\\"dateModified\\":\\"2024-12-28T14:55:16.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"耳朵同\\",\\"url\\":\\"https://erduotong.github.io\\"}]}"]]},"headers":[{"level":2,"title":"描述","slug":"描述","link":"#描述","children":[]},{"level":2,"title":"解决","slug":"解决","link":"#解决","children":[]}],"git":{"createdTime":1735397716000,"updatedTime":1735397716000,"contributors":[{"name":"github-actions[bot]","username":"github-actions[bot]","email":"github-actions[bot]@users.noreply.github.com","commits":1,"url":"https://github.com/github-actions[bot]"}]},"readingTime":{"minutes":0.82,"words":245},"filePathRelative":"41 笔记/001 卡片/Github Pages配置自定义域失效.md","localizedDate":"2024年12月22日","excerpt":"<h2>描述</h2>\\n<p>众所周知，Github Page中可以自己绑定到自定义域上</p>\\n<figure><img src=\\"/image/IMG-20241222 233557089-Github Pages配置自定义域失效.png\\" alt=\\"IMG-20241222 233557089-Github Pages配置自定义域失效.png\\" tabindex=\\"0\\" loading=\\"lazy\\"><figcaption>IMG-20241222 233557089-Github Pages配置自定义域失效.png</figcaption></figure>\\n<p>但是有时候，每次重新构建，这个域名都会失效</p>","autoDesc":true,"bioChainData":{"outlink":[],"backlink":[],"localMap":{"nodes":[{"id":"41 笔记/001 卡片/Github Pages配置自定义域失效.md","value":{"title":"Github Pages配置自定义域失效","path":"41 笔记/001 卡片/Github Pages配置自定义域失效.md","outlink":[],"backlink":[]}}],"links":[]}}}');export{u as comp,c as data};
