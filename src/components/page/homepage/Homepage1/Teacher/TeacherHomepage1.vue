<template>
  <div class="common-layout">
    <!-- 黑色顶部条 -->
    <div class="top-black-bar"></div>
    <!-- Header -->
    <HomePageHead />
    <el-container class="main-container">
      <!-- Main Content -->
      <el-main class="main-content">
        <TopBar />
        <!-- 快捷功能/搜索栏 -->
        <div class="quick-links-wrapper">
          <SearchBar />
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
          <InterestClass1 :courses="courses" />
        </div>

        <!-- [NEW ADDITION START] 精选推荐机构 Section -->
        <div class="page-section featured-institutions-section">
          <div class="section-header-left">
            <h3 class="section-title-left">精选推荐机构</h3>
            <p class="section-subtitle-left">提供最专业的学习环境与资源</p>
          </div>

          <!-- 使用 CSS Grid 实现原图中的复杂布局 -->
          <div class="institution-grid">
            <div v-for="(item, index) in institutions" :key="item.id" :class="['inst-card', `inst-item-${index + 1}`]">
              <el-image :src="item.image" fit="cover" class="inst-image" lazy loading="lazy" />
              <div class="inst-overlay">
                <h4 class="inst-name">{{ item.name }}</h4>
                <p class="inst-location">
                  <el-icon>
                    <Location />
                  </el-icon>
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
    <BottomBar />
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { Location } from '@element-plus/icons-vue';
import 'element-plus/theme-chalk/display.css';
import HomePageHead from '@/components/homepage/Head.vue';
import BottomBar from '@/components/homepage/bar/BottomBar.vue';
import TopBar from '@/components/homepage/bar/TopBar.vue';
import SearchBar from '@/components/homepage/SearchBar.vue';
import InterestClass1 from '@/components/homepage/course/InterestCourse.vue';

const teacherRating = ref(4.5);

const courses = ref([
  { id: 1, title: '微软 Power BI 数据分析师', instructor: '陈老师', price: '99', image: 'src/components/page/homepage/Homepage1/Person/picture/image_(2).png' },
  { id: 2, title: 'UI/UX 设计全方位指南', instructor: '王设计师', price: '129', image: 'src/components/page/homepage/Homepage1/Person/picture/image_(1).png' },
  { id: 3, title: '前端Vue3框架实战精讲', instructor: '李工', price: '99', image: 'src/components/page/homepage/Homepage1/Person/picture/image_(4).png' },
  { id: 4, title: 'Python从入门到数据科学', instructor: '赵博士', price: '149', image: 'src/components/page/homepage/Homepage1/Person/picture/image_(3).png' },
]);

// Data for Popular Teachers
const popularTeachers = ref([
  { id: 1, name: '于常宣', field: '艺术人文', bio: '毕业于国内知名师范院校的汉语言文学专业...', avatar: 'src/components/Homepage1/Teacher/picture/Rectangle_3.png' },
  { id: 2, name: '于常宣', field: '艺术人文', bio: null, avatar: 'src/components/Homepage1/Teacher/picture/Rectangle_3_(1).png' },
  { id: 3, name: '于常宣', field: '艺术人文', bio: null, avatar: 'src/components/Homepage1/Teacher/picture/Rectangle_3_(2).png' },
  { id: 4, name: '于常宣', field: '艺术人文', bio: null, avatar: 'src/components/Homepage1/Teacher/picture/Rectangle_3_(3).png' },
  { id: 5, name: '于常宣', field: '艺术人文', bio: null, avatar: 'src/components/Homepage1/Teacher/picture/Rectangle_3_(4).png' },
  { id: 6, name: '于常宣', field: '艺术人文', bio: null, avatar: 'src/components/Homepage1/Teacher/picture/Rectangle_3_(5).png' },
  { id: 7, name: '于常宣', field: '艺术人文', bio: null, avatar: 'src/components/Homepage1/Teacher/picture/Rectangle_3_(6).png' },
  { id: 8, name: '于常宣', field: '艺术人文', bio: null, avatar: 'src/components/Homepage1/Teacher/picture/Rectangle_3_(7).png' },
  { id: 9, name: '于常宣', field: '艺术人文', bio: null, avatar: 'src/components/Homepage1/Teacher/picture/Rectangle_3_(8).png' },
]);


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
    links: [{ name: '关于我们' }, { name: '职业' }, { name: '其他' }]
  },
  {
    title: '常见问题',
    links: [{ name: '帮助/常见问题' }, { name: '问题' }, { name: '客服' }]
  },
  {
    title: '更多',
    links: [{ name: '服务协议' }, { name: '隐私政策' }, { name: '商务洽谈' }, { name: '帮助中心' }]
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

/* 核心优势介绍 */
.efficiency-section {
  margin: 80px auto;
  padding: 0 20px;
  text-align: center;
}

/* 最受欢迎老师样式 */
.popular-teachers-section .section-subtitle {
  text-align: center;
  color: var(--el-text-color-secondary);
  margin-top: -10px;
  margin-bottom: 40px;
}

.popular-teacher-card {
  margin-bottom: 24px;
  border-radius: 8px;
  border: 1px solid var(--el-border-color-lighter);
}

.popular-teacher-card .el-card__body {
  padding: 15px;
}

.popular-teacher-card-content {
  display: flex;
  align-items: center;
  gap: 16px;
}

.popular-teacher-info {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: 70px;
}

.popular-teacher-info .info-header {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 4px;
}

.popular-teacher-info .teacher-name {
  font-size: 16px;
  font-weight: 600;
  margin: 0;
}

.popular-teacher-info .teacher-field {
  font-size: 14px;
  color: var(--el-text-color-secondary);
  margin: 0;
}

.popular-teacher-info .teacher-bio {
  font-size: 13px;
  color: var(--el-text-color-regular);
  margin: 0;
  line-height: 1.5;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}

/* 课程卡片 */
.course-card {
  margin-bottom: 24px;
  border-radius: 12px;
  overflow: hidden;
  border: 1px solid var(--el-border-color-lighter);
}

.course-image {
  width: 100%;
  height: 150px;
}

.course-info {
  padding: 16px;
}

.course-title {
  font-size: 16px;
  font-weight: 500;
  margin: 0 0 10px;
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

.tag-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 12px;
  margin-bottom: 40px;
}

/* [NEW ADDITION START] 精选推荐机构样式 */
/* 标题左对齐 */
.featured-institutions-section {
  margin-bottom: 100px;
}

.section-header-left {
  text-align: left;
  margin-bottom: 30px;
}

.section-title-left {
  font-size: 28px;
  font-weight: 600;
  color: var(--el-text-color-primary);
  margin: 0 0 10px;
}

.section-subtitle-left {
  font-size: 14px;
  color: var(--el-text-color-secondary);
  margin: 0;
}

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
  position: relative;
  border-radius: 8px;
  overflow: hidden;
  cursor: pointer;
  /* 确保 Element Image 组件占满容器 */
  display: flex;
}

.inst-image {
  width: 100%;
  height: 100%;
  display: block;
  transition: transform 0.5s ease;
}

.inst-card:hover .inst-image {
  transform: scale(1.05);
}

/* Grid 项目定位 (对应数组索引 0-5) */
/* 左上 */
.inst-item-1 {
  grid-column: 1;
  grid-row: 1;
}

/* 中间高图 (跨两行) */
.inst-item-2 {
  grid-column: 2;
  grid-row: 1 / span 2;
}

/* 右上宽图 (跨右侧两列) */
.inst-item-3 {
  grid-column: 3 / span 2;
  grid-row: 1;
}

/* 左下 */
.inst-item-4 {
  grid-column: 1;
  grid-row: 2;
}

/* 右下左 */
.inst-item-5 {
  grid-column: 3;
  grid-row: 2;
}

/* 右下右 */
.inst-item-6 {
  grid-column: 4;
  grid-row: 2;
}

/* 底部遮罩和文字 */
.inst-overlay {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  padding: 24px 20px;
  /* 黑色渐变背景提高文字可读性 */
  background: linear-gradient(to top, rgba(0, 0, 0, 0.85) 0%, rgba(0, 0, 0, 0.4) 50%, transparent 100%);
  color: #fff;
  text-align: left;
  box-sizing: border-box;
  pointer-events: none;
}

.inst-name {
  font-size: 20px;
  font-weight: 600;
  margin: 0 0 8px;
  text-shadow: 0 1px 3px rgba(0, 0, 0, 0.5);
  letter-spacing: 0.5px;
}

.inst-location {
  font-size: 13px;
  display: flex;
  align-items: center;
  gap: 4px;
  margin: 0;
  opacity: 0.9;
  font-weight: 400;
}

/* === 响应式适配 === */
@media (max-width: 992px) {
  .section-title {
    font-size: 26px;
  }

  h1.banner-main-title {
    font-size: 42px;
  }

  h2.banner-sub-title {
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
    transform: scale(0.9);
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

  /* [NEW] 老师模块响应式 */
  .popular-teacher-info .info-header {
    flex-direction: column;
    align-items: flex-start;
    gap: 2px;
  }

  /* [NEW] 机构模块响应式 - 平板 (切换为规则的 2列 网格) */
  .section-title-left {
    font-size: 26px;
  }

  .institution-grid {
    grid-template-columns: 1fr 1fr;
    /* 2列 */
    grid-template-rows: repeat(3, 220px);
    /* 3行，固定高度 */
    gap: 16px;
  }

  /* 重置所有项的跨行跨列，按顺序排列 */
  .inst-item-1,
  .inst-item-2,
  .inst-item-3,
  .inst-item-4,
  .inst-item-5,
  .inst-item-6 {
    grid-column: auto;
    grid-row: auto;
  }

  /* 平板上让第3个图跨两列增加点变化，或者保持统一 */
  .inst-item-3 {
    grid-column: 1 / span 2;
  }

  .inst-name {
    font-size: 18px;
  }
}

@media (max-width: 767px) {
  .quick-links-wrapper {
    width: 95%;
  }

  .page-section {
    margin-bottom: 60px;
  }

  .section-title {
    font-size: 24px;
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

  /* [NEW] 机构模块响应式 - 手机 (1列) */
  .section-title-left {
    font-size: 24px;
    text-align: center;
  }

  .section-subtitle-left {
    text-align: center;
  }

  .section-header-left {
    margin-bottom: 20px;
  }

  .institution-grid {
    grid-template-columns: 1fr;
    grid-auto-rows: 200px;
    /* 自动行高 */
    grid-template-rows: auto;
    /* 重置固定行定义 */
    gap: 12px;
  }

  .inst-item-3 {
    grid-column: auto;
  }

  /* 重置平板的跨列 */
  .inst-overlay {
    padding: 15px;
  }

  .inst-name {
    font-size: 17px;
  }
}
</style>