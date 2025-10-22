<template>

    <div class="top-black-bar"></div>
    <HomePageHead/>
  <el-container class="page-container">
    <!-- 主体内容 -->
    <el-main class="page-main">
      <!-- Hero Section -->
      <div class="hero-section">
        <el-avatar class="deco-avatar deco-avatar-1" :size="90" src="https://images.unsplash.com/photo-1531545514256-b1400bc00f31?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80" />
        <el-avatar class="deco-avatar deco-avatar-2" :size="120" src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" />
        <el-avatar class="deco-avatar deco-avatar-3" :size="60" src="https://images.unsplash.com/photo-1543269865-cbf427effbad?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" />

        <div class="hero-text">
          <h2>—— 在这里 没有独自啃书的枯燥</h2>
          <p>创建学习小组, 找同频队友, 分享笔记、拆解难题, 一起把目标变成现实!</p>
          <p class="en-text">Create your own group, mutual supervision and learning make progress visible and catch-up achievable!</p>
        </div>
        <div class="create-btn-group">
          <el-button type="primary" size="large" class="create-btn">开始创建</el-button>
          <el-button size="large" circle class="create-btn-arrow">
            <el-icon><ArrowRight /></el-icon>
          </el-button>
        </div>
      </div>

      <!-- 我创建的小组 -->
      <div class="group-section">
        <h3 class="section-title">我创建的小组</h3>
        <el-row :gutter="20">
          <el-col v-for="group in myCreatedGroups" :key="group.id" :xs="12" :sm="8" :md="6">
            <el-card shadow="hover" :body-style="{ padding: '0px' }" class="group-card">
              <img :src="group.image" class="card-image"/>
              <div class="card-content">
                <span>{{ group.title }}</span>
                <div class="card-subtitle">{{ group.author }}</div>
              </div>
            </el-card>
          </el-col>
        </el-row>
        <div class="view-more-container">
            <el-button type="primary">查看更多</el-button>
        </div>
      </div>

      <!-- 我加入的小组 -->
      <div class="group-section">
        <h3 class="section-title">我加入的小组</h3>
        <el-row :gutter="20">
          <el-col v-for="group in myJoinedGroups" :key="group.id" :xs="12" :sm="8" :md="6">
            <el-card shadow="hover" :body-style="{ padding: '0px' }" class="group-card joined-group-card">
              <div class="image-with-avatar-container">
                <img :src="group.image" class="card-image"/>
                <el-avatar :size="48" :src="group.leaderAvatar" class="overlaid-avatar"/>
              </div>
              <div class="card-content">
                <span>{{ group.title }}</span>
                <div class="card-subtitle">{{ group.leaderName }}</div>
              </div>
            </el-card>
          </el-col>
        </el-row>
         <div class="view-more-container">
            <el-button type="primary">查看更多</el-button>
        </div>
      </div>

      <!-- 热门小组 -->
      <div class="group-section popular-section">
        <div class="popular-layout-container">
            <div class="popular-title-wrapper">
                <h3 class="section-title">热门小组</h3>
                <p class="en-subtitle">popular group</p>
            </div>
            <el-card v-for="(group, index) in popularGroups" 
                :key="group.id" 
                shadow="always"
                :body-style="{ padding: '0px' }"
                :class="['popular-group-card', 'card-pos-' + (index + 1)]">
                <div class="popular-card-content">
                    <el-avatar :size="60" :src="group.avatar" />
                    <h4 class="popular-card-title">{{ group.title }}</h4>
                    <p class="popular-card-tags">{{ group.tags }}</p>
                </div>
            </el-card>
        </div>
      </div>

      <!-- 您可能感兴趣的小组 -->
       <div class="group-section">
        <h3 class="section-title">您可能感兴趣的小组</h3>
        <el-row :gutter="20">
          <el-col v-for="group in recommendedGroups" :key="group.id" :xs="12" :sm="8" :md="6">
            <!-- --- 这是根据新图片优化的卡片结构 --- -->
            <div class="recommended-card">
              <img :src="group.image" class="recommended-card-image" :alt="group.title"/>
              <div class="text-overlay">
                  <h5 class="overlay-title">{{ group.title }}</h5>
                  <p class="overlay-subtitle">{{ group.author }}</p>
              </div>
            </div>
          </el-col>
        </el-row>
         <div class="view-more-container">
            <el-button type="primary">查看更多</el-button>
        </div>
      </div>

    </el-main>

  </el-container>
  <BottomBar/>
</template>

<script setup>
import { ref } from 'vue';
import { Search, Bell, ArrowRight, ChromeFilled, Promotion } from '@element-plus/icons-vue';
import HomePageHead from '@/components/homepage/Head.vue';
import BottomBar from '@/components/homepage/bar/BottomBar.vue';

const myCreatedGroups = ref([
  { id: 1, title: '微软 Power BI 数据分析师', image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80', author: '陈老师' },
  { id: 2, title: '微软 Power BI 数据分析师', image: 'https://images.unsplash.com/photo-1560420025-9453c02b4724?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1964&q=80', author: '陈老师' },
  { id: 3, title: '微软 Power BI 数据分析师', image: 'https://images.unsplash.com/photo-1543286386-713bdd548da4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80', author: '陈老师' },
  { id: 4, title: '微软 Power BI 数据分析师', image: 'https://images.unsplash.com/photo-1591696205602-2f950c417cb9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80', author: '陈老师' },
]);

const myJoinedGroups = ref([
  { id: 1, title: '微软 数据分析小组', image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80', leaderName: '陈恩翔', leaderAvatar: 'https://randomuser.me/api/portraits/men/32.jpg' },
  { id: 2, title: '微软 数据分析小组', image: 'https://images.unsplash.com/photo-1470770841072-f978cf4d019e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80', leaderName: '陈恩翔', leaderAvatar: 'https://randomuser.me/api/portraits/men/44.jpg' },
  { id: 3, title: '微软 数据分析小组', image: 'https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80', leaderName: '陈恩翔', leaderAvatar: 'https://randomuser.me/api/portraits/men/36.jpg' },
]);

const popularGroups = ref([
  { id: 1, title: '英语学习小组', tags: '数据科学 · 人工智能', avatar: 'https://images.unsplash.com/photo-1516410529446-21e777ee7338?auto=format&fit=crop&w=120' },
  { id: 2, title: '英语学习小组', tags: '数据科学 · 人工智能', avatar: 'https://images.unsplash.com/photo-1524502397800-2d82be854e94?auto=format&fit=crop&w=120' },
  { id: 3, title: '英语学习小组', tags: '数据科学 · 人工智能', avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120' },
  { id: 4, title: '英语学习小组', tags: '数据科学 · 人工智能', avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=120' },
  { id: 5, title: '英语学习小组', tags: '数据科学 · 人工智能', avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=120' },
]);

const recommendedGroups = ref([
  { id: 1, title: '微软 数据分析小组', image: 'https://images.unsplash.com/photo-1532274402911-5a369e4c4bb5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80', author: '陈恩翔' },
  { id: 2, title: '微软 数据分析小组', image: 'https://images.unsplash.com/photo-1433086966358-54859d0ed716?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80', author: '陈恩翔' },
  { id: 3, title: '微软 数据分析小组', image: 'https://images.unsplash.com/photo-1475924156734-496f6cac6ec1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80', author: '陈恩翔' },
  { id: 4, title: '微软 数据分析小组', image: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80', author: '陈恩翔' },
]);

</script>

<style scoped>
/* 全局样式 */
.page-container {
  background-color: #f9fafb;
}

.page-main {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
  overflow: visible;
}
.top-black-bar {
  width: 100%;
  height: 30px;
  background: rgba(56, 56, 56, 1);
  position: sticky;
  top: 0;
  z-index: 1001;
}
/* Hero Section */
.hero-section {
  text-align: center;
  padding: 80px 0;
  position: relative;
}
.deco-avatar {
    position: absolute;
    border: 3px solid #eef2ff;
}
.deco-avatar-1 { top: 15%; left: 15%; }
.deco-avatar-2 { bottom: 5%; left: 20%; }
.deco-avatar-3 { top: 35%; right: 18%; }

.hero-text h2 {
  font-size: 2.5rem;
  font-weight: 500;
  color: var(--el-text-color-primary);
  margin-bottom: 16px;
}
.hero-text p {
  font-size: 1.1rem;
  color: var(--el-text-color-secondary);
  margin-bottom: 8px;
}
.hero-text .en-text {
    color: #aab2bd;
    font-size: 1rem;
}
.create-btn-group {
    margin-top: 32px;
    display: inline-flex;
    align-items: center;
    gap: 12px;
}
.create-btn {
  padding: 12px 28px;
  height: auto;
  font-size: 1rem;
  border-radius: 6px;
}
.create-btn-arrow {
    background-color: #ffffff;
    border-color: var(--el-border-color);
    color: var(--el-text-color-primary);
}
.create-btn-arrow:hover {
    background-color: var(--el-color-primary-light-9);
    border-color: var(--el-color-primary-light-5);
    color: var(--el-color-primary);
}


/* 内容区域 */
.group-section {
  margin-top: 48px;
}
.section-title {
  font-size: 1.5rem;
  font-weight: 600;
  color: var(--el-text-color-primary);
  margin-bottom: 24px;
}

/* 小组卡片 (我创建的) */
.group-card {
  border-radius: 8px;
  border: 2px solid transparent;
  cursor: pointer;
  transition: all 0.3s ease;
  margin-bottom: 20px;
  background-color: #ffffff;
  box-sizing: border-box;
}
.group-card:hover {
    transform: translateY(-5px);
    box-shadow: var(--el-box-shadow-light);
    border-color: var(--el-color-primary);
}
.card-image {
  width: 100%;
  height: 150px;
  object-fit: cover;
  display: block;
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
}
.card-content {
  padding: 16px;
  font-weight: 500;
  color: var(--el-text-color-primary);
}
.card-subtitle {
    font-size: 0.8rem;
    color: var(--el-text-color-placeholder);
    margin-top: 4px;
    font-weight: 400;
}

.view-more-container {
    text-align: left;
    margin-top: 8px;
}

/* “我加入的” 小组卡片 */
.image-with-avatar-container {
    position: relative;
}
.overlaid-avatar {
    position: absolute;
    bottom: -24px;
    left: 16px;
    border: 2px solid #ffffff;
}
.joined-group-card .card-content {
    padding-top: 32px;
}

/* “热门小组” */
.popular-section {
    padding: 60px 0;
}
.popular-layout-container {
    position: relative;
    width: 100%;
    min-height: 450px;
    display: flex;
    justify-content: center;
    align-items: center;
}
.popular-title-wrapper {
    text-align: center;
    position: relative;
    z-index: 10;
}
.popular-title-wrapper .section-title {
    margin-bottom: 4px;
}
.en-subtitle {
    color: var(--el-text-color-placeholder);
    font-size: 1rem;
    margin: 0;
}
.popular-group-card {
    position: absolute;
    width: 200px;
    height: 220px;
    border-radius: 20px;
    transition: all 0.3s ease-in-out;
    cursor: pointer;
    border: 1px solid var(--el-border-color-lighter);
}
.popular-group-card:hover {
    transform: translateY(-10px) scale(1.05) !important;
    box-shadow: var(--el-box-shadow-dark) !important;
    z-index: 20;
}
.popular-card-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;
    padding: 20px;
    box-sizing: border-box;
}
.popular-card-title {
    margin: 16px 0 4px;
    font-size: 1.1rem;
    font-weight: 600;
    color: var(--el-text-color-primary);
}
.popular-card-tags {
    margin: 0;
    font-size: 0.85rem;
    color: var(--el-text-color-secondary);
}
.card-pos-1 { top: 0; left: 12%; transform: rotate(-5deg); }
.card-pos-2 { top: 50%; left: 0%; transform: rotate(8deg); }
.card-pos-3 { top: 55%; left: 22%; transform: rotate(-3deg); }
.card-pos-4 { top: 0; right: 12%; transform: rotate(3deg); }
.card-pos-5 { top: 50%; right: 0%; transform: rotate(-6deg); }


/* --- “您可能感兴趣的”小组卡片 --- */
.recommended-card {
  position: relative;
  border-radius: 16px;
  overflow: hidden;
  border: 2px solid transparent;
  transition: all 0.3s ease;
  cursor: pointer;
  margin-bottom: 20px;
}
.recommended-card:hover {
  border-color: var(--el-color-primary);
  transform: translateY(-5px);
  box-shadow: 0 8px 25px rgba(64, 158, 255, 0.2);
}
.recommended-card-image {
  display: block;
  width: 100%;
  height: 180px;
  object-fit: cover;
}
.text-overlay {
  position: absolute;
  bottom: 12px;
  left: 12px;
  right: 12px;
  background: #ffffff;
  border-radius: 12px;
  padding: 12px 16px;
  box-sizing: border-box;
}
.overlay-title {
  font-size: 1rem;
  font-weight: 500;
  color: var(--el-text-color-primary);
  margin: 0 0 4px 0;
}
.overlay-subtitle {
  font-size: 0.85rem;
  color: var(--el-text-color-secondary);
  margin: 0;
}


/* 页脚 */
.page-footer {
  background-color: #ffffff;
  padding: 40px 20px;
  border-top: 1px solid var(--el-border-color-light);
  height: auto;
}
.footer-content {
  max-width: 1200px;
  margin: 0 auto;
}
.footer-title {
  font-size: 1.5rem;
  margin: 0;
}
.footer-desc {
    color: var(--el-text-color-secondary);
    font-size: 0.9rem;
}
.footer-col-title {
  font-size: 1rem;
  font-weight: 600;
  margin-bottom: 12px;
}
.page-footer ul {
  list-style: none;
  padding: 0;
  margin: 0;
}
.page-footer ul li {
  margin-bottom: 8px;
}
.page-footer ul li a {
  text-decoration: none;
  color: var(--el-text-color-regular);
  font-size: 0.9rem;
}
.page-footer ul li a:hover {
  color: var(--el-color-primary);
}
.social-icons {
    display: flex;
    gap: 12px;
    margin-bottom: 16px;
}
.social-icons .el-avatar {
    background-color: #f4f4f5;
    color: #909399;
    cursor: pointer;
}
.app-downloads p {
    font-size: 0.9rem;
    color: var(--el-text-color-secondary);
    margin-bottom: 8px;
}
.app-badge {
    margin-right: 8px;
    margin-bottom: 8px;
    height: 32px;
}

/* 响应式适配 */
@media (max-width: 992px) {
    .search-area {
        display: none;
    }
    .hero-text h2 {
        font-size: 2rem;
    }
    .deco-avatar {
        display: none;
    }
    .popular-layout-container {
        position: static;
        min-height: auto;
        display: block;
    }
    .popular-title-wrapper {
        margin-bottom: 32px;
    }
    .popular-group-card {
        position: static;
        transform: none !important;
        margin: 0 auto 20px auto;
        width: 80%;
        max-width: 300px;
    }
}

@media (max-width: 768px) {
    .page-header {
      padding: 0 16px;
    }
    .aigc-btn {
        display: none;
    }
    .header-content {
        justify-content: space-between;
    }
    .logo-area {
        flex-grow: 1;
    }
    .hero-section {
        padding: 40px 0;
    }
    .hero-text h2 {
        font-size: 1.8rem;
    }
    .hero-text p {
        font-size: 1rem;
    }
    .footer-content {
        text-align: center;
    }
    .footer-col-title {
        margin-top: 24px;
    }
    .social-icons, .app-downloads {
        justify-content: center;
        text-align: center;
    }
    .footer-social-col {
        margin-top: 24px;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
}
</style>