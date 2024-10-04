import {defineUserConfig} from "vuepress";
import {getDirname, path} from "vuepress/utils"
import theme from "./theme.js";
import link_handler from './plugins/markdown_it/link_handler.js'
import img_space_adder from './plugins/markdown_it/img_space_adder.js'
import mdItObsidianCallouts from 'markdown-it-obsidian-callouts'
const __dirname = getDirname(import.meta.url);
export default defineUserConfig({
    base: "/",

    lang: "zh-CN",
    title: "耳朵同的博客",
    description: "欢迎来到耳朵同的博客",

    theme,
    alias: {
        "@theme-hope/components/PageFooter": path.resolve(
            __dirname,
            "./components/websiteFooter.vue",
        ),
    },
    head: [
        ["link", {rel: "icon", href: '/logo.png'}]
    ],
    extendsMarkdown: (md) => {
        md.use(link_handler)
        md.use(mdItObsidianCallouts)
        md.use(img_space_adder)
    },
    markdown: {
        headers: {
            level: [1, 2, 3, 4, 5, 6] // 不然的话toc会受限
        },
    },
});
