---
title: HTML
cover: https://upyun.yzyx.fun/5.jpg
order: 1
date: 2024-06-01
category:
  - 前端知识
tag:
  - 学习资料
---

<!-- more -->


# HTML

​	'HTML'全称是'Hypertext Markup Language'（超文本标记语言）。

HTML通过一系列的**'标签(也称元素)'**来定义文本、图像、链接等等。HTML标签是由尖括号包围的关键字。

标签通常成对出现，包括开始标签和结束标签（也称双标签），内容位于这两个标签之间，例如：

```html
<p>这是一个段落</p>
<h1>这是一个标题</h1>
<a href="#">这是一个超链接</a>
```

除了双标签，也存在单标签，例如：

```html
<input type="text">
<br>//换行标签
<hr>//分割线标签
```

区别：单标签用于没有内容的元素，双标签用于有内容的元素。

## HTML文件结构

```html
<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>文档标题</title>
    <link rel="stylesheet" type="text/css" href="style.css">
    <script src="script.js"></script>
</head>
<body>
    <h1>这是一个一级标题</h1>
    <p>这是一个段落</p>
    <a href="http://www.google.com">这是一个超链接</a>
</body>
</html>
```



## 常用文本标签

```html
<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>常见文本标签</title>
    <link rel="stylesheet" type="text/css" href="style.css">
    <script src="script.js"></script>
</head>
<body>
    <h1>这是一个一级标题</h1>
    <h2>这是一个二级标题</h2>
    <h3>这是一个三级标题</h3>
    <h4>这是一个四级标题</h4>
    <h5>这是一个五级标题</h5>
    <h6>这是一个六级标题</h6>
    <p>这是一个段落</p>
    <p>文本样式：<b>字体加粗</b>、<strong>字体加粗</strong>、<i>斜体</i>、<u>下划线</u>、<s>删除线</s></p>
    <ul>
        <li>无序列表1</li>
        <li>无序列表2</li>
        <li>无序列表3</li>
    </ul>
    <ol>
        <li>有序列表1</li>
        <li>有序列表2</li>
        <li>有序列表3</li>
    </ol>
    <h1>table row</h1>
    <h1>table data</h1>
    <h1>table header</h1>
    <table border="1">
        <tr>
            <th>列标题1</th>
            <th>列标题2</th>
            <th>列标题3</th>
        </tr>
        <tr>
            <td>元素11</td>
            <td>元素12</td>
            <td>元素13</td>
        </tr>
        <tr>
            <td>元素21</td>
            <td>元素22</td>
            <td>元素23</td>
        </tr>
        <tr>
            <td>元素31</td>
            <td>元素32</td>
            <td>元素33</td>
        </tr>
    </table>
    <a href="http://www.google.com">这是一个超链接</a>
</body>
</html>
```



## HTMl属性

属性在HTML中起到非常重要的作用，它们用于定义元素的行为和外观，以及与其他元素的关系。

基本语法：

```html
<开始标签 属性名="属性值">
```

每个HTML元素可以具有不同的属性

```html
<p id="describe" class="section">
    这是一个段落标签
</p>
<a href="https://www.baidu.com">这是一个超链接标签</a>
```

属性名称不区分大小写，属性值对大小写敏感

```html
<img src="example.jpg" alt="">
<img SRC="example.jpg" alt="">
<img src="EXAMPLE.JPG" alt="">
```

适用与大多数HTML元素的属性

| 属性  |                        描述                        |
| :---: | :------------------------------------------------: |
| class | 为HTML元素定义一个或多个类名（类名从样式文件引入） |
|  id   |                  定义元素唯一的id                  |
| style |                 规定元素的行内样式                 |

```html
<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>HTML属性</title>
    <link rel="stylesheet" type="text/css" href="style.css">
    <script src="script.js"></script>
</head>
<body>
    <a href="https://www.bilibili.com/">这是一个超链接</a>
    <br>
    <a href="https://www.bilibili.com/" target="_blank">这是又一个超链接</a>
    <hr>
    <img src="https://img-s-msn-com.akamaized.net/tenant/amp/entityid/BB1msIHC.img" alt="图片不见了" width="100" height="100">
    <br>
    <img src="23123.img" alt="图片不见了">
</body>
</html>
```



## HTML区块-块元素与行内元素

### 块元素（block）

块级元素通常用于组织和布局页面的主要结构和内容，例如段落、标题、列表、表格等。它们用于创建页面的主要部分，将内容分割成逻辑块。

- 块级元素通常会从新行开始，并占据整行的宽度，因此它们会在页面上呈现为一块独立的内容块。
- 可以包含其他块级元素和行内元素。
- 常见的块级元素包括div、p、h1到h6、ul、ol、li、table、form等。

### 行内元素（inline）

行内元素通常用于添加文本样式或为文本中的一部分应用样式。它们可以在文本中插如小的元素，例如超链接、强调文本等。

- 行内元素通常在一行内呈现，不会独占一行。
- 它们只占据其内容所需的宽度，而不是整行的宽度。
- 行内元素不能包括块级元素，但可以包含其他行内元素。
- 常见的行内元素包括span、a、strong、em、img、br、input等。

```html
<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>HTML区块</title>
    <link rel="stylesheet" type="text/css" href="style.css">
    <script src="script.js"></script>
</head>
<body>
    <div class="nav">
        <a href="#">链接1</a>
        <a href="#">链接2</a>
        <a href="#">链接3</a>
        <a href="#">链接4</a>
    </div>
    <div class="content">
        <h1>文章标题</h1>
        <p>文章内容</p>
        <p>文章内容</p>
        <p>文章内容</p>
    </div>
    <span>这是一个span标签</span>
    <span>链接点击这里<a href="#">链接</a> </span>
</body>
</html>
```



## HTML表单

```html
<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>HTML表单</title>
    <link rel="stylesheet" type="text/css" href="style.css">
    <script src="script.js"></script>
</head>
<body>
    <form action="http://localhost:8080/login">
        <label>用户名:
            <input type="text" placeholder="请输入用户名">
        </label>
        <br>
        <label>密码:
            <input type="password" placeholder="请输入密码">
        </label>
        <br>
        <label>性别：
            <input type="radio" name="gender">男
            <input type="radio" name="gender">女
            <input type="radio" name="gender">其他
        </label>
        <br>
        <label>爱好：
            <input type="checkbox" name="hobby">唱歌
            <input type="checkbox" name="hobby">RAP
            <input type="checkbox" name="hobby">篮球
        </label>
        <br>
        <input type="submit" value="上传">
    </form>
</body>
</html>
```









