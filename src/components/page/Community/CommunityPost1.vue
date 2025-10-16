<template>
  <div class="community-page-layout">
    <!-- 顶部深灰色细条 -->
    <div class="top-black-bar"></div>

    <!-- 白色导航栏 -->
    <el-header class="header">
      <div class="header-content">
        <div class="logo-section">
          <span class="logo-text">学会</span>
          <el-button class="ai-explore-btn">
            AI探索
            <el-icon><ArrowRight /></el-icon>
          </el-button>
        </div>
        <div class="search-container hidden-xs-only">
          <el-input placeholder="What do you want learn?" class="header-search-input" />
          <el-button type="primary" :icon="Search" circle class="search-icon-btn" />
        </div>
        <div class="user-action-section">
          <el-dropdown trigger="click">
             <span class="el-dropdown-link">
              <el-icon :size="22" class="notification-bell"><Bell /></el-icon>
              <el-avatar :size="32" src="src/components/Community/picture/矩形2(1).png" />
             </span>
            <template #dropdown>
              <el-dropdown-menu>
                <el-dropdown-item>个人中心</el-dropdown-item>
                <el-dropdown-item>我的订单</el-dropdown-item>
                <el-dropdown-item divided>退出登录</el-dropdown-item>
              </el-dropdown-menu>
            </template>
          </el-dropdown>
        </div>
      </div>
    </el-header>

    <!-- 主内容区 -->
    <el-main class="main-content">
      <div class="content-container">
        <!-- 面包屑导航 -->
        <el-breadcrumb :separator-icon="ArrowRight" class="page-breadcrumb">
          <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
          <el-breadcrumb-item>我的社区</el-breadcrumb-item>
          <el-breadcrumb-item>我的帖子</el-breadcrumb-item>
        </el-breadcrumb>
        
        <!-- 动态列表 -->
<!-- 动态列表 -->
<div class="feed-list">
  <!-- v-for 循环 -->
  <div v-for="post in posts" :key="post.id" class="post-card">

    <!-- v-if: 当帖子不处于编辑状态时，显示这个 -->
    <div v-if="editingPostId !== post.id">
      <div class="post-header">
        <el-avatar :size="40" :src="post.author.avatar" />
        <div class="author-info">
          <span class="author-name">{{ post.author.name }}</span>
          <span class="post-timestamp">{{ post.timestamp }}</span>
        </div>
        <el-dropdown trigger="click" class="post-options-dropdown">
          <el-icon class="options-icon"><MoreFilled /></el-icon>
          <template #dropdown>
            <el-dropdown-menu>
              <!-- 点击编辑时，设置 editingPostId -->
              <el-dropdown-item :icon="Edit" @click="editingPostId = post.id">编辑</el-dropdown-item>
              <el-dropdown-item :icon="Delete">删除</el-dropdown-item>
            </el-dropdown-menu>
          </template>
        </el-dropdown>
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
              <div class="post-actions">
          <div class="action-item">
              <el-icon><Pointer /></el-icon>
              <span>点赞 ({{ post.stats.likes }})</span>
          </div>
          <div class="action-item">
              <el-icon><Star /></el-icon>
              <span>收藏 ({{ post.stats.favorites }})</span>
          </div>
      </div>
      </div>
    </div>

    <!-- v-else: 当帖子处于编辑状态时，显示这个 -->
<div v-else class="post-editor">
    <div class="post-header">
        <el-avatar :size="40" :src="post.author.avatar" />
        <div class="author-info">
            <span class="author-name">{{ post.author.name }}</span>
            <span class="post-timestamp">{{ post.timestamp }}</span>
        </div>
    </div>
    <div class="editor-body">
        <el-input
            type="textarea"
            :rows="4"
            :value="`${post.content}\n\n# ${post.title}`"
            class="editor-textarea"
            resize="none"
        >
            <template #suffix>
                <div class="textarea-suffix-icon">
                    <el-icon :size="24"><Camera /></el-icon>
                </div>
            </template>
        </el-input>

        <div v-if="post.images.length > 0" class="editor-image-preview">
            <el-image :src="post.images[0]" fit="cover" class="preview-image" />
            <div class="remove-image-icon">
                <el-icon><Close /></el-icon>
            </div>
        </div>
    </div>
    <div class="editor-actions">
        <el-button @click="editingPostId = null">取消</el-button>
        <el-button type="primary">保存</el-button>
    </div>
</div>
  </div>
</div>

      </div>
    </el-main>
  </div>
</template>

<script setup>
const editingPostId = ref(null);
import { ref } from 'vue';
import { 
  ArrowRight, Search, Bell, Pointer, Star, 
  MoreFilled, Edit, Delete,Close
} from '@element-plus/icons-vue';
import 'element-plus/theme-chalk/display.css';


// 模拟动态数据
const posts = ref([
  { 
    id: 1, 
    author: { name: '油猫病', avatar: 'https://randomuser.me/api/portraits/women/32.jpg' },
    timestamp: '2025-09-01 15:38',
    title: 'React Hooks 最佳实践分享',
    content: '最近在项目中使⽤React Hooks有⼀些⼼得，特别是useEffect和useCallback的合理使⽤可以显著提升性能，避免不必要的重渲染...',
    images: ['https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=2070&auto=format&fit=crop'],
    stats: { likes: 42, favorites: 42 }
  },
  { 
    id: 2, 
    author: { name: '油猫病', avatar: 'https://randomuser.me/api/portraits/women/32.jpg' },
    timestamp: '2025-09-01 15:38',
    title: 'Vue3 组合式API深度解析',
    content: '相比于Options API，Composition API 带来了更灵活的代码组织方式...',
    images: [
        'https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=2070&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=2070&auto=format&fit=crop'
    ],
    stats: { likes: 42, favorites: 42 }
  },
  { 
    id: 3, 
    author: { name: '油猫病', avatar: 'https://randomuser.me/api/portraits/women/32.jpg' },
    timestamp: '2025-09-01 15:38',
    title: '推荐几个超酷的AI工具',
    content: '探索AI的力量，这些工具能极大地提升我们的开发和设计效率...',
    images: [
        'https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=2070&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1526666923127-b2970f64b422?q=80&w=1974&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1523961131990-5ea7c61b2107?q=80&w=1974&auto=format&fit=crop'
    ],
    stats: { likes: 42, favorites: 42 }
  },
  { 
    id: 5,
    author: { name: '油猫病', avatar: 'https://randomuser.me/api/portraits/women/32.jpg' },
    timestamp: '2025-09-01 15:38',
    title: 'React Hooks 最佳实践分享',
    content: '最近在项目中使⽤React Hooks有⼀些⼼得,特别是useEffect和useCallback的合理使⽤可以显著提升性能,避免不必要的重渲染...',
    images: [
        'https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=2070&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=2070&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=2070&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=2070&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=2070&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=2070&auto=format&fit=crop',
    ],
    stats: { likes: 42, favorites: 42 }
  },
]);
</script>

<style scoped>
/* 全局布局 */
.community-page-layout { background-color: #f7f8fa; }
.main-content { padding: 0; }
.top-black-bar { width: 100%; height: 30px; background-color:rgba(56, 56, 56, 1); position: sticky; top: 0; z-index: 1001; }
.content-container { max-width: 800px; margin: 0 auto; padding: 0 20px 40px; }

/* Header样式 */
.header { background-color: #ffffff; box-shadow: 0 1px 4px rgba(0, 0, 0, 0.08); height: 64px; position: sticky; top: 30px; z-index: 1000; display: flex; align-items: center; }
.header-content { max-width: 1200px; margin: 0 auto; width: 100%; display: flex; align-items: center; justify-content: space-between; padding: 0 20px; }
.logo-section { display: flex; align-items: center; gap: 16px; }
.logo-text { font-size: 24px; font-weight: bold; color: var(--el-color-primary); }
.ai-explore-btn { border-color: var(--el-border-color-light); color: var(--el-text-color-primary); }
.search-container { display: flex; align-items: center; flex-grow: 1; max-width: 450px; margin: 0 24px; }
.header-search-input { --el-input-border-radius: 20px; }
.header-search-input :deep(.el-input__wrapper) { box-shadow: none !important; border: 1px solid var(--el-border-color); }
.search-icon-btn { margin-left: -35px; z-index: 5; }
.user-action-section { display: flex; align-items: center; gap: 20px; }
.notification-bell { color: var(--el-color-primary); cursor: pointer; }
.el-dropdown-link { display: flex; align-items: center; gap: 20px; cursor: pointer; }

/* 面包屑 */
.page-breadcrumb { padding: 24px 0; }

/* 动态列表 */
.feed-list {
  background-color: #fff;
  border: 1px solid var(--el-border-color-lighter);
  border-radius: 8px;
  overflow: hidden; /* 确保内部边框不会溢出 */
}
.post-card {
  padding: 24px;
  border-bottom: 1px solid var(--el-border-color-lighter);
}
.post-card:last-child {
  border-bottom: none;
}

.post-header {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 16px;
}
.author-info {
  display: flex;
  flex-direction: column;
  flex-grow: 1;
}
.author-name {
  font-weight: 600;
  color: var(--el-text-color-primary);
}
.post-timestamp {
  font-size: 13px;
  color: var(--el-text-color-secondary);
}
.post-options-dropdown {
  margin-left: auto;
  cursor: pointer;
}
.options-icon {
  font-size: 20px;
  color: var(--el-text-color-secondary);
  transform: rotate(90deg);
}

.post-content {
  margin: 0;
}
.post-title {
  font-size: 18px;
  font-weight: 600;
  margin: 0 0 12px;
}
.post-text {
  font-size: 15px;
  line-height: 1.8;
  color: var(--el-text-color-regular);
  margin: 0 0 16px;
  white-space: pre-wrap;
}

/* 图片画廊 */
.image-gallery {
  display: grid;
  gap: 8px;
  border-radius: 8px;
  overflow: hidden;
  margin-top: 20px;
}
.gallery-image {
  width: 100%;
  height: 100%;
  display: block;
}
.image-gallery.layout-1 .gallery-image {
  max-width: 100%;
  max-height: 500px;
  aspect-ratio: auto;
}
.image-gallery.layout-2 { grid-template-columns: 1fr 1fr; }
.image-gallery.layout-2 .gallery-image { aspect-ratio: 1 / 1; }
.image-gallery.layout-3 { grid-template-columns: repeat(3, 1fr); }
.image-gallery.layout-3 .gallery-image { aspect-ratio: 1 / 1; }
.image-gallery.layout-4 { grid-template-columns: repeat(3, 1fr); }
.image-gallery.layout-4 .gallery-image { aspect-ratio: 1 / 1; }

/* 动态操作栏 */
.post-actions {
  display: flex;
  justify-content: flex-end; /* 右对齐 */
  gap: 24px;
  margin-top: 24px;
  padding-top: 16px; /* 在操作栏上方增加一些空间 */
  border-top: 1px solid var(--el-border-color-lighter); /* 恢复分割线 */
}
.action-item {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 14px;
  color: var(--el-text-color-secondary); /* 使用 Element Plus 的次要文字颜色 */
  cursor: pointer;
  transition: color 0.3s;
}
.action-item:hover {
  color: var(--el-color-primary);
}
/* 调整图标大小和颜色 */
.action-item .el-icon {
  font-size: 18px; 
  color: var(--el-text-color-placeholder); /* 使用更浅的图标颜色 */
}

/* --- 编辑器样式 --- */
.post-editor {
  display: flex;
  flex-direction: column;
}

.editor-body {
  padding-left: 52px; /* 与头像对齐 */
}

.editor-textarea {
  position: relative;
}
.editor-hashtag-input :deep(.el-input__wrapper) {
  border-radius: 0 0 6px 6px; /* 只保留下方的圆角 */
  border-top: none; /* 移除顶部边框，与上面的分割线无缝衔接 */
  margin-top: -1px; /* 向上移动1px，完全覆盖分割线 */
}

/* 文本域右上角的上传图标 */
.textarea-suffix-icon {
  position: absolute;
  top: 12px;
  right: 12px;
  font-size: 24px;
  color: var(--el-text-color-placeholder);
  cursor: pointer;
}

.editor-image-preview {
  position: relative;
  width: 240px; /* 调整预览图宽度 */
  margin-top: 16px;
  border-radius: 6px;
  overflow: hidden;
  border: 1px solid var(--el-border-color-lighter);
}
.preview-image {
  width: 100%;
  display: block;
}
.remove-image-icon {
  position: absolute;
  top: 8px;
  right: 8px;
  background-color: rgba(0, 0, 0, 0.5);
  color: #fff;
  border-radius: 50%;
  width: 20px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: background-color 0.3s;
}
.remove-image-icon:hover {
  background-color: rgba(0, 0, 0, 0.7);
}

.editor-actions {
  display: flex;
  justify-content: flex-end;
  gap: 12px;
  margin-top: 24px;
  padding-top: 16px;
  border-top: 1px solid var(--el-border-color-lighter);
}
/* --- 响应式适配 --- */
@media (max-width: 767px) {
  .content-container { padding: 0 10px 20px; }
  .post-content { margin-left: 0; }
  .image-gallery.layout-3, 
  .image-gallery.layout-4 { grid-template-columns: repeat(2, 1fr); }
}
</style>