<template>
    <div class="common-layout">
        <!-- 黑色顶部条 -->
        <div class="top-black-bar"></div>

        <el-container class="main-container">
            <!-- Header -->
            <el-header class="header">
                <el-row align="middle" class="header-content">
                    <el-col :xs="10" :sm="6" :md="4" class="logo-section">
                        <span class="logo-text">学会</span>
                        <el-button type="primary" link class="ai-learning-btn">
                            AI搜索
                            <el-icon><ArrowRight /></el-icon>
                        </el-button>
                    </el-col>
                    <el-col :xs="0" :sm="12" :md="14" class="search-section">
                        <el-input placeholder="What do you want to learn?" class="header-search-input">
                            <template #suffix>
                                <el-icon><Search /></el-icon>
                            </template>
                        </el-input>
                    </el-col>
                    <el-col :xs="14" :sm="6" :md="6" class="user-action-section">
                        <el-icon :size="20" class="icon-notification"><Bell /></el-icon>
                        <el-avatar :size="30" src="src/components/Coursedetail/picture/1.png.png.png"></el-avatar>
                    </el-col>
                </el-row>
            </el-header>

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
                            <el-button type="primary" size="large" class="join-course-btn">立即购买</el-button>
                        </div>
                        <div class="progress-circle-placeholder"></div>
                    </div>

                    <!-- 课程元数据 -->
                    <div class="quick-links-wrapper">
                        <div class="links-container">
                             <el-link :underline="false" class="link-item">
                                <img src="./picture/线上.png" alt="线上课程">
                                <span class="link-text hidden-md-and-down">线上课程</span>
                            </el-link>
                            <el-link :underline="false" class="link-item">
                                <img src="./picture/设计.png" alt="艺术人文">
                                <span class="link-text hidden-md-and-down">艺术人文</span>
                            </el-link>
                            <el-link :underline="false" class="link-item">
                                <img src="./picture/路径1.png" alt="购买人数">
                                <span class="link-text hidden-md-and-down">购买人数: 1.2k</span>
                            </el-link>
                            <el-link :underline="false" class="link-item no-border">
                                <img src="./picture/用户.png" alt="授课老师">
                                <span class="link-text hidden-md-and-down">授课老师：张研究</span>
                            </el-link>
                        </div>
                    </div>

                    <!-- 课程内容区域 (结构已调整) -->
                    <div class="course-content-area">
                        <!-- 课程详情Tab (全宽) -->
                        <div class="course-details-section">
                            <el-tabs v-model="activeTab">
                                <el-tab-pane label="关于" name="about">
                                    <h4 class="tab-section-title">您将学到什么？</h4>
                                    <div class="learning-goals">
                                        <ul class="learning-goals-list">
                                            <li v-for="(item, index) in learningGoals.slice(0, 2)" :key="index">
                                                <el-icon><SuccessFilled /></el-icon> {{ item }}
                                            </li>
                                        </ul>
                                        <ul class="learning-goals-list">
                                            <li v-for="(item, index) in learningGoals.slice(2, 4)" :key="index">
                                                <el-icon><SuccessFilled /></el-icon> {{ item }}
                                            </li>
                                        </ul>
                                    </div>
                                    <h4 class="tab-section-title">您将获得的技能</h4>
                                    <div class="skills-tags">
                                        <el-tag v-for="skill in skills" :key="skill" type="info" effect="plain">{{ skill }}</el-tag>
                                    </div>
                                    <h4 class="tab-section-title">要了解的详细信息</h4>
                                    <div class="extra-info">
                                        <div class="info-item">
                                            <el-icon class="info-icon"><ChatDotSquare /></el-icon>
                                            <div class="info-text">
                                                <p class="info-label">授课语言</p>
                                                <p class="info-value">中文 (Chinese)</p>
                                            </div>
                                        </div>
                                    </div>
                                </el-tab-pane>
                                <el-tab-pane label="课程" name="content">
                                    <p class="tab-content-text">课程内容正在更新中...</p>
                                </el-tab-pane>
                                <el-tab-pane label="推荐" name="recommendation">
                                    <p class="tab-content-text">相关推荐正在更新中...</p>
                                </el-tab-pane>
                            </el-tabs>
                        </div>
                        
                        <!-- 大纲与侧边栏 (两栏对齐) -->
                        <el-row :gutter="30" class="outline-sidebar-area">
                            <!-- 左侧：课程大纲 -->
                            <el-col :xs="24" :md="16">
                                <div class="course-outline-container">
                                    <h3 class="section-title-sub">课程大纲</h3>
                                    <el-collapse v-model="activeCollapse" class="course-outline-collapse" accordion>
                                        <el-collapse-item v-for="(chapter, index) in courseOutline" :key="index" :name="index">
                                            <template #title>
                                                <div class="custom-collapse-header">
                                                    <el-image :src="chapter.image" class="collapse-thumb" fit="cover" />
                                                    <div class="collapse-title-section">
                                                        <p class="collapse-title">{{ chapter.title }}</p>
                                                        <p class="collapse-duration">{{ chapter.duration }}</p>
                                                    </div>
                                                </div>
                                            </template>
                                            <div class="collapse-content-wrapper">
                                                <div v-for="sub in chapter.subChapters" :key="sub.title" class="sub-chapter-block">
                                                    <p class="sub-chapter-title">{{ sub.title }}</p>
                                                    <div class="section-links">
                                                        <el-link v-for="section in sub.sections" :key="section" type="primary" :underline="false" class="section-link">{{ section }}</el-link>
                                                    </div>
                                                </div>
                                            </div>
                                        </el-collapse-item>
                                    </el-collapse>
                                    <div class="load-more-container-outline">
                                        <el-button type="primary">查看更多</el-button>
                                    </div>
                                </div>
                            </el-col>
                            
                            <!-- 右侧：侧边栏 -->
                            <el-col :xs="24" :md="8">
                                <div class="sidebar">
                                    <el-card shadow="never" class="sidebar-card">
                                        <template #header>
                                            <div class="card-header">
                                                <span>授课教师</span>
                                            </div>
                                        </template>
                                        <div class="instructor-sidebar">
                                            <el-avatar :size="50" :src="instructor.avatar"></el-avatar>
                                            <div class="instructor-text">
                                                <p class="instructor-name-details">授课老师：{{ instructor.name }}</p>
                                            </div>
                                        </div>
                                    </el-card>
                                    <el-card shadow="never" class="sidebar-card">
                                        <template #header>
                                            <div class="card-header">
                                                <span>提供方</span>
                                            </div>
                                        </template>
                                        <div class="provider-info">
                                            <el-avatar shape="square" class="provider-logo">学会</el-avatar>
                                            <span>学会</span>
                                        </div>
                                    </el-card>
                                </div>
                            </el-col>
                        </el-row>
                    </div>
                </div>

                <!-- 您可能感兴趣的课程 -->
                <div class="page-section interested-courses-section">
                    <h3 class="section-title">您可能感兴趣的课程</h3>
                    <el-row :gutter="24">
                        <el-col v-for="course in interestedCourses" :key="course.id" :xs="12" :sm="8" :md="6">
                            <el-card class="course-card" shadow="hover" :body-style="{ padding: '0px' }">
                                <el-image :src="course.image" class="course-card-image" fit="cover" />
                                <div class="course-card-info">
                                    <h4 class="course-card-title">{{ course.title }}</h4>
                                    <div class="course-card-meta">
                                        <span class="course-card-price">¥{{ course.price }}</span>
                                        <el-button type="primary" link>查看详情</el-button>
                                    </div>
                                </div>
                            </el-card>
                        </el-col>
                    </el-row>
                    <div class="load-more-container">
                        <el-button type="primary" size="large">查看更多</el-button>
                    </div>
                </div>

                <!-- 附近适合您的场馆 -->
                <div class="page-section nearby-venues-section">
                    <h3 class="section-title">附近适合您的场馆</h3>
                    <el-row :gutter="24">
                        <el-col v-for="venue in nearbyVenues" :key="venue.id" :xs="24" :sm="12" :md="8">
                            <el-card class="venue-card" shadow="hover" :body-style="{ padding: '0px' }">
                                <el-image :src="venue.image" class="venue-image" fit="cover" />
                                <div class="venue-info-body">
                                    <h4 class="venue-name">{{ venue.name }}</h4>
                                    <p class="venue-detail">
                                        <el-icon><Location /></el-icon>
                                        <span>{{ venue.address }}</span>
                                    </p>
                                    <p class="venue-detail">
                                        <el-icon><Phone /></el-icon>
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

        <!-- Footer -->
        <footer class="site-footer">
            <div class="footer-container">
                 <el-row :gutter="30" justify="space-between">
                    <el-col :xs="24" :sm="12" :md="6" class="footer-col footer-brand">
                        <h3>学会</h3>
                        <p>新一代学习生态系统</p>
                    </el-col>
                    <el-col :xs="12" :sm="6" :md="3" class="footer-col footer-links" v-for="section in footerLinks"
                        :key="section.title">
                        <h4>{{ section.title }}</h4>
                        <ul>
                            <li v-for="link in section.links" :key="link.name">
                                <el-link :underline="false">{{ link.name }}</el-link>
                            </li>
                        </ul>
                    </el-col>
                    <el-col :xs="24" :sm="12" :md="5" class="footer-col footer-social">
                        <div class="social-icons">
                            <a href="#" class="social-icon" aria-label="Facebook"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z"/></svg></a>
                            <a href="#" class="social-icon instagram" aria-label="Instagram"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg></a>
                            <a href="#" class="social-icon" aria-label="Twitter"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616v.064c0 2.295 1.616 4.212 3.763 4.649-.69.188-1.432.233-2.193.084.623 1.955 2.441 3.364 4.604 3.404-1.72 1.34-3.882 2.083-6.242 2.083-.404 0-.802-.023-1.195-.069 2.209 1.409 4.833 2.231 7.646 2.231 9.177 0 14.209-7.469 13.945-14.517.975-.701 1.816-1.583 2.483-2.578z"/></svg></a>
                        </div>
                        <h4>下载我们的APP</h4>
                        <div class="app-badges">
                            <a href="#" class="app-badge"><img class="app-badge-icon" src="./picture/google-play1.png" alt="Google Play"><span class="app-badge-text"><span>GET IT ON</span><strong>Google Play</strong></span></a>
                            <a href="#" class="app-badge"><img class="app-badge-icon" src="./picture/苹果.png" alt="Apple Store"><span class="app-badge-text"><span>Available on the</span><strong>Apple Store</strong></span></a>
                        </div>
                    </el-col>
                </el-row>
            </div>
        </footer>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import {
  ArrowRight, Search, Bell, Location, Phone, SuccessFilled, ChatDotSquare
} from '@element-plus/icons-vue';
import 'element-plus/theme-chalk/display.css';

const activeTab = ref('about');
const activeCollapse = ref(0); // 默认展开第一项，accordion模式下值为number

// 讲师信息
const instructor = ref({
    name: '张老师',
    avatar: 'src/components/Coursedetail/picture/1.png.png.png'
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
        image: 'src/components/homepage/Homepage2/picture/矩形17(3).png',
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
        image: 'src/components/homepage/Homepage2/picture/矩形17.png',
        subChapters: []
    },
    {
        title: '第三大章 课程名称',
        duration: '共45分钟',
        image: 'src/components/homepage/Homepage2/picture/矩形18.png',
        subChapters: []
    },
    {
        title: '第四大章 课程名称',
        duration: '共45分钟',
        image: 'src/components/homepage/Homepage2/picture/矩形19.png',
        subChapters: []
    },
    {
        title: '第五大章 课程名称',
        duration: '共45分钟',
        image: 'src/components/homepage/Homepage2/picture/矩形20.png',
        subChapters: []
    }
]);

const interestedCourses = ref([
    { id: 1, title: '微软 Power BI 数据分析师', price: '99', image: 'src/components/Coursedetail/picture/image(1).png' },
    { id: 2, title: 'UI/UX 设计全方位指南', price: '129', image: 'src/components/Coursedetail/picture/image(2).png' },
    { id: 3, title: '前端Vue3框架实战精讲', price: '99', image: 'src/components/Coursedetail/picture/image(3).png' },
    { id: 4, title: 'Python从入门到数据科学', price: '149', image: 'src/components/Coursedetail/picture/image(3).png' },
]);

const nearbyVenues = ref([
    { id: 1, name: '飞羽竞技场', address: '苏州市工业园区独墅湖校区258号', phone: '19552698532', image: 'src/components/Coursedetail/picture/矩形17.png' },
    { id: 2, name: '飞羽竞技场', address: '苏州市工业园区独墅湖校区258号', phone: '19552698532', image: 'src/components/Coursedetail/picture/矩形17(1).png' },
    { id: 3, name: '飞羽竞技场', address: '苏州市工业园区独墅湖校区258号', phone: '19552698532', image: 'src/components/Coursedetail/picture/矩形17(2).png' },
]);

const footerLinks = ref([
    { title: '公司', links: [{ name: '关于我们' }, { name: '职业' }, { name: '其他' }] },
    { title: '常见问题', links: [{ name: '帮助/常见问题' }, { name: '问题' }, { name: '客服' }] },
    { title: '更多', links: [{ name: '服务协议' }, { name: '隐私政策' }, { name: '商务洽谈' }, { name: '帮助中心' }] }
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

/* Header样式 */
.header {
    background-color: #ffffff;
    box-shadow: var(--el-box-shadow-lighter);
    padding: 0 20px;
    height: 60px;
    display: flex;
    align-items: center;
    position: sticky;
    top: 30px;
    z-index: 1000;
}
.header-content {
    max-width: 1200px;
    margin: 0 auto;
    width: 100%;
}
.logo-section {
    display: flex;
    align-items: center;
}
.logo-text {
    font-size: 20px;
    font-weight: bold;
    color: var(--el-text-color-primary);
    margin-right: 15px;
}
.ai-learning-btn {
    background-color: var(--el-color-primary-light-9);
    border-radius: 20px;
    padding: 5px 12px;
    font-size: 13px;
    display: flex;
    align-items: center;
    border: 1px solid var(--el-color-primary-light-7);
}
.ai-learning-btn .el-icon {
    margin-left: 5px;
}
.search-section {
    display: flex;
    justify-content: center;
}
.header-search-input {
    max-width: 400px;
    --el-input-border-radius: 20px;
}
.user-action-section {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: 20px;
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

/* 课程内容区域 */
.course-content-area {
    margin-top: 40px;
}
.outline-sidebar-area {
    margin-top: 40px;
}

/* 课程详情 Tab */
.course-details-section {
    margin-bottom: 0;
}
.tab-section-title {
    font-size: 18px;
    font-weight: 600;
    margin: 25px 0 15px;
    color: var(--el-text-color-primary);
    border-left: 3px solid var(--el-color-primary);
    padding-left: 10px;
}
.tab-content-text {
    font-size: 15px;
    line-height: 1.8;
    color: var(--el-text-color-regular);
}
:deep(.el-tabs__header) {
    margin-bottom: 25px;
}
:deep(.el-tabs__item) {
    font-size: 16px;
    font-weight: 500;
}

/* "关于" Tab 内的样式 */
.learning-goals {
    display: flex;
    gap: 30px;
}
.learning-goals-list {
    list-style: none;
    padding-left: 0;
    margin: 0;
    flex: 1;
}
.learning-goals-list li {
    display: flex;
    align-items: flex-start;
    gap: 8px;
    margin-bottom: 12px;
    color: var(--el-text-color-regular);
    line-height: 1.6;
}
.learning-goals-list .el-icon {
    color: var(--el-color-primary);
    margin-top: 4px;
}
.skills-tags {
    display: flex;
    gap: 10px;
    flex-wrap: wrap;
}
.extra-info {
    display: flex;
    gap: 40px;
    margin-top: 15px;
}
.info-item {
    display: flex;
    align-items: center;
    gap: 12px;
}
.info-icon {
    font-size: 24px;
    color: var(--el-text-color-secondary);
}
.info-text p {
    margin: 0;
    line-height: 1.4;
}
.info-label {
    font-size: 13px;
    color: var(--el-text-color-secondary);
}
.info-value {
    font-size: 15px;
    font-weight: 500;
    color: var(--el-text-color-primary);
}

/* 侧边栏 */
.sidebar-card {
    border: 1px solid var(--el-border-color-lighter);
    margin-bottom: 20px;
    --el-card-padding: 20px;
}
.sidebar-card .card-header {
    font-size: 16px;
    font-weight: 600;
}
.instructor-sidebar,
.provider-info {
    display: flex;
    align-items: center;
    gap: 15px;
}
.instructor-name-details {
    font-weight: 500;
    margin: 0;
}
.provider-logo {
    background-color: var(--el-color-primary);
    color: white;
    font-weight: bold;
    font-size: 14px;
}

/* 课程大纲 */
.course-outline-container {
    background-color: #f8f9fa;
    border-radius: 8px;
    padding: 25px;
}
.section-title-sub {
    font-size: 22px;
    font-weight: 600;
    margin-bottom: 20px;
    margin-top: 0;
}
.course-outline-collapse {
    border: none;
}
:deep(.el-collapse-item) {
    margin-bottom: 10px;
}
:deep(.el-collapse-item__header) {
    padding: 15px;
    height: auto;
    line-height: normal;
    background-color: #ffffff;
    border: 1px solid var(--el-border-color-lighter);
    border-radius: 4px;
    transition: border-radius 0.3s;
}
:deep(.el-collapse-item.is-active .el-collapse-item__header) {
    border-bottom-color: transparent;
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
}
:deep(.el-collapse-item__wrap) {
    background-color: #ffffff;
    border: 1px solid var(--el-border-color-lighter);
    border-top: none;
    border-bottom-left-radius: 4px;
    border-bottom-right-radius: 4px;
}
:deep(.el-collapse-item__content) {
    padding: 0;
}
.custom-collapse-header {
    display: flex;
    align-items: center;
    gap: 15px;
    width: 100%;
}
.collapse-thumb {
    width: 90px;
    height: 55px;
    border-radius: 4px;
    flex-shrink: 0;
}
.collapse-title-section {
    flex-grow: 1;
}
.collapse-title {
    font-size: 16px;
    font-weight: 600;
    margin: 0 0 5px 0;
    color: var(--el-text-color-primary);
}
.collapse-duration {
    font-size: 13px;
    color: var(--el-text-color-secondary);
    margin: 0;
}
.collapse-content-wrapper {
    padding: 20px 25px;
}
.sub-chapter-block {
    margin-bottom: 20px;
}
.sub-chapter-block:last-child {
    margin-bottom: 0;
}
.sub-chapter-title {
    font-weight: 600;
    font-size: 15px;
    color: var(--el-text-color-primary);
    margin: 0 0 12px 0;
}
.section-links {
    display: flex;
    flex-wrap: wrap;
    gap: 10px 25px;
}
.section-link {
    font-size: 14px;
}
.load-more-container-outline {
    text-align: center;
    margin-top: 25px;
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
.load-more-container {
    text-align: left;
    margin-top: 20px;
}

/* 推荐课程卡片 */
.course-card {
    margin-bottom: 24px;
    border-radius: 8px;
}
.course-card-image {
    width: 100%;
    height: 150px;
}
.course-card-info {
    padding: 16px;
}
.course-card-title {
    font-size: 15px;
    font-weight: 500;
    margin: 0 0 10px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}
.course-card-meta {
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.course-card-price {
    font-size: 16px;
    font-weight: bold;
    color: var(--el-color-danger);
}

/* 附近场馆卡片 */
.venue-card {
    margin-bottom: 24px;
    border-radius: 8px;
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
    font-size: 17px;
    font-weight: 600;
    margin: 0 0 15px;
}
.venue-detail {
    display: flex;
    align-items: center;
    font-size: 14px;
    color: var(--el-text-color-secondary);
    margin: 0 0 8px;
}
.venue-detail .el-icon {
    margin-right: 8px;
}

/* 页脚 */
.site-footer {
    background: rgba(242, 246, 253, 1);
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
    margin: 0 0 10px;
}
.footer-brand p {
    font-size: 14px;
    margin: 0;
}
.footer-links h4 {
    font-size: 16px;
    font-weight: 600;
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
}
.app-badge {
    display: inline-flex;
    align-items: center;
    background-color: #404040;
    color: #ffffff;
    padding: 8px 16px;
    border-radius: 20px;
    text-decoration: none;
    transition: background-color 0.2s;
}
.app-badge:hover {
    background-color: #2c2c2c;
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
  .course-banner-new { flex-direction: column; text-align: center; gap: 20px; }
  .course-info-main { max-width: 100%; }
  .quick-links-wrapper { width: 95%; padding: 10px; flex-direction: column; height: auto; }
  .links-container { flex-wrap: wrap; justify-content: center; gap: 10px; }
  .link-item { border-right: none; padding: 5px 10px; }
  .learning-goals { flex-direction: column; gap: 0; }
  .footer-col { text-align: center; }
  .social-icons, .app-badges { justify-content: center; }
}
</style>