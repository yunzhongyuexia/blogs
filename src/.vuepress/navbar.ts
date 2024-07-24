import { navbar } from "vuepress-theme-hope";

export default navbar([
  {
    text: "首页",
    icon: "home",
    link: "/", 
  },
  {
    text: "文章分类",
    icon: "book",
    link: "books/", 
  },
  {
    text: "项目介绍",
    icon: "chess",
    link: "project/", 
  },
  {
    text: "游戏杂谈",
    icon: "bandage",
    link: "game/", 
  },
]);
