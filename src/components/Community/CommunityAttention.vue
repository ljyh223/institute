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
          <el-breadcrumb-item>学习圈</el-breadcrumb-item>
        </el-breadcrumb>

        <!-- 社区 Banner -->
        <div class="community-banner">
        <div class="banner-content-wrapper">
          <div class="banner-text-group">
            <h1 class="banner-title">连接学习者</h1>
            <p class="banner-subtitle">一起成长, 共同进步</p>
            <p class="banner-description">融入我们的学习社区，找到志同道合的伙伴，开启新的学习征程</p>
          </div>
          <el-button class="create-group-btn">创建学习小组</el-button>
          <el-button type="primary" link class="my-posts-link">
              我的帖子
              <el-icon><ArrowRight /></el-icon>
          </el-button>
        </div>
    </div>

        <!-- 学习圈/关注 切换 -->
        <div class="view-switcher">
          <el-button type="primary" link class="switcher-btn">学习圈</el-button>
          <el-button type="primary" link class="switcher-btn active">关注</el-button>
        </div>

        <!-- 发布动态 -->
        <div class="post-creator">
            <div class="creator-top">
                <el-input
                    type="textarea"
                    :rows="3"
                    placeholder="说点什么吧"
                    v-model="newPostText"
                    resize="none"
                    class="creator-textarea"
                ></el-input>
                <div class="image-upload-box">
                    <img src="./picture/路径1(1).png" alt="" >
                </div>
            </div>
            <div class="creator-bottom">
                <span class="hash-tag">#</span>
                <el-button type="primary">发表</el-button>
            </div>
        </div>
        
        <!-- 动态列表 -->
        <div class="feed-list">
          <div v-for="post in posts" :key="post.id" class="post-card">
            <div class="post-header">
              <el-avatar :size="40" :src="post.author.avatar" />
              <div class="author-info">
                <span class="author-name">{{ post.author.name }}</span>
                <span class="post-timestamp">{{ post.timestamp }}</span>
              </div>
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

      </div>
    </el-main>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { ArrowRight, Search, Bell, Camera, Pointer, Star, Warning } from '@element-plus/icons-vue';
import 'element-plus/theme-chalk/display.css';

const newPostText = ref('');

// 模拟动态数据
const posts = ref([
  { 
    id: 1, 
    author: { name: '油猫病', avatar: 'https://randomuser.me/api/portraits/women/32.jpg' },
    timestamp: '2025-09-01 15:38',
    title: 'React Hooks 最佳实践分享',
    content: '最近在项目中使⽤React Hooks有⼀些⼼得，特别是useEffect和useCallback的合理使⽤可以显著提升性能，避免不必要的重渲染...',
    images: ['https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=2070&auto-format&fit=crop'],
    stats: { likes: 42, favorites: 42 } // <-- 已更新
  },
  { 
    id: 2, 
    author: { name: '王静', avatar: 'https://randomuser.me/api/portraits/women/44.jpg' },
    timestamp: '2025-09-03 15:30',
    title: 'Vue3 组合式API深度解析',
    content: '相比于Options API，Composition API 带来了更灵活的代码组织方式...',
    images: [
        'https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=2070&auto=format&fit=crop',
    ],
    stats: { likes: 42, comments: 42, shares: 0 }
  },
  { 
    id: 3, 
    author: { name: '李思聪', avatar: 'https://randomuser.me/api/portraits/men/33.jpg' },
    timestamp: '2025-09-03 15:30',
    title: '推荐几个超酷的AI工具',
    content: '探索AI的力量，这些工具能极大地提升我们的开发和设计效率...',
    images: [
        'https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=2070&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1526666923127-b2970f64b422?q=80&w=1974&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1523961131990-5ea7c61b2107?q=80&w=1974&auto=format&fit=crop'
    ],
    stats: { likes: 42, comments: 42, shares: 0 }
  },
    { 
    id: 4, 
    author: { name: '陈悦', avatar: 'https://randomuser.me/api/portraits/women/33.jpg' },
    timestamp: '2025-09-03 15:30',
    title: '摄影作品分享：旅途中的光影',
    content: '上周去了一趟山区，记录下了一些令人心动的瞬间，分享给大家。',
    images: [
        'https://images.unsplash.com/photo-1549880338-65ddcdfd017b?q=80&w=2070&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=2070&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=2070&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1470770841072-f978cf4d019e?q=80&w=2070&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1472214103451-9374bd1c798e?q=80&w=2070&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1532274402911-5a369e4c4bb5?q=80&w=2070&auto=format&fit=crop',
    ],
    stats: { likes: 42, comments: 42, shares: 0 }
  },
  { 
    id: 5, // 使用一个新的、不重复的 id
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

/* 社区 Banner */
.community-banner {
  background-color: rgba(0, 86, 210, 1);
  color: #fff;
  padding: 40px 0; /* 调整内边距 */
  position: relative; /* 为绝对定位的链接提供基准 */
}
.banner-content-wrapper {
  max-width: 800px; /* 内容宽度限制 */
  margin: 0 auto;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 20px;
}
.banner-title { font-size: 22px; font-weight: 600; margin: 0 0 8px; }
.banner-subtitle { font-size: 18px; margin: 0 0 8px; opacity: 0.9; }
.banner-description { font-size: 14px; margin: 0; opacity: 0.8; line-height: 1.6; }
.create-group-btn {
  background-color: #fff;
  color: var(--el-color-primary);
  border: none;
  font-weight: 500;
  padding: 18px 24px;
}
.my-posts-link {
  position: absolute;
  top: 24px;
  right: calc((100% - 800px) / 2 + 20px); /* 定位到内容区的右侧 */
  color: #fff;
  opacity: 0.9;
}
.my-posts-link:hover { opacity: 1; }

/* 视图切换 */
.view-switcher { padding: 12px 20px; border-bottom: 1px solid var(--el-border-color-lighter);   text-align: center;  }
.switcher-btn { font-size: 16px; padding: 8px; }
.switcher-btn.active { font-weight: 600; color: var(--el-color-primary); position: relative; }
.switcher-btn.active::after { content: ''; position: absolute; bottom: -13px; left: 8px; right: 8px; height: 3px; background-color: var(--el-color-primary); border-radius: 2px; }

/* 发布动态 */
.post-creator {
  background-color: #fff;
  border: 1px solid var(--el-border-color-lighter); /* 使用更细的边框 */
  border-radius: 6px;
  margin-bottom: 24px;
  overflow: hidden; /* 确保内部边框不会溢出 */
}
.creator-top {
  display: flex; /* 改为 flex 布局 */
  align-items: center; /* 垂直居中 */
  padding: 0; /* 移除内边距 */
}
.creator-textarea {
  flex-grow: 1;
}
.creator-textarea :deep(.el-textarea__inner) {
  box-shadow: none !important;
  background-color: transparent;
  border: none;
  padding: 16px; /* 在输入框内部添加 padding */
  font-size: 15px;
  border-radius: 0; /* 移除输入框自身的圆角 */
}
.image-upload-box {
  width: 80px;
  flex-shrink: 0;
  align-self: stretch; /* 让自身高度撑满父容器 */
  border-left: 1px solid var(--el-border-color-lighter); /* 左侧分割线 */
  background-color: #f9fafb; /* 添加淡灰色背景 */
  display: flex;
  align-items: center;
  justify-content: center;
  color: #c0c4cc; /* 调整图标颜色 */
  cursor: pointer;
  transition: background-color 0.3s;
}

.image-upload-box img{
    width: 50%;
}

.image-upload-box:hover {
  background-color: #f5f7fa;
}
.creator-bottom {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-top: 1px solid var(--el-border-color-lighter);
  padding: 12px 16px;
}
.hash-tag {
  font-size: 22px;
  font-weight: 500;
  color: var(--el-text-color-placeholder);
  cursor: pointer;
}

/* 动态列表 */
.feed-list {
  display: flex;
  flex-direction: column;
  gap: 0; /* 移除卡片间的外部间距 */
}
.post-card {
  background-color: #fff;
  padding: 24px;
  border-bottom: 1px solid var(--el-border-color-lighter); /* 使用下边框作为分割线 */
  border-radius: 0; /* 移除圆角 */
  box-shadow: none; /* 移除阴影 */
}
.post-card:first-child {
  border-radius: 8px 8px 0 0;
}
.post-card:last-child {
  border-bottom: none;
  border-radius: 0 0 8px 8px;
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

.post-content {
  margin: 0; /* 移除左侧缩进 */
}
.post-title {
  font-size: 18px; /* 标题字号加大 */
  font-weight: 600;
  margin: 0 0 12px;
}
.post-text {
  font-size: 15px;
  line-height: 1.8; /* 加大行距 */
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
/* 单张图片的样式 */
.image-gallery.layout-1 .gallery-image {
  max-width: 100%; /* 允许单图撑满宽度 */
  max-height: 500px;
  aspect-ratio: auto;
}
.image-gallery.layout-3 { grid-template-columns: repeat(3, 1fr); }
.image-gallery.layout-3 .gallery-image { aspect-ratio: 1 / 1; }
.image-gallery.layout-4 { grid-template-columns: repeat(3, 1fr); grid-template-rows: auto; } /* For 4+ images */
.image-gallery.layout-4 .gallery-image { aspect-ratio: 1 / 1; }

/* 动态操作栏 */
.post-actions {
  display: flex;
  justify-content: flex-end; /* 右对齐 */
  gap: 24px; /* 加大操作项间距 */
  margin-top: 24px;
  padding-top: 0; /* 移除上边框和内边距 */
  border-top: none;
}
.action-item {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 14px;
  color: var(--el-text-color-secondary);
  cursor: pointer;
}
.action-item:hover {
  color: var(--el-color-primary);
}

/* --- 响应式适配 --- */
@media (max-width: 767px) {
  .content-container { padding: 0 10px 20px; }
  .post-content { margin-left: 0; }
  .image-gallery.layout-3, 
  .image-gallery.layout-4 { grid-template-columns: repeat(2, 1fr); }
}

@media (max-width: 840px) { /* 800px content + 2*20px padding */
  .my-posts-link {
    right: 20px;
  }
}
</style>