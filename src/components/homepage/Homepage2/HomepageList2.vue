<template>
  <div class="venue-list-page">
    <!-- 顶部深灰色细条 -->
    <div class="top-black-bar"></div>

    <!-- 白色导航栏 -->
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

        <!-- 场馆卡片网格 -->
        <el-row :gutter="24">
          <el-col v-for="venue in venues" :key="venue.id" :xs="24" :sm="12" :md="8">
            <el-card class="venue-card" shadow="hover" :body-style="{ padding: '0px' }">
              <el-image :src="venue.image" class="venue-image" fit="cover" />
              <div class="venue-info">
                <h4 class="venue-name">{{ venue.name }} <span>({{ venue.type }})</span></h4>
                <p class="venue-detail">
                  <el-icon><Location /></el-icon>
                  <span>{{ venue.address }}</span>
                </p>
                <p class="venue-detail">
                  <el-icon><Phone /></el-icon>
                  <span>{{ venue.phone }}</span>
                </p>
              </div>
            </el-card>
          </el-col>
        </el-row>
        
        <!-- 分页 -->
        <div class="pagination-container">
          <el-pagination
            v-model:current-page="pagination.currentPage"
            v-model:page-size="pagination.pageSize"
            :page-sizes="[12, 24, 36, 48]"
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
import { ArrowRight, Search, Bell, Location, Phone, CaretTop, CaretBottom } from '@element-plus/icons-vue';
// 引入Element Plus的响应式CSS类
import 'element-plus/theme-chalk/display.css';

// --- 数据定义 ---

const headerSearch = ref('');

// 排序选项
const sorts = ref([
  { name: '综合', active: true },
  { name: '销量', active: false, icon: CaretTop },
  { name: '距离', active: false, icon: CaretTop },
]);

// 场馆数据 (生成12条模拟数据)
const venues = ref(Array.from({ length: 12 }).map((_, i) => ({
  id: i + 1,
  name: '飞羽竞技场',
  type: '篮球场馆',
  address: '苏州市工业园区独墅湖校区258号',
  phone: '19552698532',
  image: `https://picsum.photos/400/250?random=${i + 1}`, // 使用picsum.photos生成随机图片
})));

// 分页数据
const pagination = reactive({
  currentPage: 1,
  pageSize: 12,
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
.venue-list-page {
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

/* 白色导航栏样式 */
.header {
  position: sticky;
  top: 30px;
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
  margin-bottom: 24px;
}
.sort-section .el-button {
  font-size: 14px;
}
.sort-section .el-button.is-link.el-button--primary {
  font-weight: bold;
}

/* 场馆卡片 */
.venue-card {
  margin-bottom: 24px;
  border-radius: 8px;
  border: 1px solid var(--el-border-color-lighter);
}
.venue-image {
  width: 100%;
  aspect-ratio: 16 / 10; /* 保持图片比例 */
  display: block;
}
.venue-info {
  padding: 16px;
}
.venue-name {
  font-size: 16px;
  font-weight: 600;
  color: var(--el-text-color-primary);
  margin: 0 0 12px;
}
.venue-name span {
  font-weight: 400;
  color: var(--el-text-color-secondary);
}
.venue-detail {
  display: flex;
  align-items: center;
  font-size: 14px;
  color: var(--el-text-color-secondary);
  margin: 0 0 8px;
}
.venue-detail .el-icon {
  margin-right: 8px;
  color: var(--el-text-color-placeholder);
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
  .venue-info {
    padding: 12px;
  }
  .venue-name {
    font-size: 15px;
  }
  .venue-detail {
    font-size: 13px;
  }
  .pagination-container {
    padding: 24px 0;
  }
}
</style>