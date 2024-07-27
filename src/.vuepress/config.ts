import { defineUserConfig } from "vuepress";
import { copyrightPlugin } from '@vuepress/plugin-copyright'
import { commentPlugin } from '@vuepress/plugin-comment'
import theme from "./theme.js";
import { getDirname, path } from "vuepress/utils";
 


const __dirname = getDirname(import.meta.url);

export default defineUserConfig({
  host: "localhost",
  port: 8099,
  base: "/",
  dest: 'dist',
  lang: "zh-CN",
  title: "云中月下之镜",
  theme,
  plugins: [
    copyrightPlugin({
      global: true,
      triggerLength:10,
      disableCopy:false,
      disableSelection:false,
      author:"yunzhongyuexia"
    }),
    commentPlugin({
      provider: 'Giscus',
      repo:"yunzhongyuexia/blogs",
      repoId:"R_kgDOMaVDlg",
      category:"Announcements",
      categoryId:"DIC_kwDOMaVDls4ChKHq",
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
