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
                  src="https://img.js.design/assets/img/64db6e69d0d62d05779148d8.png"
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
                    <el-avatar :size="20" src="https://cube.elemecdn.com/0/88/03b0d40e0df97365330aa5fd22429.jpeg"></el-avatar>
                    <el-avatar :size="20" src="https://cube.elemecdn.com/0/88/03b0d40e0df97365330aa5fd22429.jpeg"></el-avatar>
                    <el-avatar :size="20" src="https://cube.elemecdn.com/0/88/03b0d40e0df97365330aa5fd22429.jpeg"></el-avatar>
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
        <div class="search-bar-wrapper">
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
          <h3 class="efficiency-title">让你的学习更高效</h3>
          <p class="efficiency-description">
            构建AI技术驱动的终身学习生态,让每个人都能在成长的任何阶段都能找到属于自己的进阶路径
          </p>
        </div>
        
        <!-- AI 智能引导 -->
        <div class="ai-prompt-container">
          <div class="ai-prompt-bar">
            <span class="prompt-text">是什么让您今天来到学会？</span>
            <div class="prompt-buttons">
              <el-button plain class="prompt-button">
                <span class="prompt-icon-wrapper"><el-icon><MagicStick /></el-icon></span>
                学什么？
              </el-button>
              <el-button plain class="prompt-button">
                <span class="prompt-icon-wrapper"><el-icon><Memo /></el-icon></span>
                怎么学？
              </el-button>
              <el-button plain class="prompt-button">
                <span class="prompt-icon-wrapper"><el-icon><QuestionFilled /></el-icon></span>
                为什么学？
              </el-button>
              <el-button plain class="prompt-button">
                <span class="prompt-icon-wrapper"><el-icon><TrendCharts /></el-icon></span>
                学了干什么？
              </el-button>
            </div>
          </div>
        </div>

        <!-- 课程探索区 -->
        <div class="explore-courses-section">
          <h3 class="explore-title">探索你感兴趣的课程</h3>
          <div class="tag-list">
            <span class="tag-label">标签：</span>
            <el-button type="primary">热门</el-button>
            <el-button plain>艺术人文</el-button>
            <el-button plain>金融经济</el-button>
            <el-button plain>健康时尚</el-button>
            <el-button plain>职业教育</el-button>
            <el-button plain>自然科学</el-button>
            <el-button plain>基础教育</el-button>
            <el-button plain>高等教育</el-button>
            <el-button plain>个人发展</el-button>
            <el-button plain>兴趣爱好</el-button>
          </div>
          
          <el-row :gutter="24">
            <el-col v-for="course in courses" :key="course.id" :xs="12" :sm="8" :md="6">
              <el-card shadow="hover" class="course-card" :body-style="{ padding: '0px' }">
                <el-image :src="course.image" fit="cover" class="course-image"/>
                <div class="course-info">
                  <h4 class="course-title">{{ course.title }}</h4>
                  <p class="course-instructor">{{ course.instructor }}</p>
                  <div class="course-meta">
                    <span class="course-price">¥{{ course.price }} <span class="price-unit">/节</span></span>
                    <el-button type="primary" link>免费详情</el-button>
                  </div>
                </div>
              </el-card>
            </el-col>
          </el-row>
          
          <div class="load-more-container">
            <el-button type="primary" size="large">查看更多</el-button>
          </div>
        </div>

        <!-- 对您可能有帮助的老师 -->
        <div class="helpful-teachers-section">
          <div class="teachers-content-wrapper">
            <el-row :gutter="40" align="middle">
              <!-- Left Text Column -->
              <el-col :xs="24" :sm="24" :md="8" :lg="6">
                <div class="teacher-intro-text">
                  <h3 class="teacher-section-title">对您可能有帮助的老师</h3>
                  <p class="teacher-section-description">
                    广纳各界优秀教师力量，整合形成高品质、多维度的师资资源池
                  </p>
                  <el-button type="primary" size="large">查看更多</el-button>
                </div>
              </el-col>
              <!-- Right Teacher Cards Column -->
              <el-col :xs="24" :sm="24" :md="16" :lg="18">
                <el-row :gutter="24">
                  <el-col v-for="teacher in teachers" :key="teacher.id" :xs="24" :sm="12" :md="12" :lg="8">
                     <div class="teacher-card-wrapper">
                        <el-card class="teacher-card" shadow="never" :body-style="{ padding: '0px' }">
                            <div class="teacher-image-container">
                                <el-image :src="teacher.image" fit="contain" class="teacher-image"/>
                            </div>
                            <div class="teacher-info">
                                <h4 class="teacher-name">{{ teacher.name }} · {{ teacher.field }}</h4>
                                <p class="teacher-description">{{ teacher.description }}</p>
                            </div>
                        </el-card>
                     </div>
                  </el-col>
                </el-row>
              </el-col>
            </el-row>
          </div>
        </div>
        
        <!-- [新增] Nearby Venues Section -->
        <div class="nearby-venues-section">
          <h3 class="section-title">附近适合您的场馆</h3>
          <el-row :gutter="24">
            <el-col v-for="venue in venues" :key="venue.id" :xs="24" :sm="12" :md="8">
              <el-card class="venue-card" shadow="hover" :body-style="{ padding: '0px' }">
                <el-image :src="venue.image" class="venue-image" fit="cover"/>
                <div class="venue-info-body">
                  <h4 class="venue-name">{{ venue.name }} ({{ venue.type }})</h4>
                  <p class="venue-detail">
                    <el-icon><Location /></el-icon>
                    <span>{{ venue.address }}</span>
                  </p>
                  <p class="venue-detail">
                    <el-icon><User /></el-icon>
                    <span>{{ venue.phone }}</span>
                  </p>
                </div>
              </el-card>
            </el-col>
          </el-row>
          <div class="load-more-container text-center">
            <el-button type="primary" size="large">查看更多</el-button>
          </div>
        </div>

      </el-main>
    </el-container>
    
    <!-- [新增] Footer -->
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
                        <img class="app-badge-icon" src="./picture/google-play 1.png" alt="">
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
  ArrowRight,
  Search,
  Bell,
  ChatDotSquare,
  Monitor,
  Goods,
  ShoppingCartFull,
  Pointer,
  Document,
  Calendar,
  MagicStick,
  Memo,
  QuestionFilled,
  TrendCharts,
  Location, // [新增]
  User,     // [新增]
} from '@element-plus/icons-vue';
import 'element-plus/theme-chalk/display.css'; // 引入响应式隐藏类

const teacherRating = ref(4.5);

// 课程卡片模拟数据
const courses = ref([
  { id: 1, title: '微软 Power BI 数据分析师', instructor: '陈老师', price: '99', image: 'src/components/Homepage1/Person/picture/image (1).png' },
  { id: 2, title: 'UI/UX 设计全方位指南', instructor: '王设计师', price: '129', image: 'src/components/Homepage1/Person/picture/image (2).png' },
  { id: 3, title: '前端Vue3框架实战精讲', instructor: '李工', price: '99', image: 'src/components/Homepage1/Person/picture/image (3).png' },
  { id: 4, title: 'Python从入门到数据科学', instructor: '赵博士', price: '149', image: 'src/components/Homepage1/Person/picture/image (4).png' },
]);

// 教师卡片模拟数据
const teachers = ref([
  { id: 1, name: '李明', field: '基础教育', description: '毕业于国内知名师范院校的汉语言文学专业，系统学习了现代汉语，毕业于国内知名师范院校的汉语言文学专业，系统学习了现代汉语', image: 'src/components/Homepage1/Person/picture/1.png.png.png' },
  { id: 2, name: '李明', field: '基础教育', description: '毕业于国内知名师范院校的汉语言文学专业，系统学习了现代汉语，毕业于国内知名师范院校的汉语言文学专业，系统学习了现代汉语', image: 'src/components/Homepage1/Person/picture/1.png.png.png' },
  { id: 3, name: '李明', field: '基础教育', description: '毕业于国内知名师范院校的汉语言文学专业，系统学习了现代汉语，毕业于国内知名师范院校的汉语言文学专业，系统学习了现代汉语', image: 'src/components/Homepage1/Person/picture/1.png.png.png' },
]);

// [新增] 场馆数据
const venues = ref([
  { id: 1, name: '飞羽竞技场', type: '篮球场馆', address: '苏州市工业园区独墅湖校区258号', phone: '19552698532', image: 'src/components/Homepage1/Person/picture/矩形 17.png' },
  { id: 2, name: '飞羽竞技场', type: '篮球场馆', address: '苏州市工业园区独墅湖校区258号', phone: '19552698532', image: 'src/components/Homepage1/Person/picture/矩形 17 (1).png' },
  { id: 3, name: '飞羽竞技场', type: '篮球场馆', address: '苏州市工业园区独墅湖校区258号', phone: '19552698532', image: 'src/components/Homepage1/Person/picture/矩形 17 (2).png' },
]);

// [新增] 页脚数据
const footerLinks = ref([
    {
        title: '公司',
        links: [
            { name: '关于我们', url: '#' },
            { name: '职业', url: '#' },
            { name: '其他', url: '#' },
        ]
    },
    {
        title: '常见问题',
        links: [
            { name: '帮助/常见问题', url: '#' },
            { name: '问题', url: '#' },
            { name: '客服', url: '#' },
        ]
    },
    {
        title: '更多',
        links: [
            { name: '服务协议', url: '#' },
            { name: '隐私政策', url: '#' },
            { name: '商务洽谈', url: '#' },
            { name: '帮助中心', url: '#' },
        ]
    }
]);

</script>

<style scoped>
/* 全局布局 */
.common-layout {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: #f7f8fa; /* 使用更柔和的背景色 */
}

.top-black-bar {
  width: 100%;
  height: 30px;
  background-color: rgba(56, 56, 56, 1);
  position: sticky;
  top: 0;
  z-index: 1001;
}

.main-container {
  flex: 1;
}

/* Header样式 */
.header {
  background-color: #ffffff;
  box-shadow: 0 2px 12px 0 rgba(0,0,0,0.06);
  padding: 0 20px;
  height: 60px;
  display: flex;
  align-items: center;
  position: sticky;
  top: 30px;
  z-index: 1000;
}

.header-content {
  max-width: 1400px;
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
  background-color: #f5f5f7;
  box-shadow: none !important;
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
  cursor: pointer;
}

.popover-menu p {
  line-height: 30px;
  cursor: pointer;
  padding: 0 10px;
  margin: 0;
}
.popover-menu p:hover {
  background-color: var(--el-color-primary-light-9);
}

/* 主内容区 */
.main-content {
  padding: 0;
}

/* 顶部Banner */
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

.banner-left {
  text-align: left;
  color: #ffffff;
}
.banner-left h1 {
  font-size: 52px;
  margin-bottom: 10px;
  line-height: 1.1;
  font-weight: 800;
  text-shadow: 0 2px 4px rgba(0,0,0,0.1);
}
.banner-left h2 {
  font-size: 38px;
  margin-bottom: 15px;
  line-height: 1.1;
  font-weight: 700;
  color: #a0cfff;
}
.banner-description-en {
  font-size: 18px;
  color: rgba(255, 255, 255, 0.85);
  margin-bottom: 10px;
}
.banner-description-cn {
  font-size: 16px;
  font-weight: bold;
  color: rgba(255, 255, 255, 0.95);
}

/* 右侧图片区域 */
.banner-right-image-col {
  position: relative;
  width: 100%;
  max-width: 500px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 400px;
  z-index: 10;
}

.banner-image-container {
  width: 350px;
  height: 350px;
  border-radius: 50%;
  overflow: hidden;
  position: relative;
  background-color: #fff;
  border: 10px solid #ffffff;
  box-shadow: 0 10px 40px rgba(0, 20, 50, 0.3);
  z-index: 5;
}

.banner-main-image {
  width: 100%;
  height: 100%;
}

.background-circle {
  position: absolute;
  border-radius: 50%;
  z-index: 0;
  background-color: rgba(255, 255, 255, 0.05);
}

.circle-1 {
  width: 400px;
  height: 400px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border: 4px solid rgba(255, 255, 255, 0.1);
}
.circle-2 {
  width: 380px;
  height: 380px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border: 2px dashed rgba(255, 255, 255, 0.2);
}
.circle-3 {
  width: 360px;
  height: 360px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border: 2px solid rgba(255, 255, 255, 0.3);
}

/* 浮动气泡 */
.floating-bubble {
  position: absolute;
  background-color: rgba(255, 255, 255, 0.98);
  backdrop-filter: blur(5px);
  border-radius: 12px;
  padding: 15px 20px;
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
  display: flex;
  align-items: center;
  gap: 10px;
  white-space: nowrap;
  font-size: 14px;
  color: var(--el-text-color-primary);
  z-index: 15;
  animation: float 3s ease-in-out infinite;
  border: 1px solid rgba(0, 0, 0, 0.05);
}

.bubble-icon-wrapper {
  width: 32px;
  height: 32px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}
.bubble-icon-wrapper .el-icon { font-size: 18px; }

.bubble-icon-thumb {
  background-color: var(--el-color-warning-light-8);
  color: var(--el-color-warning);
}
.bubble-icon-students {
  background-color: var(--el-color-primary-light-8);
  color: var(--el-color-primary);
}
.bubble-icon-calendar {
  background-color: var(--el-color-success-light-8);
  color: var(--el-color-success);
}

.bubble-text {
  margin: 0;
  font-weight: bold;
}
.bubble-subtext {
  margin: 0;
  font-size: 12px;
  color: var(--el-text-color-secondary);
}

.student-avatars {
  display: flex;
  align-items: center;
}
.student-avatars .el-avatar {
  border: 2px solid #ffffff;
}
.student-avatars .el-avatar:not(:first-child) {
  margin-left: -10px;
}
.more-students {
  margin-left: 10px;
  font-size: 13px;
  color: var(--el-text-color-secondary);
  font-weight: bold;
}

.bubble-great-teacher { top: 10%; left: 0; animation-delay: 0.5s; }
.bubble-happy-students { top: 15%; right: 0; animation-delay: 1.5s; }
.bubble-weekly-progress { bottom: 10%; left: 10%; animation-delay: 2.5s; }

@keyframes float {
  50% { transform: translateY(-8px); }
}

/* 快捷功能/搜索栏样式 */
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
.link-text { margin-left: 8px; }

/* 核心优势介绍 */
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

/* AI 智能引导 */
.ai-prompt-container {
  padding: 0 20px;
}
.ai-prompt-bar {
  max-width: 1000px;
  margin: 20px auto 40px;
  padding: 12px 20px;
  border: 1px solid var(--el-border-color-lighter);
  border-radius: 50px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-wrap: wrap;
  gap: 15px;
  background-color: #fff;
  box-shadow: var(--el-box-shadow-light);
}

.prompt-text {
  font-size: 16px;
  color: var(--el-text-color-regular);
  margin-right: 10px;
  flex-shrink: 0;
}

.prompt-buttons {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 12px;
  flex-grow: 1;
}

.prompt-button .prompt-icon-wrapper {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  font-size: 14px;
  background-color: var(--el-color-primary);
  color: #fff;
  border-radius: 6px;
  margin-right: 8px;
}

/* 课程探索区 */
.explore-courses-section {
  max-width: 1200px;
  margin: 60px auto 80px; 
  padding: 0 20px;
}

.explore-title {
  font-size: 28px;
  font-weight: 600;
  color: var(--el-text-color-primary);
  margin-bottom: 20px;
}

.tag-list {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 12px;
  margin-bottom: 40px;
}

.tag-label {
  font-size: 14px;
  color: var(--el-text-color-secondary);
  margin-right: 4px;
  flex-shrink: 0;
}

.course-card {
  margin-bottom: 24px;
  border-radius: 12px;
  overflow: hidden;
  border: 1px solid var(--el-border-color-lighter);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}
.course-card:hover {
  transform: translateY(-5px);
  box-shadow: var(--el-box-shadow);
}

.course-image {
  width: 100%;
  height: 160px;
  display: block;
}

.course-info { padding: 16px; }

.course-title {
  font-size: 16px;
  font-weight: 600;
  color: var(--el-text-color-primary);
  margin: 0 0 8px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.course-instructor {
  font-size: 13px;
  color: var(--el-text-color-secondary);
  margin: 0 0 16px;
}

.course-meta {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.course-price {
  font-size: 18px;
  font-weight: bold;
  color: var(--el-color-danger);
}
.price-unit {
  font-size: 13px;
  color: var(--el-text-color-secondary);
  font-weight: normal;
  margin-left: 2px;
}
.load-more-container {
  text-align: left;
  margin-top: 20px;
}
.load-more-container.text-center {
  text-align: center;
}

/* === [OPTIMIZED] 教师区块样式 === */
.helpful-teachers-section {
  padding: 10px 0;
  background: rgba(242, 246, 253, 1);
}

.teachers-content-wrapper {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

.teacher-intro-text {
  text-align: left;
}

.teacher-section-title {
  font-size: 28px;
  font-weight: 600;
  color: var(--el-text-color-primary);
  margin-bottom: 16px;
  line-height: 1.4;
}

.teacher-section-description {
  font-size: 15px;
  color: var(--el-text-color-regular);
  line-height: 1.8;
  margin-bottom: 32px;
}

.teacher-card-wrapper {
  margin-bottom: 24px;
  background: rgba(242, 246, 253, 1);
}

.teacher-card {
  background-color: transparent;
  border: none;
  border-radius: 8px;
  overflow: hidden;
  transition: background-color 0.3s ease, box-shadow 0.3s ease;
}

.teacher-card-wrapper:hover .teacher-card {
  background-color: #ffffff;
  box-shadow: var(--el-box-shadow);
}
.teacher-card-wrapper {
  transition: transform 0.3s ease;
}
.teacher-card-wrapper:hover {
  transform: translateY(-8px);
}

.teacher-image-container {
  position: relative;
  height: 220px;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  overflow: hidden;
}

.teacher-image {
  position: relative;
  z-index: 2;
  height: 210px;
  width: auto;
}

.teacher-image-container::before,
.teacher-image-container::after {
  content: '';
  position: absolute;
  left: -5%;
  width: 110%;
  height: 120px;
  background-color: var(--el-color-primary);
  transition: all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);
}

.teacher-image-container::before {
  z-index: 1;
  bottom: 0;
  clip-path: polygon(0 25%, 100% 0, 100% 100%, 0% 100%);
}

.teacher-image-container::after {
  z-index: 0;
  bottom: -10px;
  transform: rotate(-4deg) scale(1.1);
  background-color: var(--el-color-primary-light-3);
}

.teacher-card-wrapper:hover .teacher-image-container::before {
  transform: translateY(-5px) rotate(2deg);
}

.teacher-card-wrapper:hover .teacher-image-container::after {
  transform: translateY(-5px) rotate(-2deg) scale(1.15);
}

.teacher-info {
  padding: 24px;
}

.teacher-name {
  font-size: 18px;
  font-weight: 600;
  margin: 0 0 12px;
  color: var(--el-text-color-primary);
}

.teacher-description {
  font-size: 14px;
  color: var(--el-text-color-secondary);
  line-height: 1.7;
  margin: 0;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 4;
  overflow: hidden;
  text-overflow: ellipsis;
  min-height: 76px;
}

/* [新增] 附近场馆区 */
.nearby-venues-section {
  max-width: 1200px;
  margin: 60px auto 80px;
  padding: 0 20px;
}
.section-title {
  font-size: 28px;
  font-weight: bold;
  color: var(--el-text-color-primary);
  margin-bottom: 25px;
}
.venue-card {
  margin-bottom: 24px;
  border-radius: var(--el-card-border-radius);
  overflow: hidden; 
}

.venue-image {
  width: 100%;
  height: 200px;
  display: block;
}

.venue-info-body {
  padding: 20px;
}

.venue-name {
  font-size: 18px;
  font-weight: 600;
  color: var(--el-text-color-primary);
  margin: 0 0 15px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.venue-detail {
  display: flex;
  align-items: center;
  font-size: 14px;
  color: var(--el-text-color-secondary);
  margin: 0 0 10px;
}

.venue-detail .el-icon {
  margin-right: 8px;
  font-size: 16px;
  flex-shrink: 0; 
}

.venue-detail span {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.venue-detail:last-child {
  margin-bottom: 0;
}


/* [新增] 页脚 */
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
    flex-wrap: wrap;
}

.app-badge {
    display: inline-flex;
    align-items: center;
    background-color: #404040;
    color: #ffffff;
    padding: 8px 16px;
    border-radius: 20px;
    text-decoration: none;
    transition: background-color 0.2s;
}

.app-badge:hover {
    background-color: #2c2c2c;
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


/* === 响应式适配 === */
@media (max-width: 992px) {
  .banner-left h1 { font-size: 42px; }
  .banner-left h2 { font-size: 32px; }
  .banner-right-image-col { min-height: 450px; }
  .banner-image-container { width: 320px; height: 320px; }
  .background-circle.circle-1 { width: 380px; height: 380px; }
  .floating-bubble { padding: 12px 18px; font-size: 13px; }
  .bubble-great-teacher { left: -10px; }
  .bubble-happy-students { right: -20px; }
  .bubble-weekly-progress { bottom: 8%; }

  .efficiency-title, .explore-title, .teacher-section-title, .section-title { font-size: 26px; }
  .ai-prompt-bar { justify-content: center; }

  .teacher-intro-text {
    text-align: center;
    margin-bottom: 40px;
  }
}

@media (max-width: 767px) {
  .header { height: auto; padding: 10px 15px; }
  .header-content { flex-wrap: wrap; }
  .logo-section { flex: 1 0 50%; }
  .search-section { order: 3; flex: 1 0 100%; margin-top: 10px; }
  .user-action-section { flex: 1 0 50%; }
  .header-search-input { max-width: 100%; }

  .top-banner-wrapper { padding: 30px 15px; }
  .banner-left { text-align: center; margin-bottom: 30px; }
  .banner-left h1 { font-size: 38px; }
  .banner-left h2 { font-size: 28px; }

  .banner-right-image-col { min-height: 350px; }
  .banner-image-container { width: 280px; height: 280px; }
  .background-circle.circle-1 { width: 330px; height: 330px; }
  .floating-bubble { padding: 10px 15px; font-size: 12px; }
  .bubble-great-teacher { top: 5%; left: 5%; }
  .bubble-happy-students { top: 8%; right: 5%; }
  .bubble-weekly-progress { bottom: 5%; left: 8%; }

  .search-bar-wrapper { padding: 0 8px; height: 54px; }
  .links-container { margin-right: 10px; }
  .link-item .el-icon { font-size: 18px; }

  .efficiency-title, .explore-title, .teacher-section-title, .section-title { font-size: 24px; }
  .section-title { text-align: center; } /* 新增场馆标题居中 */
  .efficiency-description { font-size: 14px; }
  .ai-prompt-bar { flex-direction: column; align-items: stretch; border-radius: 20px; }
  .prompt-text { text-align: center; margin-bottom: 5px; }
  .prompt-buttons { justify-content: center; }

  .course-image { height: 120px; }
  .helpful-teachers-section { padding: 60px 0; }

  /* 页脚响应式 */
  .footer-col { text-align: center; }
  .footer-social, .footer-brand { width: 100%; }
  .social-icons, .app-badges { justify-content: center; }
}
</style>