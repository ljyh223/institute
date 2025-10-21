<template>
  <div class="my-orders-page">
    <!-- 顶部深灰色细条 -->
    <div class="top-black-bar"></div>

    <!-- 白色导航栏 -->
    <HomePageHead/>

    <!-- 主内容区 -->
    <el-main class="main-content">
      <div class="content-container">
        <!-- 面包屑导航 -->
        <el-breadcrumb separator=">" class="page-breadcrumb">
          <el-breadcrumb-item>我的</el-breadcrumb-item>
          <el-breadcrumb-item>我的订单</el-breadcrumb-item>
        </el-breadcrumb>

        <!-- 订单中心 -->
         <OrderCenter
          :orders="orders"
          :statuses="statuses"
          :getStatusText="getStatusText"
          :pagination="pagination"
          :activeStatus="activeStatus"
          :subTab="subTab"
          :activeTab="activeTab"
          @filters-change="handleFiltersChange"
          @pagination-change="handlePaginationChange"
        />
      </div>
    </el-main>
  </div>
</template>

<script setup>
import { ref, reactive, onMounted, onBeforeUnmount } from 'vue';
import 'element-plus/theme-chalk/display.css';
import HomePageHead from '@/components/homepage/Head.vue';
import OrderCenter from '@/components/homepage/OrderCenter.vue';

const activeTab = ref('purchased');
const subTab = ref('courses');
const activeStatus = ref('全部');

const statuses = ref(['全部', '待支付', '已取消', '已完成']);

// [优化] 更新数据以匹配截图
const orders = ref([
  { id: 1, orderNumber: '12345678912345645891', date: '2025-12-12 20:00', name: '2025前端开发-JAVA', image: 'src/components/Personlcenter1/picture/矩形2(3).png', price: 100.00, quantity: 1, amount: 100.00, status: 'completed' },
  { id: 2, orderNumber: '12345678912345645891', date: '2025-12-12 20:00', name: '2025前端开发-JAVA', image: 'src/components/Personlcenter1/picture/矩形2(3).png', price: 100.00, quantity: 1, amount: 100.00, status: 'pending' },
  { id: 3, orderNumber: '12345678912345645891', date: '2025-12-12 20:00', name: '2025前端开发-JAVA', image: 'src/components/Personlcenter1/picture/矩形2(3).png', price: 100.00, quantity: 1, amount: 100.00, status: 'cancelled' }
]);

const getStatusText = (status) => {
  switch(status) {
    case 'completed': return '已完成';
    case 'pending': return '待支付';
    case 'cancelled': return '已取消';
    default: return '未知';
  }
};
// [优化] 更新数据以匹配截图
const pagination = reactive({ currentPage: 2, pageSize: 20, total: 625 * 20 });
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

/* 面包屑 */
.page-breadcrumb { padding: 24px 0; }

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