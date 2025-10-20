<template>
  <div class="community-page-layout">
    <HomePageHead />

    <!-- 主内容区 -->
    <el-main class="main-content">
      <div class="content-container">
        <!-- 面包屑导航 -->
        <el-breadcrumb :separator-icon="ArrowRight" class="page-breadcrumb">
          <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
          <el-breadcrumb-item>我的社区</el-breadcrumb-item>
          <el-breadcrumb-item>我的帖子</el-breadcrumb-item>
        </el-breadcrumb>


        <DynamicList :posts="posts" :editable="true" @delete-post="handleDeletePost" @save-post="handleSavePost" />

      </div>
    </el-main>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { ArrowRight } from '@element-plus/icons-vue';
import 'element-plus/theme-chalk/display.css';
import HomePageHead from '@/components/homepage/Head.vue';
import DynamicList from '@/components/community/DynamicList.vue'; // <-- 确保路径正确

// 模拟帖子数据
const posts = ref([
  {
    id: 1,
    author: { name: '油猫病', avatar: 'https://randomuser.me/api/portraits/women/32.jpg' },
    timestamp: '2025-09-01 15:38',
    title: 'React Hooks 最佳实践分享',
    content: '最近在项目中使⽤React Hooks有⼀些⼼得，特别是useEffect和useCallback的合理使⽤可以显著提升性能，避免不必要的重渲染...',
    images: ['https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=2070&auto-format&fit=crop'],
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

// 事件处理函数：处理删除帖子的逻辑
const handleDeletePost = (postIdToDelete) => {
  console.log(`准备删除 ID 为 ${postIdToDelete} 的帖子`);
  posts.value = posts.value.filter(post => post.id !== postIdToDelete);
};

// 事件处理函数：处理保存帖子的逻辑
const handleSavePost = (updatedData) => {
  console.log('准备保存帖子:', updatedData);
  const postIndex = posts.value.findIndex(p => p.id === updatedData.id);
  if (postIndex !== -1) {
    // 实际项目中，你需要更精细地处理标题和内容的分离
    posts.value[postIndex].content = updatedData.content;
    posts.value[postIndex].images = updatedData.images;
  }
};
</script>

<style scoped>
/* 全局布局 */
.community-page-layout {
  background-color: #f7f8fa;
}

.main-content {
  padding: 0;
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

/* --- 响应式适配 --- */
@media (max-width: 767px) {
  .content-container {
    padding: 0 10px 20px;
  }
}
</style>