<!-- 文件路径: src/components/homepage/personalcenter1/ProductList.vue -->
<template>
  <div class="product-list-container">
    <h3 class="list-title">可售商品列表 (点击即可同步订单)</h3>
    <div v-for="product in products" :key="product.id" class="product-item">
      <el-image :src="product.image" fit="cover" class="product-image" />
      <div class="product-info">
        <div class="product-name">{{ product.name }}</div>
        <div class="product-price">¥{{ product.price.toFixed(2) }}</div>
      </div>
      <!-- [核心] 售出按钮，点击时触发 emit -->
      <el-button type="primary" plain @click="sellProduct(product)">售出商品</el-button>
    </div>
  </div>
</template>

<script setup>
// 1. 定义 props，用来接收父组件传来的商品列表
defineProps({
  products: {
    type: Array,
    required: true,
  },
});

// 2. 定义 emits，用来向父组件发送通知
const emit = defineEmits(['sell-product']);

// 3. 定义点击事件的处理函数
const sellProduct = (product) => {
  // 触发 'sell-product' 事件，并把被点击的 product 对象作为参数传递出去
  emit('sell-product', product);
};
</script>

<style scoped>
.product-list-container {
  background-color: #fff;
  padding: 20px;
  border-radius: 4px;
  margin-bottom: 24px;
}
.list-title {
  margin-top: 0;
  margin-bottom: 20px;
  font-size: 18px;
  color: #303133;
}
.product-item {
  display: flex;
  align-items: center;
  padding: 15px 0;
  border-bottom: 1px solid #e4e7ed;
}
.product-item:last-child {
  border-bottom: none;
}
.product-image {
  width: 50px;
  height: 50px;
  border-radius: 4px;
  margin-right: 15px;
}
.product-info {
  flex-grow: 1;
}
.product-name {
  color: #303133;
}
.product-price {
  color: #f56c6c;
  font-weight: bold;
  margin-top: 4px;
}
</style>