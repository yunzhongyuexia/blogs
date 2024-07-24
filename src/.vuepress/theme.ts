import { hopeTheme } from "vuepress-theme-hope";
import navbar from "./navbar.js";
import sidebar from "./sidebar.js";

export default hopeTheme({
    fullscreen: true,
    darkmode:"switch",
    author: {
      name: "云中月下",
      url: "http://yzyx.fun/intro.html",
    },
    favicon: "/assets/images/21.png",
    iconAssets: "fontawesome-with-brands",
    logo: "/assets/images/1.png",
    repo: "https://github.com/yunzhongyuexia/blogs",
    docsDir: "src",
    // 导航栏
    navbar,
    // 侧边栏
    sidebar,
    // 页脚
    footer: "版权所有 © 2024 云中月下 | ICP 备案号：豫ICP备2023033487号",
    displayFooter: true,


    // 博客相关
    blog: {
      avatar:"/assets/images/1.png",
      name: "云中月下",
      intro: "/intro.html",
      description: "资深二次程序元宅男~",
      medias: {
        GitHub: "https://github.com/yunzhongyuexia",
        BiliBili:"https://space.bilibili.com/1682573250?spm_id_from=333.1007.0.0",
        Jujin: {
            icon: "https://lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/6c61ae65d1c41ae8221a670fa32d05aa.svg",
            link: "https://juejin.cn/user/1876194677242778",
        },
      },
    },

    // 多语言配置
    metaLocales: {
      editLink: "在 GitHub 上编辑此页",
    },
  
    // 在这里配置主题提供的插件
    plugins: {
      blog: true,
      searchPro: true,
      components: {
        components: ["Badge", "VPCard"],
      },
      // 此处开启了很多功能用于演示，你应仅保留用到的功能。
      mdEnhance: {
        align: true,
        attrs: true,
        codetabs: true,
        component: true,
        demo: true,
        figure: true,
        imgLazyload: true,
        imgSize: true,
        include: true,
        mark: true,
        plantuml: true,
        spoiler: true,
        stylize: [{
          matcher: "Recommended",
          replacer: ({ tag }) => {
            if (tag === "em")
              return {
                tag: "Badge",
                attrs: { type: "tip" },
                content: "Recommended",
              };
          },
        }],
        sub: true,
        sup: true,
        tabs: true,
        tasklist: true,
        vPre: true,
      },
    },
  },
  //插件
  { custom: true }
);
