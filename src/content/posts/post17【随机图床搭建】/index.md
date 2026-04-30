---
title: 个人免费随机图床搭建
published: 2026-04-25
description: Vercel-Random-Picture-halei0v0我改编优化的一款随机图床，可部署到Eageone和Vercel pages。
tags: [项目,发布]
image: "https://picture.halei0v0.top/api/random/人文"
category: 项目
draft: false
---



# Random picture随机图床

> 关于我之一个月来都干了些什么，我只能说尝试了新的博客——基于Claw Cloud【“答辩免费服务器”】的Halo博客【博客是好东西】
>
> 今天一看，就两周没登陆账号，项目就被停了，数据库还因此直接罢工了，数据全部不见了
>
> 总结，还是静态的页面来的安全，虽然稍微有点门槛，但毕竟稳定长效不是吗？

## 项目地址

::github{repo="halei0v0/Vercel-Random-Picture-halei0v0"}

**由THW/THWH2O-ME的项目改写完善而来** 

::github{repo="H2O-ME/EdgeOne-Random-Picture"}

## 新增功能

# Vercel Random Picture - halei0v0's Random Random Picture



一个基于 Vercel Pages 构建的随机图片分发系统。 【另一个THW基于EdgeOne的随机图片分发系统】 THW's Demo：https://picture.tianhw.top/

## 🌟 特性



- **🚀 极速响应**：基于 Vercel 全球边缘节点实现图片分发。
- **📱 智能分发**：自动识别访问者设备类型（PC/移动端），精准推送适配尺寸的图片。
- **🖼️ 沉浸式图库**：内置瀑布流图库，支持 Lightbox 预览、原图下载及 GSAP 丝滑动画。
- **✨ 动感交互**：集成 GSAP 动画引擎，实现沉浸式首页缩放与页面无缝过渡。
- **🛠️ 架构优化**：采用构建时元数据生成技术。

## 🛠️ 快速开始



### 1. 准备图片



只需将您的图片素材直接**放入** `public/images/{你创建的分类文件夹}` 目录即可：

- **无需重命名**：支持任何文件名。

- **格式无忧**：支持 `.jpg`, `.jpeg`, `.jfif`, `.png`, `.gif`, `.webp`, `.bmp`, `.tiff` 等主流格式。

- **支持子目录**：您可以创建文件夹对图片进行分类管理，系统会自动递归扫描。

- 自动分类：

  - **横屏图片**（宽 > 高）：自动归类为 PC 端素材。
  - **竖屏图片**（高 >= 宽）：自动归类为 移动端素材。
  - 【系统会自动识别图片比例】

- 📁 自定义分类：

  在

  ```shell
  public/images/Classification/
  ```

  目录下创建子文件夹，子文件夹的名称将自动识别作为分类名称。

  例如：

  ```shell
  public/images/Classification/风景/
  public/images/Classification/动漫/
  public/images/Classification/人物/
  ```

  放入对应分类文件夹中的图片将被自动标记为该分类。

- **构建优化**：图片元数据在构建时自动生成。

### 2. 安装与开发

```shell
# 安装依赖
pnpm install

# 启动本地开发服务器
pnpm dev
```

### 3. 部署

使用 Vercel Pages 部署项目

点击上方一键按钮即可快速部署，相关配置应该会自动识别，也可以照下方参数填写：

- **框架预设**：选择 `Next.js`
- **构建命令**：`npm run build`
- **输出目录**：`.next`

## 📡 API 接口



- **随机图片重定向**: `GET /api/random`

- 指定类型:
  - PC 端: `/api/random?type=pc`
  - 移动端: `/api/random?type=mobile`
  
- **指定分类**: `/api/random?classification=风景`

  **或**：`/api/random/{分类名}`

- **组合筛选**: `/api/random?type=pc&classification=动漫`

- **JSON 格式**: `/api/random?redirect=false` (返回图片 URL 路径)

- **图库预览**: `GET /gallery`

## 📄 许可证

[MIT License](https://github.com/halei0v0/Vercel-Random-Picture-halei0v0/blob/main/LICENSE)

