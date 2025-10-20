<template>
  <div class="common-layout">
    <!-- 黑色顶部条 -->
    <div class="top-black-bar"></div>
    <!-- Header -->
    <HomePageHead />
    <el-container class="main-container">
      <!-- Main Content -->
      <el-main class="main-content">
        <!--Banner-->
        <TopBar />

        <!-- 快捷功能/搜索栏 -->
        <SearchBar />

        <!-- 核心优势介绍 -->
        <div class="efficiency-section">
          <h3 class="efficiency-title">让你的学习更高效</h3>
          <p class="efficiency-description">
            构建AI技术驱动的终身学习生态,让每个人都能在成长的任何阶段都能找到属于自己的进阶路径
          </p>
        </div>

        <!-- 课程探索区 -->
        <InterestClass :courses="interestedCoursesData" @more="handleLoadMoreCourses" @click="handleCourseClick" />

        <!-- Explore Teachers Section -->
        <div class="explore-teachers-section">
          <InterestedTeacher :teacher="teachers" />
        </div>

        <!-- Nearby Venues Section -->
        <div class="nearby-venues-section">
          <h3 class="section-title">附近适合您的场馆</h3>
          <HomePageVenue :venues="venues" />
        </div>

      </el-main>
    </el-container>

    <!-- Footer -->
    <BottomBar />
  </div>
</template>

<script setup>
import { ref } from 'vue';
import 'element-plus/theme-chalk/display.css'; // 引入响应式隐藏类
import HomePageHead from '@/components/homepage/Head.vue';
import BottomBar from '@/components/homepage/bar/BottomBar.vue';
import TopBar from '@/components/homepage/bar/TopBar.vue';
import SearchBar from '@/components/homepage/SearchBar.vue';
import InterestClass from '@/components/homepage/course/InterestCourse1.vue';
import InterestedTeacher from '@/components/homepage/teacher/InterestedTeacher.vue';
import HomePageVenue from '@/components/homepage/venue/Venue.vue';

const teacherRating = ref(4.5);

const interestedCoursesData = ref([]);

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
  flex: 1;
}

/* 主内容区 */
.main-content {
  padding: 0;
}

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

/* 附近场馆区 */
.nearby-venues-section {
  max-width: 1200px;
  margin: 60px auto 80px;
  padding: 0 30px;
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