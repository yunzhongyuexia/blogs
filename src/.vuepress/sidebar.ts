import { sidebar } from "vuepress-theme-hope";

export default sidebar({
  "/": [
    "",// 首页链接
    {
      text: "文章分类",
      icon: "book",
      prefix: "books/",
      link: "books/",
      children:"structure",
    },
    {
      text: "项目介绍",
      icon: "chess",
      prefix: "project/",
      link: "project/",
      children: "structure",
    },
    {
      text: "游戏杂谈",
      icon: "bandage",
      prefix: "game/",
      link: "game/",
      children: "structure",
    },
  ],
});
