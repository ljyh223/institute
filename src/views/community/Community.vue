<template>
  <div class="community-page-layout">
    <HomePageHead />
    <!-- 主内容区 -->
    <el-main class="main-content">
      <div class="content-container">
        <!-- 面包屑导航 -->
        <el-breadcrumb :separator-icon="ArrowRight" class="page-breadcrumb">
          <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
          <el-breadcrumb-item :to="{ path: '/community' }">学习圈</el-breadcrumb-item>
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
            <el-button type="primary" link class="my-posts-link" @click="goPosts">
              我的帖子
              <el-icon>
                <ArrowRight />
              </el-icon>
            </el-button>
          </div>
        </div>

        <!-- 学习圈/关注 切换 -->
        <div class="view-switcher">
          <el-button type="primary" link class="switcher-btn" :class="{ active: currentView === 'circle' }"
            @click="switchView('circle')">
            学习圈
          </el-button>
          <el-button type="primary" link class="switcher-btn" :class="{ active: currentView === 'following' }"
            @click="switchView('following')">
            关注
          </el-button>
        </div>

        <!-- 发布动态 (保持不变) -->
        <div class="post-creator">
          <div class="post-creator">
            <div class="creator-top">
              <el-input type="textarea" :rows="3" placeholder="说点什么吧" v-model="newPostText" resize="none"
                class="creator-textarea"></el-input>
              <div class="image-upload-box">
                <img src="./picture/路径1(1).png" alt="">
              </div>
            </div>
            <div class="creator-bottom">
              <span class="hash-tag">#</span>
              <el-button type="primary">发表</el-button>
            </div>
          </div>
        </div>

        <DynamicList :posts="posts" />

      </div>
    </el-main>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { ArrowRight } from '@element-plus/icons-vue';
import 'element-plus/theme-chalk/display.css';
import HomePageHead from '@/components/homepage/Head.vue';
import DynamicList from '@/components/community/DynamicList.vue';
import { useRouter } from 'vue-router';

const router = useRouter();

// 添加视图切换状态
const currentView = ref('circle'); // 'circle' 或 'following'

// 切换视图函数
const switchView = (view) => {
  currentView.value = view;
  // 这里可以添加获取不同数据的逻辑
  // 例如: fetchPosts(view)
};

const newPostText = ref('');

const posts = ref([
  {
    id: 1,
    author: { name: '油猫病', avatar: 'https://randomuser.me/api/portraits/women/32.jpg' },
    timestamp: '2025-09-01 15:38',
    title: 'React Hooks 最佳实践分享',
    content: '最近在项目中使⽤React Hooks有⼀些⼼得...',
    images: ['https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=2070&auto-format&fit=crop'],
    stats: { likes: 42, favorites: 42 }
  },
  {
    id: 2,
    author: { name: '王静', avatar: 'https://randomuser.me/api/portraits/women/44.jpg' },
    timestamp: '2025-09-03 15:30',
    title: 'Vue3 组合式API深度解析',
    content: '相比于Options API，Composition API 带来了更灵活的代码组织方式...',
    images: [
      'https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=2070&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2070&auto=format&fit=crop'
    ],
    stats: { likes: 221, favorites: 258 }
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
  }
]);

function goPosts() {
  router.push({ name: 'posts' })
}

</script>

<style scoped>
/* 全局布局 */
.community-page-layout {
  background-color: #f7f8fa;
}

.main-content {
  padding: 0;
}

.top-black-bar {
  width: 100%;
  height: 30px;
  background-color: rgba(56, 56, 56, 1);
  position: sticky;
  top: 0;
  z-index: 1001;
}

.content-container {
  max-width: 800px;
  margin: 0 auto;
  padding: 0 20px 40px;
}

/* 面包屑 */
.page-breadcrumb {
  padding: 24px 0;
}

/* 社区 Banner */
.community-banner {
  background-color: rgba(0, 86, 210, 1);
  color: #fff;
  padding: 40px 0;
  position: relative;
}

.banner-content-wrapper {
  max-width: 800px;
  margin: 0 auto;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 20px;
}

.banner-title {
  font-size: 22px;
  font-weight: 600;
  margin: 0 0 8px;
}

.banner-subtitle {
  font-size: 18px;
  margin: 0 0 8px;
  opacity: 0.9;
}

.banner-description {
  font-size: 14px;
  margin: 0;
  opacity: 0.8;
  line-height: 1.6;
}

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
  right: calc((100% - 800px) / 2 + 20px);
  color: #fff;
  opacity: 0.9;
}

.my-posts-link:hover {
  opacity: 1;
}

/* 发布动态 */
.post-creator {
  background-color: #fff;
  border: 1px solid var(--el-border-color-lighter);
  border-radius: 6px;
  margin-bottom: 24px;
  overflow: hidden;
}

.creator-top {
  display: flex;
  align-items: center;
  padding: 0;
}

.creator-textarea {
  flex-grow: 1;
}

.creator-textarea :deep(.el-textarea__inner) {
  box-shadow: none !important;
  background-color: transparent;
  border: none;
  padding: 16px;
  font-size: 15px;
  border-radius: 0;
}

.image-upload-box {
  width: 80px;
  flex-shrink: 0;
  align-self: stretch;
  border-left: 1px solid var(--el-border-color-lighter);
  background-color: #f9fafb;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #c0c4cc;
  cursor: pointer;
  transition: background-color 0.3s;
}

.image-upload-box img {
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

/* 视图切换 */
.view-switcher {
  padding: 12px 20px;
  border-bottom: 1px solid var(--el-border-color-lighter);
  text-align: center;
}

.switcher-btn {
  font-size: 16px;
  padding: 8px;
}

.switcher-btn.active {
  font-weight: 600;
  color: var(--el-color-primary);
  position: relative;
}

.switcher-btn.active::after {
  content: '';
  position: absolute;
  bottom: -13px;
  left: 8px;
  right: 8px;
  height: 3px;
  background-color: var(--el-color-primary);
  border-radius: 2px;
}

/* --- 响应式适配 --- */
@media (max-width: 767px) {
  .content-container {
    padding: 0 10px 20px;
  }
}

@media (max-width: 840px) {
  .my-posts-link {
    right: 20px;
  }
}
</style>