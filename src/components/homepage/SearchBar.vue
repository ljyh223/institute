<template>

  <div class="search-bar-wrapper">
    <div class="links-container">
      <el-link :underline="false" class="link-item">
        <el-icon :size="22" color="#7952b3">
          <ChatDotSquare />
        </el-icon>
        <span class="link-text hidden-md-and-down">我的社区</span>
      </el-link>
      <el-link :underline="false" class="link-item">
        <el-icon :size="22" color="#0d6efd">
          <Monitor />
        </el-icon>
        <span class="link-text hidden-md-and-down">直播中心</span>
      </el-link>
      <el-link :underline="false" class="link-item">
        <el-icon :size="22" color="#d63384">
          <Goods />
        </el-icon>
        <span class="link-text hidden-md-and-down">我的小组</span>
      </el-link>
      <el-link :underline="false" class="link-item">
        <el-icon :size="22" color="#20c997">
          <ShoppingCartFull />
        </el-icon>
        <span class="link-text hidden-md-and-down">我的商城</span>
      </el-link>
    </div>

    <el-button type="primary" :icon="Search" circle size="large" />
  </div>
</template>

<script setup>
import { Search, ChatDotSquare, Monitor, Goods, ShoppingCartFull, } from '@element-plus/icons-vue';
</script>

<style scoped>
.search-bar-wrapper {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 90%;
  max-width: 845px;
  height: 60px;
  margin: -30px auto 20px;
  padding: 0 10px 0 25px;
  background-color: #ffffff;
  border-radius: 30px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  box-sizing: border-box;
  position: relative;
  z-index: 20;
}

.links-container {
  display: flex;
  align-items: center;
  flex: 1;
  justify-content: space-around;
  margin-right: 20px;
}

.link-item {
  font-size: 16px;
  font-weight: 500;
  padding: 5px 10px;
}

.link-text {
  margin-left: 8px;
}

/* 响应式适配 - 移动端 */
@media (max-width: 767px) {
  .search-bar-wrapper {
    width: 95%;
    margin-top: -30px;
    padding: 0 8px;
    height: 54px;
  }
  
  .links-container {
    margin-right: 10px;
  }
  
  .link-item .el-icon {
    font-size: 18px;
  }
}

/* 响应式适配 - 平板 */
@media (min-width: 768px) and (max-width: 1024px) {
  .search-bar-wrapper {
    width: 92%;
  }
  
  .links-container {
    margin-right: 15px;
  }
}
</style>