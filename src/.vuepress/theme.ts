import {hopeTheme} from "vuepress-theme-hope";

import navbar from "./navbar.js";
import sidebar from "./sidebar.js";


export default hopeTheme({
    hostname: "https://erduotong.github.io",
    author: {
        name: "耳朵同",
        url: "https://erduotong.github.io",
    },
    iconAssets: "fontawesome-with-brands",
    editLink: false,
    hotReload: true,
    logo: "/logo.png",
    docsDir: "src",
    navbar, // 导航栏设置
    sidebar, // 侧边栏设置
    displayFooter: true,
    fullscreen: true,
    // repo
    repo: "https://github.com/erduotong/erduotong.github.io",
    repoLabel: "Github",
    repoDisplay: true,
    // 博客相关
    blog: {
        name: "耳朵同",
        description: "欢迎来到耳朵同的博客，请随处逛逛吧",
        intro: "about_site/intro",
        medias: {
            Github: "https://github.com/erduotong",
            BiliBili: "https://space.bilibili.com/1486177608",
            Email: "3135351980@qq.com"
        },
        timeline: "所谓开拓，就是沿着前人未尽的道路，走出更遥远的距离...",
    },
    navbarLayout: {
        start: ['Brand'],
        center: [],
        end: ['Search', 'Links', 'Repo', 'Outlook'],
    },
    // 在这里配置主题提供的插件
    plugins: {
        blog: true,
        components: {
            components: ["Badge", "VPCard"],
        },
        markdownImage: {
            figure: true,
            lazyload: true,
            size: true,
        },
        markdownMath: {
            type: "katex",
        },
        mdEnhance: {
            //角标
            sub: true,
            sup: true,

            tasklist: true,
            include: true,
            footnote: true,
            tabs: true,
            hint: true,
            mark: true,
            mermaid: true,
        },
        searchPro: {
            indexContent: true,
            autoSuggestions: false,
            customFields: [
                {
                    getter(page: any) {
                        return page.frontmatter.category
                    }
                },
                {
                    getter(page: any): any {
                        return page.frontmatter.tag
                    }
                }
            ]
        }

    },
}, {
    custom: true,
});
