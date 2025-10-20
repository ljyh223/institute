<template>
  <div class="common-layout">
    <!-- 黑色顶部条 -->
    <div class="top-black-bar"></div>
        <HomePageHead/>
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
            
           <TopBar1 :defineProps="defineProps"/>
            
            <!-- 课程元数据 -->
            <div class="quick-links-wrapper">
                <div class="links-container">
                <el-link :underline="false" class="link-item">
                    <img src="./picture/线上.png" alt="" >
                    <span class="link-text hidden-md-and-down">线上课程</span>
                </el-link>
                <el-link :underline="false" class="link-item">
                    <img src="./picture/设计.png" alt="">
                    <span class="link-text hidden-md-and-down">艺术人文</span>
                </el-link>
                <el-link :underline="false" class="link-item">
                    <img src="./picture/路径1.png" alt="">
                    <span class="link-text hidden-md-and-down">购买人数:1.2K</span>
                </el-link>
                <el-link :underline="false" class="link-item">
                    <img src="./picture/用户.png" alt="">
                    <span class="link-text hidden-md-and-down">授课老师：张研究</span>
                </el-link>
                </div>
            </div>


            <!-- 课程详情与内容 -->
            <div class="course-details-section">
                <el-tabs v-model="activeTab">
                    <el-tab-pane label="课程概览" name="overview">
                        <h4 class="tab-section-title">课程简介</h4>
                        <p class="tab-content-text">
                            本课程聚焦职场沟通痛点，通过“理论拆解+场景模拟”模式，覆盖跨部门协作、向上汇报、客户谈判等核心场景。你将掌握精准表达、倾听共情、冲突化解等实用技巧，避开沟通误区。6节干货课+3次小组演练，助你快速提升沟通效率，建立良好职场协作关系，让表达成为职业竞争力。
                        </p>
                    </el-tab-pane>
                    <el-tab-pane label="课程内容" name="content">
                        <h4 class="tab-section-title">课程大纲</h4>
                        <p class="tab-content-text">
                            课程内容正在更新中，敬请期待...
                        </p>
                    </el-tab-pane>
                </el-tabs>
            </div>
        </div>

        <!-- 您可能感兴趣的课程 -->
        <div class="page-section interested-courses-section">
            <h3 class="section-title">您可能感兴趣的课程</h3>
            <InterestClass1 :interestedCourses="interestedCourses"/>
        </div>

        <!-- 附近适合您的场馆 -->
        <div class="page-section nearby-venues-section">
            <h3 class="section-title">附近适合您的场馆</h3>
           <HomePageVenue :venueList="nearbyVenues"/>
        </div>
      </el-main>
    </el-container>
    
    <!-- Footer -->
       <BottomBar/>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { ArrowRight } from '@element-plus/icons-vue';
import 'element-plus/theme-chalk/display.css';
import HomePageHead from '@/components/homepage/Head.vue';
import TopBar1 from '@/components/homepage/TopBar1.vue';
import InterestClass1 from '@/components/homepage/InterestClass1.vue';
import HomePageVenue from '@/components/homepage/HomePageVenue.vue';
import BottomBar from '@/components/homepage/BottomBar.vue';

const activeTab = ref('overview');

const defineProps = ref({
  title: '...',
  subtitle: '...',
  price: 299,
  coverImage: '...'
});

const interestedCourses = ref([
  { id: 1, title: '微软 Power BI 数据分析师', instructor: '陈老师', price: '99', image: 'src/components/Coursedetail/picture/image(1).png' },
  { id: 2, title: 'UI/UX 设计全方位指南', instructor: '王设计师', price: '129', image: 'src/components/Coursedetail/picture/image(2).png' },
  { id: 3, title: '前端Vue3框架实战精讲', instructor: '李工', price: '99', image: 'src/components/Coursedetail/picture/image(3).png' },
  { id: 4, title: 'Python从入门到数据科学', instructor: '赵博士', price: '149', image: 'src/components/Coursedetail/picture/image(3).png' },
]);

const nearbyVenues = ref([
  { id: 1, name: '飞羽竞技场', type: '篮球场馆', address: '苏州市工业园区独墅湖校区258号', phone: '19552698532', image: 'src/components/Coursedetail/picture/矩形17.png' },
  { id: 2, name: '飞羽竞技场', type: '篮球场馆', address: '苏州市工业园区独墅湖校区258号', phone: '19552698532', image: 'src/components/Coursedetail/picture/矩形17(1).png' },
  { id: 3, name: '飞羽竞技场', type: '篮球场馆', address: '苏州市工业园区独墅湖校区258号', phone: '19552698532', image: 'src/components/Coursedetail/picture/矩形17(2).png' },
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

/* 课程元数据条 */
.quick-links-wrapper {
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 800px;
  height: 60px;
  /* 负边距使其上移，产生悬浮在上方 Banner 上的效果 */
  margin: -30px auto 0;
  padding: 10px 10px 0 25px;
  background-color: #ffffff;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.08);
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
  /* Element Plus el-link 默认颜色覆盖 */
  --el-link-text-color: var(--el-text-color-primary);
}
.link-item:hover {
  /* 定义悬停时的颜色，使用主色调 */
  --el-link-text-color: var(--el-color-primary);
}
.link-text {
  margin-left: 8px;
}

/* 课程详情 Tab */
.course-details-section {
    margin-bottom: 60px;
    margin-top: 60px;
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
.load-more-container {
    text-align: left;
    margin-top: 20px;
}

/* 响应式适配 */
@media (max-width: 992px) {
    .course-title { font-size: 30px; }
    .course-banner { padding: 30px; }
}

@media (max-width: 767px) {
    .course-banner { padding: 20px; text-align: center; }
    .course-info-col { margin-bottom: 25px; }
    .course-title { font-size: 24px; }
    .course-subtitle { font-size: 14px; }
    .course-price { font-size: 28px; }
    .course-main-image { height: 200px; }

    .quick-links-wrapper {
    width: 95%; /* 在小屏幕上增加宽度占比 */
    padding-left: 15px; /* 稍微调整内边距 */
  }
}
</style>