import { defineConfig } from 'vitepress'
// import fs from 'fs';
// import path from 'path';

// function generateSidebar(baseDir) {
//   let files = fs.readdirSync(baseDir);
//   files = files.filter(function(item){
//     return item !==".vitepress"
//   })
//   console.log(files);
  
//   const sidebarItems = [];
//   files.forEach((file) => {
//     const fullPath = path.join(baseDir, file);
//     const stat = fs.statSync(fullPath);

//     if (stat.isFile() && file.endsWith('.md')) {
//       const fileName = file.replace('.md', '');
//       sidebarItems.push({
//         text: fileName,
//         link: `/${fileName}`,
//       });
//     } else if (stat.isDirectory()) {
//       sidebarItems.push({
//         text: file,
//         items: generateSidebar(fullPath),
//       });
//     }
//   });
//   return sidebarItems;
// }

export default defineConfig({
  title: 'onekkm', // 网站标题
  titleTemplate: '个人博客',
  description: '这是onekkm的个人博客网站', // 网站描述
  lang: 'zh-CN',
  head: [['link', { rel: 'icon', href: '/favicon.ico' }]],
  themeConfig: {
    logo: '/logo.svg',
    nav: [
      { text: '问题统计', link: '/articlesList' },
      {
        text: '微服务工具',
        items: [
          { text: 'Item A', link: '/item-1' },
          { text: 'Item B', link: '/item-2' },
          { text: 'Item C', link: '/item-3' }
        ]
      }
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' },
      { icon: 'twitter', link: '...' },
      // 可以通过将 SVG 作为字符串传递来添加自定义图标：
      {
        icon: {
          svg: '<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Dribbble</title><path d="M12...6.38z"/></svg>'
        },
        link: '...',
        // 也可以为无障碍添加一个自定义标签 (可选但推荐):
        ariaLabel: 'cool link'
      }
    ],
    sidebar: {},
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2024-onekkm'
    },
    editLink: {
      pattern: 'https://github.com/vuejs/vitepress/edit/main/docs/:path',
      text: 'Edit this page on GitHub'
    }
  },
});

