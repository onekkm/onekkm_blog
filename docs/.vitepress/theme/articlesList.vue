<script setup>
import DefaultTheme from 'vitepress/theme'
import { data as posts } from './example.data.js'

const { Layout } = DefaultTheme
function formatDate(dateStr) {
  const date = new Date(dateStr);
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  return date.toLocaleDateString('en-US', options); // you can adjust locale as needed
}
</script>

<template>
  <Layout>
    <template #page-top>
      <div class="article-list-container">
        <h2 class="article-list-title">问题统计</h2>
        <ul class="article-list">
          <!-- Loop through the posts and display the title, date, and link to each article -->
          <li v-for="post in posts" :key="post.id" class="article-item">
            <a :href="post.url" class="article-link">
              <div class="article-title">{{ post.title }}</div>
              <div class="article-date">{{ formatDate(post.date) }}</div>
            </a>
          </li>
        </ul>
      </div>
    </template>
  </Layout>
</template>



<style scoped>
.article-list-container {
  background: var(--vp-c-background); /* 背景色使用 VitePress 默认主题背景 */
  color: var(--vp-c-text); /* 文字颜色使用 VitePress 默认文本颜色 */
  padding: 30px;
  border-radius: 10px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  max-width: 850px;
  margin: 30px auto;
  transition: background-color 0.3s ease-in-out;
}

.article-list-title {
  font-size: 2rem;
  font-weight: 700;
  color: var(--vp-c-primary); /* 主色调 */
  margin-bottom: 30px;
  text-align: center;
}

.article-list {
  list-style-type: none;
  padding: 0;
  margin: 0;
}

.article-item {
  margin-bottom: 20px;
}

.article-link {
  text-decoration: none;
  display: block;
  padding: 15px;
  background: var(--vp-c-background-alt);
  color: var(--vp-c-text);
  font-size: 1.2rem;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.08);
  transition: background-color 0.3s, transform 0.3s, box-shadow 0.3s;
}

.article-link:hover {
  background: var(--vp-c-accent); /* 悬停时使用强调色 */
  color: white;
  transform: translateX(10px);
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.15);
}

.article-link:focus {
  outline: none;
  box-shadow: 0 0 0 3px rgba(100, 150, 255, 0.5); /* 聚焦时的边框效果 */
}

.article-title {
  font-weight: 600;
  font-size: 1.3rem;
}

.article-date {
  font-size: 0.95rem;
  color: var(--vp-c-muted); /* 使用较暗的文本颜色，区分日期 */
  margin-top: 8px;
}

@media (max-width: 768px) {
  .article-list-container {
    padding: 20px;
    margin: 20px;
  }

  .article-list-title {
    font-size: 1.5rem;
    margin-bottom: 20px;
  }

  .article-link {
    font-size: 1rem;
    padding: 12px;
  }

  .article-title {
    font-size: 1.1rem;
  }

  .article-date {
    font-size: 0.85rem;
  }
}
</style>
