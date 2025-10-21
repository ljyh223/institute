<template>
  <div class="notifications-page-layout">

    <Head />
    <!-- 主内容区 -->
    <el-main class="main-content">
      <div class="content-container">
        <!-- 面包屑导航 -->
        <el-breadcrumb :separator-icon="ArrowRight" class="page-breadcrumb">
          <el-breadcrumb-item :to="{ path: '/PersonalCenter' }">我的</el-breadcrumb-item>
          <el-breadcrumb-item>消息通知</el-breadcrumb-item>
        </el-breadcrumb>
        <!-- 通知中心 -->
        <div class="notifications-center">
          <el-tabs v-model="activeTab" class="notification-tabs">
            <el-tab-pane label="平台通知" name="platform">
              <div class="notification-list">
                <div v-for="item in notifications" :key="item.id" class="notification-item">
                  <div class="item-icon">
                    <el-icon :size="20">
                      <BellFilled />
                    </el-icon>
                  </div>
                  <div class="item-content">
                    <p class="item-title">{{ item.title }}</p>
                    <p class="item-message">{{ item.message }}</p>
                  </div>
                  <div class="item-timestamp">
                    {{ item.timestamp }}
                  </div>
                </div>
              </div>
            </el-tab-pane>
            <el-tab-pane label="私信通知" name="private">
              <el-empty description="暂无私信通知" />
            </el-tab-pane>
            <el-tab-pane label="互动通知" name="interaction">
              <el-empty description="暂无互动通知" />
            </el-tab-pane>
          </el-tabs>

          <!-- 分页 -->
          <div class="pagination-container">
            <el-pagination v-model:current-page="pagination.currentPage" v-model:page-size="pagination.pageSize"
              :page-sizes="[10, 20, 30, 50]" :small="isMobile" :background="true"
              layout="total, sizes, prev, pager, next, jumper" :total="pagination.total" />
          </div>
        </div>
      </div>
    </el-main>
  </div>
</template>

<script setup>
import { ref, reactive, onMounted, onBeforeUnmount } from 'vue';
import { ArrowRight, BellFilled } from '@element-plus/icons-vue';
import 'element-plus/theme-chalk/display.css';
import Head from '@/components/homepage/Head.vue';
const activeTab = ref('platform');

// 模拟通知数据
const notifications = ref(Array.from({ length: 5 }).map((_, i) => ({
  id: i + 1,
  title: '学会官方消息',
  message: '学会APP今日上线！！！',
  timestamp: '2025-9-3 20:00'
})));

// 分页数据
const pagination = reactive({
  currentPage: 1,
  pageSize: 20,
  total: 625 * 20, // 假设每页20条，共625页
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
.notifications-page-layout {
  background-color: #f7f8fa;
  min-height: 100vh;
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
  max-width: 1000px;
  margin: 0 auto;
  padding: 0 20px 40px;
}

/* 面包屑 */
.page-breadcrumb {
  padding: 24px 0;
}

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

.item-icon {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--el-color-primary-light-8);
  color: var(--el-color-primary);
  flex-shrink: 0;
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
  .content-container {
    padding: 0 10px 20px;
  }

  .notifications-center {
    padding: 0 16px 16px;
  }

  .notification-item {
    flex-wrap: wrap;
  }

  .item-content {
    order: 1;
    width: calc(100% - 56px);
  }

  .item-icon {
    order: 0;
  }

  .item-timestamp {
    order: 2;
    width: 100%;
    text-align: right;
    margin-top: 8px;
    padding-left: 56px;
  }

  .pagination-container {
    justify-content: center;
  }
}
</style>