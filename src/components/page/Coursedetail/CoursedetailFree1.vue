<template>
  <div class="common-layout">
    <!-- 黑色顶部条 -->
    <div class="top-black-bar"></div>

    <el-container class="main-container">
      <!-- Header -->
      <el-header class="header">
        <el-row align="middle" class="header-content">
          <el-col :xs="10" :sm="6" :md="4" class="logo-section">
            <span class="logo-text">学会</span>
            <el-button type="primary" link class="ai-learning-btn">
              AI搜索
              <el-icon><ArrowRight /></el-icon>
            </el-button>
          </el-col>
          <el-col :xs="0" :sm="12" :md="14" class="search-section">
            <el-input
              placeholder="What do you want to learn?"
              class="header-search-input"
            >
              <template #suffix>
                <el-icon><Search /></el-icon>
              </template>
            </el-input>
          </el-col>
          <el-col :xs="14" :sm="6" :md="6" class="user-action-section">
            <el-icon :size="20" class="icon-notification"><Bell /></el-icon>
            <el-avatar :size="30" src="src/components/Coursedetail/picture/1.png.png.png"></el-avatar>
            <el-popover placement="bottom-end" :width="150" trigger="hover">
              <template #reference>
                <el-button link class="personal-center-btn hidden-xs-only">个人中心</el-button>
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

      <!-- Main Content -->
      <el-main class="main-content">
        <div class="page-container">
            <!-- 面包屑导航 -->
            <el-breadcrumb :separator-icon="ArrowRight" class="page-breadcrumb">
                <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
                <el-breadcrumb-item>探索您感兴趣的课程</el-breadcrumb-item>
                <el-breadcrumb-item>课程详情</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
            
            <!-- 课程主 Banner -->
            <div class="course-banner">
                <el-row :gutter="30" align="middle">
                    <el-col :xs="24" :md="14" class="course-info-col">
                        <h1 class="course-title">前端开发入门——从零开始学习Java</h1>
                        <p class="course-subtitle">副标题副标题副标题副标题副标题</p>
                        <div class="course-price">¥ 0</div>
                        <el-button type="primary" size="large" class="join-course-btn">加入我的课程</el-button>
                    </el-col>
                    <el-col :xs="24" :md="10" class="course-image-col">
                        <el-image 
                            src="https://images.unsplash.com/photo-1605379399642-870262d3d051?q=80&w=1506&auto=format&fit=crop" 
                            fit="cover" 
                            class="course-main-image"
                        >
                           <template #placeholder>
                                <div class="image-slot">加载中<span class="dot">...</span></div>
                           </template>
                        </el-image>
                    </el-col>
                </el-row>
            </div>
            
            <!-- 课程元数据 -->
            <div class="quick-links-wrapper">
                <div class="links-container">
                <el-link :underline="false" class="link-item">
                    <img src="./picture/线上.png" alt="" >
                    <span class="link-text hidden-md-and-down">线上课程</span>
                </el-link>
                <el-link :underline="false" class="link-item">
                    <img src="./picture/设计.png" alt="">
                    <span class="link-text hidden-md-and-down">艺术人文</span>
                </el-link>
                <el-link :underline="false" class="link-item">
                    <img src="./picture/路径1.png" alt="">
                    <span class="link-text hidden-md-and-down">购买人数:1.2K</span>
                </el-link>
                <el-link :underline="false" class="link-item">
                    <img src="./picture/用户.png" alt="">
                    <span class="link-text hidden-md-and-down">授课老师：张研究</span>
                </el-link>
                </div>
            </div>

        <!-- 课程内容区域 -->
        <div class="page-section course-content-section">
          <el-tabs v-model="activeTab" class="course-tabs">
            <el-tab-pane label="课程概览" name="overview"></el-tab-pane>
            <el-tab-pane label="课程内容" name="content">
              <div class="course-content-header">
                  <div class="chapter-nav">
                      <el-button round>1.1</el-button>
                      <el-button round type="info" plain>2.1</el-button>
                      <el-button round type="info" plain>3.1</el-button>
                      <el-button round type="info" plain>4.1</el-button>
                      <el-button round type="info" plain>5.1</el-button>
                  </div>
                  <h2 class="course-main-title">前端开发入门——从零开始学习Java</h2>
              </div>
              
              <div class="course-chapter-list">
                <!-- 章节一 -->
                <el-card shadow="never" class="chapter-card">
                  <p class="chapter-info">第1大章：基础知识</p>
                  <p class="section-info">第1章：概述 第1节：开头介绍</p>
                  <div class="action-buttons">
                    <el-button type="primary" :icon="VideoCamera">播放视频</el-button>
                    <el-button plain>全长30分钟</el-button>
                    <el-button :icon="ChatDotSquare" text class="hidden-xs-only"></el-button>
                  </div>
                </el-card>

                <!-- 章节二 -->
                <el-card shadow="never" class="chapter-card">
                  <p class="chapter-info">第2大章：语言程序</p>
                  <p class="section-info">第1章：控制与介绍 第1节：条件控制语句</p>
                  <div class="action-buttons">
                    <el-button :icon="Monitor">阅读资料</el-button>
                  </div>
                </el-card>
                
                <!-- 章节三 -->
                <el-card shadow="never" class="chapter-card">
                  <p class="chapter-info">第2大章：语言程序</p>
                  <p class="section-info">第1章：控制与介绍 第2节：In和区间</p>
                  <div class="action-buttons">
                    <el-button :icon="Brush">查看图片</el-button>
                  </div>
                </el-card>
              </div>
            </el-tab-pane>
          </el-tabs>
        </div>


        <!-- 您可能感兴趣的课程 -->
        <div class="page-section interested-courses-section">
            <h3 class="section-title">您可能感兴趣的课程</h3>
            <el-row :gutter="24">
                <el-col v-for="course in interestedCourses" :key="course.id" :xs="12" :sm="8" :md="6">
                    <el-card class="course-card" shadow="hover" :body-style="{ padding: '0px' }">
                        <el-image :src="course.image" class="course-card-image" fit="cover" />
                        <div class="course-card-info">
                            <h4 class="course-card-title">{{ course.title }}</h4>
                            <div class="course-card-meta">
                                <span class="course-card-price">¥{{ course.price }}</span>
                                <el-button type="primary" link>查看详情</el-button>
                            </div>
                        </div>
                    </el-card>
                </el-col>
            </el-row>
            <div class="load-more-container">
                <el-button type="primary" size="large">查看更多</el-button>
            </div>
        </div>

        <!-- 附近适合您的场馆 -->
        <div class="page-section nearby-venues-section">
            <h3 class="section-title">附近适合您的场馆</h3>
            <el-row :gutter="24">
                <el-col v-for="venue in nearbyVenues" :key="venue.id" :xs="24" :sm="12" :md="8">
                    <el-card class="venue-card" shadow="hover" :body-style="{ padding: '0px' }">
                        <el-image :src="venue.image" class="venue-image" fit="cover"/>
                        <div class="venue-info-body">
                            <h4 class="venue-name">{{ venue.name }}</h4>
                            <p class="venue-detail">
                                <el-icon><Location /></el-icon>
                                <span>{{ venue.address }}</span>
                            </p>
                            <p class="venue-detail">
                                <el-icon><Phone /></el-icon>
                                <span>{{ venue.phone }}</span>
                            </p>
                        </div>
                    </el-card>
                </el-col>
            </el-row>
            <div class="load-more-container">
                <el-button type="primary" size="large">查看更多</el-button>
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
  ArrowRight, Search, Bell, VideoCamera, Brush, User, Avatar, Location, Phone,ChatDotSquare, Monitor, Goods, ShoppingCartFull
} from '@element-plus/icons-vue';
import 'element-plus/theme-chalk/display.css';

const activeTab = ref('content');

const interestedCourses = ref([
  { id: 1, title: '微软 Power BI 数据分析师', instructor: '陈老师', price: '99', image: 'src/components/Coursedetail/picture/image(1).png' },
  { id: 2, title: 'UI/UX 设计全方位指南', instructor: '王设计师', price: '129', image: 'src/components/Coursedetail/picture/image(2).png' },
  { id: 3, title: '前端Vue3框架实战精讲', instructor: '李工', price: '99', image: 'src/components/Coursedetail/picture/image(3).png' },
  { id: 4, title: 'Python从入门到数据科学', instructor: '赵博士', price: '149', image: 'src/components/Coursedetail/picture/image(3).png' },
]);

const nearbyVenues = ref([
  { id: 1, name: '飞羽竞技场', type: '篮球场馆', address: '苏州市工业园区独墅湖校区258号', phone: '19552698532', image: 'src/components/Coursedetail/picture/矩形17.png' },
  { id: 2, name: '飞羽竞技场', type: '篮球场馆', address: '苏州市工业园区独墅湖校区258号', phone: '19552698532', image: 'src/components/Coursedetail/picture/矩形17(1).png' },
  { id: 3, name: '飞羽竞技场', type: '篮球场馆', address: '苏州市工业园区独墅湖校区258号', phone: '19552698532', image: 'src/components/Coursedetail/picture/矩形17(2).png' },
]);

const footerLinks = ref([
    { title: '公司', links: [ { name: '关于我们' }, { name: '职业' }, { name: '其他' } ] },
    { title: '常见问题', links: [ { name: '帮助/常见问题' }, { name: '问题' }, { name: '客服' } ] },
    { title: '更多', links: [ { name: '服务协议' }, { name: '隐私政策' }, { name: '商务洽谈' }, { name: '帮助中心' } ] }
]);
</script>

<style scoped>
/* 全局布局 */
.common-layout {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: #ffffff;
}
.main-container { flex: 1; }
.main-content { padding: 0; }

.top-black-bar {
  width: 100%;
  height: 30px;
  background-color:rgba(56, 56, 56, 1);
  position: sticky;
  top: 0;
  z-index: 1001;
}

/* Header样式 */
.header {
  background-color: #ffffff;
  box-shadow: var(--el-box-shadow-lighter);
  padding: 0 20px;
  height: 60px;
  display: flex;
  align-items: center;
  position: sticky;
  top: 30px;
  z-index: 1000;
}
.header-content {
  max-width: 1200px; margin: 0 auto; width: 100%;
}
.logo-section { display: flex; align-items: center; }
.logo-text { font-size: 20px; font-weight: bold; color: var(--el-text-color-primary); margin-right: 15px; }
.ai-learning-btn { background-color: var(--el-color-primary-light-9); border-radius: 20px; padding: 5px 12px; font-size: 13px; display: flex; align-items: center; border: 1px solid var(--el-color-primary-light-7); }
.ai-learning-btn .el-icon { margin-left: 5px; }
.search-section { display: flex; justify-content: center; }
.header-search-input { max-width: 400px; --el-input-border-radius: 20px; }
.user-action-section { display: flex; align-items: center; justify-content: flex-end; gap: 20px; }
.popover-menu p { line-height: 30px; cursor: pointer; padding: 0 10px; margin: 0; }
.popover-menu p:hover { background-color: var(--el-color-primary-light-9); }

/* --- 页面核心内容 --- */
.page-container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
}

.page-breadcrumb {
    padding: 25px 0;
    font-size: 14px;
}

/* 课程 Banner */
.course-banner {
    background: rgba(0, 86, 210, 1);
    color: #ffffff;
    padding: 40px;
    margin-bottom: 20px;
}
.course-title {
    font-size: 36px;
    font-weight: bold;
    margin: 0 0 10px;
    line-height: 1.3;
}
.course-subtitle {
    font-size: 16px;
    opacity: 0.85;
    margin: 0 0 20px;
}
.course-price {
    font-size: 32px;
    font-weight: bold;
    margin-bottom: 25px;
}
.join-course-btn {
    --el-button-bg-color: #ffffff;
    --el-button-text-color: var(--el-color-primary);
    --el-button-hover-bg-color: #f0faff;
    border: none;
    font-weight: bold;
}
.course-main-image {
    width: 100%;
    height: 250px;
    border-radius: 8px;
    overflow: hidden;
}
.image-slot {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    background: var(--el-fill-color-light);
    color: var(--el-text-color-secondary);
    font-size: 14px;
}


/* 课程元数据条 */
.quick-links-wrapper {
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 800px;
  height: 60px;
  margin: -30px auto 0;
  padding: 10px 10px 0 25px;
  background-color: #ffffff;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.08);
  position: relative;
  z-index: 20;
  margin-bottom: 20px;
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
  --el-link-text-color: var(--el-text-color-primary);
}
.link-item:hover {
  /* 定义悬停时的颜色，使用主色调 */
  --el-link-text-color: var(--el-color-primary);
}
.link-text {
  margin-left: 8px;
}

/* 课程内容 */
.course-content-section {
  padding-top: 40px;
}
.course-tabs .el-tabs__header {
  margin-bottom: 30px;
    margin-top: 30px;

}
.course-tabs .el-tabs__item {
  font-size: 16px;
}
.course-content-header {
  margin-bottom: 20px;
}
.chapter-nav {
  margin-bottom: 20px;
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}
.course-main-title {
  font-size: 22px;
  font-weight: 600;
  color: var(--el-text-color-primary);
}
.chapter-card {
  border: 1px solid var(--el-border-color-light);
  border-radius: 4px;
  margin-bottom: 20px;
  padding: 10px 20px;
}
.chapter-card .el-card__body {
  padding: 0;
}
.chapter-info, .section-info {
  margin: 0 0 10px;
  color: var(--el-text-color-primary);
  font-size: 16px;
}
.section-info {
  color: var(--el-text-color-regular);
  font-size: 14px;
}
.action-buttons {
  display: flex;
  align-items: center;
  gap: 15px;
  flex-wrap: wrap;
}

/* 通用区块样式 */
.page-section {
    max-width: 1200px;
    margin: 0 auto 80px;
    padding: 0 20px;
}
.section-title {
    font-size: 24px;
    font-weight: 600;
    color: var(--el-text-color-primary);
    margin-bottom: 30px;
    text-align: left;
}
.load-more-container {
    text-align: left;
    margin-top: 20px;
}

/* 推荐课程卡片 */
.course-card { margin-bottom: 24px; border-radius: 8px; }
.course-card-image { width: 100%; height: 150px; }
.course-card-info { padding: 16px; }
.course-card-title { font-size: 15px; font-weight: 500; margin: 0 0 10px; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
.course-card-meta { display: flex; justify-content: space-between; align-items: center; }
.course-card-price { font-size: 16px; font-weight: bold; color: var(--el-color-danger); }

/* 附近场馆卡片 */
.venue-card { margin-bottom: 24px; border-radius: 8px; }
.venue-image { width: 100%; height: 200px; display: block; }
.venue-info-body { padding: 20px; }
.venue-name { font-size: 17px; font-weight: 600; margin: 0 0 15px; }
.venue-detail { display: flex; align-items: center; font-size: 14px; color: var(--el-text-color-secondary); margin: 0 0 8px; }
.venue-detail .el-icon { margin-right: 8px; }

/* 页脚 */
.site-footer {
    background: rgba(242, 246, 253, 1);
    padding: 60px 20px;
    border-top: 1px solid var(--el-border-color-light);
}

.footer-container {
    max-width: 1200px;
    margin: 0 auto;
}

.footer-col {
    margin-bottom: 30px;
}

.footer-brand h3 {
    font-size: 32px;
    font-weight: bold;
    color: var(--el-text-color-primary);
    margin: 0 0 10px;
}
.footer-brand p {
    font-size: 14px;
    color: var(--el-text-color-regular);
    margin: 0;
}

.footer-links h4 {
    font-size: 16px;
    font-weight: 600;
    color: var(--el-text-color-primary);
    margin: 0 0 20px;
}
.footer-links ul {
    list-style: none;
    padding: 0;
    margin: 0;
}
.footer-links li {
    margin-bottom: 12px;
}
.footer-links .el-link {
    --el-link-text-color: var(--el-text-color-regular);
    font-weight: 400;
}
.footer-links .el-link:hover {
    --el-link-text-color: var(--el-color-primary);
}

.footer-social h4 {
    font-size: 16px;
    font-weight: 600;
    color: var(--el-text-color-primary);
    margin: 20px 0;
}

.social-icons {
    display: flex;
    gap: 15px;
    margin-bottom: 20px;
}
.social-icon {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: #fff;
    color: var(--el-text-color-secondary);
    box-shadow: var(--el-box-shadow-light);
    transition: all 0.3s ease;
}
.social-icon:hover {
    transform: translateY(-3px);
    box-shadow: var(--el-box-shadow);
    color: var(--el-text-color-primary);
}
.social-icon.instagram {
    background: linear-gradient(45deg, #f09433 0%,#e6683c 25%,#dc2743 50%,#cc2366 75%,#bc1888 100%);
    color: #fff;
}
.social-icon.instagram:hover {
    opacity: 0.9;
}

.app-badges {
    display: flex;
    gap: 15px;
    flex-wrap: wrap; /* 在小屏幕上允许换行 */
}

.app-badge {
    display: inline-flex;
    align-items: center;
    background-color: #404040; /* 深灰色背景 */
    color: #ffffff;
    padding: 8px 16px;
    border-radius: 20px; /* 圆角 */
    text-decoration: none;
    transition: background-color 0.2s;
}

.app-badge:hover {
    background-color: #2c2c2c; /* 悬停时颜色变深 */
}

.app-badge-icon {
    width: 24px;
    height: 24px;
    margin-right: 12px;
}

.app-badge-text {
    display: flex;
    flex-direction: column;
    text-align: left;
    line-height: 1.2;
}

.app-badge-text span {
    font-size: 10px;
}

.app-badge-text strong {
    font-size: 16px;
    font-weight: 600;
}/* 页脚 */
.site-footer {
    background-color: var(--el-fill-color-lighter);
    padding: 60px 20px;
    border-top: 1px solid var(--el-border-color-light);
}

.footer-container {
    max-width: 1200px;
    margin: 0 auto;
}

.footer-col {
    margin-bottom: 30px;
}

.footer-brand h3 {
    font-size: 32px;
    font-weight: bold;
    color: var(--el-text-color-primary);
    margin: 0 0 10px;
}
.footer-brand p {
    font-size: 14px;
    color: var(--el-text-color-regular);
    margin: 0;
}

.footer-links h4 {
    font-size: 16px;
    font-weight: 600;
    color: var(--el-text-color-primary);
    margin: 0 0 20px;
}
.footer-links ul {
    list-style: none;
    padding: 0;
    margin: 0;
}
.footer-links li {
    margin-bottom: 12px;
}
.footer-links .el-link {
    --el-link-text-color: var(--el-text-color-regular);
    font-weight: 400;
}
.footer-links .el-link:hover {
    --el-link-text-color: var(--el-color-primary);
}

.footer-social h4 {
    font-size: 16px;
    font-weight: 600;
    color: var(--el-text-color-primary);
    margin: 20px 0;
}

.social-icons {
    display: flex;
    gap: 15px;
    margin-bottom: 20px;
}
.social-icon {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: #fff;
    color: var(--el-text-color-secondary);
    box-shadow: var(--el-box-shadow-light);
    transition: all 0.3s ease;
}
.social-icon:hover {
    transform: translateY(-3px);
    box-shadow: var(--el-box-shadow);
    color: var(--el-text-color-primary);
}
.social-icon.instagram {
    background: linear-gradient(45deg, #f09433 0%,#e6683c 25%,#dc2743 50%,#cc2366 75%,#bc1888 100%);
    color: #fff;
}
.social-icon.instagram:hover {
    opacity: 0.9;
}

.app-badges {
    display: flex;
    gap: 15px;
    flex-wrap: wrap; /* 在小屏幕上允许换行 */
}

.app-badge {
    display: inline-flex;
    align-items: center;
    background-color: #404040; /* 深灰色背景 */
    color: #ffffff;
    padding: 8px 16px;
    border-radius: 20px; /* 圆角 */
    text-decoration: none;
    transition: background-color 0.2s;
}

.app-badge:hover {
    background-color: #2c2c2c; /* 悬停时颜色变深 */
}

.app-badge-icon {
    width: 24px;
    height: 24px;
    margin-right: 12px;
}

.app-badge-text {
    display: flex;
    flex-direction: column;
    text-align: left;
    line-height: 1.2;
}

.app-badge-text span {
    font-size: 10px;
}

.app-badge-text strong {
    font-size: 16px;
    font-weight: 600;
}

/* 响应式适配 */
@media (max-width: 992px) {
    .course-title { font-size: 30px; }
    .course-banner { padding: 30px; }
}

@media (max-width: 767px) {
    .course-banner { padding: 20px; text-align: center; }
    .course-info-col { margin-bottom: 25px; }
    .course-title { font-size: 24px; }
    .course-subtitle { font-size: 14px; }
    .course-price { font-size: 28px; }
    .course-main-image { height: 200px; }

    .quick-links-wrapper {
    width: 95%; /* 在小屏幕上增加宽度占比 */
    padding-left: 15px; /* 稍微调整内边距 */
  }

    .page-section { padding: 0 15px; margin-bottom: 60px; }
    .section-title { font-size: 20px; }
    .footer-col { text-align: center; }
    .social-icons, .app-badges { justify-content: center; }
}
</style>