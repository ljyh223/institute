<template>
  <div class="collections">
    <div v-for="post in pagedPosts" :key="post.id" class="post-card">
      <div class="post-header">
        <el-avatar :size="32" :src="post.avatar" />
        <div class="meta">
          <div class="author">{{ post.author }}</div>
          <div class="time">{{ post.time }}</div>
        </div>
        <el-button type="primary" text class="follow-btn">关注</el-button>
      </div>
      <div class="title">{{ post.title }}</div>
      <div class="cover">
        <img :src="post.cover" alt="cover" />
      </div>
      <div class="footer">
        <span>👍 点赞 ({{ post.likes }})</span>
        <span>⭐ 收藏 ({{ post.stars }})</span>
      </div>
    </div>
    <div class="pagination">
      <PaginationBar
        :total="total"
        v-model:currentPage="currentPage"
        v-model:pageSize="pageSize"
      />
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import PaginationBar from '../components/PaginationBar.vue'

const posts = Array.from({ length: 40 }, (_, i) => ({
  id: i + 1,
  author: '油猫病',
  time: '2025-09-01 15:38',
  title: 'React Hooks 最佳实践分享',
  avatar: 'https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png',
  cover: 'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=1374&auto=format&fit=crop',
  likes: 42,
  stars: 42,
}))

const currentPage = ref(1)
const pageSize = ref(5)
const total = computed(() => posts.length)
const pagedPosts = computed(() => {
  const start = (currentPage.value - 1) * pageSize.value
  return posts.slice(start, start + pageSize.value)
})
</script>

<style scoped>
.post-card { background: #fff; border: 1px solid #ebeef5; border-radius: 6px; padding: 12px; margin-bottom: 16px; }
.post-header { display: grid; grid-template-columns: 32px 1fr auto; gap: 10px; align-items: center; }
.meta { display: flex; flex-direction: column; }
.author { font-weight: 600; }
.time { color: #909399; font-size: 12px; }
.follow-btn { justify-self: end; }
.title { margin: 10px 0; font-size: 16px; font-weight: 600; }
.cover img { width: 100%; border-radius: 6px; }
.footer { display: flex; gap: 16px; color: #606266; margin-top: 8px; }
.pagination { display: flex; justify-content: flex-end; margin-top: 12px; }
</style>


