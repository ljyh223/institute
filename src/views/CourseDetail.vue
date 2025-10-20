<template>
  <div class="common-layout">
    <HomePageHead />

    <el-container class="main-container">
      <!-- Main Content -->
      <el-main class="main-content">
        <div class="page-container">
          <!-- 面包屑导航 -->
          <el-breadcrumb :separator-icon="ArrowRight" class="page-breadcrumb">
            <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item>探索您感兴趣的课程</el-breadcrumb-item>
            <el-breadcrumb-item>课程详情</el-breadcrumb-item>
          </el-breadcrumb>

          <!-- 课程主 Banner -->
          <div class="course-banner-new">
            <div class="course-info-main">
              <h1 class="course-title">前端开发入门——从零开始学习Java</h1>
              <p class="course-subtitle">副标题副标题副标题副标题副标题</p>
              <div class="instructor-info-banner">
                <el-avatar size="small" :src="instructor.avatar"></el-avatar>
                <span class="instructor-name">授课老师：{{ instructor.name }}</span>
              </div>
              <el-button type="primary" size="large" class="join-course-btn">加入我的课程</el-button>
            </div>
            <div class="progress-circle-placeholder"></div>
          </div>

          <!-- 课程元数据 -->
          <div class="quick-links-wrapper">
            <div class="links-container">
              <el-link :underline="false" class="link-item">
                <img src="@/assets/static/线上.png" alt="线上课程">
                <span class="link-text hidden-md-and-down">线上课程</span>
              </el-link>
              <el-link :underline="false" class="link-item">
                <img src="@/assets/static/设计.png" alt="艺术人文">
                <span class="link-text hidden-md-and-down">艺术人文</span>
              </el-link>
              <el-link :underline="false" class="link-item">
                <img src="@/assets/static/路径1.png" alt="购买人数">
                <span class="link-text hidden-md-and-down">购买人数: 1.2k</span>
              </el-link>
              <el-link :underline="false" class="link-item no-border">
                <img src="@/assets/static/用户.png" alt="授课老师">
                <span class="link-text hidden-md-and-down">授课老师：张研究</span>
              </el-link>
            </div>
          </div>

          <CourseContent v-model:activeTab="activeTab" v-model:activeCollapse="activeCollapse"
            :learning-goals="learningGoals" :skills="skills" :course-outline="courseOutline" :instructor="instructor" />

        </div>

        <!-- 您可能感兴趣的课程 -->
        <div class="page-section interested-courses-section">
          <h3 class="section-title">您可能感兴趣的课程</h3>
          <InterestClass1 :class1="interestedCourses" />
        </div>

        <!-- 附近适合您的场馆 -->
        <div class="page-section nearby-venues-section">
          <h3 class="section-title">附近适合您的场馆</h3>
          <HomePageVenue :venues="nearbyVenues" />
        </div>
      </el-main>
    </el-container>

    <!-- Footer -->
    <BottomBar />
  </div>
</template>

<script setup>
import { ref } from 'vue';
import {
  ArrowRight
} from '@element-plus/icons-vue';
import 'element-plus/theme-chalk/display.css';
import HomePageHead from '@/components/homepage/Head.vue';
import BottomBar from '@/components/homepage/bar/BottomBar.vue';
import HomePageVenue from '@/components/homepage/venue/Venue.vue';
import InterestClass1 from '@/components/homepage/course/InterestCourse.vue';
import CourseContent from '@/components/homepage/course/CourseContent.vue';

const activeTab = ref('about');
const activeCollapse = ref(0); // 默认展开第一项，accordion模式下值为number

// 讲师信息
const instructor = ref({
  name: '张老师',
  avatar: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg'
});

const learningGoals = ref([
  '学习使用 Power BI 连接数据源并将其转化为有意义的见解。',
  '学习使用 Power BI 连接数据源并将其转化为有意义的见解。',
  '学习使用 Power BI 连接数据源并将其转化为有意义的见解。',
  '学习使用 Power BI 连接数据源并将其转化为有意义的见解。',
]);

const skills = ref(['数据库设计', '数据储存', '数据可视化']);

// 课程大纲数据
const courseOutline = ref([
  {
    title: '第1大章 课程名称',
    duration: '共45分钟',
    image: 'https://images.unsplash.com/photo-1543286386-713bdd548da4',
    subChapters: [
      {
        title: '第1章 课程名称',
        sections: ['第1节 课程名字', '第2节 课程名字', '第3节 课程名字']
      },
      {
        title: '第2章 课程名称',
        sections: ['第1节 课程名字', '第2节 课程名字']
      }
    ]
  },
  {
    title: '第二大章 课程名称',
    duration: '共45分钟',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40',
    subChapters: []
  },
  {
    title: '第三大章 课程名称',
    duration: '共45分钟',
    image: 'https://images.unsplash.com/photo-1543286386-713bdd548da4',
    subChapters: []
  },
  {
    title: '第四大章 课程名称',
    duration: '共45分钟',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40',
    subChapters: []
  },
  {
    title: '第五大章 课程名称',
    duration: '共45分钟',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40',
    subChapters: []
  }
]);

const nearbyVenues = ref([
  { id: 1, name: '飞羽竞技场', type: '篮球场馆', address: '苏州市工业园区独墅湖校区258号', phone: '19552698532', image: '/src/assets/static/矩形_17.png' },
  { id: 2, name: '飞羽竞技场', type: '篮球场馆', address: '苏州市工业园区独墅湖校区258号', phone: '19552698532', image: '/src/assets/static/矩形_17.png' },
  { id: 3, name: '飞羽竞技场', type: '篮球场馆', address: '苏州市工业园区独墅湖校区258号', phone: '19552698532', image: '/src/assets/static/矩形_17.png' },
]);


const interestedCourses = ref([
  { id: 1, title: '微软 Power BI 数据分析师', price: '99', image: 'src/components/Coursedetail/picture/image(1).png' },
  { id: 2, title: 'UI/UX 设计全方位指南', price: '129', image: 'src/components/Coursedetail/picture/image(2).png' },
  { id: 3, title: '前端Vue3框架实战精讲', price: '99', image: 'src/components/Coursedetail/picture/image(3).png' },
  { id: 4, title: 'Python从入门到数据科学', price: '149', image: 'src/components/Coursedetail/picture/image(3).png' },
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

.main-container {
  flex: 1;
}

.main-content {
  padding: 0;
}

.top-black-bar {
  width: 100%;
  height: 30px;
  background-color: rgba(56, 56, 56, 1);
  position: sticky;
  top: 0;
  z-index: 1001;
}

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
.course-banner-new {
  background-color: #F3F8FF;
  padding: 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
}

.course-info-main {
  max-width: 60%;
}

h1.course-title {
  font-size: 36px;
  font-weight: bold;
  margin: 0 0 10px;
  line-height: 1.3;
}

.course-subtitle {
  font-size: 16px;
  color: #606266;
  margin-bottom: 25px;
}

.instructor-info-banner {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 30px;
  font-size: 14px;
  color: var(--el-text-color-regular);
}

.join-course-btn {
  font-weight: bold;
  padding: 10px 25px;
  height: auto;
}

.progress-circle-placeholder {
  width: 150px;
  height: 150px;
  border-radius: 50%;
  border: 12px solid #E0E7FF;
  border-left-color: transparent;
  border-right-color: transparent;
  flex-shrink: 0;
  position: relative;
  transform: rotate(30deg);
}

.progress-circle-placeholder::before {
  content: '';
  position: absolute;
  top: -22px;
  left: -22px;
  right: -22px;
  bottom: -22px;
  border-radius: 50%;
  border: 1px solid #D6DEFF;
  border-top-color: transparent;
  border-bottom-color: transparent;
  transform: rotate(-30deg);
}

.progress-circle-placeholder::after {
  content: '';
  position: absolute;
  top: 20px;
  left: 20px;
  right: 20px;
  bottom: 20px;
  border-radius: 50%;
  border: 1px solid #D6DEFF;
  border-top-color: transparent;
  transform: rotate(60deg);
}

/* 课程元数据条 */
.quick-links-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 800px;
  margin: -25px auto 0;
  padding: 15px;
  background-color: #ffffff;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  position: relative;
  z-index: 10;
  border-radius: 4px;
}

.links-container {
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100%;
}

.link-item {
  font-size: 15px;
  font-weight: 500;
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 0 20px;
  border-right: 1px solid #E4E7ED;
  --el-link-text-color: var(--el-text-color-primary);
}

.link-item.no-border {
  border-right: none;
}

.link-item:hover {
  --el-link-text-color: var(--el-color-primary);
}

.link-item img {
  height: 20px;
  width: 20px;
}

/* 通用区块样式 */
.page-section {
  max-width: 1200px;
  margin: 80px auto;
  padding: 0 20px;
}

.section-title {
  font-size: 24px;
  font-weight: 600;
  color: var(--el-text-color-primary);
  margin-bottom: 30px;
  text-align: left;
}


/* 响应式适配 */
@media (max-width: 992px) {
  .outline-sidebar-area {
    flex-direction: column-reverse;
  }

  .sidebar {
    margin-bottom: 40px;
  }
}

@media (max-width: 767px) {
  .course-banner-new {
    flex-direction: column;
    text-align: center;
    gap: 20px;
  }

  .course-info-main {
    max-width: 100%;
  }

  .quick-links-wrapper {
    width: 95%;
    padding: 10px;
    flex-direction: column;
    height: auto;
  }

  .links-container {
    flex-wrap: wrap;
    justify-content: center;
    gap: 10px;
  }

  .link-item {
    border-right: none;
    padding: 5px 10px;
  }

  .learning-goals {
    flex-direction: column;
    gap: 0;
  }

  .footer-col {
    text-align: center;
  }

  .social-icons,
  .app-badges {
    justify-content: center;
  }
}
</style>