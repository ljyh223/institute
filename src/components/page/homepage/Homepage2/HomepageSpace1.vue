<template>
  <div class="common-layout">
    <!-- 黑色顶部条 -->
    <div class="top-black-bar"></div>

    <el-container class="main-container">
      <!-- Header -->
      <el-header class="header">
      <div class="header-content">
        <!-- Logo 和 AI 探索 -->
        <div class="logo-section">
          <span class="logo-text">学会</span>
          <el-button class="ai-explore-btn">
            AI探索
            <el-icon><ArrowRight /></el-icon>
          </el-button>
        </div>
        
        <!-- 搜索框 -->
        <div class="search-container hidden-xs-only">
          <el-input
            placeholder="What do you want learn?"
            class="header-search-input"
          />
          <el-button type="primary" :icon="Search" circle class="search-icon-btn" />
        </div>
        
        <!-- 用户操作区 -->
        <div class="user-action-section">
          <el-icon :size="22" class="notification-bell"><Bell /></el-icon>
          <el-avatar :size="32" src="https://cube.elemecdn.com/3/7c/3ed689582b989fd05f42a77428753.jpeg" />
        </div>
      </div>
    </el-header>

      <!-- Main Content -->
      <el-main class="main-content">
        <div class="page-container">
          <!-- 面包屑导航 -->
          <el-breadcrumb :separator-icon="ArrowRight" class="page-breadcrumb">
            <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item>附近适合您的场馆</el-breadcrumb-item>
            <el-breadcrumb-item>共享的空间</el-breadcrumb-item>
            <el-breadcrumb-item>查看详情</el-breadcrumb-item>
          </el-breadcrumb>
        </div>

        <!-- 主 Banner -->
        <div class="space-banner">
          <div class="banner-content">
            <div class="banner-text">
              <h1 class="banner-title">创新学习中心</h1>
              <h2 class="banner-subtitle">Innovation Learning Center</h2>
              <el-button type="primary" size="large" class="reserve-btn">立即预约</el-button>
            </div>
            <div class="banner-image-container">
              <el-image 
                src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=2070&auto=format&fit=crop"
                fit="cover"
                class="banner-image"
              />
            </div>
          </div>
        </div>

        <div class="page-container">
          <!-- 设施服务栏 -->
          <div class="amenities-bar">
            <div v-for="(amenity, index) in amenities" :key="index" class="amenity-item">
              <el-icon v-if="amenity.icon" :size="20"><component :is="amenity.icon" /></el-icon>
              <span>{{ amenity.text }}</span>
            </div>
          </div>

          <!-- 空间详情介绍 -->
          <div class="space-details-section">
            <div class="details-header">
              <div class="details-title-group">
                <h3 class="details-title">创新学习中心</h3>
                <el-tag type="primary" effect="dark" round>高等教育</el-tag>
              </div>
              <span class="details-price">¥10/时</span>
            </div>
            <div class="details-info-grid">
              <div class="info-item">
                <span class="info-label">开始时间-结束时间</span>
                <span class="info-content">2025/12/29 12:00 - 2025/12/29 12:00</span>
              </div>
              <div class="info-item">
                <span class="info-label">空间地址</span>
                <span class="info-content">XXXXXXX空间XXXXXX街道12号</span>
              </div>
              <div class="info-item full-width">
                <span class="info-label">简要介绍</span>
                <p class="info-content">
                  创新学习中心成立于2015年，是北京领先的综合性学习场所，致力于为学员提供最优质的学习环境和最前沿的课程内容。中心占地面积2000平方米，拥有现代化的教学设施和舒适的学习空间。我们秉承“学习改变生活，知识创造未来”的理念，汇聚了各行业顶尖的师资力量，开设了包括编程开发、UI/UX设计、数字营销、语言培训等多个领域的课程，满足不同学员的学习需求。中心采用小班教学模式，确保每位学员都能获得充分的关注和指导。同时, 我们还提供职业规划服务, 帮助学员在学习结束后顺利实现职业转型或晋升。
                </p>
              </div>
            </div>
          </div>
        </div>
        
        <!-- 图片画廊 (优化后) -->
        <div class="page-container gallery-section">
            <div class="gallery-grid">
                <el-image 
                    v-for="(img, index) in galleryImages" 
                    :key="index" 
                    :src="img" 
                    fit="cover" 
                    class="gallery-item"
                />
            </div>
        </div>

        <!-- 其他您可能感兴趣的空间 -->
        <div class="page-container recommended-section">
            <h3 class="section-title">其他您可能感兴趣的空间</h3>
            <div class="recommended-spaces-container">
                <div v-for="space in recommendedSpaces" :key="space.id" class="space-card">
                    <el-image :src="space.image" class="space-card-image" fit="cover" />
                    <div class="space-card-info">
                        <span class="space-card-name">{{ space.name }}</span>
                        <el-button type="primary" text bg class="details-btn">查看详情</el-button>
                    </div>
                </div>
            </div>
            <div class="load-more-container">
                <el-button type="primary">查看更多</el-button>
            </div>
        </div>
      </el-main>
    </el-container>
    
    <!-- Footer -->
       <footer class="site-footer">
        <div class="footer-container">
            <el-row :gutter="30" justify="space-between">
                <!-- Brand Info -->
                <el-col :xs="24" :sm="12" :md="6" class="footer-col footer-brand">
                    <h3>学会</h3>
                    <p>新一代学习生态系统</p>
                </el-col>

                <!-- Footer Links -->
                <el-col :xs="12" :sm="6" :md="3" class="footer-col footer-links" v-for="section in footerLinks" :key="section.title">
                    <h4>{{ section.title }}</h4>
                    <ul>
                        <li v-for="link in section.links" :key="link.name">
                            <el-link :underline="false">{{ link.name }}</el-link>
                        </li>
                    </ul>
                </el-col>

                <!-- Social and App Downloads -->
                <el-col :xs="24" :sm="12" :md="5" class="footer-col footer-social">
                    <div class="social-icons">
                        <a href="#" class="social-icon" aria-label="Facebook">
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z"/></svg>
                        </a>
                        <a href="#" class="social-icon instagram" aria-label="Instagram">
                             <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                        </a>
                        <a href="#" class="social-icon" aria-label="Twitter">
                           <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616v.064c0 2.295 1.616 4.212 3.763 4.649-.69.188-1.432.233-2.193.084.623 1.955 2.441 3.364 4.604 3.404-1.72 1.34-3.882 2.083-6.242 2.083-.404 0-.802-.023-1.195-.069 2.209 1.409 4.833 2.231 7.646 2.231 9.177 0 14.209-7.469 13.945-14.517.975-.701 1.816-1.583 2.483-2.578z"/></svg>
                        </a>
                    </div>
                    <h4>下载我们的APP</h4>
                    <div class="app-badges">
                      <a href="#" class="app-badge">
                        <img class="app-badge-icon" src="./picture/google-play1.png" alt="">
                        <span class="app-badge-text">
                          <span>GET IT ON</span>
                          <strong>Google Play</strong>
                        </span>
                      </a>
                      <a href="#" class="app-badge">
                        <img class="app-badge-icon" src="./picture/苹果.png" alt="">
                        <span class="app-badge-text">
                          <span>Available on the</span>
                          <strong>Apple Store</strong>
                        </span>
                      </a>
                    </div>
                </el-col>
            </el-row>
        </div>
    </footer>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import {
  ArrowRight, Search, Bell, Van, Connection, CoffeeCup
} from '@element-plus/icons-vue';
import 'element-plus/theme-chalk/display.css';

// 设施服务数据
const amenities = ref([
  { icon: Van, text: '免费停车' },
  { icon: Connection, text: '免费WIFI' },
  { icon: CoffeeCup, text: '茶歇提供' },
  { text: '无障碍通道' }
]);

// 图片画廊数据 (优化后)
const galleryImages = ref([
  'https://images.unsplash.com/photo-1444464666168-49d633b86797?q=80&w=2069&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1473448912268-2022ce9509d8?q=80&w=1925&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1470770841072-f978cf4d019e?q=80&w=2070&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1444464666168-49d633b86797?q=80&w=2069&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1473448912268-2022ce9509d8?q=80&w=1925&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1470770841072-f978cf4d019e?q=80&w=2070&auto=format&fit=crop',
]);

// 推荐空间数据
const recommendedSpaces = ref([
  { id: 1, name: '豪华办公室1', image: 'src/components/homepage/Homepage2/picture/image(4).png' },
  { id: 2, name: 'X OPENSPACE', image: 'src/components/homepage/Homepage2/picture/image(7).png' },
  { id: 3, name: '豪华办公室3', image: 'src/components/homepage/Homepage2/picture/image(6).png' },
  { id: 4, name: '豪华办公室1', image: 'src/components/homepage/Homepage2/picture/image(5).png' },
  { id: 5, name: '豪华办公室3', image: 'src/components/homepage/Homepage2/picture/image(6).png' },
]);

// 页脚数据
const footerLinks = ref([
    { title: '公司', links: [ { name: '关于我们' }, { name: '职业' }, { name: '其他' } ] },
    { title: '常见问题', links: [ { name: '帮助/常见问题' }, { name: '问题' }, { name: '客服' } ] },
    { title: '更多', links: [ { name: '服务协议' }, { name: '隐私政策' }, { name: '商务洽谈' }, { name: '帮助中心' } ] }
]);
</script>

<style scoped>
/* 全局布局 */
.common-layout {
  background-color: #f7f8fa;
}
.main-content { padding: 0; }
.top-black-bar {
  width: 100%;
  height: 30px;
  background-color:rgba(56, 56, 56, 1);
  position: sticky;
  top: 0;
  z-index: 1001;
}
.page-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}
.section-title {
  font-size: 22px;
  font-weight: 600;
  color: var(--el-text-color-primary);
  margin-bottom: 24px;
  text-align: left;
}

/* Header样式 */
.header {
  background-color: #ffffff;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.08); /* 使用更柔和的阴影 */
  height: 64px;
  position: sticky;
  top: 30px; /* 假设顶部黑条高度为30px */
  z-index: 1000;
  display: flex;
  align-items: center;
}
.header-content {
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
}
.logo-section {
  display: flex;
  align-items: center;
  gap: 16px;
}
.logo-text {
  font-size: 24px;
  font-weight: bold;
  color: var(--el-color-primary); /* 更改为蓝色 */
}
.ai-explore-btn {
  border-color: var(--el-border-color-light); /* 浅色边框 */
  color: var(--el-text-color-primary); /* 默认文字颜色 */
}
.ai-explore-btn .el-icon {
  margin-left: 4px;
}

/* 搜索框容器 */
.search-container {
  display: flex;
  align-items: center;
  flex-grow: 1;
  max-width: 450px;
  margin: 0 24px;
}
.header-search-input {
  /* 使用 CSS 变量来设置圆角，使其变为药丸形状 */
  --el-input-border-radius: 20px;
  flex-grow: 1;
}
/* 调整 Element Plus 内部 wrapper 的样式 */
.header-search-input :deep(.el-input__wrapper) {
  box-shadow: none !important;
  border: 1px solid var(--el-border-color);
  transition: border-color 0.2s;
}
.header-search-input :deep(.el-input__wrapper:hover) {
  border-color: var(--el-color-primary);
}
.search-icon-btn {
  margin-left: -35px; /* 让按钮覆盖在输入框的末尾 */
  z-index: 5;
}

/* 用户操作区 */
.user-action-section {
  display: flex;
  align-items: center;
  gap: 20px;
}
.notification-bell {
  color: var(--el-color-primary); /* 更改为蓝色 */
  cursor: pointer;
}

/* 面包屑 */
.page-breadcrumb {
  padding: 24px 0;
}

/* 主 Banner */
.space-banner {
  height: 400px;
  /* === 已修正的背景图片 === */
  background-image: url('https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=2070&auto=format&fit=crop');
  background-size: cover;
  background-position: center;
  position: relative;
  display: flex;
  align-items: center;
}
.space-banner::before {
  content: '';
  position: absolute;
  inset: 0;
  background-color: rgba(0,0,0,0.3); /* 黑色透明层 */
}
.banner-content {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  position: relative;
  z-index: 2;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
}
.banner-text { color: #fff; }
.banner-title { font-size: 42px; font-weight: 700; margin: 0 0 10px; }
.banner-subtitle { font-size: 24px; opacity: 0.9; margin: 0 0 24px; }
.reserve-btn.el-button { font-size: 16px; padding: 20px 30px; }
.banner-image-container .banner-image {
  width: 320px;
  height: 200px;
  border-radius: 12px;
  border: 4px solid #fff;
  box-shadow: 0 8px 24px rgba(0,0,0,0.2);
}

/* 设施服务栏 */
.amenities-bar {
  display: flex;
  justify-content: space-around;
  background-color: #fff;
  border-radius: 12px;
  padding: 24px;
  box-shadow: 0 8px 20px rgba(0,0,0,0.07);
  margin-top: -60px;
  position: relative;
  z-index: 10;
}
.amenity-item {
  display: flex;
  align-items: center;
  gap: 10px;
  color: var(--el-text-color-regular);
  padding: 0 20px;
  border-right: 1px solid var(--el-border-color-lighter);
}
.amenity-item:last-child { border-right: none; }

/* 空间详情 */
.space-details-section {
  background-color: #fff;
  padding: 32px;
  border-radius: 12px;
  margin-top: 32px;
}
.details-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid var(--el-border-color-lighter);
  padding-bottom: 20px;
  margin-bottom: 24px;
}
.details-title-group { display: flex; align-items: center; gap: 12px; }
.details-title { font-size: 24px; font-weight: 600; margin: 0; }
.details-price { font-size: 22px; font-weight: bold; color: var(--el-color-danger); }
.details-info-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px 40px;
}
.info-item { display: flex; flex-direction: column; }
.info-item.full-width { grid-column: 1 / -1; }
.info-label {
  font-size: 14px;
  color: var(--el-text-color-secondary);
  margin-bottom: 8px;
}
.info-content {
  font-size: 15px;
  color: var(--el-text-color-primary);
  line-height: 1.7;
  margin: 0;
}

/* 图片画廊 (优化后) */
.gallery-section {
  margin: 60px auto;
}
.gallery-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr); /* 创建一个三列的网格 */
  gap: 20px; /* 设置网格项之间的间距 */
}
.gallery-item {
  width: 100%;
  height: 250px; /* 固定图片高度 */
  border-radius: 12px; /* 圆角 */
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1); /* 添加阴影 */
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  cursor: pointer;
  overflow: hidden; /* 确保圆角生效 */
}
.gallery-item:hover {
  transform: translateY(-5px);
  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.15);
}

/* 在响应式部分添加或修改以下规则 */
@media (max-width: 991px) {
  /* ... */
  .gallery-grid {
    grid-template-columns: repeat(2, 1fr); /* 平板上变为两列 */
  }
}

@media (max-width: 767px) {
  /* ... */
  .gallery-grid {
    grid-template-columns: 1fr; /* 手机上变为单列 */
  }
}

/* 在响应式部分添加或修改以下规则 */
@media (max-width: 991px) {
  /* ... */
  .gallery-main-image, .gallery-preview-wrapper { 
    height: 350px; 
  }
}

@media (max-width: 767px) {
  /* ... */
  .gallery-main-image { 
    height: 250px; 
    margin-bottom: 15px; 
  }
  .preview-col { 
    display: none; /* 在手机上直接隐藏预览图以简化布局 */
  } 
}

/* 推荐空间 */
.recommended-section {
  padding-bottom: 60px;
}
.recommended-spaces-container {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 20px;
}
.space-card {
  border: 1px solid var(--el-border-color-light);
  border-radius: 8px;
  background-color: #fff;
  transition: box-shadow 0.3s;
  overflow: hidden;
}
.space-card:hover { box-shadow: var(--el-box-shadow-light); }
.space-card-image {
  width: 100%;
  display: block;
  aspect-ratio: 4 / 3;
}
.space-card-info {
  padding: 12px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.space-card-name { font-size: 14px; }
.details-btn.el-button { font-size: 12px; height: 28px; }
.load-more-container { text-align: left; margin-top: 24px; }

/* 页脚 */
.site-footer {
    background: rgba(242, 246, 253, 1);
    padding: 60px 20px;
    border-top: 1px solid var(--el-border-color-light);
}
.footer-container { max-width: 1200px; margin: 0 auto; }
.footer-col { margin-bottom: 30px; }
.footer-brand h3 { font-size: 32px; font-weight: bold; color: var(--el-text-color-primary); margin: 0 0 10px; }
.footer-brand p { font-size: 14px; color: var(--el-text-color-regular); margin: 0; }
.footer-links h4 { font-size: 16px; font-weight: 600; color: var(--el-text-color-primary); margin: 0 0 20px; }
.footer-links ul { list-style: none; padding: 0; margin: 0; }
.footer-links li { margin-bottom: 12px; }
.footer-links .el-link { --el-link-text-color: var(--el-text-color-regular); font-weight: 400; }
.footer-links .el-link:hover { --el-link-text-color: var(--el-color-primary); }
.footer-social h4 { font-size: 16px; font-weight: 600; color: var(--el-text-color-primary); margin: 20px 0; }
.social-icons { display: flex; gap: 15px; margin-bottom: 20px; }
.social-icon { display: flex; align-items: center; justify-content: center; width: 40px; height: 40px; border-radius: 50%; background-color: #fff; color: var(--el-text-color-secondary); box-shadow: var(--el-box-shadow-light); transition: all 0.3s ease; }
.social-icon:hover { transform: translateY(-3px); box-shadow: var(--el-box-shadow); color: var(--el-text-color-primary); }
.social-icon.instagram { background: linear-gradient(45deg, #f09433 0%,#e6683c 25%,#dc2743 50%,#cc2366 75%,#bc1888 100%); color: #fff; }
.social-icon.instagram:hover { opacity: 0.9; }
.app-badges { display: flex; gap: 15px; flex-wrap: wrap; }
.app-badge { display: inline-flex; align-items: center; background-color: #404040; color: #ffffff; padding: 8px 16px; border-radius: 20px; text-decoration: none; transition: background-color 0.2s; }
.app-badge:hover { background-color: #2c2c2c; }
.app-badge-icon { width: 24px; height: 24px; margin-right: 12px; }
.app-badge-text { display: flex; flex-direction: column; text-align: left; line-height: 1.2; }
.app-badge-text span { font-size: 10px; }
.app-badge-text strong { font-size: 16px; font-weight: 600; }


/* --- 响应式适配 --- */
@media (max-width: 991px) {
  .banner-content { flex-direction: column; text-align: center; }
  .banner-image-container { margin-top: 24px; }
  .amenities-bar { flex-wrap: wrap; justify-content: center; gap: 15px; }
  .amenity-item { border: none; padding: 5px; }
  .details-info-grid { grid-template-columns: 1fr; }
  .recommended-spaces-container { grid-template-columns: repeat(3, 1fr); }
}

@media (max-width: 767px) {
  .header-content { flex-wrap: wrap; }
  .search-section { order: 3; width: 100%; margin: 10px 0 0; }
  .banner-title { font-size: 32px; }
  .banner-subtitle { font-size: 18px; }
  .banner-image-container .banner-image { width: 280px; height: 175px; }
  .details-header { flex-direction: column; align-items: flex-start; gap: 10px; }
  .recommended-spaces-container { grid-template-columns: repeat(2, 1fr); }
}
</style>