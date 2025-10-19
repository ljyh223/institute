<template>
  <div class="common-layout">
    <!-- 黑色顶部条 -->
    <div class="top-black-bar"></div>
     <!-- Header -->
      <HomePageHead/>

    <el-container class="main-container">
      <!-- Main Content -->
      <el-main class="main-content">
        <!-- Top Banner from First Code Snippet -->
        <TopBar/>

        <!-- 快捷功能/搜索栏 -->
        <SearchBar/>

        <!-- 核心优势介绍 -->
        <div class="efficiency-section">
          <h3 class="section-title">让你的学习更高效</h3>
          <p class="section-description">
            构建AI技术驱动的终身学习生态,让每个人都能在成长的任何阶段都能找到属于自己的进阶路径
          </p>
        </div>

        <!-- Nearby Venues Section -->
        <div class="page-section nearby-venues-section">
          <h3 class="section-title">附近适合您的场馆</h3>
          <HomePageVenue :venues="venues"/>
        </div>

        <!-- 课程探索区 -->
        <div class="page-section explore-courses-section">
          <h3 class="section-title">探索你感兴趣的课程</h3>
          <InterestClass :courses="courses"/>
           
        </div>
       
        <!-- Explore Teachers Section -->
        <div class="page-section explore-teachers-section">
          <h3 class="section-title">探索你感兴趣的老师</h3>
          <InterestedTeacher :teachers="teachers"/>
        </div>
      </el-main>
    </el-container>
    
    <!-- [REPLACED] Footer from First Code Snippet -->
    <BottomBar/>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import 'element-plus/theme-chalk/display.css';
import HomePageHead from '@/components/homepage/Head.vue';
import BottomBar from '@/components/homepage/BottomBar.vue';
import TopBar from '@/components/homepage/TopBar.vue';
import SearchBar from '@/components/homepage/SearchBar.vue';
import HomePageVenue from '@/components/homepage/HomePageVenue.vue';
import InterestClass from '@/components/homepage/InterestClass.vue';
import InterestedTeacher from '@/components/homepage/InterestedTeacher.vue';
import InterestedTeacher from '@/components/homepage/InterestedTeacher.vue';

const teacherRating = ref(4.5);

const venues = ref([
  { id: 1, name: '飞羽竞技场', type: '篮球场馆', address: '苏州市工业园区独墅湖校区258号', phone: '19552698532', image: 'src/components/Homepage1/Person/picture/矩形_17.png' },
  { id: 2, name: '飞羽竞技场', type: '篮球场馆', address: '苏州市工业园区独墅湖校区258号', phone: '19552698532', image: 'src/components/Homepage1/Person/picture/矩形_17_(1).png' },
  { id: 3, name: '飞羽竞技场', type: '篮球场馆', address: '苏州市工业园区独墅湖校区258号', phone: '19552698532', image: 'src/components/Homepage1/Person/picture/矩形_17_(2).png' },
]);

const courses = ref([
  { id: 1, title: '微软 Power BI 数据分析师', instructor: '陈老师', price: '99', image: 'src/components/page/homepage/Homepage1/Person/picture/image_(2).png' },
  { id: 2, title: 'UI/UX 设计全方位指南', instructor: '王设计师', price: '129', image: 'src/components/page/homepage/Homepage1/Person/picture/image_(1).png' },
  { id: 3, title: '前端Vue3框架实战精讲', instructor: '李工', price: '99', image: 'src/components/page/homepage/Homepage1/Person/picture/image_(4).png' },
  { id: 4, title: 'Python从入门到数据科学', instructor: '赵博士', price: '149', image: 'src/components/page/homepage/Homepage1/Person/picture/image_(3).png' },
]);

const teachers = ref([
  { id: 1, name: '李明', field: '基础教育 · 人工智能', rating: 4.5, bio: '前Google数据科学家, 10年机器学习经验', avatar: 'src/components/Homepage1/Teacher/picture/圆形_3_(1).png' },
  { id: 2, name: '张伟', field: '艺术人文 · 艺术史', rating: 5.0, bio: '中央美术学院教授, 20年艺术史教学经验', avatar: 'src/components/Homepage1/Teacher/picture/圆形_3_(2).png' },
  { id: 3, name: '王芳', field: '经济金融 · 投资学', rating: 4.0, bio: '华尔街资深分析师, 15年投资实战经验', avatar: 'src/components/Homepage1/Teacher/picture/圆形_3_(3).png' },
  { id: 1, name: '李明', field: '基础教育 · 人工智能', rating: 4.5, bio: '前Google数据科学家, 10年机器学习经验', avatar: 'src/components/Homepage1/Teacher/picture/圆形_3_(2).png' },
  { id: 2, name: '张伟', field: '艺术人文 · 艺术史', rating: 5.0, bio: '中央美术学院教授, 20年艺术史教学经验', avatar: 'src/components/Homepage1/Teacher/picture/圆形_3_(4).png' },
  { id: 3, name: '王芳', field: '经济金融 · 投资学', rating: 4.0, bio: '华尔街资深分析师, 15年投资实战经验', avatar: 'src/components/Homepage1/Teacher/picture/圆形_3.png' },
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
  margin-bottom: 30px;
  text-align: center;
}
.section-description {
  font-size: 16px;
  color: var(--el-text-color-regular);
  line-height: 1.8;
  max-width: 800px;
  margin: 0 auto 60px;
}
.load-more-container {
  text-align: left;
  margin-top: 40px;
}

/* 核心优势介绍 */
.efficiency-section { margin: 80px auto; padding: 0 20px; text-align: center; }

/* === 响应式适配 === */
@media (max-width: 992px) {
    .section-title { font-size: 26px; }
    .filter-bar { flex-direction: column; align-items: stretch; }
    .filter-search { width: 100%; }

    /* Banner Responsive */
    h1.banner-main-title { font-size: 42px; }
    h2.banner-sub-title { font-size: 32px; }
    .banner-right-image-col { min-height: 450px; }
    .banner-image-container { width: 320px; height: 320px; }
    .background-circle.circle-1 { width: 380px; height: 380px; }
    .floating-bubble { padding: 12px 18px; font-size: 13px; transform: scale(0.9); }
    .bubble-great-teacher { left: -10px; }
    .bubble-happy-students { right: -20px; }
    .bubble-weekly-progress { bottom: 8%; }
}

@media (max-width: 767px) {
    .header { height: auto; padding: 10px 15px; }
    .header-content { flex-wrap: wrap; }
    .search-section { order: 3; flex: 1 0 100%; margin-top: 10px; }
    .header-search-input { max-width: 100%; }
   cial-icons, .app-badges { justify-content: center; }
}
</style>