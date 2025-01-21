---
layout: home

hero:
  name: onekkm
  text: 个人博客
  tagline: 基于vitepress的个人博客
  image:
    # src: /logo.png
    # alt: VitePress
  actions:
    - theme: brand
      text: Get Started
      link: /articlesList
    - theme: alt
      text: View on GitHub
      link: https://github.com/onekkm/onekkm_blog
features:
  - icon: 
      src: /id-card.png
    title: 关于博客
    details: 关于博客的介绍和搭建
    link: /
    # linkText: 了解更多
  - icon:
      src: /ruler.png
    title: 微服务
    details: 这里记录我用过的微服务工具，并记录他们的用法
    link: /
    # linkText: 了解更多
  - icon:
      src: /pencil.png
    title: 问题统计
    details: 这里主要记录工作中遇到的问题，以及解决方法
    link: /
    # linkText: 了解更多
---
## Getting Started

You can get started using VitePress right away using `npx`!

```sh
npm init
npx vitepress init
```

<style>
:root {
  --vp-home-hero-name-color: transparent;
  --vp-home-hero-name-background: -webkit-linear-gradient(120deg, #bd34fe, #41d1ff);
}
</style>
