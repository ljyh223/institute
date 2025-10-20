<template>
  <div class="search-bar-wrapper">
    <div class="links-container">
      <el-link :underline="false" class="link-item" @click="$emit('community-click')">
        <el-icon :size="22" color="#7952b3">
          <ChatDotSquare />
        </el-icon>
        <span class="link-text hidden-md-and-down">我的社区</span>
      </el-link>
      <el-link :underline="false" class="link-item" @click="$emit('live-click')">
        <el-icon :size="22" color="#0d6efd">
          <Monitor />
        </el-icon>
        <span class="link-text hidden-md-and-down">直播中心</span>
      </el-link>
      <el-link :underline="false" class="link-item" @click="$emit('group-click')">
        <el-icon :size="22" color="#d63384">
          <Goods />
        </el-icon>
        <span class="link-text hidden-md-and-down">我的小组</span>
      </el-link>
      <el-link :underline="false" class="link-item" @click="$emit('shop-click')">
        <el-icon :size="22" color="#20c997">
          <ShoppingCartFull />
        </el-icon>
        <span class="link-text hidden-md-and-down">我的商城</span>
      </el-link>
    </div>

    <el-button type="primary" :icon="Search" circle size="large" @click="$emit('search-click')" />
  </div>
</template>

<script setup>
import { Search, ChatDotSquare, Monitor, Goods, ShoppingCartFull } from '@element-plus/icons-vue';

// 定义所有需要暴露给父组件的事件
defineEmits([
  'community-click',  // 社区链接点击事件
  'live-click',      // 直播中心链接点击事件
  'group-click',     // 小组链接点击事件
  'shop-click',      // 商城链接点击事件
  'search-click'     // 搜索按钮点击事件
]);
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
  cursor: pointer;
  user-select: none;
  /* 防止文本选择影响点击 */
}

.link-item:hover {
  opacity: 0.8;
  /* 添加悬停效果增强交互感 */
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