<template>
  <!-- 模板(HTML)部分没有任何修改，保持原样即可 -->
  <el-dialog
    v-model="dialogVisible"
    title="订单详情"
    :width="dialogWidth"
    class="order-detail-dialog"
    center
    align-center
  >
    <!-- 订单状态 -->
    <div class="order-status">
      <el-icon :size="24" :color="statusInfo.color">
        <component :is="statusInfo.icon" />
      </el-icon>
      <span class="status-text">{{ orderData.status }}</span>
    </div>

    <!-- 商品信息 -->
    <div class="product-card">
      <el-image :src="orderData.product.imageUrl" fit="cover" class="product-image" />
      <div class="product-info">
        <el-text tag="div" class="product-name">{{ orderData.product.name }}</el-text>
        <el-text type="info" size="small" tag="div">{{ orderData.product.spec }}</el-text>
        <el-text tag="div" class="product-price">¥ {{ orderData.product.price.toFixed(2) }}</el-text>
      </div>
      <el-text type="info" class="product-quantity">x{{ orderData.product.quantity }}</el-text>
    </div>

    <!-- 订单详细信息列表 -->
    <div class="detail-list">
      <div v-for="item in detailItems" :key="item.label" class="detail-item">
        <el-text type="info" class="item-label">{{ item.label }}</el-text>
        <div v-if="item.type === 'shipping' && orderData.shippingInfo" class="item-value address-value">
          <span>{{ orderData.shippingInfo.name }} {{ orderData.shippingInfo.phone }}</span>
          <span>{{ orderData.shippingInfo.address }}</span>
        </div>
        <el-text v-else-if="item.type !== 'shipping'" class="item-value">{{ item.value }}</el-text>
      </div>
    </div>
  </el-dialog>
</template>

<script setup>

import { ref, computed, onMounted, onBeforeUnmount } from 'vue';
// 引入所有需要的图标
import { SuccessFilled, CircleCloseFilled, WarningFilled } from '@element-plus/icons-vue';

const props = defineProps({
  visible: {
    type: Boolean,
    default: false
  },
  orderData: {
    type: Object,
    required: true
  }
});

const emit = defineEmits(['update:visible']);

const dialogVisible = computed({
  get: () => props.visible,
  set: (value) => emit('update:visible', value)
});

// [重要修改] 补全所有 case，确保每种状态都有对应的图标和颜色
const statusInfo = computed(() => {
  switch (props.orderData.statusCode) {
    case 'completed':
      return { icon: SuccessFilled, color: 'var(--el-color-success)' };
    case 'cancelled':
      return { icon: CircleCloseFilled, color: 'var(--el-color-info)' };
    case 'pending':
      return { icon: WarningFilled, color: 'var(--el-color-warning)' };
    default:
      // 提供一个默认值，以防状态码未知
      return { icon: SuccessFilled, color: 'var(--el-color-primary)' };
  }
});

// 其他代码 (detailItems, isMobile 等) 保持不变...
const detailItems = computed(() => {
  const items = [];
  if (props.orderData.shippingInfo) {
    items.push({ label: '收货信息:', value: null, type: 'shipping' });
  }
  items.push(
    { label: '创建时间:', value: props.orderData.createTime },
    { label: '支付方式:', value: props.orderData.paymentMethod },
    { label: '支付金额:', value: `¥ ${props.orderData.paymentAmount.toFixed(2)}` },
    { label: '支付时间:', value: props.orderData.paymentTime },
    { label: '订单编号:', value: props.orderData.orderNumber }
  );
  return items;
});

const isMobile = ref(false);
const dialogWidth = computed(() => (isMobile.value ? '92%' : '480px'));
const checkScreenWidth = () => { isMobile.value = window.innerWidth < 768; };
onMounted(() => {
  checkScreenWidth();
  window.addEventListener('resize', checkScreenWidth);
});
onBeforeUnmount(() => {
  window.removeEventListener('resize', checkScreenWidth);
});
</script>

<style scoped>
/* 样式无需修改 */
/* Dialog 整体样式 */
.order-detail-dialog :deep(.el-dialog__header) {
  text-align: center;
  margin-right: 0; /* 覆盖Element Plus的样式以实现完美居中 */
  padding-bottom: 16px;
  border-bottom: 1px solid var(--el-border-color-light);
}

.order-detail-dialog :deep(.el-dialog__body) {
  padding: 20px 24px 30px;
}

/* 订单状态 */
.order-status {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  margin-bottom: 24px;
}
.status-text {
  font-size: 18px;
  font-weight: 500;
  color: var(--el-text-color-primary);
}

/* 商品信息卡片 */
.product-card {
  display: flex;
  align-items: center;
  gap: 16px;
  background-color: var(--el-fill-color-lighter);
  padding: 16px;
  border-radius: var(--el-border-radius-base);
  margin-bottom: 24px;
}
.product-image {
  width: 80px;
  height: 80px;
  border-radius: var(--el-border-radius-small);
  flex-shrink: 0; /* 防止图片被压缩 */
}
.product-info {
  flex-grow: 1; /* 占据剩余空间 */
  display: flex;
  flex-direction: column;
  gap: 4px;
}
.product-name {
  font-weight: 500;
  color: var(--el-text-color-primary);
}
.product-price {
  margin-top: 4px;
  font-weight: bold;
  color: var(--el-text-color-primary);
}
.product-quantity {
  align-self: flex-start; /* 垂直方向上与顶部对齐 */
}

/* 订单详情列表 */
.detail-list {
  display: flex;
  flex-direction: column;
  gap: 18px; /* 列表项之间的间距 */
}
.detail-item {
  display: flex;
  align-items: flex-start; /* 标签和内容顶部对齐，对多行地址友好 */
  font-size: 14px;
}
.item-label {
  flex-shrink: 0;
  width: 85px; /* 固定标签宽度，使其对齐 */
  color: var(--el-text-color-secondary);
}
.item-value {
  color: var(--el-text-color-primary);
}
/* 对收货地址的特殊样式 */
.address-value {
  display: flex;
  flex-direction: column;
  color: var(--el-text-color-primary);
  line-height: 1.5; /* 增加行高，使其更易读 */
}
</style>