<template>
  <div class="my-orders-page">
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
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item>个人中心</el-breadcrumb-item>
        <el-breadcrumb-item>上传课程</el-breadcrumb-item>
        </el-breadcrumb>

        <!-- 订单中心 -->
        <div class="orders-center">
          <el-tabs v-model="activeTab" class="order-tabs">
            <el-tab-pane label="订购商品" name="purchased">
              <!-- 筛选器组合 -->
              <div class="filters-wrapper">
                <el-tabs v-model="subTab" class="sub-tabs">
                    <el-tab-pane label="课程" name="courses"></el-tab-pane>
                    <el-tab-pane label="商品" name="goods"></el-tab-pane>
                    <el-tab-pane label="空间" name="spaces"></el-tab-pane>
                </el-tabs>

                <div class="status-filters">
                    <el-button 
                        v-for="status in statuses" 
                        :key="status" 
                        :class="{ 'is-active': activeStatus === status }"
                        @click="activeStatus = status"
                    >
                    {{ status }}
                    </el-button>
                </div>
              </div>

              <!-- 订单列表 -->
              <div class="order-list">
                <!-- 列表头部 -->
                <div class="order-list-header">
                  <div class="header-col col-info">商品信息</div>
                  <div class="header-col col-price">单价</div>
                  <div class="header-col col-quantity">数量</div>
                  <div class="header-col col-amount">订单金额</div>
                  <div class="header-col col-actions">操作</div>
                  <div class="header-col col-status">状态</div>
                </div>

                <!-- 订单项 -->
                <div v-for="order in orders" :key="order.id" class="order-item">
                  <div class="order-item-header">
                    <span>订单号: {{ order.orderNumber }}</span>
                    <span>{{ order.date }}</span>
                  </div>
                  <div class="order-item-body">
                    <div class="col-info">
                      <el-image :src="order.image" fit="cover" class="product-image" />
                      <span class="product-name">{{ order.name }}</span>
                    </div>
                    <div class="col-price">¥{{ order.price.toFixed(2) }}</div>
                    <div class="col-quantity">{{ order.quantity }}</div>
                    <div class="col-amount">¥{{ order.amount.toFixed(2) }}</div>
                    <div class="col-actions">
                      <el-button type="primary" link>详情</el-button>
                      <el-button v-if="order.status === 'completed'" type="primary" link>再次购买</el-button>
                      <el-button v-if="order.status === 'pending'" type="primary" link>去付款</el-button>
                      <el-button v-if="order.status === 'cancelled'" type="primary" link>重新购买</el-button>
                    </div>
                    <div class="col-status">
                       <div :class="['status-tag', `status-${order.status}`]">
                          {{ getStatusText(order.status) }}
                       </div>
                    </div>
                  </div>
                </div>
              </div>
            </el-tab-pane>
            <el-tab-pane label="售出商品" name="sold">
                <el-empty description="暂无售出商品" />
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

const activeTab = ref('purchased');
const subTab = ref('goods');
const activeStatus = ref('全部');

const statuses = ref(['全部', '待支付', '已取消', '已完成']);

const orders = ref([
  { id: 1, orderNumber: '12345678912345645891', date: '2025-12-12 20:00', name: '学会手环', image: 'src/components/Personlcenter1/picture/矩形2.png', price: 100.00, quantity: 1, amount: 100.00, status: 'completed' },
  { id: 2, orderNumber: '12345678912345645891', date: '2025-12-12 20:00', name: '学会手环', image: 'src/components/Personlcenter1/picture/矩形2(2).png', price: 100.00, quantity: 1, amount: 100.00, status: 'pending' },
  { id: 3, orderNumber: '12345678912345645891', date: '2025-12-12 20:00', name: '学会手环', image: 'src/components/Personlcenter1/picture/矩形2(4).png', price: 100.00, quantity: 1, amount: 100.00, status: 'cancelled' }
]);

const getStatusText = (status) => {
  switch(status) {
    case 'completed': return '已完成';
    case 'pending': return '待支付';
    case 'cancelled': return '已取消';
    default: return '未知';
  }
};

const pagination = reactive({ currentPage: 1, pageSize: 20, total: 625 * 20 });
const isMobile = ref(false);
const checkScreenSize = () => { isMobile.value = window.innerWidth < 768; };
onMounted(() => { checkScreenSize(); window.addEventListener('resize', checkScreenSize); });
onBeforeUnmount(() => { window.removeEventListener('resize', checkScreenSize); });
</script>

<style scoped>
/* 全局布局 */
.my-orders-page { background-color: #f7f8fa; min-height: 100vh; }
.main-content { padding: 0; }
.top-black-bar { width: 100%; height: 30px; background-color:rgba(56, 56, 56, 1); position: sticky; top: 0; z-index: 1001; }
.content-container { max-width: 1200px; margin: 0 auto; padding: 0 20px 40px; }

/* Header样式 */
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

/* 订单中心 */
.orders-center { background-color: #fff; border: 1px solid var(--el-border-color-lighter); border-radius: 8px; }

/* Tabs 样式 */
.order-tabs :deep(.el-tabs__header) { margin: 0; }
.order-tabs :deep(.el-tabs__item) { font-size: 16px; padding: 0 24px; height: 50px; }
.order-tabs :deep(.el-tabs__nav-wrap) { padding-left: 24px; }
.order-tabs :deep(.el-tabs__content) { padding: 20px 24px; }

.filters-wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-bottom: 16px;
    border-bottom: 1px solid var(--el-border-color-lighter);
}

/* 子 Tabs (优化后) */
.sub-tabs :deep(.el-tabs__header) { border-bottom: none; margin-bottom: 0; }
.sub-tabs :deep(.el-tabs__nav) { border: none !important; }
.sub-tabs :deep(.el-tabs__item) {
  font-size: 14px;
  height: 36px;
  border: none !important;
  border-radius: 6px;
  background-color: #f0f2f5; /* 默认背景色 */
  margin-right: 10px;
  color: var(--el-text-color-regular);
  padding: 0 20px; /* 增加内边距 */
  transition: all 0.3s;
}
.sub-tabs :deep(.el-tabs__item.is-active) {
  background-color: var(--el-color-primary-light-9); /* <-- 关键修改：改为淡蓝色 */
  color: var(--el-color-primary);
  font-weight: 500;
}
.sub-tabs :deep(.el-tabs__item:hover) {
  color: var(--el-color-primary);
}


/* 状态筛选 (优化后) */
.status-filters {
  display: flex;
  gap: 10px;
}
.status-filters .el-button {
  border: none;
  border-radius: 6px;
  background-color: #f0f2f5; /* 默认背景色 */
  color: var(--el-text-color-regular);
  padding: 8px 20px;
  height: 36px;
}
.status-filters .el-button:hover,
.status-filters .el-button:focus {
  background-color: #e9e9eb;
  color: var(--el-text-color-primary);
}
/* 激活状态 */
.status-filters .el-button.is-active { 
  background-color: var(--el-color-primary-light-9); /* <-- 关键修改：改为淡蓝色 */
  color: var(--el-color-primary);
  font-weight: 500;
}

/* 订单列表 */
.order-list { margin-top: 20px; }
.order-list-header { display: flex; padding: 12px 20px; font-size: 14px; color: var(--el-text-color-secondary); }
.header-col { text-align: center; }
.col-info { width: 40%; text-align: left; }
.col-price, .col-quantity, .col-amount { width: 12%; }
.col-actions, .col-status { width: 12%; }

.order-item { border: 1px solid var(--el-border-color-lighter); border-radius: 8px; margin-bottom: 16px; }
.order-item-header { display: flex; justify-content: space-between; background-color: #f9fafb; padding: 10px 20px; font-size: 13px; color: var(--el-text-color-secondary); }
.order-item-body { display: flex; align-items: center; padding: 20px; }
.order-item-body > div { text-align: center; }
.product-image { width: 80px; height: 80px; border-radius: 4px; flex-shrink: 0; }
.col-info { display: flex; align-items: center; gap: 12px; text-align: left; }
.product-name { font-weight: 500; }
.col-actions { display: flex; flex-direction: column; gap: 4px; }

/* 状态标签 */
.status-tag { padding: 4px 12px; border-radius: 6px; font-size: 13px; font-weight: 500; }
.status-completed { background-color: var(--el-color-primary-light-9); color: var(--el-color-primary); }
.status-pending { background-color: var(--el-color-danger); color: #fff; }
.status-cancelled { background-color: #FFC107; color: #fff; }

/* 分页 */
.pagination-container { display: flex; justify-content: flex-end; padding: 20px 24px; border-top: 1px solid var(--el-border-color-lighter); }

/* --- 响应式适配 --- */
@media (max-width: 991px) {
  .filters-wrapper { flex-direction: column; align-items: stretch; gap: 16px; }
  .order-list-header, .col-price, .col-quantity, .col-amount { display: none; }
  .order-item-body { flex-wrap: wrap; }
  .col-info { width: 100%; margin-bottom: 16px; }
  .col-actions, .col-status { width: 50%; }
  .col-status { text-align: right; }
}
@media (max-width: 767px) {
  .orders-center { padding: 0; }
  .order-tabs :deep(.el-tabs__content) { padding: 16px; }
  .pagination-container { justify-content: center; }
}
</style>