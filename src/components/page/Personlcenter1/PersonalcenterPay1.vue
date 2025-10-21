<template>
  <div class="payment-confirmation-page">
    <!-- 1. 顶部深灰色细条 -->
    <div class="top-black-bar"></div>

    <!-- 2. 白色导航栏 -->
    <HomePageHead/>

    <!-- 3. 主内容区 -->
    <el-main class="main-content">
      <div class="content-container">
        <!-- 面包屑导航 -->
        <el-breadcrumb separator=">" class="page-breadcrumb">
          <el-breadcrumb-item>首页</el-breadcrumb-item>
          <el-breadcrumb-item>探索你感兴趣的课程</el-breadcrumb-item>
          <el-breadcrumb-item>课程详情</el-breadcrumb-item>
          <el-breadcrumb-item>立即购买</el-breadcrumb-item>
        </el-breadcrumb>
        
        <!-- 支付提示 -->
        <h2 class="pay-title">请完成您的支付</h2>
        <p class="pay-subtitle">支付成功后，课程将立即添加到您的账户，可随时随地学习</p>

        <!-- 4. 左右分栏布局 -->
        <el-row :gutter="20" class="pay-layout">
          
          <!-- 左侧：课程信息 -->
        <el-col :xs="24" :sm="24" :md="15" :lg="15" class="course-info-col">
            <el-card class="course-info-card" shadow="never">
              <!-- 卡片头部 -->
              <template #header>
                <div class="card-header">
                  <span>{{ courseData.category }}</span>
                </div>
              </template>

              <!-- 卡片内容 -->
              <div class="card-content">
                <!-- 课程图片 -->
                <el-image 
                  :src="courseData.image" 
                  fit="cover" 
                  class="course-banner-image" 
                />

                <!-- 课程标题 -->
                <h2 class="course-name">{{ courseData.title }}</h2>

                <!-- 老师信息 -->
                <div class="teacher-info">
                  <el-avatar :size="32" :src="courseData.teacherAvatar" />
                  <span class="teacher-name">{{ courseData.teacherName }}</span>
                </div>

                <!-- 课程描述 -->
                <p class="course-description">{{ courseData.description }}</p>
              </div>
            </el-card>
          </el-col>

          <!-- 右侧：订单信息与支付 -->
          <el-col :xs="24" :sm="24" :md="9" :lg="9" class="order-payment-col">
             <div class="payment-sidebar">
              
              <!-- 第一部分：订单信息摘要 -->
              <el-card shadow="never" class="order-summary-card">
                <h3 class="card-title">订单信息</h3>
                <div class="product-line">
                  <el-image :src="orderData.imageUrl" fit="cover" class="product-thumb" />
                  <div class="product-details">
                    <div class="product-name">{{ orderData.name }}</div>
                    <div class="product-validity">{{ orderData.validity }}</div>
                  </div>
                </div>
                <el-divider class="item-divider" />
                <div class="price-details">
                  <div class="price-item">
                    <span class="item-label">课程原价</span>
                    <span class="item-value">¥ {{ orderData.originalPrice.toFixed(2) }}</span>
                  </div>
                  <div class="price-item">
                    <span class="item-label">限时折扣</span>
                    <span class="item-value">¥ {{ orderData.discount.toFixed(2) }}</span>
                  </div>
                  <div class="price-item">
                    <span class="item-label">优惠券</span>
                    <span class="item-value">¥ {{ orderData.coupon.toFixed(2) }}</span>
                  </div>
                </div>
                <div class="final-amount">
                  <span class="final-label">实付款</span>
                  <span class="final-value">¥ {{ orderData.totalAmount.toFixed(2) }}</span>
                </div>
              </el-card>

              <!-- 第二部分：支付方式选择器 -->
              <div class="payment-selector">
                <h3 class="selector-title">支付方式</h3>
                <el-divider />
                <div class="payment-options">
                  <el-button 
                    :class="['pay-option-btn', { 'is-selected': selectedMethod === 'alipay' }]"
                    @click="selectMethod('alipay')"
                  >
                    <AlipayIcon />
                    <span>支付宝</span>
                  </el-button>
                  <el-button 
                    :class="['pay-option-btn', { 'is-selected': selectedMethod === 'balance' }]"
                    @click="selectMethod('balance')"
                  >
                    <el-icon :size="24"><Coin /></el-icon>
                    <span>余额</span>
                  </el-button>
                </div>
                <p v-if="selectedMethod === 'balance'" class="current-balance">
                  当前余额：{{ balance.toFixed(2) }}
                </p>
                <div v-if="selectedMethod === 'alipay'" class="qr-code-area">
                  <el-image 
                    src="https://via.placeholder.com/150" 
                    fit="contain" 
                    class="qr-code-image"
                  />
                  <p>打开手机支付宝扫一扫支付</p>
                </div>
              </div>
            </div>
          </el-col>
        </el-row>
      </div>
    </el-main>
  </div>
</template>

<script setup>
// [修复] 1. 引入 ref 和 defineComponent 用于创建响应式数据和本地组件
import { ref, defineComponent } from 'vue';
import { Search, Bell, Coin } from '@element-plus/icons-vue';
import HomePageHead from '@/components/homepage/Head.vue';

// [修复] 2. 创建一个本地的支付宝图标组件，因为 Element Plus 不自带
const AlipayIcon = defineComponent({
  template: `<svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor"><path d="M786 814H238c-57.2 0-104-46.8-104-104V314c0-57.2 46.8-104 104-104h548c57.2 0 104 46.8 104 104v396c0 57.2-46.8 104-104 104zM238 250c-35.2 0-64 28.8-64 64v396c0 35.2 28.8 64 64 64h548c35.2 0 64-28.8 64-64V314c0-35.2-28.8-64-64-64H238zm-42 284h900v80H196v-80zM358 434h120v40H358v-40zm200 0h120v40H558v-40z"></path></svg>`
});

const props = defineProps({
  courseData: {
    type: Object,
    required: true,
    // 提供一个默认对象，防止在未传递 prop 时报错
    default: () => ({
      category: '课程信息',
      image: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
      title: '豪华办公室',
      teacherName: 'xxxx机构',
      teacherAvatar: '',
      description: '（空间介绍）本课程聚焦职场沟通痛点，通过 “理论拆解 + 场景模拟” 模式，覆盖跨部门协作、向上汇报、客户谈判等核心场景。你将掌握精准表达、倾听共情、冲突化解等实用技巧，避开沟通误区。6 节干货课 + 3 次小组演练，助你快速提升沟通效率，建立良好职场协作关系，让表达成为职业竞争力。'
      })
  },
  orderData: {
    type: Object,
    required: true,
    default: () => ({
      imageUrl: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
      name: '豪华办公室',
      validity: '永久有效',
      originalPrice: 0,
      discount: 0,
      coupon: 0,
      totalAmount: 0,
    })
  },
  // 使用 v-model 语法糖来处理选中状态
  selectedMethod: {
    type: String,
    default: 'balance'
  },
  balance: {
    type: Number,
    default: 0
  }
});

// [重要修改] 使用 emits 来更新 v-model
const emit = defineEmits(['update:selectedMethod']);

const selectMethod = (method) => {
  emit('update:selectedMethod', method);
};
</script>

<style scoped>
/* --- 全局布局与头部样式 --- */
.payment-confirmation-page { 
  background-color: #f7f8fa; 
  min-height: 100vh; 
}
.content-container { 
  max-width: 1200px; 
  margin: 0 auto; 
  padding: 0 20px; 
}
.main-content { padding-top: 20px; }

.top-black-bar { 
  width: 100%; 
  height: 30px; 
  background-color:rgba(56, 56, 56, 1); 
}

/* --- 主内容区样式 --- */
.page-breadcrumb { 
  padding: 15px 0; 
}
.pay-title {
  font-size: 24px;
  color: var(--el-text-color-primary);
  margin: 10px 0 5px;
}
.pay-subtitle {
  color: var(--el-text-color-secondary);
  margin-bottom: 20px;
}
.pay-layout {
  margin-top: 20px;
}

/* --- 左侧课程信息 --- */
.course-card {
  height: 100%;
}
.card-title {
  font-size: 16px;
  font-weight: 500; /* [优化] 调整字重以匹配截图 */
  color: var(--el-text-color-primary);
  margin: 0 0 16px 0;
}
.course-detail-content {
  display: flex;
  flex-direction: column; 
}
.course-image {
  width: 100%;
  height: auto;
  min-height: 180px;
  max-height: 220px;
  border-radius: var(--el-border-radius-base);
  margin-bottom: 20px;
}
.course-text {
  padding-right: 20px;
}
.course-name {
  font-size: 22px;
  color: var(--el-text-color-primary);
  margin: 0 0 5px;
}
.course-teacher {
  color: var(--el-color-primary);
  font-weight: 500;
  margin: 0 0 10px;
}
.course-desc {
  color: var(--el-text-color-regular);
  font-size: 14px;
  line-height: 1.8;
}

/* --- 右侧边栏 --- */
.payment-sidebar {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

/* 订单信息卡片 */
.order-summary-card {
  border: 1px solid var(--el-border-color-light);
}
.product-line {
  display: flex;
  align-items: center;
  gap: 12px;
}
.product-thumb {
  width: 60px;
  height: 60px;
  border-radius: var(--el-border-radius-small);
  flex-shrink: 0;
}
.product-details {
  display: flex;
  flex-direction: column;
}
.product-name {
  font-size: 15px;
  color: var(--el-text-color-primary);
  font-weight: 500;
}
.product-validity {
  font-size: 13px;
  color: var(--el-text-color-secondary);
  margin-top: 4px;
}
.item-divider {
  margin: 16px 0;
}
.price-details {
  display: flex;
  flex-direction: column;
  gap: 12px;
  font-size: 14px;
  margin-bottom: 16px;
}
.price-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.item-label {
  color: var(--el-text-color-secondary);
}
.item-value {
  color: var(--el-text-color-primary);
}
.final-amount {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-top: 1px solid var(--el-border-color-lighter);
  padding-top: 16px;
}
.final-label {
  font-size: 16px;
  font-weight: 500;
  color: var(--el-text-color-primary);
}
.final-value {
  font-size: 22px;
  font-weight: bold;
  color: var(--el-color-danger);
}

/* 支付方式选择器 */
.payment-selector {
  background-color: #fff;
  padding: 20px;
  border: 1px solid var(--el-border-color-light);
  border-radius: var(--el-border-radius-base);
}
.selector-title {
  font-size: 16px;
  font-weight: 500;
  color: var(--el-text-color-primary);
  margin: 0;
}
.payment-selector .el-divider {
  margin: 16px 0;
}
.payment-options {
  display: flex;
  gap: 20px;
}
.pay-option-btn {
  width: 120px;
  height: 70px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px;
  border: 1px solid var(--el-border-color);
  color: var(--el-text-color-regular);
  background-color: #fff;
  transition: all 0.2s ease;
}
.pay-option-btn span {
  margin-top: 5px;
  font-size: 14px;
}
.pay-option-btn:hover {
  border-color: var(--el-color-primary-light-3);
  color: var(--el-color-primary);
}
.pay-option-btn.is-selected {
  border-color: var(--el-color-primary);
  color: var(--el-color-primary);
  background-color: var(--el-color-primary-light-9);
  z-index: 1;
  box-shadow: 0 0 12px rgba(0,0,0,0.06);
}
.current-balance {
  color: var(--el-text-color-secondary);
  font-size: 14px;
  margin-top: 16px;
  padding-left: 2px;
}
.qr-code-area {
  text-align: center;
  padding-top: 20px;
}
.qr-code-image {
  width: 150px;
  height: 150px;
  margin-bottom: 10px;
}

/* --- 多端适配 --- */
@media (min-width: 768px) {
  .course-detail-content {
    flex-direction: row;
  }
  .course-image {
    width: 200px;
    height: 120px;
    max-height: none;
    flex-shrink: 0;
    margin-bottom: 0;
    margin-right: 20px;
  }
}
</style>