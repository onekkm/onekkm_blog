
// 可以直接在主题入口导入 Vue 文件
// VitePress 已预先配置 @vitejs/plugin-vue
import DefaultTheme from 'vitepress/theme'
import articlesList from './articlesList.vue'



export default {
  extends: DefaultTheme,
  Layout: articlesList,
    // 使用注入插槽的包装组件覆盖 Layout
  enhanceApp({ app, router, siteData }) {

    // ...
  }
}