<template>
  <div class="common-layout">
    <el-container class="main-container">
      <!-- Header -->
      <el-header class="header">
        <el-row align="middle" class="header-content">
          <el-col :xs="10" :sm="6" :md="4" class="logo-section">
            <span class="logo-text">学会</span>
            <el-button type="primary" link class="ai-learning-btn">
              AI探索
              <el-icon><ArrowRight /></el-icon>
            </el-button>
          </el-col>
          <el-col :xs="0" :sm="12" :md="14" class="search-section">
            <el-input
              placeholder="What do you want learn?"
              class="header-search-input"
            >
              <template #suffix>
                <el-icon><Search /></el-icon>
              </template>
            </el-input>
          </el-col>
          <el-col :xs="14" :sm="6" :md="6" class="user-action-section">
            <el-icon :size="20" class="icon-notification"><Bell /></el-icon>
            <el-avatar :size="30" src="https://cube.elemecdn.com/3/7c/3ed689582b989fd05f42a77428753.jpeg"></el-avatar>
            <el-popover placement="bottom-end" :width="150" trigger="hover">
              <template #reference>
                <el-button link class="personal-center-btn">个人中心</el-button>
              </template>
              <div class="popover-menu">
                <p>我的订单</p>
                <p>联系市场</p>
                <p>我的收藏</p>
                <p>退出</p>
              </div>
            </el-popover>
          </el-col>
        </el-row>
      </el-header>

      <!-- Top Banner -->
      <el-main class="main-content">
        <div class="top-banner-wrapper">
          <el-row :gutter="20" class="top-banner-row" justify="center" align="middle">
            <el-col :xs="24" :sm="14" :md="12" class="banner-left">
              <h1 class="banner-main-title">学会</h1>
              <h2 class="banner-sub-title">一学就会</h2>
              <p class="banner-description-en">Learn it--you'll pick it up in no time</p>
              <p class="banner-description-cn">构建AI技术驱动的终身学习生态</p>
            </el-col>
            <el-col :xs="24" :sm="10" :md="12" class="banner-right-image-col">
              <div class="banner-image-container">
                <el-image
                  class="banner-main-image"
                  src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg"
                  fit="cover"
                ></el-image>
                <!-- 模拟原图中的浮动元素 -->
                <div class="floating-bubble bubble-1">达人的教学</div>
                <div class="floating-bubble bubble-2">快乐学习</div>
                <div class="floating-bubble bubble-3">每周进度</div>
              </div>
            </el-col>
          </el-row>
        </div>

        <!-- Middle Navigation Bar -->
        <el-card class="middle-nav-card">
          <el-row justify="center" align="middle" class="middle-nav-row">
            <el-col :xs="24" :sm="6" :md="6" class="nav-item">
              <el-icon><ChatDotSquare /></el-icon>
              <span>我的社区</span>
            </el-col>
            <el-col :xs="24" :sm="6" :md="6" class="nav-item">
              <el-icon><Monitor /></el-icon>
              <span>直播中心</span>
            </el-col>
            <el-col :xs="24" :sm="6" :md="6" class="nav-item">
              <el-icon><Goods /></el-icon>
              <span>我的小组</span>
            </el-col>
            <el-col :xs="24" :sm="6" :md="6" class="nav-item">
              <el-icon><ShoppingCartFull /></el-icon>
              <span>我的商城</span>
            </el-col>
          </el-row>
          <div class="middle-nav-search">
            <el-input placeholder="搜索你想学的..." class="middle-search-input">
              <template #append>
                <el-button type="primary" :icon="Search"></el-button>
              </template>
            </el-input>
          </div>
        </el-card>

        <!-- Efficiency Section -->
        <div class="efficiency-section">
          <h3 class="efficiency-title">让你的学习更高效</h3>
          <p class="efficiency-description">
            构建AI技术驱动的终身学习生态，让每个人都能在成长的任何阶段，都能找到属于自己的进阶路径
          </p>
        </div>

        <!-- Explore Courses Section -->
        <div class="explore-courses-section">
          <h3 class="explore-title">探索你感兴趣的课程</h3>
          <div class="tag-list">
            <el-button plain size="small">标签</el-button>
            <el-button plain size="small">艺术人文</el-button>
            <el-button plain size="small">金融经济</el-button>
            <el-button plain size="small">健康时尚</el-button>
            <el-button plain size="small">职业教育</el-button>
            <el-button plain size="small">自然科学</el-button>
            <el-button plain size="small">基础教育</el-button>
            <el-button plain size="small">高等教育</el-button>
            <el-button plain size="small">个人发展</el-button>
            <el-button plain size="small">兴趣爱好</el-button>
          </div>
          <el-empty description="数据为空" class="empty-data-state">
            <template #image>
              <!-- 模拟原图中的盒子图标 -->
              <div class="empty-box-icon">
                <el-icon :size="60" color="#D3DCE6"><Box /></el-icon>
              </div>
            </template>
          </el-empty>
        </div>
      </el-main>
    </el-container>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import {
  ArrowRight,
  Search,
  Bell,
  ChatDotSquare,
  Monitor,
  Goods,
  ShoppingCartFull,
  Box,
} from '@element-plus/icons-vue';

// 如果有需要响应式的数据，可以在这里定义，但目前只是UI
</script>

<style scoped>
/* 全局布局 */
.common-layout {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: var(--el-bg-color-page); /* 使用Element Plus的页面背景色 */
}

.main-container {
  flex: 1;
}

/* Header */
.header {
  background-color: #ffffff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.08);
  padding: 0 20px;
  height: 60px; /* 固定高度 */
  display: flex;
  align-items: center;
}

.header-content {
  max-width: 1400px; /* 更宽的内容区域 */
  margin: 0 auto;
  width: 100%;
}

.logo-section {
  display: flex;
  align-items: center;
}

.logo-text {
  font-size: 20px;
  font-weight: bold;
  color: #333;
  margin-right: 15px;
}

.ai-learning-btn {
  background-color: var(--el-color-primary-light-9);
  color: var(--el-color-primary);
  border-radius: 20px;
  padding: 5px 12px;
  font-size: 13px;
  display: flex;
  align-items: center;
  border: none;
}
.ai-learning-btn .el-icon {
  margin-left: 5px;
}

.search-section {
  display: flex;
  justify-content: center;
}

.header-search-input {
  max-width: 400px;
  --el-input-border-radius: 20px;
}
.header-search-input .el-input__wrapper {
  background-color: var(--el-color-info-light-9);
  box-shadow: none;
}

.user-action-section {
  display: flex;
  align-items: center;
  justify-content: flex-end;
}

.icon-notification {
  margin-right: 20px;
  color: var(--el-text-color-regular);
  cursor: pointer;
}

.user-action-section .el-avatar {
  margin-right: 10px;
}

.personal-center-btn {
  color: var(--el-text-color-primary);
  font-size: 14px;
}

.popover-menu p {
  line-height: 30px;
  cursor: pointer;
  padding: 0 10px;
  margin: 0;
}
.popover-menu p:hover {
  background-color: var(--el-color-primary-light-9);
  color: var(--el-color-primary);
}

/* Main Content Wrapper */
.main-content {
  padding: 0; /* 主内容区域内部控制 padding */
}

/* Top Banner Section */
.top-banner-wrapper {
  background-color: var(--el-color-primary);
  color: #ffffff;
  padding: 50px 20px;
  text-align: center;
  position: relative;
  overflow: hidden; /* 隐藏溢出内容 */
}

.top-banner-row {
  max-width: 1400px;
  margin: 0 auto;
  position: relative;
  z-index: 1; /* 确保内容在背景之上 */
}

.banner-left {
  text-align: left;
}
.banner-left h1 {
  font-size: 48px;
  margin-bottom: 10px;
  line-height: 1;
  color: #fff;
}
.banner-left h2 {
  font-size: 36px;
  margin-bottom: 15px;
  line-height: 1;
  color: #fff;
}
.banner-description-en {
  font-size: 18px;
  opacity: 0.8;
  margin-bottom: 10px;
}
.banner-description-cn {
  font-size: 16px;
  opacity: 0.9;
  font-weight: bold;
}

.banner-right-image-col {
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
}

.banner-image-container {
  width: 300px; /* 控制图片容器大小 */
  height: 300px;
  border-radius: 50%;
  overflow: hidden;
  position: relative;
  border: 5px solid rgba(255, 255, 255, 0.5); /* 模拟原图边框 */
  background-color: #fff; /* 确保背景是白色 */
}

.banner-main-image {
  width: 100%;
  height: 100%;
  object-position: center top; /* 调整图片在圆形内的位置 */
}

.floating-bubble {
  position: absolute;
  background-color: rgba(255, 255, 255, 0.9);
  color: var(--el-text-color-primary);
  padding: 8px 15px;
  border-radius: 20px;
  font-size: 13px;
  white-space: nowrap;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  animation: float 3s ease-in-out infinite;
}

.bubble-1 {
  top: 10%;
  left: -20px; /* 相对于容器左侧 */
  transform: rotate(-5deg);
  animation-delay: 0s;
}
.bubble-2 {
  top: 30%;
  right: -30px; /* 相对于容器右侧 */
  transform: rotate(5deg);
  animation-delay: 1s;
}
.bubble-3 {
  bottom: 15%;
  left: 20%;
  transform: rotate(2deg);
  animation-delay: 2s;
}

@keyframes float {
  0% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
  100% { transform: translateY(0); }
}


/* Middle Navigation Card */
.middle-nav-card {
  max-width: 1200px;
  margin: -60px auto 20px; /* 向上偏移，覆盖一部分banner */
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  border-radius: var(--el-border-radius-base);
  padding: 20px 30px;
  position: relative;
  z-index: 2; /* 确保在banner之上 */
}

.middle-nav-row {
  border-bottom: 1px solid var(--el-border-color-light);
  padding-bottom: 20px;
  margin-bottom: 20px;
}

.nav-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 10px 0;
  cursor: pointer;
  color: var(--el-text-color-regular);
  font-size: 14px;
}
.nav-item:hover {
  color: var(--el-color-primary);
}
.nav-item .el-icon {
  font-size: 28px;
  margin-bottom: 8px;
  color: var(--el-color-info);
}
.nav-item:hover .el-icon {
  color: var(--el-color-primary);
}

.middle-nav-search {
  display: flex;
  justify-content: center;
}

.middle-search-input {
  max-width: 500px;
  --el-input-border-radius: 25px;
  --el-input-bg-color: var(--el-color-info-light-9);
}
.middle-search-input .el-input__wrapper {
  box-shadow: none;
}
.middle-search-input .el-input-group__append {
  background-color: var(--el-color-primary);
  border-color: var(--el-color-primary);
  color: #fff;
  border-radius: 0 25px 25px 0;
}
.middle-search-input .el-button {
  color: #fff;
}


/* Efficiency Section */
.efficiency-section {
  max-width: 1000px;
  margin: 40px auto;
  text-align: center;
  padding: 0 20px;
}

.efficiency-title {
  font-size: 28px;
  font-weight: bold;
  color: var(--el-text-color-primary);
  margin-bottom: 15px;
}

.efficiency-description {
  font-size: 16px;
  color: var(--el-text-color-regular);
  line-height: 1.8;
}

/* Explore Courses Section */
.explore-courses-section {
  max-width: 1200px;
  margin: 40px auto 80px;
  padding: 0 20px;
}

.explore-title {
  font-size: 22px;
  font-weight: bold;
  color: var(--el-text-color-primary);
  margin-bottom: 25px;
}

.tag-list .el-button {
  margin-right: 10px;
  margin-bottom: 10px;
  border-radius: 20px;
  color: var(--el-text-color-regular);
  border-color: var(--el-border-color-light);
}
.tag-list .el-button:hover,
.tag-list .el-button.is-active { /* 假设有一个active状态 */
  background-color: var(--el-color-primary-light-9);
  color: var(--el-color-primary);
  border-color: var(--el-color-primary-light-7);
}

.empty-data-state {
  margin-top: 50px;
}

.empty-box-icon {
  width: 100px;
  height: 100px;
  background-color: var(--el-color-info-light-9); /* 模拟背景色 */
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 20px; /* 居中显示 */
}

/* 响应式调整 */
@media (max-width: 768px) {
  .header {
    height: auto;
    padding: 10px 15px;
  }
  .header-content {
    flex-wrap: wrap; /* 允许换行 */
  }
  .logo-section {
    flex: 1 0 50%; /* 占据一半宽度 */
  }
  .search-section {
    order: 3; /* 搜索框放到下一行 */
    flex: 1 0 100%;
    margin-top: 10px;
  }
  .user-action-section {
    flex: 1 0 50%; /* 占据一半宽度 */
    justify-content: flex-end;
  }
  .header-search-input {
    max-width: 100%;
  }
  .personal-center-btn {
    display: none; /* 手机端隐藏个人中心文字 */
  }
  .icon-notification {
    margin-right: 10px;
  }
  .user-action-section .el-avatar {
    margin-right: 0;
  }

  .top-banner-wrapper {
    padding: 30px 15px;
  }
  .banner-left {
    text-align: center;
    margin-bottom: 30px;
  }
  .banner-left h1 {
    font-size: 38px;
  }
  .banner-left h2 {
    font-size: 28px;
  }
  .banner-description-en, .banner-description-cn {
    font-size: 14px;
  }

  .banner-image-container {
    width: 250px;
    height: 250px;
  }
  .floating-bubble {
    padding: 6px 10px;
    font-size: 12px;
  }
  .bubble-1 { top: 5%; left: -10px; }
  .bubble-2 { top: 25%; right: -15px; }
  .bubble-3 { bottom: 10%; left: 15%; }

  .middle-nav-card {
    margin-top: -30px; /* 调整偏移 */
    padding: 15px;
  }
  .middle-nav-row {
    flex-wrap: wrap;
    border-bottom: none; /* 手机端可能不需要底部分割线 */
    padding-bottom: 0;
    margin-bottom: 15px;
  }
  .nav-item {
    flex: 1 0 50%; /* 每行两个 */
    margin-bottom: 15px;
  }
  .middle-search-input {
    max-width: 100%;
  }

  .efficiency-title {
    font-size: 24px;
  }
  .efficiency-description {
    font-size: 14px;
  }

  .explore-title {
    font-size: 20px;
  }
  .tag-list .el-button {
    font-size: 12px;
    padding: 5px 10px;
  }
}

@media (min-width: 769px) and (max-width: 992px) {
  .header-search-input {
    max-width: 300px;
  }
  .banner-left h1 {
    font-size: 42px;
  }
  .banner-left h2 {
    font-size: 32px;
  }
  .banner-image-container {
    width: 280px;
    height: 280px;
  }
  .middle-nav-card {
    padding: 20px;
  }
  .nav-item {
    padding: 8px 0;
  }
  .efficiency-title {
    font-size: 26px;
  }
}
</style>