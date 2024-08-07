---
title: CSS
cover: https://upyun.yzyx.fun/4.jpg
order: 2
date: 2024-06-01
category:
  - 前端知识
tag:
  - 学习资料
---

<!-- more -->



# CSS

## CSS语法

​	CSS通常由选择器、属性和属性值组成，多个规则可以组合在一起，以便同时应用多个样式。

```css
选择器{
    属性1：属性值1
    属性2：属性值2
}
```

- 选择器的声明中可以写无数条属性
- 声明的每一行属性，都可以以英文分号结尾
- 声明中的所有属性和值都是以键值对的形式出现的

示例：

```css
/*这是一个p标签选择器*/
p{
	color:blue;
	font-size:16px;
}
```

## CSS三种导入方式

- 内联样式（Inline Styles）
- 内部样式表（Internal Stylesheet）
- 外部样式表（External Stylesheet）

三种导入方式的优先级：内联样式>内部样式表>外部样式表（优先级高的会覆盖优先级低的样式）

```html
<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>CSS导入方式</title>
    <link rel="stylesheet" href="/server/web/css/main.css">
   <style>
       p {
           color:blue;
           font-size:16px;
       }
       h2 {
           color:plum;
           font-size: 30px;
       }
   </style>
</head>
<body>
   <p>这是一个应用了css样式的文本</p>
   <h1 style="color: red;font-size: 20px">这是一个应用了内联样式的文本</h1>
   <h2>这是一个应用了内部样式表的文本</h2>
   <h3>这是一个应用了外部样式表的文本</h3>
</body>
</html>

```

同父级文件夹web下的同级文件夹css的css.main文件

```css
h3 {
    color:green;
    font-size:40px;
}
```



## 选择器

​	选择器是CSS中的关键部分，它允许你对特定元素或一组元素定义样式。

- 元素选择器
- 类选择器
- ID选择器
- 通用选择器
- 子元素选择器
- 后代选择器（包含选择器）
- 并集选择器（兄弟选择器）
- 伪类选择器

```html
<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>CSS选择器</title>
   <style>
       /*元素选择器*/
       h2 {
           color:plum;
           font-size: 30px;
       }
       /*类选择器*/
       .high-light{
           font-size: 20px;
           color:green;
       }
       /*ID选择器*/
       #header{
           color:red;
           font-size:40px;
       }
       /*通用选择器*/
       *{
           font-family: '楷体';
       }
       /*子元素选择器*/
       .father>.son{
           color:yellowgreen;
       }
       /*后代选择器*/
       .father p{
           color: aqua;
           font-size: larger;
       }
       /*相邻元素选择器*/
        h3+p{
            background-color:blue;
        }
       /*伪类选择器*/
        #element:hover{
            background-color: red;
        }
        /*选中第一个元素 :first-child*/
        /*             :nth-child*/
        /*             :active*/

       /*为元素选择器*/
       /*::before*/
       /*::after*/
   </style>
</head>
<body>
   <h1>不同类型的选择器</h1>
   <h2>这是一个元素选择器示例</h2>
   <h3 class="high-light">这是一个类选择器示例</h3>
   <h4 id="header">这是一个ID选择器示例</h4>
    <div class="father">
        <p class="son">这是一个子元素选择器示例</p>
        <div>
            <p class="grandson">这是一个后代选择器示例</p>
        </div>
    </div>
    <p>这是一个普通的p标签</p>
    <h3>这是一个相邻元素选择器示例</h3>
   <p>这是一个普通的p标签</p>
    <h3 id="element">这是一个伪类选择器</h3>
</body>
</html>
```

CSS中的块元素、行内元素和行内块元素

```html
<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>CSS块元素</title>
    <style>
        .block{
            background-color:aqua;
        }
        .inline{
            background-color:red;
        }
        .inline-block{
            width: 100px;
            height: 100px;
        }
        .div-inline{
            display: inline;
            background-color:green;
        }
        .span-inline-block{
            display: block;
            background-color:blueviolet;
            width:300px;
        }
    </style>
</head>
<body>
   <h1 style="font:bolder 50px 'kaiti';">这是一个font复合属性</h1>
    <p style="line-height: 40px">这是一段长文本这是一段长文本这是一段长文本这是一段长文本这是一段长文本这是一段长文本这是一段长文本这是一段长文本这是一段长文本这是一段长文本这是一段长文本这是一段长文本</p>
    <div class="block">这是一个块级元素</div>
    <span class="inline">这是一个行内元素</span>
    <img src="https://img-s-msn-com.akamaized.net/tenant/amp/entityid/BB1msOOU.img" alt="图片不见了" class="inline-block">
    <h1>display</h1>
    <div class="div-inline">这是一个转换为行内元素的div标签</div>
    <span class="span-inline-block">这是一个转换为行内块元素的span标签</span>
</body>
</html>
```



## 盒子模型

| 属性名            | 说明                                                         |
| ----------------- | ------------------------------------------------------------ |
| 内容（Content）   | 盒子包含的实际内容，比如文本、图片等                         |
| 内边距（Padding） | 围绕在内容的内部，是内容与边框之间的空间。可以使用padding属性来设置 |
| 边框（Border）    | 围绕在内边距的外部，是盒子的边界。可以使用border属性来设置   |
| 外边距（Margin）  | 围绕在边框的外部，是盒子与其他元素之间的空间。可以使用margin属性来设置 |

![image-20240629142509994](\assets\image-20240629142509994.png)

```html
<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>盒子模型</title>
    <style>
        .demo{
            background-color:aqua;
            display: inline-block;
            border: 5px solid yellowgreen;
            padding: 50px;
            margin:40px;
        }
        .border-demo{
            background-color:yellow;
            width:300px;
            height:200px;
            border-style: solid;
            border-width:10px;
            border-color:red;
        }
    </style>
</head>
<body>
    <div class="demo">B站搜索云中月花开</div>
    <div class="border-demo">这是一个边框属性</div>
</body>
</html>
```



## 浮动

​	元素脱离文档流，根据开发者的意愿漂浮到网页的任意方向。

### 传统网页布局五种方式

- 标准流（普通流、文档流）：网页按照元素的书写顺序依次排列
- 浮动
- 定位
- Flexbox和Grid（自适应布局）

​	标准流是由块级元素和行内元素按照默认规定的方式来排列，块级就是占一行，行内元素一行放好多个元素。



**浮动**属性用于创建浮动框，将其移到一边直到左边缘或右边缘触及包含块或另一个浮动框的边缘，这样即可使得元素进行浮动。

```html
选择器{
	float:left/right/none;
}
```

注意：浮动是相对于父元素浮动，只会在父元素的内部移动

### 浮动的三大特性

- 脱标：脱离标准流
- 一行显示，顶部对齐
- 具备行内块元素特性

```html
<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>浮动</title>
    <style>
        .father{
            background-color:aqua;
            /*height:150px;*/
            border: 3px solid blueviolet;
            /*overflow:hidden;*/
        }
        .father::after{
            content:"";
            display: table;
            clear: both;
        }
        .left-son{
            width: 100px;
            height:100px;
            background-color:yellowgreen;
            float:left;
        }
        .right-son{
            width: 100px;
            height:100px;
            background-color:yellow;
            float:right;
        }
    </style>
</head>
<body>
    <div class="father">
        <div class="left-son">左浮动</div>
        <div class="right-son">右浮动</div>
    </div>
    <p>这是一段文本这是一段文本这是一段文本这是一段文本这是一段文本这是一段文本</p>
</body>
</html>
```



## 定位

​	定位布局可以精准定位，但缺乏灵活性

### 定位方式

- 相对定位：相对于元素在文档流中的正常位置进行定位
- 绝对定位：相对于其最近的已定位祖先元素进行定位，不占据文档流
- 固定定位：相对于浏览器窗口进行定位，不占据文档流，固定在屏幕上的位置，不随滚动而移动

```html
<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>定位</title>
    <style>
        .box1{
            height:350px;
            background-color: aqua;
        }
        .box-normal{
            width:100px;
            height:100px;
            background-color:purple;
        }
        .box1-relative{
            width:100px;
            height:100px;
            background-color:pink;
            position:relative;
            left:120px;
            top:120px;
        }
        .box2{
            height:350px;
            background-color: yellow;
        }
        .box2-absolute{
            width:100px;
            height:100px;
            background-color:pink;
            position:absolute;
            left:120px;
        }
        .box-fixed{
            width:100px;
            height:100px;
            background-color:brown;
            position:fixed;
            right:0;
            top:120px;
        }
    </style>
</head>
<body>
    <p>相对定位</p>
    <div class="box1">
        <div class="box-normal"></div>
        <div class="box1-relative"></div>
        <div class="box-normal"></div>
    </div>
    <p>绝对定位</p>
    <div class="box2">
        <div class="box-normal"></div>
        <div class="box2-absolute"></div>
        <div class="box-normal"></div>
    </div>
    <p>固定定位</p>
    <div class="box-fixed"></div>
</body>
</html>
```





