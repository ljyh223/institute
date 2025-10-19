<template>
  <div class="common-layout">
    <!-- 黑色顶部条 -->
    <div class="top-black-bar"></div>
      <!-- Header -->
    <HomePageHead/>

    <el-container class="main-container">
      <!-- Main Content -->
      <el-main class="main-content">
        <!-- Top Banner -->
        <TopBar/>
        <!-- 快捷功能/搜索栏 -->
        <SearchBar/>

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
          <InterestClass :courses="courses"/>
        </div>

        <!-- 对您可能有帮助的老师 -->
        <div class="helpful-teachers-section">
          <div class="teachers-content-wrapper">
            <InterestedTeacher :teachers="teachers"/>
          </div>
        </div>
        
        <!-- [新增] Nearby Venues Section -->
        <div class="nearby-venues-section">
          <h3 class="section-title">附近适合您的场馆</h3>
          <venues :venues="venues"/>
        </div>

      </el-main>
    </el-container>
    
    <!--  Footer -->
    <BottomBar/>

  </div>
</template>

<script setup>
import { ref } from 'vue';
import {
  MagicStick,
  Memo,
  QuestionFilled,
  TrendCharts
} from '@element-plus/icons-vue';
import 'element-plus/theme-chalk/display.css'; // 引入响应式隐藏类
import HomePageHead from '@/components/homepage/Head.vue';
import BottomBar from '@/components/homepage/BottomBar.vue';
import TopBar from '@/components/homepage/TopBar.vue';
import SearchBar from '@/components/homepage/SearchBar.vue';
import InterestClass from '@/components/homepage/InterestClass.vue';
import InterestedTeacher from '@/components/homepage/InterestedTeacher.vue';

const teacherRating = ref(4.5);

// 课程卡片模拟数据
const courses = ref([
  { id: 1, title: '微软 Power BI 数据分析师', instructor: '陈老师', price: '99', image: 'src/components/page/homepage/Homepage1/Person/picture/image_(2).png' },
  { id: 2, title: 'UI/UX 设计全方位指南', instructor: '王设计师', price: '129', image: 'src/components/page/homepage/Homepage1/Person/picture/image_(1).png' },
  { id: 3, title: '前端Vue3框架实战精讲', instructor: '李工', price: '99', image: 'src/components/page/homepage/Homepage1/Person/picture/image_(4).png' },
  { id: 4, title: 'Python从入门到数据科学', instructor: '赵博士', price: '149', image: 'src/components/page/homepage/Homepage1/Person/picture/image_(3).png' },
]);

// 教师卡片模拟数据
const teachers = ref([
  { id: 1, name: '李明', field: '基础教育', description: '毕业于国内知名师范院校的汉语言文学专业，系统学习了现代汉语，毕业于国内知名师范院校的汉语言文学专业，系统学习了现代汉语', image: 'src/components/Homepage1/Person/picture/1.png' },
  { id: 2, name: '李明', field: '基础教育', description: '毕业于国内知名师范院校的汉语言文学专业，系统学习了现代汉语，毕业于国内知名师范院校的汉语言文学专业，系统学习了现代汉语', image: 'src/components/Homepage1/Person/picture/1.png' },
  { id: 3, name: '李明', field: '基础教育', description: '毕业于国内知名师范院校的汉语言文学专业，系统学习了现代汉语，毕业于国内知名师范院校的汉语言文学专业，系统学习了现代汉语', image: 'src/components/Homepage1/Person/picture/1.png' },
]);

// [新增] 场馆数据
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

.popover-menu p:hover {
  background-color: var(--el-color-primary-light-9);
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

/* [新增] 附近场馆区 */
.nearby-venues-section {
  max-width: 1200px;
  margin: 60px auto 80px;
  padding: 0 20px;
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