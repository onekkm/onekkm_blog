import { createContentLoader } from 'vitepress'

export default createContentLoader('posts/*.md', {
  includeSrc: true,    // 包含原始的 Markdown 文件内容
  render: true,        // 渲染 Markdown 为 HTML
  excerpt: true,       // 提取内容的摘录（例如：每篇文章的前几行）
  transform(rawData) {
    // 对原始数据进行排序，并返回新的数据格式
    return rawData.sort((a, b) => {
      return +new Date(b.frontmatter.date) - +new Date(a.frontmatter.date)
    }).map((page) => {
      console.log(page);
      
      return {
        url: page.url,
        title: page.frontmatter.title,
        date: page.frontmatter.date,
        excerpt: page.excerpt
      }
    })
  }
})
