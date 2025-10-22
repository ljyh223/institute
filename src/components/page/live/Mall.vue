<template>
  <div class="points-mall-page">
    <!-- 1. Top Dark Bar -->
    <div class="top-bar">
      <div class="top-bar-content content-container">
        <!-- User info can go here -->
      </div>
    </div>

    <!-- 2. Main Header -->
    <header class="page-header">
      <div class="header-content content-container">
        <div class="header-left">
          <span class="page-title">Points Mall</span>
          <el-input 
            v-model="searchQuery" 
            placeholder="搜索商品/品牌" 
            class="search-input"
          >
            <template #append>
              <el-button :icon="Search" />
            </template>
          </el-input>
        </div>
        <div class="header-right">
          <el-avatar :size="32" src="https://i.pravatar.cc/40?u=admin" />
          <el-icon class="action-icon"><ShoppingCart /></el-icon>
          <el-icon class="action-icon"><User /></el-icon>
        </div>
      </div>
    </header>

    <!-- 3. Sub-navigation -->
    <nav class="sub-nav-wrapper">
      <div class="sub-nav content-container">
        <el-dropdown>
          <el-button class="category-button">
            <el-icon><Menu /></el-icon> 全部商品
          </el-button>
          <template #dropdown>
            <el-dropdown-menu>
              <el-dropdown-item>数码产品</el-dropdown-item>
              <el-dropdown-item>家居生活</el-dropdown-item>
              <el-dropdown-item>服饰箱包</el-dropdown-item>
              <el-dropdown-item divided>优惠专区</el-dropdown-item>
            </el-dropdown-menu>
          </template>
        </el-dropdown>
        <div class="nav-links">
          <el-button v-for="tab in navTabs" :key="tab" type="text" :class="{ 'is-active': activeTab === tab }">
            {{ tab }}
          </el-button>
        </div>
      </div>
    </nav>
    
    <!-- 4. Main Content Area -->
    <el-main class="main-content content-container">
      <!-- Banner Image -->
      <div class="banner-image-container">
        <el-image 
          src="https://fuss10.elemecdn.com/d/e6/c4d93a3805b3ce3f323f7974e6f78jpeg.jpeg" 
          fit="cover" 
          class="banner-image"
        />
      </div>

      <!-- Products Grid -->
      <el-row :gutter="20" class="products-grid">
        <el-col v-for="product in products" :key="product.id" :xs="12" :sm="8" :md="6">
          <el-card shadow="hover" :body-style="{ padding: '0px' }" class="product-card">
            <el-image :src="product.image" fit="cover" class="product-image" />
            <div class="product-info">
              <h4 class="product-title">{{ product.title }}</h4>
              <p class="product-brand">{{ product.brand }}</p>
              <div class="price-info">
                <span class="price">¥{{ product.price }}</span>
                <span class="points-cost">
                  <el-icon><Coin /></el-icon> {{ product.points }}积分兑换
                </span>
              </div>
            </div>
          </el-card>
        </el-col>
      </el-row>

      <!-- Pagination -->
      <div class="pagination-container">
        <el-pagination
          background
          layout="prev, pager, next, jumper"
          :total="100"
          :page-size="20"
        />
      </div>
    </el-main>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { Search, ShoppingCart, User, Menu, Coin } from '@element-plus/icons-vue';

// Mock Data for UI
const searchQuery = ref('');
const activeTab = ref('全部商品');
const navTabs = ref(['全部商品', '新款分类', '新款分类', '新款分类', '新款分类', '新款分类', '新款分类']);

const products = ref(
  Array.from({ length: 20 }).map((_, i) => ({
    id: i + 1,
    image: `https://picsum.photos/300/300?random=${i + 1}`,
    title: '微软 Power BI 数据分析器',
    brand: 'Moisturizing Essence',
    price: '120',
    points: 1800 + i * 10,
  }))
);
</script>

<style scoped>
/* --- Global & Layout --- */
.points-mall-page {
  background-color: #fff;
}
.content-container {
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 24px;
}

/* --- Top Bar & Header --- */
.top-bar {
  background-color: #1f2329;
  height: 40px;
}
.page-header {
  background-color: #fff;
  border-bottom: 1px solid var(--el-border-color-light);
}
.header-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 64px;
}
.header-left, .header-right {
  display: flex;
  align-items: center;
  gap: 24px;
}
.page-title {
  font-size: 22px;
  font-weight: 600;
  color: var(--el-color-primary);
}
.search-input {
  width: 350px;
}
.action-icon {
  font-size: 20px;
  color: var(--el-text-color-regular);
  cursor: pointer;
}

/* --- Sub Navigation --- */
.sub-nav-wrapper {
  background-color: #fff;
  border-bottom: 1px solid var(--el-border-color-light);
}
.sub-nav {
  display: flex;
  align-items: center;
  gap: 24px;
  padding: 8px 24px;
}
.category-button {
  font-weight: 500;
}
.nav-links {
  display: flex;
  gap: 16px;
  flex-wrap: nowrap; /* Prevent wrapping on small screens */
  overflow-x: auto; /* Allow scrolling on small screens */
}
.nav-links .el-button--text {
  color: var(--el-text-color-primary);
  padding: 8px;
  font-size: 14px;
}
.nav-links .el-button--text.is-active,
.nav-links .el-button--text:hover {
  color: var(--el-color-primary);
}

/* --- Main Content --- */
.main-content {
  background-color: #f5f7fa; /* Light grey background for the content area */
  padding: 24px;
}
.banner-image-container {
  margin-bottom: 24px;
}
.banner-image {
  width: 100%;
  height: 350px; /* Adjust height as needed */
  border-radius: var(--el-border-radius-base);
}

/* --- Products Grid --- */
.product-card {
  margin-bottom: 20px;
  border-radius: var(--el-border-radius-base);
  cursor: pointer;
  transition: transform 0.2s ease-in-out;
}
.product-card:hover {
  transform: translateY(-5px);
}
.product-image {
  width: 100%;
  aspect-ratio: 1 / 1; /* Ensure all images are square */
}
.product-info {
  padding: 16px;
}
.product-title {
  font-size: 15px;
  font-weight: 500;
  color: var(--el-text-color-primary);
  margin: 0 0 4px 0;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.product-brand {
  font-size: 13px;
  color: var(--el-text-color-secondary);
  margin: 0 0 12px 0;
}
.price-info {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 14px;
}
.price {
  color: #ff9900; /* Distinct orange/yellow color for price */
  font-weight: bold;
}
.points-cost {
  color: var(--el-color-primary);
  display: flex;
  align-items: center;
  gap: 4px;
}

/* --- Pagination --- */
.pagination-container {
  display: flex;
  justify-content: center;
  margin-top: 24px;
}

/* --- Responsive Adjustments --- */
@media (max-width: 992px) {
  .search-input {
    width: 250px;
  }
  .nav-links {
    /* Hide some links on smaller screens if needed */
  }
}
@media (max-width: 768px) {
  .content-container {
    padding: 0 16px;
  }
  .header-content {
    flex-wrap: wrap;
    height: auto;
    padding: 10px 0;
    gap: 10px;
  }
  .search-input {
    order: 3; /* Move to new line */
    width: 100%;
  }
  .page-title {
    width: 100%; /* Ensure logo is on its own line */
    text-align: center;
  }
  .banner-image {
    height: 200px;
  }
}
</style>