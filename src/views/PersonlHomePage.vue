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
        <!-- 探索你感兴趣的课程 -->
        <InterestClass />

        <div class="explore-teachers-section">
          <h3 class="section-title">探索你感兴趣的老师</h3>

          <!-- Filter Bar -->
          <div class="filter-bar">
            <div class="filter-options">
              <span class="filter-label">领域:</span>
              <el-dropdown @command="handleFieldChange">
                <el-button plain>
                  {{ currentField }}<el-icon class="el-icon--right"><arrow-down /></el-icon>
                </el-button>

                <template #dropdown>
                  <el-dropdown-menu>
                    <el-dropdown-item v-for="item in TeacherField" :key="item" :command="item">
                      {{ item }}
                    </el-dropdown-item>

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
              <InterestedTeacher :teacher="teacher" />
            </el-col>
          </el-row>

          <div class="load-more-container">
            <el-button type="primary" size="large" @click="goTeacherList">查看更多</el-button>
          </div>

        </div>

        <!-- Nearby Venues Section -->
        <div class="nearby-venues-section">
          <h3 class="section-title">附近适合您的场馆</h3>
          <el-row :gutter="24">
            <el-col v-for="venue in venues" :key="venue.id" :xs="24" :sm="12" :md="8">
              <VenueCard :venue="venue" />
            </el-col>
          </el-row>
          <div class="load-more-container">
            <el-button type="primary" size="large" @click="goVenueList">查看更多</el-button>
          </div>
        </div>

      </el-main>
    </el-container>

    <footer class="site-footer">

    </footer>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import HomePageHead from '@/components/homepage/Head.vue';
import HomePageTopBar from '@/components/homepage/TopBar.vue';
import HomePageSearchBar from '@/components/homepage/SearchBar.vue';
import InterestedTeacher from '@/components/homepage/InterestedTeacher.vue';
import VenueCard from '@/components/homepage/Venue.vue';
import InterestClass from '@/components/homepage/InterestClass.vue';
import { Search, ArrowDown, } from '@element-plus/icons-vue';
import 'element-plus/theme-chalk/display.css'; // 引入响应式隐藏类
const TeacherField = ['全部领域', '艺术人文', '经济金融', '健康时尚', '职业教育']
const currentField = ref('全部领域')
const router = useRouter()

function handleFieldChange(val) {
  currentField.value = val
}

// 三个“查看更多”跳转
function goTeacherList() {
  router.push({ name: 'venue-list' })
}
function goVenueList() {
  router.push({ name: 'course-list' })
}

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
