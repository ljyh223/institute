<!-- src/components/OrderCenter.vue -->
<template>
  <div class="orders-center">
    <el-tabs v-model="activeTab" class="order-tabs">
      <el-tab-pane label="订购商品" name="purchased">
        <!-- Loading State -->
        <div v-loading="loading">
          <!-- Filters -->
          <div class="filters-wrapper">
            <el-tabs v-model="activeSubTab" class="sub-tabs" @tab-change="emitFiltersChange">
              <el-tab-pane label="课程" name="courses"></el-tab-pane>
              <el-tab-pane label="商品" name="goods"></el-tab-pane>
              <el-tab-pane label="空间" name="spaces"></el-tab-pane>
            </el-tabs>
            <el-radio-group v-model="activeStatus" class="status-filters" @change="emitFiltersChange">
              <el-radio-button v-for="status in statuses" :key="status" :label="status" />
            </el-radio-group>
          </div>

          <!-- Empty State: Show when not loading and no data -->
          <el-empty v-if="!orders.length" description="暂无订单" />
          
          <!-- Order List: Show when there is data -->
          <div v-else class="order-list">
            <div class="order-list-header">
              <div class="header-col col-info">商品信息</div>
              <div class="header-col col-price">单价</div>
              <div class="header-col col-quantity">数量</div>
              <div class="header-col col-amount">订单金额</div>
              <div class="header-col col-actions">操作</div>
              <div class="header-col col-status">状态</div>
            </div>

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
                  <el-button v-if="order.status === 'pending'" type="danger" link>去付款</el-button>
                  <el-button v-if="order.status === 'cancelled'" type="warning" link>重新购买</el-button>
                </div>
                <div class="col-status">
                  <div :class="['status-tag', `status-${order.status}`]">
                    {{ getStatusText(order.status) }}
                  </div>
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
    
    <!-- Pagination -->
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
import { ref, watch, onMounted, onBeforeUnmount } from 'vue';

// --- Props: Data received from the parent ---
const props = defineProps({
  orders: {
    type: Array,
    required: true,
    default: () => [] // Handles the case where no data is passed
  },
  pagination: {
    type: Object,
    required: true,
    default: () => ({ currentPage: 1, pageSize: 20, total: 0 })
  },
  loading: {
    type: Boolean,
    default: false
  }
});

// --- Emits: Events sent to the parent ---
const emit = defineEmits(['filters-change', 'pagination-change']);

// --- Internal State ---
const activeTab = ref('purchased');
const activeSubTab = ref('courses'); // Default to '课程' as in the image
const activeStatus = ref('全部');
const statuses = ref(['全部', '待支付', '已取消', '已完成']);

// --- Methods ---
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

// --- Responsive Logic (can be kept inside the component) ---
const isMobile = ref(false);
const checkScreenSize = () => { isMobile.value = window.innerWidth < 768; };
onMounted(() => { checkScreenSize(); window.addEventListener('resize', checkScreenSize); });
onBeforeUnmount(() => { window.removeEventListener('resize', checkScreenSize); });
</script>

<style scoped>
.orders-center { background-color: #fff; border: 1px solid var(--el-border-color-lighter); border-radius: 8px; }
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
.sub-tabs { margin-right: 20px; }
.sub-tabs :deep(.el-tabs__header) { border-bottom: none; margin-bottom: 0; }
.sub-tabs :deep(.el-tabs__nav) { border: none !important; }
.sub-tabs :deep(.el-tabs__item) {
  font-size: 14px; height: 36px; line-height: 36px;
  border: 1px solid #dcdfe6;
  border-radius: 6px;
  background-color: #fff;
  margin-right: 10px;
  color: var(--el-text-color-regular);
  padding: 0 20px;
  transition: all 0.3s;
}
.sub-tabs :deep(.el-tabs__item.is-active) {
  background-color: var(--el-color-primary);
  color: #fff;
  border-color: var(--el-color-primary);
  font-weight: 500;
}
.sub-tabs :deep(.el-tabs__item:hover) { color: var(--el-color-primary); border-color: var(--el-color-primary-light-5); }
.sub-tabs :deep(.el-tabs__active-bar) { display: none; }
.status-filters { display: flex; gap: 10px; }
.status-filters :deep(.el-radio-button__inner) {
  border: 1px solid #dcdfe6;
  border-radius: 6px !important;
  background-color: #fff;
  color: var(--el-text-color-regular);
  padding: 8px 20px;
  height: 36px;
  box-shadow: none !important;
  font-weight: normal;
}
.status-filters :deep(.el-radio-button:first-child .el-radio-button__inner),
.status-filters :deep(.el-radio-button:last-child .el-radio-button__inner) {
  border-left: 1px solid #dcdfe6;
}
.status-filters :deep(.el-radio-button__original-radio:checked + .el-radio-button__inner) {
  background-color: var(--el-color-primary-light-9);
  color: var(--el-color-primary);
  border-color: var(--el-color-primary-light-7);
  font-weight: 500;
}
.status-filters :deep(.el-radio-button__inner:hover) {
  color: var(--el-color-primary);
  border-color: var(--el-color-primary-light-5);
}
.order-list { margin-top: 20px; }
.order-list-header { display: flex; padding: 12px 20px; font-size: 14px; color: var(--el-text-color-secondary); background-color: #fafafa; border-radius: 4px; }
.header-col { text-align: center; }
.col-info { width: 40%; text-align: left; padding-left: 100px; }
.col-price, .col-quantity, .col-amount { width: 12%; }
.col-actions, .col-status { width: 12%; }
.order-item { border: 1px solid var(--el-border-color-lighter); border-radius: 8px; margin-bottom: 16px; }
.order-item-header { display: flex; justify-content: flex-start; gap: 30px; background-color: #f9fafb; padding: 10px 20px; font-size: 13px; color: var(--el-text-color-secondary); }
.order-item-body { display: flex; align-items: center; padding: 20px; }
.order-item-body > div { text-align: center; }
.product-image { width: 80px; height: 60px; border-radius: 4px; flex-shrink: 0; }
.col-info { display: flex; align-items: center; gap: 12px; text-align: left; }
.product-name { font-weight: 500; }
.col-actions { display: flex; flex-direction: column; gap: 4px; }
.status-tag { padding: 2px 10px; border-radius: 4px; font-size: 12px; color: #fff; text-align: center; display: inline-block; }
.status-completed { background-color: #F0F8FF; color: #409EFF; border: 1px solid #D9ECFF;}
.status-pending { background-color: #F56C6C; }
.status-cancelled { background-color: #E6A23C; }
.pagination-container { display: flex; justify-content: center; padding: 30px 24px 20px; }
</style>