<template>
  <div class="common-layout">
    <el-container class="main-container">
      <HomePageHead />
      <el-main class="main-content">
        <HomePageTopBar />
        <HomePageSearchBar />
        <div class="efficiency-section">
          <h3 class="efficiency-title">让你的学习更高效</h3>
          <p class="efficiency-description">
            构建AI技术驱动的终身学习生态,让每个人都能在成长的任何阶段都能找到属于自己的进阶路径
          </p>
        </div>

        <InterestClass />

        <div class="explore-teachers-section">
          <h3 class="section-title">探索你感兴趣的老师</h3>

          <!-- Filter Bar -->
          <div class="filter-bar">
            <div class="filter-options">
              <span class="filter-label">领域:</span>
              <el-dropdown>
                <el-button plain>
                  全部领域<el-icon class="el-icon--right"><arrow-down /></el-icon>
                </el-button>
                <template #dropdown>
                  <el-dropdown-menu>
                    <el-dropdown-item>艺术人文</el-dropdown-item>
                    <el-dropdown-item>经济金融</el-dropdown-item>
                    <el-dropdown-item>健康时尚</el-dropdown-item>
                    <el-dropdown-item>职业教育</el-dropdown-item>
                  </el-dropdown-menu>
                </template>
              </el-dropdown>

              <span class="filter-label">排序:</span>
              <el-dropdown>
                <el-button plain>
                  综合推荐<el-icon class="el-icon--right"><arrow-down /></el-icon>
                </el-button>
                <template #dropdown>
                  <el-dropdown-menu>
                    <el-dropdown-item>综合推荐</el-dropdown-item>
                    <el-dropdown-item>人气最高</el-dropdown-item>
                  </el-dropdown-menu>
                </template>
              </el-dropdown>

              <el-dropdown class="hidden-sm-and-down">
                <el-button plain>
                  全部形式<el-icon class="el-icon--right"><arrow-down /></el-icon>
                </el-button>
                <template #dropdown>
                  <el-dropdown-menu>
                    <el-dropdown-item>线上课</el-dropdown-item>
                    <el-dropdown-item>直播课</el-dropdown-item>
                    <el-dropdown-item>线下课</el-dropdown-item>
                  </el-dropdown-menu>
                </template>
              </el-dropdown>
            </div>
            <div class="filter-search">
              <el-input placeholder="搜索" :prefix-icon="Search" />
            </div>
          </div>

          <!-- Teacher List -->
          <el-row :gutter="24">
            <el-col v-for="teacher in teachers" :key="teacher.id" :xs="24" :sm="12" :md="8">
              <el-card class="teacher-card" shadow="hover">
                <div class="teacher-card-sort-popover">
                  <el-popover placement="bottom-end" :width="100" trigger="hover">
                    <template #reference>
                      <el-button text bg>综合推荐 <el-icon><arrow-down /></el-icon></el-button>
                    </template>
                    <div class="popover-menu">
                      <p>综合推荐</p>
                      <p>人气最高</p>
                    </div>
                  </el-popover>
                </div>

                <div class="teacher-info">
                  <el-avatar :size="100" :src="teacher.avatar" />
                  <h4 class="teacher-name">{{ teacher.name }}</h4>
                  <p class="teacher-field">{{ teacher.field }}</p>
                  <p class="teacher-bio">{{ teacher.bio }}</p>
                </div>
                <el-button type="primary" class="view-profile-btn">查看主页</el-button>
              </el-card>
            </el-col>
          </el-row>

          <div class="load-more-container">
            <el-button type="primary" size="large">查看更多</el-button>
          </div>

        </div>

        <!-- Nearby Venues Section -->
        <div class="nearby-venues-section">
          <h3 class="section-title">附近适合您的场馆</h3>
          <el-row :gutter="24">
            <el-col v-for="venue in venues" :key="venue.id" :xs="24" :sm="12" :md="8">
              <el-card class="venue-card" shadow="hover" :body-style="{ padding: '0px' }">
                <el-image :src="venue.image" class="venue-image" fit="cover" />
                <div class="venue-info-body">
                  <h4 class="venue-name">{{ venue.name }} ({{ venue.type }})</h4>
                  <p class="venue-detail">
                    <el-icon>
                      <Location />
                    </el-icon>
                    <span>{{ venue.address }}</span>
                  </p>
                  <p class="venue-detail">
                    <el-icon>
                      <User />
                    </el-icon>
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

    <footer class="site-footer">
      <div class="footer-container">
        <el-row :gutter="30" justify="space-between">
          <!-- Brand Info -->
          <el-col :xs="24" :sm="12" :md="6" class="footer-col footer-brand">
            <h3>学会</h3>
            <p>新一代学习生态系统</p>
          </el-col>

          <!-- Footer Links -->
          <el-col :xs="12" :sm="6" :md="3" class="footer-col footer-links" v-for="section in footerLinks"
            :key="section.title">
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
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path
                    d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z" />
                </svg>
              </a>
              <a href="#" class="social-icon instagram" aria-label="Instagram">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none"
                  stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
              <a href="#" class="social-icon" aria-label="Twitter">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path
                    d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616v.064c0 2.295 1.616 4.212 3.763 4.649-.69.188-1.432.233-2.193.084.623 1.955 2.441 3.364 4.604 3.404-1.72 1.34-3.882 2.083-6.242 2.083-.404 0-.802-.023-1.195-.069 2.209 1.409 4.833 2.231 7.646 2.231 9.177 0 14.209-7.469 13.945-14.517.975-.701 1.816-1.583 2.483-2.578z" />
                </svg>
              </a>
            </div>
            <h4>下载我们的APP</h4>
            <div class="app-badges">
              <a href="#" class="app-badge">
                <img class="app-badge-icon" src="./picture/google-play_1.png" alt="">
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
import HomePageHead from '@/components/homepage/Head.vue';
import HomePageTopBar from '@/components/homepage/TopBar.vue';
import HomePageSearchBar from '@/components/homepage/SearchBar.vue';

import InterestClass from '@/components/homepage/InterestClass.vue';
import {
  Search,

  ArrowDown,
  Location,
  User,
} from '@element-plus/icons-vue';
import 'element-plus/theme-chalk/display.css'; // 引入响应式隐藏类


const teachers = ref([
  { id: 1, name: '李明', field: '基础教育', bio: '前Google数据科学家, 10年机器学习经验', avatar: 'src/components/Homepage1/Person/picture/圆形_3.png' },
  { id: 2, name: '李明', field: '基础教育', bio: '前Google数据科学家, 10年机器学习经验', avatar: 'src/components/Homepage1/Person/picture/圆形_3.png' },
  { id: 3, name: '李明', field: '基础教育', bio: '前Google数据科学家, 10年机器学习经验', avatar: 'src/components/Homepage1/Person/picture/圆形_3.png' },
  { id: 4, name: '李明', field: '基础教育', bio: '前Google数据科学家, 10年机器学习经验', avatar: 'src/components/Homepage1/Person/picture/圆形_3.png' },
  { id: 5, name: '李明', field: '基础教育', bio: '前Google数据科学家, 10年机器学习经验', avatar: 'src/components/Homepage1/Person/picture/圆形_3.png' },
  { id: 6, name: '李明', field: '基础教育', bio: '前Google数据科学家, 10年机器学习经验', avatar: 'src/components/Homepage1/Person/picture/圆形_3.png' },
]);

const venues = ref([
  { id: 1, name: '飞羽竞技场', type: '篮球场馆', address: '苏州市工业园区独墅湖校区258号', phone: '19552698532', image: 'src/components/Homepage1/Person/picture/矩形_17.png' },
  { id: 2, name: '飞羽竞技场', type: '篮球场馆', address: '苏州市工业园区独墅湖校区258号', phone: '19552698532', image: 'src/components/Homepage1/Person/picture/矩形_17_(1).png' },
  { id: 3, name: '飞羽竞技场', type: '篮球场馆', address: '苏州市工业园区独墅湖校区258号', phone: '19552698532', image: 'src/components/Homepage1/Person/picture/矩形_17_(2).png' },
]);

// 页脚数据
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
  background-color: #f7f8fa;
  /* 使用更柔和的背景色 */
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
  display: flex;
  flex-direction: column;
  flex: 1;
}


/* 主内容区 */
.main-content {
  padding: 0;
}



/* ==================== ^^^ 替换后的 Banner 样式 ^^^ ==================== */

/* 快捷功能/搜索栏样式 */


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



/* 老师探索区 */
.explore-teachers-section {
  max-width: 1200px;
  margin: 60px auto 80px;
  padding: 30px;
}

.section-title {
  font-size: 28px;
  font-weight: bold;
  color: var(--el-text-color-primary);
  margin-bottom: 25px;
}

.filter-bar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 20px;
  margin-bottom: 30px;
}

.filter-options {
  display: flex;
  align-items: center;
  gap: 15px;
  flex-wrap: wrap;
}

.filter-label {
  font-size: 14px;
  color: var(--el-text-color-secondary);
  margin-right: -5px;
}

.filter-search {
  width: 240px;
}

.teacher-card {
  text-align: center;
  margin-bottom: 24px;
  position: relative;
  --el-card-padding: 30px 20px;
}

.teacher-card-sort-popover {
  position: absolute;
  top: 15px;
  right: 15px;
}

.teacher-card-sort-popover .el-button {
  --el-button-text-color: var(--el-text-color-secondary);
}

.teacher-info .el-avatar {
  margin-bottom: 15px;
  border: 3px solid #fff;
  box-shadow: var(--el-box-shadow-light);
}

.teacher-name {
  font-size: 18px;
  font-weight: 600;
  color: var(--el-text-color-primary);
  margin: 0 0 5px;
}

.teacher-field {
  font-size: 14px;
  color: var(--el-text-color-secondary);
  margin: 0 0 15px;
}

.teacher-bio {
  font-size: 14px;
  color: var(--el-text-color-regular);
  line-height: 1.6;
  margin: 0 0 20px;
  min-height: 45px;
}

.view-profile-btn {
  width: 100%;
}

.load-more-container {
  text-align: center;
  margin-top: 20px;
}

/* 附近场馆区 */
.nearby-venues-section {
  max-width: 1200px;
  margin: 60px auto 80px;
  padding: 0 30px;
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


/* 页脚 */
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
  background: linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%);
  color: #fff;
}

.social-icon.instagram:hover {
  opacity: 0.9;
}

.app-badges {
  display: flex;
  gap: 15px;
  flex-wrap: wrap;
  /* 在小屏幕上允许换行 */
}

.app-badge {
  display: inline-flex;
  align-items: center;
  background-color: #404040;
  /* 深灰色背景 */
  color: #ffffff;
  padding: 8px 16px;
  border-radius: 20px;
  /* 圆角 */
  text-decoration: none;
  transition: background-color 0.2s;
}

.app-badge:hover {
  background-color: #2c2c2c;
  /* 悬停时颜色变深 */
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

/* 响应式适配 (Tablet) */
@media (max-width: 992px) {
  .banner-left h1 {
    font-size: 42px;
  }

  .banner-left h2 {
    font-size: 32px;
  }

  .banner-right-image-col {
    min-height: 450px;
  }

  .banner-image-container {
    width: 320px;
    height: 320px;
  }

  .background-circle.circle-1 {
    width: 380px;
    height: 380px;
  }

  .floating-bubble {
    padding: 12px 18px;
    font-size: 13px;
  }

  .bubble-great-teacher {
    left: -10px;
  }

  .bubble-happy-students {
    right: -20px;
  }

  .bubble-weekly-progress {
    bottom: 8%;
  }

  .efficiency-title,
  .explore-title {
    font-size: 26px;
  }

  .section-title {
    font-size: 26px;
  }

  .hidden-sm-and-down {
    display: none;
  }
}

/* 响应式适配 (Mobile) */
@media (max-width: 767px) {
  .header {
    height: auto;
    padding: 10px 15px;
  }

  .header-content {
    flex-wrap: wrap;
  }

  .logo-section {
    flex: 1 0 50%;
  }

  .search-section {
    order: 3;
    flex: 1 0 100%;
    margin-top: 10px;
  }

  .user-action-section {
    flex: 1 0 50%;
  }

  .header-search-input {
    max-width: 100%;
  }

  .personal-center-btn {
    display: none;
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

  .banner-right-image-col {
    min-height: 350px;
  }

  .banner-image-container {
    width: 280px;
    height: 280px;
  }

  .background-circle.circle-1 {
    width: 330px;
    height: 330px;
  }

  .floating-bubble {
    padding: 10px 15px;
    font-size: 12px;
  }

  .bubble-great-teacher {
    top: 5%;
    left: 5%;
  }

  .bubble-happy-students {
    top: 8%;
    right: 5%;
  }

  .bubble-weekly-progress {
    bottom: 5%;
    left: 8%;
  }

  .search-bar-wrapper {
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

  .efficiency-title,
  .explore-title {
    font-size: 24px;
  }

  .efficiency-description {
    font-size: 14px;
  }

  .section-title {
    font-size: 24px;
    text-align: center;
  }

  .tag-list {
    justify-content: center;
  }

  .tag-list .el-button {
    font-size: 12px;
    padding: 5px 10px;
  }

  .filter-bar {
    flex-direction: column;
    align-items: stretch;
  }

  .filter-search {
    width: 100%;
  }

  .footer-col {
    text-align: center;
  }

  .footer-social,
  .footer-brand {
    width: 100%;
  }

  .social-icons,
  .app-badges {
    justify-content: center;
  }
}
</style>