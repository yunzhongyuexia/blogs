---
title: GitHub Action工作流自动化部署
cover: /assets/images/15.jpg
date: 2024-07-25
category:
  - GitHub
tag:
  - 学习资料
---

<!-- more -->

### 1. 添加yml文件

blogs/.github/workflows/npm-publish-github-packages.yml

```yaml
name: Build and Deploy

on:
  push:
    branches:
      - main

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
    - name: Checkout source code
      uses: actions/checkout@v3

    - name: Setup Node.js
      uses: actions/setup-node@v3
      with:
        node-version: '18'  # 或者您项目需要的 Node.js 版本

    - name: Install pnpm
      run: npm install -g pnpm

    - name: Install dependencies
      run: pnpm install

    - name: Build project
      run: pnpm run docs:build  # 确保 package.json 中有 "docs:build" 脚本

    - name: Deploy to GitHub Pages
      uses: JamesIves/github-pages-deploy-action@v4
      if: ${{ github.ref == 'refs/heads/main' }}
      with:
        branch: gh-pages//这个是存储你项目打包后的文件分支
        folder: dist
        token: ${{ secrets.TOKEN }}

    - name: Deploy to server
      uses: appleboy/ssh-action@master
      with:
        host: ${{ secrets.HOST }}
        username: ${{ secrets.USERNAME }}
        key: ${{ secrets.SSH_PRIVATE_KEY }}
        port: ${{ secrets.PORT }}
        script: |
          cd /www/wwwroot/www.yzyx.fun/blogs  # 替换为您的项目在服务器上的位置
          git pull origin gh-pages # 拉取最新代码
```

代码仓库--》Actions--》Now workflow--》Publish Node.js Package to GitHub Packages(第二行中间)

然后你的项目就会出现这个脚本文件，并对脚本文件进行细节上的修改。

![image-20240725171622658](\assets\image-20240725171622658.png)

### 2. 设置环境

- TOKEN

​	Setting（GitHub）--》Developer setting（左侧边栏最下面）--》Token（classic）记得记录一下

​	长这样：ghp_gZGZzXVwmLPYn6aBCt4O6ZZ9Fh42eSop3（我随机删了两个字符）

- SSH公私钥

​	SSH公私钥在本地终端或服务器终端使用命令行创建（无论在哪创建，最好都要使另一个也要复制过去）

​	本地存放在C:\Users\yeqic\.ssh，服务器存放在/root/.ssh

```bash
ssh-keygen -t rsa -b 4096 -C "your_email@example.com"
```

​	公钥添加到GitHub的SSH keys中,私钥添加到下面的secrets中

![image-20240725171228632](\assets\image-20240725171228632.png)

- 添加到secrets

​	Setting（代码仓库）--》Secrets and variables--》Actions--》New repository secret（Name字符都要大写）

|          Name           |                   内容                    |
| :---------------------: | :---------------------------------------: |
|      secrets.TOKEN      | 例：ghp_gZGZzXVwmLPYn6aBCt4O6ZZ9Fh42eSop3 |
|      secrets.HOST       |      服务器地址（例：123.322.42.5）       |
|    secrets.USERNAME     |            服务器用户名：root             |
| secrets.SSH_PRIVATE_KEY |                  ssh私钥                  |
|      secrets.PORT       |                    22                     |

![image-20240725171552804](\assets\image-20240725171552804.png)

### 3. 整体思想

​	设计一个脚本来实现项目的自动化部署，本地将项目push到GitHub仓库时，push会触发这个脚本，GitHub会开启一个ubuntu的服务器，来处理我们这个脚本，执行pnpm run docs:build打包我们的项目生成dist文件，再将这个dist文件存放在我们GitHub仓库的另一个分支gh-pages上。然后在服务器的/www/wwwroot/www.yzyx.fun/blogs目录上执行git pull origin gh-pages拉取gh-pages分支上的最新代码，最后部署到我们的服务器上。

![image-20240725183051071](\assets\image-20240725183051071.png)

![image-20240725183104336](\assets\image-20240725183104336.png)

![image-20240725183124075](\assets\image-20240725183124075.png)







































