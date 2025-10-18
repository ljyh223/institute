<!-- src/components/community/DynamicList.vue -->
<template>
  <div class="feed-list">
    <div v-for="post in posts" :key="post.id" class="post-card">
      <div class="post-header">
        <el-avatar :size="40" :src="post.author.avatar" />
        <div class="author-info">
          <span class="author-name">{{ post.author.name }}</span>
          <span class="post-timestamp">{{ post.timestamp }}</span>
        </div>
        <el-button type="primary" class="follow-btn">关注</el-button>
      </div>
      <div class="post-content">
        <h4 class="post-title">{{ post.title }}</h4>
        <p class="post-text">{{ post.content }}</p>
        <div v-if="post.images.length > 0" :class="['image-gallery', `layout-${Math.min(post.images.length, 4)}`]">
          <el-image
            v-for="(img, index) in post.images"
            :key="index"
            :src="img"
            fit="cover"
            class="gallery-image"
            :preview-src-list="post.images"
            :initial-index="index"
            hide-on-click-modal
          />
        </div>
      </div>
      <div class="post-actions">
        <div class="action-item">
          <el-icon><Pointer /></el-icon>
          <span>点赞 ({{ post.stats.likes }})</span>
        </div>
        <div class="action-item">
          <el-icon><Star /></el-icon>
          <span>收藏 ({{ post.stats.favorites }})</span>
        </div>
        <div class="action-item">
          <el-icon><Warning /></el-icon>
          <span>屏蔽</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { Pointer, Star, Warning } from '@element-plus/icons-vue';

// 定义该组件接收的 props
// 在这里，我们期望从父组件传入一个名为 'posts' 的数组
defineProps({
  posts: {
    type: Array,
    required: true,
    default: () => []
  }
});
</script>

<style scoped>
/* 动态列表 */
.feed-list { display: flex; flex-direction: column; }
.post-card { background-color: #fff; padding: 24px; border: 1px solid var(--el-border-color-lighter); border-top: none; }
.feed-list > .post-card:first-child { border-radius: 8px 8px 0 0; border-top: 1px solid var(--el-border-color-lighter); }
.feed-list > .post-card:last-child { border-radius: 0 0 8px 8px; }

.post-header { display: flex; align-items: center; gap: 12px; margin-bottom: 16px; }
.author-info { display: flex; flex-direction: column; flex-grow: 1; }
.author-name { font-weight: 600; }
.post-timestamp { font-size: 13px; color: var(--el-text-color-secondary); }

.post-content { margin-left: 52px; }
.post-title { font-size: 16px; font-weight: 600; margin: 0 0 8px; }
.post-text { font-size: 15px; line-height: 1.7; margin: 0 0 16px; white-space: pre-wrap; }

/* 图片画廊 */
.image-gallery {
  display: grid;
  gap: 8px;
  border-radius: 8px;
  overflow: hidden;
  margin-top: 20px;
}
.gallery-image { width: 100%; height: 100%; object-fit: cover; }
.layout-1 .gallery-image { max-width: 100%; max-height: 500px; aspect-ratio: auto; }
.layout-2 { grid-template-columns: repeat(2, 1fr); }
.layout-3 { grid-template-columns: repeat(3, 1fr); }
.layout-4 { grid-template-columns: repeat(3, 1fr); } /* 4张以上也暂时用3列 */
.layout-2 .gallery-image,
.layout-3 .gallery-image,
.layout-4 .gallery-image { aspect-ratio: 1 / 1; }

/* 动态操作栏 */
.post-actions { display: flex; justify-content: space-between; align-items: center; margin-left: 52px; color: var(--el-text-color-secondary); padding-top: 16px; border-top: 1px solid var(--el-border-color-lighter); margin-top: 16px; }
.action-item { display: flex; align-items: center; gap: 8px; font-size: 14px; cursor: pointer; }
.action-item:hover { color: var(--el-color-primary); }

/* 响应式适配 */
@media (max-width: 767px) {
  .post-content { margin-left: 0; }
  .post-actions { margin-left: 0; }
}
</style>