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
                <el-breadcrumb-item>附近适合您的场馆</el-breadcrumb-item>
                <el-breadcrumb-item>课程详情</el-breadcrumb-item>
            </el-breadcrumb>
            
            <!-- 课程主 Banner -->
            <div class="venue-banner">
                <el-row :gutter="30" align="middle">
                    <el-col :xs="24" :md="10" class="venue-info-col">
                        <h1 class="venue-title">创新学习中心</h1>
                        <div class="venue-location">
                            <el-icon><Location /></el-icon>
                            <span>苏州 吴中</span>
                        </div>
                        <div class="venue-stats">
                            <div class="stat-item">
                                <span class="stat-number">200</span>
                                <span class="stat-label">粉丝</span>
                            </div>
                            <div class="stat-item">
                                <span class="stat-number">2100</span>
                                <span class="stat-label">关注</span>
                            </div>
                            <div class="stat-item">
                                <span class="stat-number">210000</span>
                                <span class="stat-label">学分</span>
                            </div>
                        </div>
                        <el-button type="primary" size="large" class="follow-btn">
                            <el-icon><Plus /></el-icon>
                            关注
                        </el-button>
                    </el-col>
                    <el-col :xs="24" :md="14" class="venue-image-col">
                        <el-image 
                            src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=1632&auto=format&fit=crop"
                            fit="cover" 
                            class="venue-main-image"
                        >
                           <template #placeholder>
                                <div class="image-slot">加载中<span class="dot">...</span></div>
                           </template>
                        </el-image>
                    </el-col>
                </el-row>
            </div>
            
            <!-- 设施服务栏 -->
            <div class="amenities-section">
                <div class="amenities-bar">
                    <div v-for="(amenity, index) in amenities" :key="index" class="amenity-item">
                      <el-icon v-if="amenity.icon" :size="18" color="#606266"><component :is="amenity.icon" /></el-icon>
                      <span>{{ amenity.text }}</span>
                    </div>
                </div>
            </div>

            <!-- 机构简介 -->
            <div class="institution-intro-section">
                <h3 class="section-title">机构简介</h3>
                <p class="intro-text">
                    创新学习中心成立于2015年，是北京领先的综合性学习场所，致力于为学员提供最优质的学习环境和最前沿的课程内容。中心占地面积2000平方米，拥有现代化的教学设施和舒适的学习空间。我们秉承“学习改变生活，知识创造未来”的理念，汇聚了各行业顶尖的师资力量，开设了包括编程开发、UI/UX设计、数字营销、语言培训等多个领域的课程，满足不同学员的学习需求。中心采用小班教学模式，确保每位学员都能获得充分的关注和指导。同时，我们还提供职业规划服务，帮助学员在学习结束后顺利实现职业转型或晋升。
                </p>
            </div>
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
        
        <!-- 共享的空间 -->
        <div class="page-section shared-spaces-section">
            <h3 class="section-title">共享的空间</h3>
            <div class="space-items-container">
                <div v-for="space in sharedSpaces" :key="space.id" class="space-item-card">
                    <el-image :src="space.image" class="space-item-image" fit="cover" />
                    <div class="space-item-info">
                        <span class="space-item-name">{{ space.name }}</span>
                        <el-button type="primary" text class="details-btn">查看详情</el-button>
                    </div>
                </div>
            </div>
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

        <!-- 学习环境 -->
        <div class="page-section learning-environment-section">
            <h3 class="section-title">学习环境</h3>
            <el-row :gutter="24">
                <el-col v-for="env in learningEnvironments" :key="env.id" :xs="24" :sm="12" :md="8">
                    <div class="env-card" :class="{ 'is-selected': env.selected }">
                        <el-image :src="env.image" class="env-image" fit="cover"/>
                        <div class="env-name-overlay">
                            <span>{{ env.name }}</span>
                        </div>
                    </div>
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
  ArrowRight, Search, Bell, Location, Phone, Plus, Van, Connection, Mug
} from '@element-plus/icons-vue';
import 'element-plus/theme-chalk/display.css';

const activeTab = ref('overview');

const amenities = ref([
  { icon: Van, text: '免费停车' },
  { icon: Connection, text: '免费WIFI' },
  { icon: Mug, text: '茶歇提供' },
  { text: '无障碍通道' }
]);

const interestedCourses = ref([
  { id: 1, title: '微软 Power BI 数据分析师', instructor: '陈老师', price: '99', image: 'src/components/Coursedetail/picture/image(1).png' },
  { id: 2, title: 'UI/UX 设计全方位指南', instructor: '王设计师', price: '129', image: 'src/components/Coursedetail/picture/image(2).png' },
  { id: 3, title: '前端Vue3框架实战精讲', instructor: '李工', price: '99', image: 'src/components/Coursedetail/picture/image(3).png' },
  { id: 4, title: 'Python从入门到数据科学', instructor: '赵博士', price: '149', image: 'src/components/Coursedetail/picture/image(3).png' },
]);

const sharedSpaces = ref([
  { id: 1, name: '豪华办公室1', image: 'src/components/homepage/Homepage2/picture/image(4).png' },
  { id: 2, name: 'X OPENSPACE', image: 'src/components/homepage/Homepage2/picture/image(7).png' },
  { id: 3, name: '豪华办公室3', image: 'src/components/homepage/Homepage2/picture/image(6).png' },
  { id: 4, name: '豪华办公室1', image: 'src/components/homepage/Homepage2/picture/image(5).png' },
  { id: 5, name: '豪华办公室3', image: 'src/components/homepage/Homepage2/picture/image(6).png' },
]);

const nearbyVenues = ref([
  { id: 1, name: '飞羽竞技场', type: '篮球场馆', address: '苏州市工业园区独墅湖校区258号', phone: '19552698532', image: 'src/components/Coursedetail/picture/矩形17.png' },
  { id: 2, name: '飞羽竞技场', type: '篮球场馆', address: '苏州市工业园区独墅湖校区258号', phone: '19552698532', image: 'src/components/Coursedetail/picture/矩形17(1).png' },
  { id: 3, name: '飞羽竞技场', type: '篮球场馆', address: '苏州市工业园区独墅湖校区258号', phone: '19552698532', image: 'src/components/Coursedetail/picture/矩形17(2).png' },
]);

const learningEnvironments = ref([
  { id: 1, name: '多媒体教室', image: 'src/components/homepage/Homepage2/picture/矩形15.png', selected: false },
  { id: 2, name: '多媒体教室', image: 'src/components/homepage/Homepage2/picture/矩形15.png', selected: false },
  { id: 3, name: '多媒体教室', image: 'src/components/homepage/Homepage2/picture/矩形15.png', selected: true },
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

/* 场馆 Banner 样式 */
.venue-banner {
    padding: 20px 0;
}
.venue-info-col {
    display: flex;
    flex-direction: column;
    justify-content: center;
}
.venue-title {
    font-size: 32px;
    font-weight: 600;
    margin: 0 0 15px;
}
.venue-location {
    display: flex;
    align-items: center;
    font-size: 16px;
    color: var(--el-text-color-regular);
    margin-bottom: 25px;
}
.venue-location .el-icon {
    margin-right: 8px;
}
.venue-stats {
    display: flex;
    gap: 40px;
    margin-bottom: 30px;
}
.stat-item {
    text-align: left;
}
.stat-number {
    font-size: 24px;
    font-weight: bold;
    display: block;
}
.stat-label {
    font-size: 14px;
    color: var(--el-text-color-secondary);
}
.follow-btn .el-icon {
    margin-right: 8px;
}
.venue-main-image {
    width: 100%;
    height: 300px;
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

/* 设施服务栏样式 */
.amenities-section {
    padding: 20px 0;
}
.amenities-bar {
    display: flex;
    justify-content: space-around;
    align-items: center;
    background-color: #fff;
    padding: 15px 20px;
    border-radius: 8px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
    border: 1px solid var(--el-border-color-lighter);
}
.amenity-item {
    display: flex;
    align-items: center;
    gap: 8px;
    color: var(--el-text-color-regular);
    font-size: 14px;
    padding: 0 20px;
    border-right: 1px solid var(--el-border-color-light);
}
.amenity-item:last-child {
  border-right: none;
}


/* 机构简介样式 */
.institution-intro-section {
    padding: 40px 0;
    margin-bottom: 40px;
}
.institution-intro-section .section-title {
    text-align: left;
    margin-bottom: 20px;
}
.intro-text {
    font-size: 15px;
    line-height: 1.8;
    color: var(--el-text-color-regular);
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

/* 共享空间样式 */
.shared-spaces-section {
    margin-bottom: 60px;
}
.space-items-container {
    display: flex;
    gap: 20px;
    overflow-x: auto; /* Enable horizontal scrolling */
    padding-bottom: 15px; /* Space for scrollbar */
}
/* Optional: Custom scrollbar styling */
.space-items-container::-webkit-scrollbar { height: 6px; }
.space-items-container::-webkit-scrollbar-thumb { background: #ccc; border-radius: 6px; }
.space-items-container::-webkit-scrollbar-track { background: #f1f1f1; }

.space-item-card {
    flex-shrink: 0; /* Prevent items from shrinking */
    width: 220px; /* Set a fixed width for items */
    border: 1px solid var(--el-border-color-light);
    border-radius: 8px;
    background-color: #fff;
    transition: box-shadow 0.3s;
    overflow: hidden;
}
.space-item-card:hover {
    box-shadow: var(--el-box-shadow-light);
}
.space-item-image {
    width: 100%;
    display: block;
    aspect-ratio: 4 / 3;
}
.space-item-info {
    padding: 12px 15px;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.space-item-name {
    font-size: 14px;
    color: var(--el-text-color-primary);
    font-weight: 500;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    padding-right: 10px;
}
.details-btn.el-button {
    border: 1px solid var(--el-color-primary);
    color: var(--el-color-primary);
    background-color: transparent;
    padding: 4px 10px;
    border-radius: 4px;
    font-size: 12px;
}
.details-btn.el-button:hover {
    background-color: var(--el-color-primary-light-9);
}
.shared-spaces-section .load-more-container {
  margin-top: 25px;
}


/* 附近场馆卡片 */
.venue-card { margin-bottom: 24px; border-radius: 8px; }
.venue-image { width: 100%; height: 200px; display: block; }
.venue-info-body { padding: 20px; }
.venue-name { font-size: 17px; font-weight: 600; margin: 0 0 15px; }
.venue-detail { display: flex; align-items: center; font-size: 14px; color: var(--el-text-color-secondary); margin: 0 0 8px; }
.venue-detail .el-icon { margin-right: 8px; }

/* 学习环境样式 */
.learning-environment-section {
    margin-bottom: 80px;
}
.env-card {
    position: relative;
    border-radius: 8px;
    overflow: hidden;
    margin-bottom: 24px;
    border: 3px solid transparent;
    transition: all 0.3s ease;
    cursor: pointer;
}
.env-card:hover {
    transform: translateY(-5px);
    box-shadow: var(--el-box-shadow);
}
.env-card.is-selected {
    border-color: var(--el-color-primary);
    box-shadow: 0 4px 12px rgba(0, 123, 255, 0.3);
}
.env-image {
    width: 100%;
    display: block;
    aspect-ratio: 4 / 3;
}
.env-name-overlay {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    background: linear-gradient(to top, rgba(235, 233, 233, 0.7) 4%, transparent);
    padding: 30px 20px 15px;
    color: #f000;
    font-size: 16px;
    font-weight: 500;
    text-align: left;
    transition: background 0.3s;
}
.learning-environment-section .load-more-container {
    margin-top: 10px;
}


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

/* 响应式适配 */
@media (max-width: 992px) {
    .venue-title { font-size: 28px; }
    .amenities-bar { 
      flex-wrap: wrap;
      justify-content: flex-start;
      gap: 15px;
    }
    .amenity-item {
      padding: 5px 10px;
      border-right: none;
    }
}

@media (max-width: 767px) {
    .venue-info-col {
        text-align: center;
        margin-bottom: 25px;
        align-items: center;
    }
    .venue-title { font-size: 24px; }
    .venue-main-image { height: 200px; }
    .venue-stats {
        gap: 20px;
        justify-content: center;
    }
    .amenities-bar {
        justify-content: center;
    }
    .page-section { padding: 0 15px; margin-bottom: 60px; }
    .section-title { font-size: 20px; }
    .footer-col { text-align: center; }
    .social-icons, .app-badges { justify-content: center; }
}
</style>