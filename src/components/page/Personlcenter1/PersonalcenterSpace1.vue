<template>
  <div class="common-layout">
    <!-- 黑色顶部条 -->
    <div class="top-black-bar"></div>
    <!-- Header -->
    <HomePageHead />
    <el-container class="main-container">
      <!-- Main Content -->
      <el-main class="main-content">
        <div class="page-container">
          <!-- 面包屑导航 -->
          <el-breadcrumb :separator-icon="ArrowRight" class="page-breadcrumb">
            <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item>附近适合您的场馆</el-breadcrumb-item>
            <el-breadcrumb-item>共享的空间</el-breadcrumb-item>
            <el-breadcrumb-item>查看详情</el-breadcrumb-item>
          </el-breadcrumb>
        </div>

        <!-- 主 Banner -->
        <div class="space-banner">
          <div class="banner-content">
            <div class="banner-text">
              <h1 class="banner-title">创新学习中心</h1>
              <h2 class="banner-subtitle">Innovation Learning Center</h2>
            </div>
            <div class="banner-image-container">
              <el-image
                src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=2070&auto=format&fit=crop"
                fit="cover" class="banner-image" />
            </div>
          </div>
        </div>

        <div class="page-container">
          <!-- 设施服务栏 -->
          <div class="amenities-bar">
            <div v-for="(amenity, index) in amenities" :key="index" class="amenity-item">
              <el-icon v-if="amenity.icon" :size="20">
                <component :is="amenity.icon" />
              </el-icon>
              <span>{{ amenity.text }}</span>
            </div>
          </div>

          <!-- 空间详情介绍 -->
          <div class="space-details-section">
            <div class="details-header">
              <div class="details-title-group">
                <h3 class="details-title">创新学习中心</h3>
                <el-tag type="primary" effect="dark" round>高等教育</el-tag>
              </div>
              <span class="details-price">去编辑-></span>
            </div>
            <div class="details-info-grid">
              <div class="info-item">
                <span class="info-label">开始时间-结束时间</span>
                <span class="info-content">2025/12/29 12:00 - 2025/12/29 12:00</span>
              </div>
              <div class="info-item">
                <span class="info-label">空间地址</span>
                <span class="info-content">XXXXXXX空间XXXXXX街道12号</span>
              </div>
              <div class="info-item full-width">
                <span class="info-label">简要介绍</span>
                <p class="info-content">
                  创新学习中心成立于2015年，是北京领先的综合性学习场所，致力于为学员提供最优质的学习环境和最前沿的课程内容。中心占地面积2000平方米，拥有现代化的教学设施和舒适的学习空间。我们秉承“学习改变生活，知识创造未来”的理念，汇聚了各行业顶尖的师资力量，开设了包括编程开发、UI/UX设计、数字营销、语言培训等多个领域的课程，满足不同学员的学习需求。中心采用小班教学模式，确保每位学员都能获得充分的关注和指导。同时,
                  我们还提供职业规划服务, 帮助学员在学习结束后顺利实现职业转型或晋升。
                </p>
              </div>
            </div>
          </div>
        </div>

        <!-- 图片画廊 -->
        <div class="page-container">
          <Gallery :main-image="galleryMainImage" :preview-image="galleryPreviewImage" />
        </div>

        <!-- 其他您可能感兴趣的空间 -->
        <div class="page-container recommended-section">
          <h3 class="section-title">其他您可能感兴趣的空间</h3>
          <div class="recommended-spaces-container">
            <div v-for="space in recommendedSpaces" :key="space.id" class="space-card">
              <el-image :src="space.image" class="space-card-image" fit="cover" />
              <div class="space-card-info">
                <span class="space-card-name">{{ space.name }}</span>
                <el-button type="primary" text bg class="details-btn">查看详情</el-button>
              </div>
            </div>
          </div>
          <div class="load-more-container">
            <el-button type="primary">查看更多</el-button>
          </div>
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
  ArrowRight, Search, Bell, Van, Connection, CoffeeCup
} from '@element-plus/icons-vue';
import 'element-plus/theme-chalk/display.css';
import HomePageHead from '@/components/homepage/Head.vue';
import BottomBar from '@/components/homepage/bar/BottomBar.vue';
import Gallery from '@/components/homepage/Gallery.vue'; // 修正：只保留一个 import

// 设施服务数据
const amenities = ref([
  { icon: Van, text: '免费停车' },
  { icon: Connection, text: '免费WIFI' },
  { icon: CoffeeCup, text: '茶歇提供' },
  { text: '无障碍通道' }
]);

// 图片画廊数据
const galleryMainImage = ref('https://images.unsplash.com/photo-1444464666168-49d633b86797?q=80&w=2069&auto=format&fit=crop');
const galleryPreviewImage = ref('https://images.unsplash.com/photo-1444464666168-49d633b86797?q=80&w=2069&auto=format&fit=crop');

// 推荐空间数据
const recommendedSpaces = ref([
  { id: 1, name: '豪华办公室1', image: 'src/components/Personlcenter1/picture/image(4).png' },
  { id: 2, name: 'X OPENSPACE', image: 'src/components/Personlcenter1/picture/image(7).png' },
  { id: 3, name: '豪华办公室3', image: 'src/components/Personlcenter1/picture/image(6).png' },
  { id: 4, name: '豪华办公室1', image: 'src/components/Personlcenter1/picture/image(5).png' },
  { id: 5, name: '豪华办公室3', image: 'src/components/Personlcenter1/picture/image(6).png' },
]);

// 页脚数据
const footerLinks = ref([
  { title: '公司', links: [{ name: '关于我们' }, { name: '职业' }, { name: '其他' }] },
  { title: '常见问题', links: [{ name: '帮助/常见问题' }, { name: '问题' }, { name: '客服' }] },
  { title: '更多', links: [{ name: '服务协议' }, { name: '隐私政策' }, { name: '商务洽谈' }, { name: '帮助中心' }] }
]);
</script>

<style scoped>
/* 全局布局 */
.common-layout {
  background-color: #f7f8fa;
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

.page-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

.section-title {
  font-size: 22px;
  font-weight: 600;
  color: var(--el-text-color-primary);
  margin-bottom: 24px;
  text-align: left;
}

/* 面包屑 */
.page-breadcrumb {
  padding: 24px 0;
}

/* 主 Banner */
.space-banner {
  height: 400px;
  /* === 已修正的背景图片 === */
  background-image: url('https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=2070&auto=format&fit=crop');
  background-size: cover;
  background-position: center;
  position: relative;
  display: flex;
  align-items: center;
}

.space-banner::before {
  content: '';
  position: absolute;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.3);
  /* 黑色透明层 */
}

.banner-content {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  position: relative;
  z-index: 2;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
}

.banner-text {
  color: #fff;
}

.banner-title {
  font-size: 42px;
  font-weight: 700;
  margin: 0 0 10px;
}

.banner-subtitle {
  font-size: 24px;
  opacity: 0.9;
  margin: 0 0 24px;
}

.reserve-btn.el-button {
  font-size: 16px;
  padding: 20px 30px;
}

.banner-image-container .banner-image {
  width: 320px;
  height: 200px;
  border-radius: 12px;
  border: 4px solid #fff;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.2);
}

/* 设施服务栏 */
.amenities-bar {
  display: flex;
  justify-content: space-around;
  background-color: #fff;
  border-radius: 12px;
  padding: 24px;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.07);
  margin-top: -60px;
  position: relative;
  z-index: 10;
}

.amenity-item {
  display: flex;
  align-items: center;
  gap: 10px;
  color: var(--el-text-color-regular);
  padding: 0 20px;
  border-right: 1px solid var(--el-border-color-lighter);
}

.amenity-item:last-child {
  border-right: none;
}

/* 空间详情 */
.space-details-section {
  background-color: #fff;
  padding: 32px;
  border-radius: 12px;
  margin-top: 32px;
}

.details-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid var(--el-border-color-lighter);
  padding-bottom: 20px;
  margin-bottom: 24px;
}

.details-title-group {
  display: flex;
  align-items: center;
  gap: 12px;
}

.details-title {
  font-size: 24px;
  font-weight: 600;
  margin: 0;
}

.details-price {
  font-size: 15px;
  font-weight: 500;
  letter-spacing: 0px;
  line-height: 15px;
  color: rgba(0, 86, 210, 1);
}

.details-info-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px 40px;
}

.info-item {
  display: flex;
  flex-direction: column;
}

.info-item.full-width {
  grid-column: 1 / -1;
}

.info-label {
  font-size: 14px;
  color: var(--el-text-color-secondary);
  margin-bottom: 8px;
}

.info-content {
  font-size: 15px;
  color: var(--el-text-color-primary);
  line-height: 1.7;
  margin: 0;
}

/* 推荐空间 */
.recommended-section {
  padding-bottom: 60px;
}

.recommended-spaces-container {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 20px;
}

.space-card {
  border: 1px solid var(--el-border-color-light);
  border-radius: 8px;
  background-color: #fff;
  transition: box-shadow 0.3s;
  overflow: hidden;
}

.space-card:hover {
  box-shadow: var(--el-box-shadow-light);
}

.space-card-image {
  width: 100%;
  display: block;
  aspect-ratio: 4 / 3;
}

.space-card-info {
  padding: 12px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.space-card-name {
  font-size: 14px;
}

.details-btn.el-button {
  font-size: 12px;
  height: 28px;
}

.load-more-container {
  text-align: left;
  margin-top: 24px;
}

/* --- 响应式适配 --- */
@media (max-width: 991px) {
  .banner-content {
    flex-direction: column;
    text-align: center;
  }

  .banner-image-container {
    margin-top: 24px;
  }

  .amenities-bar {
    flex-wrap: wrap;
    justify-content: center;
    gap: 15px;
  }

  .amenity-item {
    border: none;
    padding: 5px;
  }

  .details-info-grid {
    grid-template-columns: 1fr;
  }

  .recommended-spaces-container {
    grid-template-columns: repeat(3, 1fr);
  }
}

@media (max-width: 767px) {
  .header-content {
    flex-wrap: wrap;
  }

  .search-section {
    order: 3;
    width: 100%;
    margin: 10px 0 0;
  }

  .banner-title {
    font-size: 32px;
  }

  .banner-subtitle {
    font-size: 18px;
  }

  .banner-image-container .banner-image {
    width: 280px;
    height: 175px;
  }

  .details-header {
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;
  }

  .recommended-spaces-container {
    grid-template-columns: repeat(2, 1fr);
  }
}
</style>