---
title: JavaScript
cover: https://upyun.yzyx.fun/6.jpg
order: 3
date: 2024-06-01
category:
  - 前端知识
tag:
  - 学习资料
---

<!-- more -->





# JavaScript

​	JavaScript是一种轻量级、解释型、面向对象的脚本语言。它主要被设计用于在网页上实现动态效果，增加用户与网页的交互性。

​	作为一种客户端脚本语言，JavaScript可以直接嵌入HTML，并在浏览器中执行。

​	与HTML和CSS不同，JavaScript使得网页不在是静态的，而是可以根据用户操作动态变化的。

## JavaScript的作用

​	JavaScript在前端开发中扮演着重要的角色，其应用领域包括但不限于：

- 客户端脚本：用于在用户浏览器中执行，实现动态效果和用户交互。
- 网页开发：与HTML和CSS协同工作，使得网页具有更强的交互性和动态性。
- 后端开发：使用Node.js，JavaScript也可以在服务器端运行，实现服务器端的应用开发。

```html
<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>JS的导入方式</title>
    <style></style>
    <script src="/server/web/js/main.js"></script>
    <script>
        console.log("Hello,head标签的内联样式")
    </script>
</head>
<body>
    <p>JavaScript的导入方式</p>
    <script>
        console.log("Hello,body标签的内联样式")
        alert("你好，内联样式弹窗")
    </script>
</body>
</html>
```

server/web/js/main.js文件

```js
console.log("hello,外联样式")
```



## JavaScript基本语法

```html
<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>JS基本语法</title>
</head>
<body>
    <script>
       var x;
       let y=5;
       const z =3.14
       console.log(x,y,z)//undefined 5 3.14
       const name = "如花"
       console.log(name)//如花
       const value = null
       console.log(value)//null
    </script>
</body>
</html>
```



## 控制语句

### 条件语句

​	条件语句是编程中常见的结构，用于基于不同的条件执行不同的代码块。

**if**语句：用于执行一个代码块，当指定的条件为真（true）时执行。语法如下：

```js
if (condition){
	//如果条件为true时，执行这里的代码
}
```

**else**语句：用户在上一个if和所有的else if 都为false时执行的代码块。语法如下：

```js
if (condition){
	//如果条件为true时，执行这里的代码
}else{
	//如果条件为false时，执行这里的代码
}
```

```html
<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>JS基本语法</title>
</head>
<body>
    <script>
     const time = 17
     if (time<=12){
         alert("上午好")
     }else if(time<=18){
         alert("下午好")
     }else{
         alert("晚上好")
     }
    </script>
</body>
</html>
```

### 循环语句

​	循环语句用于重复执行一段代码，直到指定条件不再满足为止。

**for**循环：是一种常见的循环结构，用于按照指定的条件重复执行台吗块。语法如下：

```js
for (初始化表达式；循环条件；迭代器){
	//循环体，执行这里的代码
}
```

```html
<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>JS循环语句</title>
</head>
<body>
    <script>
        console.log("for循环")
        for(let i=1; i<=10; i++){
            console.log(i)
        }
    </script>
</body>
</html>
```

**while**循环：会在指定的条件为真时执行代码块。语法如下：

```js
whlie(循环条件){
	//循环体，执行这里的代码
}
```

```html
<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>JS循环语句</title>
</head>
<body>
    <script>
        console.log("while循环")
        let i=1
        while(i<=10){
            console.log(i)
            i++
        }
    </script>
</body>
</html>
```

**break**用于跳出循环，结束循环的执行。

**continue**用于跳过当前循环中的剩余代码，继续下一次循环。

```html
<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>JS循环语句</title>
</head>
<body>
    <script>
        for (let i = 0; i <9;i++){
            if (i===3){
                continue
            }
            if (i===7){
                break
            }
            console.log(i)
        }
    </script>
</body>
</html>
```



## 函数

**函数**是一段可重复使用的代码块，它接受输入参数、执行特定任务，并返回输出。

```js
function function_name(参数1,参数2,...){//参数可以不写，表示不传参
    //函数体，执行这里的代码
    return 返回值;//可选，返回值
}
```

```html
<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>JS循环语句</title>
</head>
<body>
    <script>
        function hello() {
            console.log("Hello!");
        }
        hello()
        function hello_with_params(name) {
            console.log("Hello，" + name);
        }
        hello_with_params("如花")

        //作用域
        const global_var = "全局变量"
        function local_var_func() {
            const local_var ="局部变量"
            console.log("函数内打印"+ global_var)
            console.log("函数内打印"+ local_var)
        }
        local_var_func()
        console.log("全局打印"+ global_var)
        // console.log("全局打印"+ local_var)
        //local_var全局未定义，函数有定义
    </script>
</body>
</html>
```



## 事件

​	事件是文档或浏览器窗口中发生的特定瞬间，例如用户的点击、键盘的按下、页面的加载等。常见的事件如下：

|    事件     |       描述       |
| :---------: | :--------------: |
|   onClick   |     点击事件     |
| onMouseOver |     鼠标经过     |
| onMouseOut  |     鼠标移出     |
|  onChange   | 文本内容改变事件 |
|  onSelect   |    文本框选中    |
|   onFocus   |     光标聚集     |
|   onBlur    |     移开光标     |

JavaScript绑定事件的方法有三种：

- HTML属性
- DOM属性
- addEventListener方法

```html
<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>JS循环语句</title>
</head>
<body>
<button onclick="click_event()">这是一个点击事件按钮</button>
<label>
    <input type="text" onfocus="focus_event()" onblur="blur_event()">
</label>
<script>
        //点击事件
        function click_event(){
            alert("点击事件触发了")
        }
        //聚焦事件
        function focus_event(){
            console.log("获取焦点")
        }
        //失焦事件
        function blur_event(){
            console.log("失去焦点")
        }
    </script>
</body>
</html>
```



## DOM

​	在Web开发中，DOM通常于JavaScript一起使用。当网页被加载时，浏览器会创建页面的文档对象模型，也就是DOM（Document Object Model）。每个HTML或XML文档都可以被视为一个文档树，文档树是整个文档的层次结构表示。文档节点是整个文档树的根节点。DOM为这个文档树提供了一个编程接口，开发者可以使用JavaScript来操作这个树状结构。

![image-20240701114204298](\assets\image-20240701114204298.png)

```html
<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>JSDOM</title>
</head>
<body>
<div id="box1">这是一个ID选择器标签</div>
<div class="box2">这是一个类选择器标签</div>
<div>普通的div标签</div>
<button>点击按钮</button>
<script>
    const element_id = document.getElementById("box1");
    console.log(element_id)

    const element_class = document.getElementsByClassName("box2")[0];
    console.log(element_class)

    const element_tag = document.getElementsByTagName("div")[2];
    console.log(element_tag)

    element_id.innerHTML='<a href="#">跳转链接</a>'
    element_class.innerText='<a href="#">跳转链接</a>'

    element_tag.style.color='red'
    element_tag.style.fontSize='20px'

    //DOM属性绑定事件
    const button_element=document.getElementsByTagName("button")[0]
    console.log(button_element)

    // button_element.onclick=function (){
    //     alert("DOM属性案件触发了")
    // }

    button_element.addEventListener('click',function(){
        alert("DOM通过addEventListener触发了")
    })
</script>
</body>
</html>
```

DOM对象常用方法

|       方法        |               描述               |
| :---------------: | :------------------------------: |
|   appendChild()   |    把新的子节点添加到指定节点    |
|   removeChild()   |            删除子节点            |
|  replaceChild()   |            替换子节点            |
|  insertBefore()   | 在指定的子节点前面插入新的子节点 |
| createAttribute() |           创建属性节点           |
|  createElement()  |           创建元素节点           |
| createTextNode()  |           创建文本节点           |
|  getAttribute()   |         返回指定的属性值         |



