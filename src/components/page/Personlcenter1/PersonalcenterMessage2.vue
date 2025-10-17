<template>
  <div class="notifications-page-layout">
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
      <el-input
        placeholder="What do you want learn?"
        class="header-search-input"
      />
      <el-button type="primary" :icon="Search" circle class="search-icon-btn" />
    </div>
    <div class="user-action-section">
      <el-icon :size="22" class="notification-bell"><Bell /></el-icon>
      <el-avatar :size="32" src="src/components/Personlcenter1/picture/矩形2(1).png" />
    </div>
  </div>
</el-header>

    <!-- 主内容区 -->
    <el-main class="main-content">
      <div class="content-container">
        <!-- 面包屑导航 -->
        <el-breadcrumb :separator-icon="ArrowRight" class="page-breadcrumb">
        <el-breadcrumb-item :to="{ path: '/' }">我的</el-breadcrumb-item>
        <el-breadcrumb-item>消息通知</el-breadcrumb-item>
        </el-breadcrumb>
 
        <!-- 通知中心 -->
        <div class="notifications-center">
            <el-tabs v-model="activeTab" class="notification-tabs">
                <el-tab-pane label="平台通知" name="platform">
                     <el-empty description="暂无平台通知" />
                </el-tab-pane>
                <el-tab-pane label="私信通知" name="private">
                    <el-empty description="暂无互动通知" />
                </el-tab-pane>
                <el-tab-pane label="互动通知" name="interaction">
                    <div class="notification-list">
                        <div v-for="item in privateMessages" :key="item.id" class="notification-item">
                            <el-avatar :size="40" :src="item.avatar" />
                            <div class="item-content">
                                <p class="item-title">{{ item.sender }}</p>
                                <p class="item-message">{{ item.message }}</p>
                            </div>
                            <div class="item-timestamp">
                                {{ item.timestamp }}
                            </div>
                        </div>
                    </div>
                </el-tab-pane>

            </el-tabs>

            <!-- 分页 -->
            <div class="pagination-container">
            <el-pagination
                v-model:current-page="pagination.currentPage"
                v-model:page-size="pagination.pageSize"
                :page-sizes="[10, 20, 30, 50]"
                :small="isMobile"
                :background="true"
                layout="total, sizes, prev, pager, next, jumper"
                :total="pagination.total"
            />
            </div>
        </div>
      </div>
    </el-main>
  </div>
</template>

<script setup>
import { ref, reactive, onMounted, onBeforeUnmount } from 'vue';
import { ArrowRight, Search, Bell } from '@element-plus/icons-vue';
import 'element-plus/theme-chalk/display.css';

const activeTab = ref('private');

// 模拟私信数据
const privateMessages = ref(Array.from({ length: 5 }).map((_, i) => ({
    id: i + 1,
    sender: '张老师',
    avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
    message: '您好！请问您今天有空吗？',
    timestamp: '2025-9-3 20:00'
})));

// 分页数据
const pagination = reactive({
  currentPage: 1,
  pageSize: 20,
  total: 625 * 20,
});

// --- 响应式处理 ---
const isMobile = ref(false);
const checkScreenSize = () => { isMobile.value = window.innerWidth < 768; };
onMounted(() => {
  checkScreenSize();
  window.addEventListener('resize', checkScreenSize);
});
onBeforeUnmount(() => { window.removeEventListener('resize', checkScreenSize); });
</script>

<style scoped>
/* 全局布局 */
.notifications-page-layout { background-color: #f7f8fa; min-height: 100vh; }
.main-content { padding: 0; }
.top-black-bar { width: 100%; height: 30px; background-color:rgba(56, 56, 56, 1); position: sticky; top: 0; z-index: 1001; }
.content-container { max-width: 1000px; margin: 0 auto; padding: 0 20px 40px; }

.header {
  background-color: #ffffff;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.08);
  height: 64px;
  position: sticky;
  top: 0; /* 直接固定在页面顶部 */
  z-index: 1000;
  display: flex;
  align-items: center;
}
.header-content {
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
}
.logo-section { display: flex; align-items: center; gap: 16px; }
.logo-text { font-size: 24px; font-weight: bold; color: var(--el-color-primary); }
.ai-explore-btn { border-color: var(--el-border-color-light); color: var(--el-text-color-primary); }
.ai-explore-btn .el-icon { margin-left: 4px; }
.search-container { display: flex; align-items: center; flex-grow: 1; max-width: 450px; margin: 0 24px; }
.header-search-input { --el-input-border-radius: 20px; }
.header-search-input :deep(.el-input__wrapper) { box-shadow: none !important; border: 1px solid var(--el-border-color); }
.header-search-input :deep(.el-input__wrapper:hover) { border-color: var(--el-color-primary); }
.search-icon-btn { margin-left: -35px; z-index: 5; }
.user-action-section { display: flex; align-items: center; gap: 20px; }
.notification-bell { color: var(--el-color-primary); cursor: pointer; }

/* 面包屑 */
.page-breadcrumb { padding: 24px 0; }

/* 通知中心 */
.notifications-center {
    background-color: #fff;
    border: 1px solid var(--el-border-color-lighter);
    border-radius: 8px;
    padding: 0 24px 24px;
}

/* Tabs 样式 */
.notification-tabs :deep(.el-tabs__header) {
    margin-bottom: 24px;
}
.notification-tabs :deep(.el-tabs__item) {
    font-size: 16px;
    padding: 0 20px;
    height: 50px;
}
.notification-tabs :deep(.el-tabs__nav-wrap::after) {
    height: 1px;
}
/* 激活tab的下划线 */
.notification-tabs :deep(.el-tabs__active-bar) {
    height: 3px;
}

/* 通知列表 */
.notification-list {
    display: flex;
    flex-direction: column;
}
.notification-item {
    display: flex;
    align-items: center;
    gap: 16px;
    padding: 16px 0;
    border-bottom: 1px solid var(--el-border-color-lighter);
    transition: background-color 0.3s;
    cursor: pointer;
}
.notification-item:hover {
    background-color: #f9fafb;
}
.notification-item:last-child {
    border-bottom: none;
}
.item-content {
    flex-grow: 1;
}
.item-title {
    font-weight: 500;
    margin: 0 0 4px;
}
.item-message {
    font-size: 14px;
    color: var(--el-text-color-secondary);
    margin: 0;
}
.item-timestamp {
    font-size: 14px;
    color: var(--el-text-color-secondary);
    flex-shrink: 0;
}

/* 分页 */
.pagination-container {
  display: flex;
  justify-content: flex-end;
  padding-top: 24px;
  border-top: 1px solid var(--el-border-color-lighter);
  margin-top: 16px;
}

/* --- 响应式适配 --- */
@media (max-width: 767px) {
  .content-container { padding: 0 10px 20px; }
  .notifications-center { padding: 0 16px 16px; }
  .notification-item { flex-wrap: wrap; }
  .item-content { order: 1; width: calc(100% - 56px); }
  .item-avatar { order: 0; }
  .item-timestamp { order: 2; width: 100%; text-align: right; margin-top: 8px; padding-left: 56px; }
  .pagination-container { justify-content: center; }
}
</style>