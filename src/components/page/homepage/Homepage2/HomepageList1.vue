<template>
  <div class="teacher-list-page">
    <!-- 顶部深灰色细条 -->
    <div class="top-black-bar"></div>

    <!-- 重新添加的白色导航栏 -->
    <el-header class="header">
      <div class="header-content">
        <!-- Logo 和 AI 搜索 -->
        <div class="logo-section">
          <span class="logo-text">学会</span>
          <el-button class="ai-search-btn" type="primary" link>
            AI搜索
            <el-icon><ArrowRight /></el-icon>
          </el-button>
        </div>
        
        <!-- 搜索框 (在小屏幕上隐藏) -->
        <div class="search-section hidden-xs-only">
          <el-input
            v-model="headerSearch"
            placeholder="What do you want learn?"
            :suffix-icon="Search"
            round
          />
        </div>
        
        <!-- 用户操作区 -->
        <div class="user-action-section">
          <el-icon :size="22" class="notification-bell"><Bell /></el-icon>
          <el-avatar :size="32" src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png" />
        </div>
      </div>
    </el-header>

    <!-- 主内容区 -->
    <el-main class="main-content">
      <div class="content-container">
        <!-- 面包屑导航 -->
        <el-breadcrumb :separator-icon="ArrowRight" class="page-breadcrumb">
          <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
          <el-breadcrumb-item>对您可能有帮助的老师</el-breadcrumb-item>
          <el-breadcrumb-item>查看更多</el-breadcrumb-item>
        </el-breadcrumb>

        <!-- 排序区域 -->
        <div class="sort-section">
          <el-button v-for="sort in sorts" :key="sort.name" :type="sort.active ? 'primary' : 'default'" link>
            {{ sort.name }}
            <el-icon v-if="sort.icon"><component :is="sort.icon" /></el-icon>
          </el-button>
        </div>

        <!-- 老师卡片网格 -->
        <el-row :gutter="isMobile ? 20 : 40">
          <el-col v-for="teacher in teachers" :key="teacher.id" :xs="12" :sm="8" :md="6">
            <div class="teacher-card">
              <el-avatar :size="120" :src="teacher.avatar" />
              <div class="teacher-info">
                <div class="teacher-title-row">
                  <span class="teacher-title">{{ teacher.title }}</span>
                  <el-tag type="warning" size="small" effect="dark">{{ teacher.tag }}</el-tag>
                </div>
                <p class="teacher-subtitle">{{ teacher.subtitle }}</p>
              </div>
            </div>
          </el-col>
        </el-row>
        
        <!-- 分页 -->
        <div class="pagination-container">
          <el-pagination
            v-model:current-page="pagination.currentPage"
            v-model:page-size="pagination.pageSize"
            :page-sizes="[20, 40, 60, 80]"
            :small="isMobile"
            :background="true"
            layout="total, sizes, prev, pager, next, jumper"
            :total="pagination.total"
          />
        </div>

      </div>
    </el-main>
  </div>
</template>

<script setup>
import { ref, reactive, onMounted, onBeforeUnmount } from 'vue';
import { ArrowRight, Search, Bell, ArrowUp } from '@element-plus/icons-vue';
// 引入Element Plus的响应式CSS类
import 'element-plus/theme-chalk/display.css';

// --- 数据定义 ---

const headerSearch = ref('');

// 排序选项
const sorts = ref([
  { name: '综合', active: true },
  { name: '销量', active: false },
  { name: '人气', active: false, icon: ArrowUp },
]);

// 老师数据 (生成20条模拟数据)
const teachers = ref(Array.from({ length: 20 }).map((_, i) => ({
  id: i + 1,
  title: 'Power BI',
  tag: '高等教育',
  subtitle: '数据分析师',
  avatar: `https://picsum.photos/150/150?random=${i + 1}`,
})));

// 分页数据
const pagination = reactive({
  currentPage: 1,
  pageSize: 20,
  total: 625,
});

// --- 响应式处理 ---
const isMobile = ref(false);

const checkScreenSize = () => {
  isMobile.value = window.innerWidth < 768;
};

onMounted(() => {
  checkScreenSize();
  window.addEventListener('resize', checkScreenSize);
});

onBeforeUnmount(() => {
  window.removeEventListener('resize', checkScreenSize);
});
</script>

<style scoped>
/* 全局布局 */
.teacher-list-page {
  background-color: #ffffff;
}

/* 顶部深灰色细条 */
.top-black-bar {
  width: 100%;
  height: 30px;
  background: rgba(56, 56, 56, 1);
  position: sticky;
  top: 0;
  z-index: 1001;
}

/* 重新添加的白色导航栏样式 */
.header {
  position: sticky;
  top: 30px; /* 关键：固定在深灰色条的下方 */
  z-index: 1000;
  background-color: #ffffff;
  border-bottom: 1px solid var(--el-border-color-lighter);
  height: 64px;
  display: flex;
  align-items: center;
}
.header-content {
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
}
.logo-section {
  display: flex;
  align-items: center;
}
.logo-text {
  font-size: 24px;
  font-weight: bold;
  color: var(--el-text-color-primary);
  margin-right: 1rem;
}
.ai-search-btn {
  background-color: var(--el-color-primary-light-9);
  border: 1px solid var(--el-color-primary-light-7);
  border-radius: 16px;
  padding: 6px 12px;
}
.search-section {
  flex-grow: 1;
  max-width: 400px;
  margin: 0 2rem;
}
.user-action-section {
  display: flex;
  align-items: center;
  gap: 1.5rem;
}
.notification-bell {
  cursor: pointer;
}

/* 主内容区 */
.main-content {
  padding: 0;
  overflow: visible;
}
.content-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}
.page-breadcrumb {
  padding: 24px 0;
}

/* 排序区域 */
.sort-section {
  display: flex;
  align-items: center;
  gap: 24px;
  margin-bottom: 32px;
}
.sort-section .el-button {
  font-size: 14px;
}
.sort-section .el-button.is-link.el-button--primary {
  font-weight: bold;
}

/* 老师卡片 */
.teacher-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin-bottom: 40px;
  cursor: pointer;
}
.teacher-info {
  margin-top: 16px;
}
.teacher-title-row {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  margin-bottom: 8px;
}
.teacher-title {
  font-size: 16px;
  font-weight: 500;
  color: var(--el-text-color-primary);
}
.teacher-subtitle {
  font-size: 14px;
  color: var(--el-text-color-secondary);
  margin: 0;
}
.el-tag {
  border-radius: 4px;
  border: none;
}

/* 分页 */
.pagination-container {
  display: flex;
  justify-content: center;
  padding: 40px 0;
}

/* --- 响应式适配 --- */

/* iPad (小于 992px) */
@media (max-width: 991px) {
  .header-content, .content-container {
    padding: 0 15px;
  }
}

/* 手机 (小于 768px) */
@media (max-width: 767px) {
  .logo-text {
    font-size: 20px;
  }
  .user-action-section {
    gap: 1rem;
  }
  .teacher-card {
    margin-bottom: 24px;
  }
  .el-avatar {
    --el-avatar-size: 100px; 
  }
  .teacher-title {
    font-size: 14px;
  }
  .teacher-subtitle {
    font-size: 13px;
  }
  .pagination-container {
    padding: 24px 0;
  }
}
</style>