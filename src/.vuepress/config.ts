import { defineUserConfig } from "vuepress";
import { copyrightPlugin } from '@vuepress/plugin-copyright'
import { commentPlugin } from '@vuepress/plugin-comment'
import theme from "./theme.js";
import { getDirname, path } from "vuepress/utils";
 


const __dirname = getDirname(import.meta.url);

export default defineUserConfig({
  base: "/",
  lang: "zh-CN",
  title: "云中月下之镜",
  theme,
  plugins: [
    copyrightPlugin({
      global: true,
      triggerLength:10,
      disableCopy:true,
      disableSelection:true,
      author:"yunzhongyue"
    }),
    commentPlugin({
      provider: 'Giscus',
      repo:"yunzhongyuexia/blogs",
      repoId:"R_kgDOMN1SAw",
      category:"Announcements",
      categoryId:"DIC_kwDOMN1SA84CgXFw",
      comment:true,
    }),
  ],
  alias: {
    "@theme-hope/modules/blog/components/BlogHero": path.resolve(
      __dirname,
      "./components/BlogHero.vue",
    ),
  },
});
