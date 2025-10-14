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
            <el-avatar :size="30" src="https://cube.elemecdn.com/3/7c/3ed689582b989fd05f42a77428753.jpeg"></el-avatar>
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
        
        <!-- Top Banner -->
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
                  src=".\picture\Rectangle 4392.png"
                  fit="cover"
                ></el-image>
                <div class="background-circle circle-1"></div>
                <div class="background-circle circle-2"></div>
                <div class="background-circle circle-3"></div>
              </div>

              <div class="floating-bubble bubble-great-teacher">
                <div class="bubble-icon-wrapper bubble-icon-thumb">
                  <el-icon><Pointer /></el-icon>
                </div>
                <div class="bubble-content">
                  <p class="bubble-text">伟大的老师</p>
                  <el-rate
                    v-model="teacherRating"
                    disabled
                    size="small"
                  ></el-rate>
                </div>
              </div>

              <div class="floating-bubble bubble-happy-students">
                <div class="bubble-icon-wrapper bubble-icon-students">
                  <el-icon><Document /></el-icon>
                </div>
                <div class="bubble-content">
                  <p class="bubble-text">快乐的学生</p>
                  <div class="student-avatars">
                    <el-avatar :size="20" src="./picture/happy-good-looking-man-glasses-pointing-finger-left_176420-21192 1.png"></el-avatar>
                    <el-avatar :size="20" src="./picture/waist-up-shot-pretty-girl-smiles-pleasantly_273609-28224 3.png"></el-avatar>
                    <el-avatar :size="20" src="./picture/education-teachers-university-schools-concept_1258-14246 1.png"></el-avatar>
                    <span class="more-students">+10</span>
                  </div>
                </div>
              </div>

              <div class="floating-bubble bubble-weekly-progress">
                <div class="bubble-icon-wrapper bubble-icon-calendar">
                  <el-icon><Calendar /></el-icon>
                </div>
                <div class="bubble-content">
                  <p class="bubble-text">每周进度考试</p>
                  <p class="bubble-subtext">时间: 星期天12:00</p>
                </div>
              </div>
            </el-col>
          </el-row>
        </div>

        <!-- 快捷功能/搜索栏 -->
        <div class="quick-links-wrapper">
          <div class="links-container">
            <el-link :underline="false" class="link-item">
              <el-icon :size="22" color="#7952b3"><ChatDotSquare /></el-icon>
              <span class="link-text hidden-md-and-down">我的社区</span>
            </el-link>
            <el-link :underline="false" class="link-item">
              <el-icon :size="22" color="#0d6efd"><Monitor /></el-icon>
              <span class="link-text hidden-md-and-down">直播中心</span>
            </el-link>
            <el-link :underline="false" class="link-item">
              <el-icon :size="22" color="#d63384"><Goods /></el-icon>
              <span class="link-text hidden-md-and-down">我的小组</span>
            </el-link>
            <el-link :underline="false" class="link-item">
              <el-icon :size="22" color="#20c997"><ShoppingCartFull /></el-icon>
              <span class="link-text hidden-md-and-down">我的商城</span>
            </el-link>
          </div>
          <el-button type="primary" :icon="Search" circle size="large" />
        </div>

        <!-- 核心优势介绍 -->
        <div class="efficiency-section">
          <h3 class="section-title">让你的学习更高效</h3>
          <p class="section-description">
            构建AI技术驱动的终身学习生态,让每个人都能在成长的任何阶段都能找到属于自己的进阶路径
          </p>
        </div>

        <!-- 最受欢迎老师 -->
        <div class="page-section popular-teachers-section">
          <h3 class="section-title">最受欢迎的老师</h3>
          <p class="section-subtitle">好老师，帮你成为更好的自己</p>
          <el-row :gutter="24">
            <el-col v-for="teacher in popularTeachers" :key="teacher.id" :xs="24" :sm="12" :md="8">
              <el-card class="popular-teacher-card" shadow="hover">
                <div class="popular-teacher-card-content">
                  <el-avatar shape="square" :size="70" :src="teacher.avatar" />
                  <div class="popular-teacher-info">
                    <div class="info-header">
                      <h4 class="teacher-name">{{ teacher.name }}</h4>
                      <p class="teacher-field">{{ teacher.field }}</p>
                    </div>
                    <p v-if="teacher.bio" class="teacher-bio">{{ teacher.bio }}</p>
                  </div>
                </div>
              </el-card>
            </el-col>
          </el-row>
          <div class="load-more-container-center">
            <el-button type="primary" size="large">查看更多</el-button>
          </div>
        </div>


        <!-- 课程探索区 -->
        <div class="page-section explore-courses-section">
          <h3 class="section-title">探索你感兴趣的课程</h3>
          <div class="tag-list">
            <el-button type="primary" plain round>热门</el-button>
            <el-button plain round>艺术人文</el-button>
            <el-button plain round>金融经济</el-button>
            <el-button plain round>健康时尚</el-button>
            <el-button plain round>职业教育</el-button>
            <el-button plain round>自然科学</el-button>
            <el-button plain round class="hidden-xs-only">基础教育</el-button>
            <el-button plain round class="hidden-sm-and-down">高等教育</el-button>
          </div>
          <el-row :gutter="24">
            <el-col v-for="course in courses" :key="course.id" :xs="12" :sm="8" :md="6">
              <el-card class="course-card" shadow="hover" :body-style="{ padding: '0px' }">
                  <el-image :src="course.image" class="course-image" fit="cover" />
                  <div class="course-info">
                      <h4 class="course-title">{{ course.title }}</h4>
                      <div class="course-meta">
                          <span class="course-price">¥{{ course.price }}</span>
                          <el-button type="primary" link>查看</el-button>
                      </div>
                  </div>
              </el-card>
            </el-col>
          </el-row>
           <div class="load-more-container">
            <el-button type="primary" size="large">查看更多</el-button>
          </div>
        </div>
        
        <!-- [NEW ADDITION START] 精选推荐机构 Section -->
        <div class="page-section featured-institutions-section">
          <div class="section-header-left">
            <h3 class="section-title-left">精选推荐机构</h3>
            <p class="section-subtitle-left">提供最专业的学习环境与资源</p>
          </div>

          <!-- 使用 CSS Grid 实现原图中的复杂布局 -->
          <div class="institution-grid">
            <div 
              v-for="(item, index) in institutions" 
              :key="item.id" 
              :class="['inst-card', `inst-item-${index + 1}`]"
            >
              <el-image :src="item.image" fit="cover" class="inst-image" lazy loading="lazy" />
              <div class="inst-overlay">
                <h4 class="inst-name">{{ item.name }}</h4>
                <p class="inst-location">
                  <el-icon><Location /></el-icon>
                  <span>{{ item.location }}</span>
                </p>
              </div>
            </div>
          </div>
        </div>
        <!-- [NEW ADDITION END] -->

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
                        <img class="app-badge-icon" src="src/components/Homepage1/Teacher/picture/google-play 1.png" alt="Google Play Store">
                        <span class="app-badge-text">
                          <span>GET IT ON</span>
                          <strong>Google Play</strong>
                        </span>
                      </a>
                      <a href="#" class="app-badge">
                        <img class="app-badge-icon" src="src/components/Homepage1/Teacher/picture/苹果.png" alt="Apple App Store">
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
  ArrowRight, Search, Bell, ChatDotSquare, Monitor, Goods, ShoppingCartFull,
  Pointer, Document, Calendar, Location // Added Location icon
} from '@element-plus/icons-vue';
import 'element-plus/theme-chalk/display.css';

const teacherRating = ref(4.5);

const courses = ref([
  { id: 1, title: '微软 Power BI 数据分析师', instructor: '陈老师', price: '99', image: 'src/components/Homepage1/Person/picture/image (1).png' },
  { id: 2, title: 'UI/UX 设计全方位指南', instructor: '王设计师', price: '129', image: 'src/components/Homepage1/Person/picture/image (2).png' },
  { id: 3, title: '前端Vue3框架实战精讲', instructor: '李工', price: '99', image: 'src/components/Homepage1/Person/picture/image (3).png' },
  { id: 4, title: 'Python从入门到数据科学', instructor: '赵博士', price: '149', image: 'src/components/Homepage1/Person/picture/image (4).png' },
]);

// Data for Popular Teachers
const popularTeachers = ref([
  { id: 1, name: '于常宣', field: '艺术人文', bio: '毕业于国内知名师范院校的汉语言文学专业...', avatar: 'src/components/Homepage1/Teacher/picture/Rectangle 3.png' },
  { id: 2, name: '于常宣', field: '艺术人文', bio: null, avatar: 'src/components/Homepage1/Teacher/picture/Rectangle 3 (1).png' },
  { id: 3, name: '于常宣', field: '艺术人文', bio: null, avatar: 'src/components/Homepage1/Teacher/picture/Rectangle 3 (2).png' },
  { id: 4, name: '于常宣', field: '艺术人文', bio: null, avatar: 'src/components/Homepage1/Teacher/picture/Rectangle 3 (3).png' },
  { id: 5, name: '于常宣', field: '艺术人文', bio: null, avatar: 'src/components/Homepage1/Teacher/picture/Rectangle 3 (4).png' },
  { id: 6, name: '于常宣', field: '艺术人文', bio: null, avatar: 'src/components/Homepage1/Teacher/picture/Rectangle 3 (5).png' },
  { id: 7, name: '于常宣', field: '艺术人文', bio: null, avatar: 'src/components/Homepage1/Teacher/picture/Rectangle 3 (6).png' },
  { id: 8, name: '于常宣', field: '艺术人文', bio: null, avatar: 'src/components/Homepage1/Teacher/picture/Rectangle 3 (7).png' },
  { id: 9, name: '于常宣', field: '艺术人文', bio: null, avatar: 'src/components/Homepage1/Teacher/picture/Rectangle 3 (8).png' },
]);

// [NEW ADDITION] Data for Featured Institutions
// Order matches the visual layout: Top-Left, Center-Tall, Top-Right, Bottom-Left, Bottom-Right-1, Bottom-Right-2
const institutions = ref([
  { id: 1, name: '启航国际教育中心', location: '苏州市', image: 'src/components/Homepage1/Teacher/picture/Rectangle 4389.png' }, // Top-Left (Balcony)
  { id: 2, name: '启航国际教育中心', location: '苏州市', image: 'src/components/Homepage1/Teacher/picture/Rectangle 4391.png' }, // Center (Tall Yellow)
  { id: 3, name: '启航国际教育中心', location: '苏州市', image: 'src/components/Homepage1/Teacher/picture/Rectangle 4392.png' }, // Top-Right (Canal Wide)
  { id: 4, name: '启航国际教育中心', location: '苏州市', image: 'src/components/Homepage1/Teacher/picture/Rectangle 4383.png' }, // Bottom-Left (Aerial Roof)
  { id: 5, name: '启航国际教育中心', location: '苏州市', image: 'src/components/Homepage1/Teacher/picture/Rectangle 4394.png' }, // Bottom-Right-1 (Church)
  { id: 6, name: '启航国际教育中心', location: '苏州市', image: 'src/components/Homepage1/Teacher/picture/Rectangle 4395.png' }, // Bottom-Right-2 (Big Ben)
]);


const footerLinks = ref([
    {
        title: '公司',
        links: [ { name: '关于我们' }, { name: '职业' }, { name: '其他' } ]
    },
    {
        title: '常见问题',
        links: [ { name: '帮助/常见问题' }, { name: '问题' }, { name: '客服' } ]
    },
    {
        title: '更多',
        links: [ { name: '服务协议' }, { name: '隐私政策' }, { name: '商务洽谈' }, { name: '帮助中心' } ]
    }
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

/* 通用区块样式 */
.page-section {
  max-width: 1200px;
  margin: 0 auto 80px;
  padding: 0 20px;
}
.section-title {
  font-size: 28px;
  font-weight: 600;
  color: var(--el-text-color-primary);
  margin-bottom: 20px;
  text-align: center;
}
.section-description {
  font-size: 16px;
  color: var(--el-text-color-regular);
  line-height: 1.8;
  max-width: 800px;
  margin: 0 auto 60px;
  text-align: center;
}
.load-more-container {
  text-align: left;
  margin-top: 40px;
}
.load-more-container-center {
  text-align: center;
  margin-top: 40px;
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
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;
}
.logo-section { display: flex; align-items: center; }
.logo-section .logo-text {
  font-size: 20px;
  font-weight: bold;
  color: var(--el-text-color-primary);
  margin-right: 15px;
}
.ai-learning-btn {
  background-color: var(--el-color-primary-light-9);
  border-radius: 20px;
  padding: 5px 12px;
  font-size: 13px;
  display: flex;
  align-items: center;
  border: 1px solid var(--el-color-primary-light-7);
}
.ai-learning-btn .el-icon { margin-left: 5px; }
.search-section { display: flex; justify-content: center; }
.header-search-input {
  max-width: 400px;
  --el-input-border-radius: 20px;
}
.user-action-section {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 20px;
}
.popover-menu p {
  line-height: 30px; cursor: pointer; padding: 0 10px; margin: 0;
}
.popover-menu p:hover { background-color: var(--el-color-primary-light-9); }

/* Banner样式 */
.top-banner-wrapper {
  background: rgba(0, 86, 210, 1);
  padding: 50px 20px;
  text-align: center;
  position: relative;
  overflow: hidden;
}
.top-banner-row {
  max-width: 1400px;
  margin: 0 auto;
  position: relative;
  z-index: 1;
}
.banner-left { text-align: left; color: #ffffff; }
h1.banner-main-title {
  font-size: 52px; margin-bottom: 10px; line-height: 1.1; font-weight: 800; text-shadow: 0 2px 4px rgba(0,0,0,0.1);
}
h2.banner-sub-title {
  font-size: 38px; margin-bottom: 15px; line-height: 1.1; font-weight: 700; color: #a0cfff;
}
.banner-description-en { font-size: 18px; color: rgba(255, 255, 255, 0.85); margin-bottom: 10px; }
.banner-description-cn { font-size: 16px; font-weight: bold; color: rgba(255, 255, 255, 0.95); }
.banner-right-image-col {
  position: relative; width: 100%; max-width: 500px; margin: 0 auto;
  display: flex; justify-content: center; align-items: center; min-height: 400px; z-index: 10;
}
.banner-image-container {
  width: 350px; height: 350px; border-radius: 50%; overflow: hidden; position: relative;
  background-color: #fff; border: 10px solid #ffffff; box-shadow: 0 10px 40px rgba(0, 20, 50, 0.3); z-index: 5;
}
.banner-main-image { width: 100%; height: 100%; }
.background-circle { position: absolute; border-radius: 50%; z-index: 0; background-color: rgba(255, 255, 255, 0.05); }
.circle-1 {
  width: 400px; height: 400px; top: 50%; left: 50%;
  transform: translate(-50%, -50%); border: 4px solid rgba(255, 255, 255, 0.1);
}
.circle-2 {
  width: 380px; height: 380px; top: 50%; left: 50%;
  transform: translate(-50%, -50%); border: 2px dashed rgba(255, 255, 255, 0.2);
}
.circle-3 {
  width: 360px; height: 360px; top: 50%; left: 50%;
  transform: translate(-50%, -50%); border: 2px solid rgba(255, 255, 255, 0.3);
}
.floating-bubble {
  position: absolute; background-color: rgba(255, 255, 255, 0.98); backdrop-filter: blur(5px);
  border-radius: 12px; padding: 15px 20px; box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
  display: flex; align-items: center; gap: 10px; white-space: nowrap; font-size: 14px;
  color: var(--el-text-color-primary); z-index: 15; animation: float 3s ease-in-out infinite; border: 1px solid rgba(0, 0, 0, 0.05);
}
.bubble-icon-wrapper {
  width: 32px; height: 32px; border-radius: 50%; display: flex;
  align-items: center; justify-content: center; flex-shrink: 0;
}
.bubble-icon-wrapper .el-icon { font-size: 18px; }
.bubble-icon-thumb { background-color: var(--el-color-warning-light-8); color: var(--el-color-warning); }
.bubble-icon-students { background-color: var(--el-color-primary-light-8); color: var(--el-color-primary); }
.bubble-icon-calendar { background-color: var(--el-color-success-light-8); color: var(--el-color-success); }
.bubble-text { margin: 0; font-weight: bold; }
.bubble-subtext { margin: 0; font-size: 12px; color: var(--el-text-color-secondary); }
.student-avatars { display: flex; align-items: center; }
.student-avatars .el-avatar { border: 2px solid #ffffff; }
.student-avatars .el-avatar:not(:first-child) { margin-left: -10px; }
.more-students { margin-left: 10px; font-size: 13px; color: var(--el-text-color-secondary); font-weight: bold; }
.bubble-great-teacher { top: 10%; left: 0; animation-delay: 0.5s; }
.bubble-happy-students { top: 15%; right: 0; animation-delay: 1.5s; }
.bubble-weekly-progress { bottom: 10%; left: 10%; animation-delay: 2.5s; }
@keyframes float { 50% { transform: translateY(-8px); } }

/* 快捷功能/搜索栏样式 */
.quick-links-wrapper {
  display: flex; justify-content: space-between; align-items: center;
  max-width: 800px; height: 60px; margin: -30px auto 0; padding: 0 10px 0 25px;
  background-color: #ffffff; border-radius: 30px; box-shadow: 0 8px 20px rgba(0, 0, 0, 0.08);
  position: relative; z-index: 20;
}
.links-container {
  display: flex; align-items: center; flex: 1;
  justify-content: space-around; margin-right: 20px;
}
.link-item { font-size: 16px; font-weight: 500; padding: 5px 10px; }
.link-text { margin-left: 8px; }

/* 核心优势介绍 */
.efficiency-section { margin: 80px auto; padding: 0 20px; text-align: center; }

/* 最受欢迎老师样式 */
.popular-teachers-section .section-subtitle {
  text-align: center; color: var(--el-text-color-secondary);
  margin-top: -10px; margin-bottom: 40px;
}
.popular-teacher-card { margin-bottom: 24px; border-radius: 8px; border: 1px solid var(--el-border-color-lighter); }
.popular-teacher-card .el-card__body { padding: 15px; }
.popular-teacher-card-content { display: flex; align-items: center; gap: 16px; }
.popular-teacher-info { flex: 1; display: flex; flex-direction: column; justify-content: center; min-height: 70px; }
.popular-teacher-info .info-header { display: flex; align-items: center; gap: 8px; margin-bottom: 4px; }
.popular-teacher-info .teacher-name { font-size: 16px; font-weight: 600; margin: 0; }
.popular-teacher-info .teacher-field { font-size: 14px; color: var(--el-text-color-secondary); margin: 0; }
.popular-teacher-info .teacher-bio {
  font-size: 13px; color: var(--el-text-color-regular); margin: 0; line-height: 1.5;
  overflow: hidden; text-overflow: ellipsis; display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical;
}

/* 课程卡片 */
.course-card {
  margin-bottom: 24px; border-radius: 12px;
  overflow: hidden; border: 1px solid var(--el-border-color-lighter);
}
.course-image { width: 100%; height: 150px; }
.course-info { padding: 16px; }
.course-title { font-size: 16px; font-weight: 500; margin: 0 0 10px; }
.course-meta { display: flex; justify-content: space-between; align-items: center; }
.course-price { font-size: 18px; font-weight: bold; color: var(--el-color-danger); }
.tag-list {
    display: flex; flex-wrap: wrap;
    justify-content: center; gap: 12px;
    margin-bottom: 40px;
}

/* [NEW ADDITION START] 精选推荐机构样式 */
/* 标题左对齐 */
.featured-institutions-section { margin-bottom: 100px; }
.section-header-left { text-align: left; margin-bottom: 30px; }
.section-title-left { font-size: 28px; font-weight: 600; color: var(--el-text-color-primary); margin: 0 0 10px; }
.section-subtitle-left { font-size: 14px; color: var(--el-text-color-secondary); margin: 0; }

/* Grid 容器 - PC端布局 */
.institution-grid {
  display: grid;
  gap: 20px;
  /* 定义4列，模拟原图的视觉宽度比例 */
  grid-template-columns: 1.2fr 1.5fr 1fr 1fr;
  /* 定义两行固定高度，形成 masonry 效果 */
  grid-template-rows: 240px 240px;
}

/* 卡片基础样式 */
.inst-card {
  position: relative; border-radius: 8px; overflow: hidden; cursor: pointer;
  /* 确保 Element Image 组件占满容器 */
  display: flex;
}
.inst-image { width: 100%; height: 100%; display: block; transition: transform 0.5s ease; }
.inst-card:hover .inst-image { transform: scale(1.05); }

/* Grid 项目定位 (对应数组索引 0-5) */
/* 左上 */
.inst-item-1 { grid-column: 1; grid-row: 1; }
/* 中间高图 (跨两行) */
.inst-item-2 { grid-column: 2; grid-row: 1 / span 2; }
/* 右上宽图 (跨右侧两列) */
.inst-item-3 { grid-column: 3 / span 2; grid-row: 1; }
/* 左下 */
.inst-item-4 { grid-column: 1; grid-row: 2; }
/* 右下左 */
.inst-item-5 { grid-column: 3; grid-row: 2; }
/* 右下右 */
.inst-item-6 { grid-column: 4; grid-row: 2; }

/* 底部遮罩和文字 */
.inst-overlay {
  position: absolute; bottom: 0; left: 0; width: 100%; padding: 24px 20px;
  /* 黑色渐变背景提高文字可读性 */
  background: linear-gradient(to top, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.4) 50%, transparent 100%);
  color: #fff; text-align: left; box-sizing: border-box; pointer-events: none;
}
.inst-name {
  font-size: 20px; font-weight: 600; margin: 0 0 8px;
  text-shadow: 0 1px 3px rgba(0,0,0,0.5); letter-spacing: 0.5px;
}
.inst-location {
  font-size: 13px; display: flex; align-items: center; gap: 4px; margin: 0;
  opacity: 0.9; font-weight: 400;
}
/* [NEW ADDITION END] */


/* 页脚样式 */
.site-footer {
    background-color: var(--el-fill-color-lighter); padding: 60px 20px;
    border-top: 1px solid var(--el-border-color-light);
}
.footer-container { max-width: 1200px; margin: 0 auto; }
.footer-col { margin-bottom: 30px; }
.footer-brand h3 {
    font-size: 32px; font-weight: bold;
    color: var(--el-text-color-primary); margin: 0 0 10px;
}
.footer-brand p { font-size: 14px; color: var(--el-text-color-regular); margin: 0; }
.footer-links h4 {
    font-size: 16px; font-weight: 600;
    color: var(--el-text-color-primary); margin: 0 0 20px;
}
.footer-links ul { list-style: none; padding: 0; margin: 0; }
.footer-links li { margin-bottom: 12px; }
.footer-links .el-link {
    --el-link-text-color: var(--el-text-color-regular); font-weight: 400;
}
.footer-links .el-link:hover { --el-link-text-color: var(--el-color-primary); }
.footer-social h4 {
    font-size: 16px; font-weight: 600;
    color: var(--el-text-color-primary); margin: 20px 0;
}
.social-icons { display: flex; gap: 15px; margin-bottom: 20px; }
.social-icon {
    display: flex; align-items: center; justify-content: center;
    width: 40px; height: 40px; border-radius: 50%; background-color: #fff;
    color: var(--el-text-color-secondary); box-shadow: var(--el-box-shadow-light); transition: all 0.3s ease;
}
.social-icon:hover {
    transform: translateY(-3px); box-shadow: var(--el-box-shadow);
    color: var(--el-text-color-primary);
}
.social-icon.instagram {
    background: linear-gradient(45deg, #f09433 0%,#e6683c 25%,#dc2743 50%,#cc2366 75%,#bc1888 100%); color: #fff;
}
.social-icon.instagram:hover { opacity: 0.9; }
.app-badges { display: flex; gap: 15px; flex-wrap: wrap; }
.app-badge {
    display: inline-flex; align-items: center; background-color: #404040;
    color: #ffffff; padding: 8px 16px; border-radius: 20px; text-decoration: none;
    transition: background-color 0.2s;
}
.app-badge:hover { background-color: #2c2c2c; }
.app-badge-icon { width: 24px; height: 24px; margin-right: 12px; }
.app-badge-text {
    display: flex; flex-direction: column;
    text-align: left; line-height: 1.2;
}
.app-badge-text span { font-size: 10px; }
.app-badge-text strong { font-size: 16px; font-weight: 600; }


/* === 响应式适配 === */
@media (max-width: 992px) {
    .section-title { font-size: 26px; }
    h1.banner-main-title { font-size: 42px; }
    h2.banner-sub-title { font-size: 32px; }
    .banner-right-image-col { min-height: 450px; }
    .banner-image-container { width: 320px; height: 320px; }
    .background-circle.circle-1 { width: 380px; height: 380px; }
    .floating-bubble { padding: 12px 18px; font-size: 13px; transform: scale(0.9); }
    .bubble-great-teacher { left: -10px; }
    .bubble-happy-students { right: -20px; }
    .bubble-weekly-progress { bottom: 8%; }
    
    /* [NEW] 老师模块响应式 */
    .popular-teacher-info .info-header { flex-direction: column; align-items: flex-start; gap: 2px; }

    /* [NEW] 机构模块响应式 - 平板 (切换为规则的 2列 网格) */
    .section-title-left { font-size: 26px; }
    .institution-grid {
      grid-template-columns: 1fr 1fr; /* 2列 */
      grid-template-rows: repeat(3, 220px); /* 3行，固定高度 */
      gap: 16px;
    }
    /* 重置所有项的跨行跨列，按顺序排列 */
    .inst-item-1, .inst-item-2, .inst-item-3, .inst-item-4, .inst-item-5, .inst-item-6 {
      grid-column: auto; grid-row: auto;
    }
    /* 平板上让第3个图跨两列增加点变化，或者保持统一 */
    .inst-item-3 { grid-column: 1 / span 2; }
    .inst-name { font-size: 18px; }
}

@media (max-width: 767px) {
    .header { height: auto; padding: 10px 15px; }
    .header-content { flex-wrap: wrap; }
    .search-section { order: 3; flex: 1 0 100%; margin-top: 10px; }
    .header-search-input { max-width: 100%; }
    
    .top-banner-wrapper { padding: 30px 15px; }
    .banner-left { text-align: center; margin-bottom: 30px; }
    h1.banner-main-title { font-size: 38px; }
    h2.banner-sub-title { font-size: 28px; }
    .banner-right-image-col { min-height: 350px; }
    .banner-image-container { width: 280px; height: 280px; }
    .background-circle.circle-1 { width: 330px; height: 330px; }
    .floating-bubble { padding: 10px 15px; font-size: 12px; }
    .bubble-great-teacher { top: 5%; left: 5%; }
    .bubble-happy-students { top: 8%; right: 5%; }
    .bubble-weekly-progress { bottom: 5%; left: 8%; }

    .quick-links-wrapper { width: 95%; }
    .page-section { margin-bottom: 60px; }
    .section-title { font-size: 24px; }
    
    .footer-col { text-align: center; }
    .footer-social, .footer-brand { width: 100%; }
    .social-icons, .app-badges { justify-content: center; }
    
    /* [NEW] 机构模块响应式 - 手机 (1列) */
    .section-title-left { font-size: 24px; text-align: center; }
    .section-subtitle-left { text-align: center; }
    .section-header-left { margin-bottom: 20px; }
    .institution-grid {
      grid-template-columns: 1fr;
      grid-auto-rows: 200px; /* 自动行高 */
      grid-template-rows: auto; /* 重置固定行定义 */
      gap: 12px;
    }
    .inst-item-3 { grid-column: auto; } /* 重置平板的跨列 */
    .inst-overlay { padding: 15px; }
    .inst-name { font-size: 17px; }
}
</style>