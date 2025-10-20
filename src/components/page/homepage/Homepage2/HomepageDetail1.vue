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
            <el-breadcrumb-item>探索您感兴趣的老师</el-breadcrumb-item>
            <el-breadcrumb-item>老师详情</el-breadcrumb-item>
        </el-breadcrumb>
    </div>

    <!-- 老师主 Banner -->
    <div class="teacher-banner">
        <el-row :gutter="30" align="middle">
            <el-col :xs="24" :md="10" class="teacher-info-col">
                <h1 class="teacher-name">张老师</h1>
                <p class="teacher-description">
                    毕业于国内知名师范院校的汉语言文学专业，系统学习了现代汉语...
                </p>
                <div class="teacher-stats">
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
                    <el-icon><Plus /></el-icon>
                    关注
                </el-button>
            </el-col>
            <el-col :xs="24" :md="14" class="teacher-image-col">
                <el-image
                    src="src/components/homepage/Homepage2/picture/矩形2(1).png"
                    fit="contain"
                    class="teacher-main-image"
                >
                   <template #placeholder>
                        <div class="image-slot">加载中...</div>
                   </template>
                </el-image>
            </el-col>
        </el-row>
    </div>

            <!-- 相关证书 -->
            <div class="page-section certificates-section">
                <h3 class="section-title">相关证书</h3>
                <div class="certificates-container">
                    <div v-for="cert in certificates" :key="cert.id" class="certificate-item">
                        <el-image :src="cert.image" class="certificate-image" fit="cover" />
                    </div>
                </div>
            </div>

        <!-- 您可能感兴趣的课程 -->
        <div class="page-section interested-courses-section">
            <h3 class="section-title">TA发布的课程</h3>
            <InterestClass1 :courses="interestedCourses"/>
        </div>

        <!-- 附近适合您的场馆 -->
        <div class="page-section nearby-venues-section">
            <h3 class="section-title">合作的场馆</h3>
            <HomePageVenue :venues="nearbyVenues"/>
        </div>

      </el-main>

    </el-container>
         <!-- 新增：其他对您可能有帮助的老师 -->
       <div class="page-section recommended-teachers-section">
            <h3 class="section-title">其他对您可能有帮助的老师</h3>
            <InterestedTeacher :teachers="recommendedTeachers"></InterestedTeacher>
        </div>
    <!-- Footer -->
       <BottomBar/>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import {
  ArrowRight, Plus, Van, Connection, Mug
} from '@element-plus/icons-vue';
import 'element-plus/theme-chalk/display.css';
import 'element-plus/theme-chalk/display.css';
import HomePageHead from '@/components/homepage/Head.vue';
import BottomBar from '@/components/homepage/BottomBar.vue';
import InterestClass1 from '@/components/homepage/InterestClass1.vue';
import HomePageVenue from '@/components/homepage/HomePageVenue.vue';
import InterestedTeacher from '@/components/homepage/InterestedTeacher.vue';

const activeTab = ref('overview');

const amenities = ref([
  { icon: Van, text: '免费停车' },
  { icon: Connection, text: '免费WIFI' },
  { icon: Mug, text: '茶歇提供' },
  { text: '无障碍通道' }
]);

const interestedCourses = ref([
  { id: 1, title: '微软 Power BI 数据分析师', instructor: '陈老师', price: '99', image: 'src/components/Coursedetail/picture/image(1).png' },
  { id: 2, title: 'UI/UX 设计全方位指南', instructor: '王设计师', price: '129', image: 'src/components/Coursedetail/picture/image(2).png' },
  { id: 3, title: '前端Vue3框架实战精讲', instructor: '李工', price: '99', image: 'src/components/Coursedetail/picture/image(3).png' },
  { id: 4, title: 'Python从入门到数据科学', instructor: '赵博士', price: '149', image: 'src/components/Coursedetail/picture/image(3).png' },
]);

const certificates = ref([
  { id: 1, image: 'src/components/homepage/Homepage2/picture/image(3).png' },
  { id: 2, image: 'src/components/homepage/Homepage2/picture/image(3).png' },
  { id: 3, image: 'src/components/homepage/Homepage2/picture/image(3).png' },
]);

const nearbyVenues = ref([
  { id: 1, name: '飞羽竞技场', type: '篮球场馆', address: '苏州市工业园区独墅湖校区258号', phone: '19552698532', image: 'src/components/Coursedetail/picture/矩形17.png' },
  { id: 2, name: '飞羽竞技场', type: '篮球场馆', address: '苏州市工业园区独墅湖校区258号', phone: '19552698532', image: 'src/components/Coursedetail/picture/矩形17(1).png' },
  { id: 3, name: '飞羽竞技场', type: '篮球场馆', address: '苏州市工业园区独墅湖校区258号', phone: '19552698532', image: 'src/components/Coursedetail/picture/矩形17(2).png' },
]);

const recommendedTeachers = ref([
  {
    id: 1,
    name: '李明',
    avatar: 'src/components/homepage/Homepage2/picture/圆形3(2).png',
    specialization: '数据科学 · 人工智能',
    rating: 4.8,
    description: '前Google数据科学家, 10年机器学习经验'
  },
  {
    id: 2,
    name: '李明',
    avatar: 'src/components/homepage/Homepage2/picture/圆形3(1).png',
    specialization: '数据科学 · 人工智能',
    rating: 4.8,
    description: '前Google数据科学家, 10年机器学习经验'
  },
  {
    id: 3,
    name: '李明',
    avatar: 'src/components/homepage/Homepage2/picture/圆形3(3).png',
    specialization: '数据科学 · 人工智能',
    rating: 4.8,
    description: '前Google数据科学家, 10年机器学习经验'
  },
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

/* 老师 Banner 样式 */
.teacher-banner {
    padding: 20px 0;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
}
.teacher-info-col {
    display: flex;
    flex-direction: column;
    justify-content: center;
}
.teacher-name {
    font-size: 38px;
    font-weight: 600;
    margin: 0 0 15px;
}
.teacher-description {
    font-size: 16px;
    line-height: 1.7;
    color: var(--el-text-color-regular);
    margin-bottom: 30px;
}
.teacher-stats {
    display: flex;
    gap: 40px;
    margin-bottom: 35px;
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
.follow-btn {
    width: 120px; /* 固定关注按钮宽度 */
}
.follow-btn .el-icon {
    margin-right: 8px;
}
.teacher-image-col {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 400px; /* 保证有足够空间展示背景 */
}

.teacher-image-col::after {
    content: '';
    position: absolute;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
    width: 420px; /* 尺寸比蓝色圆更大 */
    height: 420px;
    background-color: #f0f5ff; /* 使用一个非常浅的蓝色 */
    border-radius: 50%;
    z-index: 0; /* 把它放在最底层 */
}

/* 优化：内部的蓝色圆和文字 */
.teacher-image-col::before {
    content: 'XUE\A HUI'; /* 使用 \A 来强制换行 */
    white-space: pre; /* 让 \A 换行符生效 */
    line-height: 1.1; /* 调整文字行距 */
    letter-spacing: 2px;
    position: absolute;
    right: 40px; /* 调整位置，使其不完全居中 */
    top: 50%;
    transform: translateY(-50%);
    width: 300px;
    height: 300px;
    background-color: var(--el-color-primary);
    border-radius: 50%;
    z-index: 1; /* 层级比淡蓝色圆高 */

    /* 文字样式 */
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start; /* 文字左对齐 */
    box-sizing: border-box;
    padding-left: 50px; /* 将文字向内推 */

    color: white;
    font-size: 20px;
    font-weight: bold;
}

.teacher-main-image {
    width: 100%;
    max-width: 300px;
    height: auto;
    z-index: 2; /* 确保层级最高 */
    position: relative; /* 激活 z-index */
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

/* 机构简介样式 (现在是相关证书样式) */
.certificates-section {
    padding: 40px 0;
    margin-bottom: 40px;
    width: 100%;
}
.certificates-container {
    display: flex;
    justify-content: center; /* 新增：让 flex 子项在主轴上居中对齐 */
    gap: 24px;
    flex-wrap: wrap; /* 保留：当屏幕变窄时，图片可以自动换行 */
}
.certificate-item {
    padding: 5px;
    background-color: #fff;
    border-radius: 8px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
    transition: all 0.3s ease;
    cursor: pointer;
}
.certificate-item:hover {
    transform: translateY(-5px);
    box-shadow: 0 6px 16px rgba(0, 0, 0, 0.12);
}
.certificate-image {
    width: 240px;
    height: 160px;
    display: block;
    border-radius: 4px;
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
/* 响应式适配 */
@media (max-width: 992px) {
    .venue-title { font-size: 28px; }
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
    .venue-title { font-size: 24px; }
    .venue-main-image { height: 200px; }
    .venue-stats {
        gap: 20px;
        justify-content: center;
    }
    .amenities-bar {
        justify-content: center;
    }
    .page-section { padding: 0 15px; margin-bottom: 60px; }
    .section-title { font-size: 20px; }
    .footer-col { text-align: center; }
    .social-icons, .app-badges { justify-content: center; }
}
</style>
