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
            <el-breadcrumb-item>附近适合您的场馆</el-breadcrumb-item>
            <el-breadcrumb-item>课程详情</el-breadcrumb-item>
          </el-breadcrumb>

          <!-- 课程主 Banner -->
          <div class="venue-banner">
            <el-row :gutter="30" align="middle">
              <el-col :xs="24" :md="10" class="venue-info-col">
                <h1 class="venue-title">创新学习中心</h1>
                <div class="venue-location">
                  <el-icon>
                    <Location />
                  </el-icon>
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
                  <el-icon>
                    <Plus />
                  </el-icon>
                  关注
                </el-button>
              </el-col>
              <el-col :xs="24" :md="14" class="venue-image-col">
                <el-image
                  src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=1632&auto=format&fit=crop"
                  fit="cover" class="venue-main-image">
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
                <el-icon v-if="amenity.icon" :size="18" color="#606266">
                  <component :is="amenity.icon" />
                </el-icon>
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
          <InterestClass1 :courses="interestedCourses" />
        </div>

        <!-- 共享的空间 -->
        <div class="page-section shared-spaces-section">
          <h3 class="section-title">共享的空间</h3>
          <SharedSpaces :spaces="sharedSpaces" @click="handleSpaceClick" @more="handleLoadMoreSpaces" />
        </div>

        <!-- 附近适合您的场馆 -->
        <div class="page-section nearby-venues-section">
          <h3 class="section-title">附近适合您的场馆</h3>
          <HomePageVenue :venues="nearbyVenues" />
        </div>

        <!-- 学习环境 -->
        <div class="page-section learning-environment-section">
          <h3 class="section-title">学习环境</h3>
          <LearningEnvironments :environments="learningEnvironments" @select="handleEnvSelect"
            @more="handleLoadMoreEnvs" />
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
  Location, Plus, Van, Connection, Mug
} from '@element-plus/icons-vue';
import 'element-plus/theme-chalk/display.css';
import HomePageHead from '@/components/homepage/Head.vue';
import BottomBar from '@/components/homepage/bar/BottomBar.vue';
import HomePageVenue from '@/components/homepage/venue/Venue.vue';
import InterestClass1 from '@/components/homepage/course/InterestCourse.vue';
import SharedSpaces from '@/components/homepage/SharedSpaces.vue';
import LearningEnvironments from '@/components/homepage/LearningEnvironments.vue';


const amenities = ref([
  { icon: Van, text: '免费停车' },
  { icon: Connection, text: '免费WIFI' },
  { icon: Mug, text: '茶歇提供' },
  { text: '无障碍通道' }
]);

const interestedCourses = ref([
  { id: 1, title: '微软 Power BI 数据分析师', instructor: '陈老师', price: '99', image: '/src/assets/static/im-one.png' },
  { id: 2, title: 'UI/UX 设计全方位指南', instructor: '王设计师', price: '129', image: '/src/assets/static/im-one.png' },
  { id: 3, title: '前端Vue3框架实战精讲', instructor: '李工', price: '99', image: '/src/assets/static/course.png' },
  { id: 4, title: 'Python从入门到数据科学', instructor: '赵博士', price: '149', image: '/src/assets/static/course.png' },
]);

const sharedSpaces = ref([
  { id: 1, name: '豪华办公室1', image: '/src/assets/static/venue.png' },
  { id: 2, name: 'X OPENSPACE', image: '/src/assets/static/venue.png' },
  { id: 3, name: '豪华办公室3', image: '/src/assets/static/venue.png' },
  { id: 4, name: '豪华办公室1', image: '/src/assets/static/venue.png' },
  { id: 5, name: '豪华办公室3', image: '/src/assets/static/venue.png' },
]);

const nearbyVenues = ref([
  { id: 1, name: '飞羽竞技场', type: '篮球场馆', address: '苏州市工业园区独墅湖校区258号', phone: '19552698532', image: '/src/assets/static/矩形_17.png' },
  { id: 2, name: '飞羽竞技场', type: '篮球场馆', address: '苏州市工业园区独墅湖校区258号', phone: '19552698532', image: '/src/assets/static/矩形_17.png' },
  { id: 3, name: '飞羽竞技场', type: '篮球场馆', address: '苏州市工业园区独墅湖校区258号', phone: '19552698532', image: '/src/assets/static/矩形_17.png' },
]);

const learningEnvironments = ref([
  { id: 1, name: '多媒体教室', image: '/src/assets/static/env.png', selected: false },
  { id: 2, name: '多媒体教室', image: '/src/assets/static/env.png', selected: false },
  { id: 3, name: '多媒体教室', image: '/src/assets/static/env.png', selected: true },
]);

// 处理空间点击事件
const handleSpaceClick = (spaceId) => {
  console.log('点击了空间，ID:', spaceId);
  // 这里可以添加跳转到空间详情页的逻辑
}

// 处理加载更多空间事件
const handleLoadMoreSpaces = () => {
  console.log('加载更多空间');
  // 这里可以添加加载更多空间的逻辑
}

// 处理环境选择事件
const handleEnvSelect = (envId) => {
  console.log('选择了环境，ID:', envId);
  // 更新选中状态
  const env = learningEnvironments.value.find(e => e.id === envId);
  if (env) {
    // 取消其他环境的选中状态
    learningEnvironments.value.forEach(e => e.selected = false);
    // 设置当前环境为选中状态
    env.selected = true;
  }
}

// 处理加载更多环境事件
const handleLoadMoreEnvs = () => {
  console.log('加载更多环境');
  // 这里可以添加加载更多环境的逻辑
}
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



.details-btn.el-button:hover {
  background-color: var(--el-color-primary-light-9);
}

.shared-spaces-section .load-more-container {
  margin-top: 25px;
}



/* 响应式适配 */
@media (max-width: 992px) {
  .venue-title {
    font-size: 28px;
  }

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

  .venue-title {
    font-size: 24px;
  }

  .venue-main-image {
    height: 200px;
  }

  .venue-stats {
    gap: 20px;
    justify-content: center;
  }

  .amenities-bar {
    justify-content: center;
  }

  .page-section {
    padding: 0 15px;
    margin-bottom: 60px;
  }

  .section-title {
    font-size: 20px;
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