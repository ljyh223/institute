<!-- src/components/OrderCenter.vue -->
<template>
  <div class="orders-center">
    <el-tabs v-model="activeTab" class="order-tabs">
      <el-tab-pane label="订购商品" name="purchased">
        <div v-loading="loading">
          <div class="filters-wrapper">
            <el-radio-group v-model="activeSubTab" class="sub-tabs" @tab-change="emitFiltersChange">
              <el-radio-button label="课程" name="courses"></el-radio-button>
              <el-radio-button label="商品" name="goods"></el-radio-button>
              <el-radio-button label="空间" name="spaces"></el-radio-button>
            </el-radio-group>

            <el-radio-group v-model="activeStatus" class="status-filters" @change="emitFiltersChange">
              <el-radio-button v-for="status in statuses" :key="status" :label="status" />
            </el-radio-group>
          </div>

          <el-empty v-if="!orders.length" description="暂无订单" />
          
          <div v-else class="order-list">
            <!-- [修正] 列表头部 -->
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
                <div class="order-meta">
                  <span>订单号: {{ order.orderNumber }}</span>
                  <span>{{ order.date }}</span>
                </div>
                <div :class="['status-tag', `status-${order.status}`]">
                  {{ getStatusText(order.status) }}
                </div>
              </div>

              <div class="order-item-body">
                <!-- [修正] 商品信息列 -->
                <div class="col-info">
                  <el-image :src="order.image" fit="cover" class="product-image" />
                  <span class="product-name">{{ order.name }}</span>
                </div>
                <div class="col-price">¥{{ order.price.toFixed(2) }}</div>
                <div class="col-quantity">{{ order.quantity }}</div>
                <div class="col-amount">¥{{ order.amount.toFixed(2) }}</div>
                <div class="col-actions">
                  <el-button type="primary" link @click="onViewDetailsClick(order)">详情</el-button>
                  <el-button v-if="order.status === 'completed'" type="primary" link>{{ completedActionText }}</el-button>
                  <el-button v-if="order.status === 'pending'" type="danger" link>去付款</el-button>
                  <el-button v-if="order.status === 'cancelled'" type="warning" link>重新购买</el-button>
                </div>
                <!-- 状态列在body中留空，以保持布局 -->
                <div class="col-status"></div>
              </div>
            </div>
          </div>
        </div>
      </el-tab-pane>
      
      <el-tab-pane label="售出商品" name="sold">
        <ProductList
          v-if="availableProducts.length > 0"
          :products="availableProducts"
          @sell-product="handleProductSold"
        />
        <el-empty v-else description="暂无售出商品" />
      </el-tab-pane>
    </el-tabs>
    
    <div v-if="pagination.total > 0" class="pagination-container">
       <el-pagination
        :current-page="pagination.currentPage"
        :page-size="pagination.pageSize"
        :page-sizes="[10, 20, 30, 50]"
        :small="isMobile"
        :background="true"
        layout="prev, pager, next, jumper, ->, total"
        :total="pagination.total"
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
      />
    </div>
  </div>
</template>

<script setup>
// Script部分没有变化，保持原样即可
import { ref, computed, onMounted, onBeforeUnmount } from 'vue';
import ProductList from '@/components/homepage/personalcenter1/ProductList.vue';

const props = defineProps({
  orders: { type: Array, required: true, default: () => [] },
  pagination: { type: Object, required: true, default: () => ({ currentPage: 1, pageSize: 20, total: 0 }) },
  loading: { type: Boolean, default: false },
  productType: { type: String, default: 'goods' },
  availableProducts: { type: Array, required: true, default: () => [] }
});

const emit = defineEmits(['filters-change', 'pagination-change','click-product']);

const activeTab = ref('purchased');
const activeSubTab = ref('courses');
const activeStatus = ref('全部');
const statuses = ref(['全部', '待支付', '已取消', '已完成']);

const completedActionText = computed(() => {
  return props.productType === 'spaces' ? '再次预约' : '再次购买';
});

const getStatusText = (status) => {
  const map = { completed: '已完成', pending: '待支付', cancelled: '已取消' };
  return map[status] || '未知';
};

const emitFiltersChange = () => {
  emit('filters-change', {
    subTab: activeSubTab.value,
    status: activeStatus.value
  });
};

const handleSizeChange = (newPageSize) => {
  emit('pagination-change', { currentPage: 1, pageSize: newPageSize });
};

const handleCurrentChange = (newCurrentPage) => {
  emit('pagination-change', { currentPage: newCurrentPage, pageSize: props.pagination.pageSize });
};

const onViewDetailsClick = (order) => {
  emit('view-details', order);
};

const handleProductSold = (product) =>{
  emit('click-product', product);
}

const isMobile = ref(false);
const checkScreenSize = () => { isMobile.value = window.innerWidth < 768; };
onMounted(() => { checkScreenSize(); window.addEventListener('resize', checkScreenSize); });
onBeforeUnmount(() => { window.removeEventListener('resize', checkScreenSize); });
</script>

<style scoped>
/* --- 通用样式 --- */
.orders-center { background-color: #fff; border: 1px solid var(--el-border-color-lighter); border-radius: 8px; }
.order-tabs :deep(.el-tabs__header) { margin: 0; }
.order-tabs :deep(.el-tabs__item) { font-size: 16px; padding: 0 24px; height: 50px; }
.order-tabs :deep(.el-tabs__nav-wrap) { padding-left: 24px; }
.order-tabs :deep(.el-tabs__content) { padding: 20px 24px; }

/* --- [修正] 筛选器 --- */
.filters-wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-bottom: 16px;
    border-bottom: 1px solid var(--el-border-color-lighter);
}

/* 隐藏Tabs默认的下划线指示器 */
.sub-tabs :deep(.el-tabs__active-bar) { display: none; }
.sub-tabs :deep(.el-tabs__header) { border-bottom: none; margin-bottom: 0; }
.sub-tabs :deep(.el-tabs__nav) { border: none !important; }

/* 统一筛选器按钮样式 */
.sub-tabs :deep(.el-tabs__item),
.status-filters :deep(.el-radio-button__inner) {
  font-size: 14px;
  height: 36px;
  line-height: 34px; /* 垂直居中 */
  border: 1px solid #dcdfe6 !important;
  border-radius: 6px !important;
  background-color: #fff;
  color: var(--el-text-color-regular);
  margin-right: 10px;
  padding: 0 20px;
  transition: all 0.3s;
  box-shadow: none !important;
  font-weight: 500;
}
.status-filters :deep(.el-radio-button:first-child .el-radio-button__inner) { border-left: 1px solid #dcdfe6 !important; }

/* 统一悬浮效果 */
.sub-tabs :deep(.el-tabs__item:hover),
.status-filters :deep(.el-radio-button__inner:hover) {
  color: var(--el-color-primary);
  border-color: var(--el-color-primary-light-5) !important;
}

/* 统一选中效果 */
.sub-tabs :deep(.el-tabs__item.is-active),
.status-filters :deep(.el-radio-button__original-radio:checked + .el-radio-button__inner) {
  background-color: var(--el-color-primary) !important;
  color: #fff !important;
  border-color: var(--el-color-primary) !important;
}

/* --- [修正] 订单列表对齐 --- */
.order-list { margin-top: 20px; }
.order-item { border: 1px solid var(--el-border-color-lighter); border-radius: 8px; margin-bottom: 16px; overflow: hidden; }

.order-list-header { 
  display: flex; padding: 12px 20px; font-size: 14px; 
  color: var(--el-text-color-secondary); background-color: #fafafa; border-radius: 4px; 
}
.order-item-body { 
  display: flex; align-items: center; padding: 20px; 
}

.header-col, .order-item-body > div { text-align: center; }

/* 移除不必要的内边距，设置文本左对齐 */
.header-col.col-info,
.order-item-body .col-info {
  width: 40%;
  text-align: left;
  padding-left: 0; /* 关键修正 */
}

.col-price, .col-quantity, .col-amount { width: 12%; }
.col-actions, .col-status { width: 12%; }

.col-info { display: flex; align-items: center; gap: 12px; }
.product-image { width: 80px; height: 60px; border-radius: 4px; flex-shrink: 0; }
.product-name { font-weight: 500; }
.col-actions { display: flex; flex-direction: column; gap: 4px; }

/* --- 订单项头部和状态标签 (保持不变) --- */
.order-item-header {
  display: flex; justify-content: space-between; align-items: center;
  background-color: #f9fafb; padding: 10px 20px;
  font-size: 13px; color: var(--el-text-color-secondary);
}
.order-meta { display: flex; gap: 30px; }

.status-tag { padding: 4px 12px; border-radius: 6px; font-size: 13px; font-weight: 500; line-height: 1.5; }
.status-completed { background-color: #f0f5ff; color: #409eff; border: 1px solid #d9ecff; }
.status-pending { background-color: #f56c6c; color: #fff; border: 1px solid #f56c6c; }
.status-cancelled { background-color: #e6a23c; color: #fff; border: 1px solid #e6a23c; }

/* --- 分页 (保持不变) --- */
.pagination-container { display: flex; justify-content: center; padding: 30px 24px 20px; }
</style>