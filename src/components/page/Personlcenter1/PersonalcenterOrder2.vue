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

         <!-- 可售商品列表 -->
   

        <!-- 订单中心组件 -->
        <OrderCenter
          :orders="orders"
          :pagination="pagination"
          :availableProducts="availableProducts"
          @view-details="handleViewDetails"
          @click-product="handleProductSold"
        />
      </div>
    </el-main>

    <!-- 订单详情弹窗组件 -->
    <Orderdetail
      v-if="selectedOrder"
      v-model:visible="isDetailDialogVisible"
      :order-data="selectedOrder"
    />
  </div>
</template>

<script setup>
import { ref, reactive, onMounted, onBeforeUnmount } from 'vue';
import 'element-plus/theme-chalk/display.css';
import HomePageHead from '@/components/homepage/Head.vue';
import OrderCenter from '@/components/homepage/personalcenter1/OrderCenter.vue';
import Orderdetail from '@/components/homepage/personalcenter1/Orderdetail.vue';


// 1. 弹窗控制状态
const isDetailDialogVisible = ref(false); 
const selectedOrder = ref(null);

// 2. 订单列表的原始数据
const orders = ref([
  { id: 1, orderNumber: '12345678912345645891', date: '2025-08-15 12:00', name: '2025前端开发-JAVA', image: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg', price: 100.00, quantity: 1, amount: 100.00, status: 'completed' },
  { id: 2, orderNumber: '12345678912345645892', date: '2025-07-20 18:30', name: '2025后端开发-Python', image: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg', price: 120.00, quantity: 1, amount: 120.00, status: 'pending' },
  { id: 3, orderNumber: '12345678912345645893', date: '2025-06-01 09:00', name: '2025全栈开发-Vue', image: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg', price: 150.00, quantity: 1, amount: 150.00, status: 'cancelled' },
  { id: 4, orderNumber: '12345678912345645894', date: '2025-05-10 14:00', name: '学会手环', image: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg', price: 199.00, quantity: 1, amount: 199.00, status: 'completed', 
    shipping: { name: '王同学', phone: '13800138000', address: '北京市 海淀区 中关村软件园 1号楼' } 
  }
]);

const pagination = reactive({ currentPage: 1, pageSize: 20, total: orders.value.length });

// 3. 可售商品的数据
const availableProducts = ref([
  { id: 101, name: 'Vue 3 深度解析课程', price: 299.00, image: 'https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg' },
  { id: 102, name: 'React 18 高级实战教程', price: 349.00, image: 'https://fuss10.elemecdn.com/1/34/19aa98b1fcb2781c4fba33d850549jpeg.jpeg' },
  { id: 103, name: '智能学习手环 Pro', price: 199.00, image: 'https://fuss10.elemecdn.com/0/6f/e35ff375812e6b0020b6b4e8f9583jpeg.jpeg' }
]);


// --- [核心修改] ---
// "售出商品" 的处理函数
const handleProductSold = (product) => {
  // 1. 创建一个新的订单对象，结构与 `orders` 数组中的对象一致
  const newOrder = {
    id: Date.now(),
    orderNumber: `ORD-${Date.now()}`,
    date: new Date().toLocaleString('sv-SE'),
    name: product.name,
    image: product.image,
    price: product.price,
    quantity: 1,
    amount: product.price,
    status: 'pending', // 新订单默认为 '待支付' 状态
    shipping: null // 默认新订单没有物流信息，可以根据需要添加
  };

  // 2. 将新订单同步到总订单列表中 (它会静默更新背景里的列表)
  orders.value.unshift(newOrder);
  pagination.total = orders.value.length;

  // 3. [关键] 直接调用 "查看详情" 的函数，把刚刚创建的新订单传进去，立即弹出详情窗口
  handleViewDetails(newOrder);
};


// "查看详情" 的处理函数 (无需修改，会被复用)
const handleViewDetails = (order) => {
  const detailData = {
    status: getStatusText(order.status),
    statusCode: order.status,
    product: {
      name: order.name,
      spec: order.shipping ? '实体商品' : '在线课程',
      price: order.price,
      quantity: order.quantity,
      imageUrl: order.image,
    },
    shippingInfo: order.shipping ? order.shipping : null, 
    createTime: order.date,
    paymentMethod: '微信支付',
    paymentAmount: order.amount,
    paymentTime: order.status !== 'pending' ? order.date : 'N/A',
    orderNumber: order.orderNumber,
  };
  
  selectedOrder.value = detailData;
  isDetailDialogVisible.value = true;
};


// 辅助函数 (无需修改)
const getStatusText = (status) => {
  const statusMap = { completed: '已完成', pending: '待支付', cancelled: '已取消' };
  return statusMap[status] || '未知';
};


// 响应式布局逻辑 (无需修改)
const isMobile = ref(false);
const checkScreenSize = () => { isMobile.value = window.innerWidth < 768; };
onMounted(() => {
  checkScreenSize();
  window.addEventListener('resize', checkScreenSize);
});
onBeforeUnmount(() => {
  window.removeEventListener('resize', checkScreenSize);
});
</script>

<style scoped>
/* 样式无需修改 */
.my-orders-page { 
  background-color: #f7f8fa; 
  min-height: 100vh; 
}
.main-content { 
  padding: 0; 
}
.top-black-bar { 
  width: 100%; 
  height: 30px; 
  background-color:rgba(56, 56, 56, 1); 
  position: sticky; 
  top: 0; 
  z-index: 1001; 
}
.content-container { 
  max-width: 1200px; 
  margin: 0 auto; 
  padding: 0 20px 40px; 
}
.page-breadcrumb { 
  padding: 24px 0; 
}
</style>