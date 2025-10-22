<template>
  <div class="live-center-page">
    <!-- 1. 顶部深色栏 -->
      <div class="top-bar"></div>
    <!-- 2. 主头部 -->
    <HomePageHead/>

    <!-- 3. 主内容区 -->
    <el-main class="main-content content-container">
      <div class="live-banner-section">
        <!-- 3.1 子导航栏 -->
        <div class="sub-nav">
          <div class="nav-tabs">
            <el-button v-for="tab in navTabs" :key="tab" type="text" :class="{ 'is-active': activeTab === tab }">
              {{ tab }}
            </el-button>
          </div>
          <el-dropdown>
            <span class="my-room-dropdown">
              我的房间 <el-icon class="el-icon--right"><arrow-down /></el-icon>
            </span>
            <template #dropdown>
              <el-dropdown-menu>
                <el-dropdown-item>我的房间</el-dropdown-item>
                <el-dropdown-item selected>我的直播课</el-dropdown-item>
              </el-dropdown-menu>
            </template>
          </el-dropdown>
        </div>

        <!-- 3.2 轮播图与缩略图 -->
        <el-row :gutter="16" class="banner-content">
          <el-col :xs="24" :sm="24" :md="18" :lg="19">
            <el-carousel 
              ref="carouselRef"
              arrow="never" 
              indicator-position="none" 
              height="450px"
              @change="handleCarouselChange"
            >
              <el-carousel-item v-for="item in bannerItems" :key="item.id">
                <el-image :src="item.mainImage" fit="cover" class="main-banner-image" />
              </el-carousel-item>
            </el-carousel>
          </el-col>
          <el-col :md="6" :lg="5" class="hidden-sm-and-down">
            <el-scrollbar height="450px" class="thumbnail-scrollbar">
              <div class="thumbnail-list">
                <div
                  v-for="(item, index) in bannerItems"
                  :key="item.id"
                  class="thumbnail-item"
                  :class="{ 'is-active': activeIndex === index }"
                  @click="handleThumbnailClick(index)"
                >
                  <el-image :src="item.thumbImage" fit="cover" class="thumbnail-image" />
                  <div class="thumbnail-overlay">
                    <el-avatar :size="24" :src="item.authorAvatar" class="author-avatar" />
                    <span class="title">{{ item.title }}</span>
                  </div>
                </div>
              </div>
            </el-scrollbar>
          </el-col>
        </el-row>
      </div>

      <!-- [重要修改] 我关注的主播部分：取消横向滚动，改为栅格布局 -->
      <div class="section-container followed-streamers">
        <h3 class="section-title">我关注的主播</h3>
        <el-row :gutter="24">
          <el-col v-for="streamer in followedStreamers" :key="streamer.name" :xs="12" :sm="8" :md="6" :lg="4">
             <div class="streamer-card">
              <el-avatar :size="64" :src="streamer.avatar" />
              <div class="streamer-name">{{ streamer.name }}</div>
              <el-tag size="small" effect="dark" type="info" round>{{ streamer.tag }}</el-tag>
              <div class="streamer-followers">{{ streamer.followers }} 粉丝</div>
            </div>
          </el-col>
        </el-row>
      </div>

      <!-- 为您推荐部分 (无变化) -->
      <div class="section-container recommended-streams">
        <div class="section-header">
          <h3 class="section-title">为您推荐24部优质直播</h3>
          <el-dropdown>
            <el-button type="text" class="filter-btn">
              筛选 <el-icon><CaretBottom /></el-icon>
            </el-button>
            <template #dropdown>
              <el-dropdown-menu>
                <el-dropdown-item>综合</el-dropdown-item>
                <el-dropdown-item>最新</el-dropdown-item>
                <el-dropdown-item>最热</el-dropdown-item>
              </el-dropdown-menu>
            </template>
          </el-dropdown>
        </div>
        <el-row :gutter="20">
          <el-col v-for="video in recommendedVideos" :key="video.title" :xs="24" :sm="12" :md="8" :lg="6">
            <el-card shadow="hover" :body-style="{ padding: '0px' }" class="video-card">
              <div class="video-image-wrapper">
                <el-image :src="video.image" fit="cover" class="video-image" />
                <div class="video-overlay">
                  <el-tag effect="dark" type="danger" size="small" class="live-tag">LIVE</el-tag>
                  <span class="view-count">
                    <el-icon><View /></el-icon> {{ video.views }}
                  </span>
                </div>
              </div>
              <div class="video-info">
                <h4 class="video-title">{{ video.title }}</h4>
                <div class="video-author">
                  <el-avatar :size="24" :src="video.authorAvatar" />
                  <span class="author-name">{{ video.authorName }}</span>
                </div>
              </div>
            </el-card>
          </el-col>
        </el-row>
      </div>

      <!-- 分页 (无变化) -->
      <div class="pagination-container">
        <el-pagination
          background
          layout="prev, pager, next, jumper"
          :total="1000"
        />
      </div>

    </el-main>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { ArrowDown, CaretBottom, View } from '@element-plus/icons-vue';
import HomePageHead from '@/components/homepage/Head.vue';

// 模拟数据
const activeTab = ref('全部');
const activeIndex = ref(1);
const carouselRef = ref(null);

const navTabs = ref(['全部', '直播分类', '直播分类', '直播分类', '直播分类', '直播分类', '直播分类']);

const bannerItems = ref([
  { id: 1, mainImage: 'https://fuss10.elemecdn.com/d/e6/c4d93a3805b3ce3f323f7974e6f78jpeg.jpeg', thumbImage: '...', title: 'ASMR助眠教程', authorAvatar: '...' },
  { id: 2, mainImage: 'https://fuss10.elemecdn.com/3/28/bbf89d79253ace063125f67e1c242jpeg.jpeg', thumbImage: '...', title: '风景摄影构图课', authorAvatar: '...' },
  { id: 3, mainImage: 'https://fuss10.elemecdn.com/2/11/6535bcfb26e4c79b48ddde44f4b6fjpeg.jpeg', thumbImage: '...', title: '最强球王中王教程', authorAvatar: '...' },
  { id: 4, mainImage: 'https://fuss10.elemecdn.com/0/6f/e35ff375812e6b0020b6b4e8f9583jpeg.jpeg', thumbImage: '...', title: '城市建筑美学', authorAvatar: '...' },
  { id: 5, mainImage: 'https://fuss10.elemecdn.com/9/bb/e27858e973f5d7d3904835f46abbdjpeg.jpeg', thumbImage: '...', title: 'UI/UX设计入门', authorAvatar: '...' },
]);

const followedStreamers = ref([
  { name: 'Power BI', avatar: 'https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg', tag: '数据分析', followers: '1.2M' },
  { name: 'Power BI', avatar: 'https://fuss10.elemecdn.com/1/34/19aa98b1fcb2781c4fba33d850549jpeg.jpeg', tag: '数据分析', followers: '1.2M' },
  { name: 'Power BI', avatar: 'https://fuss10.elemecdn.com/9/bb/e27858e973f5d7d3904835f46abbdjpeg.jpeg', tag: '数据分析', followers: '1.2M' },
  { name: 'Power BI', avatar: 'https://fuss10.elemecdn.com/d/e6/c4d93a3805b3ce3f323f7974e6f78jpeg.jpeg', tag: '数据分析', followers: '1.2M' },
  { name: 'Power BI', avatar: 'https://fuss10.elemecdn.com/3/28/bbf89d79253ace063125f67e1c242jpeg.jpeg', tag: '数据分析', followers: '1.2M' },
  { name: 'Power BI', avatar: 'https://fuss10.elemecdn.com/2/11/6535bcfb26e4c79b48ddde44f4b6fjpeg.jpeg', tag: '数据分析', followers: '1.2M' },
]);

const recommendedVideos = ref(Array(24).fill({
  image: `https://picsum.photos/400/225?random=${Math.random()}`,
  title: '微软 Power BI 数据分析与软件',
  authorName: '张老师',
  authorAvatar: `https://i.pravatar.cc/40?u=${Math.random()}`,
  views: '2.1k',
}));

// 方法
const handleThumbnailClick = (index) => {
  activeIndex.value = index;
  if (carouselRef.value) carouselRef.value.setActiveItem(index);
};
const handleCarouselChange = (newIndex) => {
  activeIndex.value = newIndex;
};
</script>

<style scoped>
/* --- 全局与布局 --- */
.live-center-page { background-color: #fff; }
.content-container { max-width: 1400px; margin: 0 auto; padding: 0 24px; }

/* --- 头部 --- */
.top-bar { background-color: #1f2329; height: 40px; }

/* --- 主内容区 --- */
.main-content { padding: 0 24px 32px; margin-top: 20px;}
.section-container { margin-bottom: 48px; }
.section-header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 20px; }
.section-title { font-size: 20px; font-weight: 500; color: var(--el-text-color-primary); margin: 0; }
.filter-btn { color: var(--el-text-color-secondary); }

/* --- [已优化] Banner 部分 --- */
.live-banner-section { width: 100%; margin-bottom: 48px; }
.sub-nav { display: flex; justify-content: space-between; align-items: center; margin-bottom: 20px; }
.nav-tabs { display: flex; gap: 16px; }
.nav-tabs .el-button--text { color: var(--el-text-color-primary); padding: 8px; font-size: 15px; font-weight: 500; }
.nav-tabs .el-button--text.is-active, .nav-tabs .el-button--text:hover { color: var(--el-color-primary); }
.my-room-dropdown { display: flex; align-items: center; cursor: pointer; color: var(--el-text-color-regular); }
.main-banner-image { width: 100%; height: 100%; border-radius: var(--el-border-radius-base); }
.thumbnail-scrollbar { border-radius: var(--el-border-radius-base); }
.thumbnail-list { display: flex; flex-direction: column; gap: 12px; }
.thumbnail-item { position: relative; cursor: pointer; border-radius: var(--el-border-radius-base); overflow: hidden; border: 3px solid transparent; transition: border-color 0.3s ease; }
.thumbnail-image { display: block; width: 100%; aspect-ratio: 16 / 9; }
.thumbnail-overlay { position: absolute; bottom: 0; left: 0; right: 0; padding: 8px; color: #fff; display: flex; align-items: center; gap: 8px; background: linear-gradient(to top, rgba(0, 0, 0, 0.7) 0%, transparent 100%); }
.author-avatar { flex-shrink: 0; }
.title { font-size: 13px; font-weight: 500; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
.thumbnail-item.is-active { border-color: #ff8c00; }
.thumbnail-item.is-active::after { content: ''; position: absolute; top: 50%; left: -12px; transform: translateY(-50%); width: 0; height: 0; border-style: solid; border-width: 8px 10px 8px 0; border-color: transparent #ff8c00 transparent transparent; }

/* --- [已优化] 我关注的主播部分 --- */
.followed-streamers .streamer-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  margin-bottom: 24px; /* 卡片垂直间距 */
}
.streamer-name { font-size: 14px; color: var(--el-text-color-primary); font-weight: 500; }
.streamer-followers { font-size: 12px; color: var(--el-text-color-secondary); }

/* --- 为您推荐部分 --- */
.video-card { cursor: pointer; border-radius: var(--el-border-radius-base); margin-bottom: 20px; }
.video-image-wrapper { position: relative; width: 100%; aspect-ratio: 16 / 9; }
.video-image { width: 100%; height: 100%; }
.video-overlay { position: absolute; top: 12px; left: 12px; right: 12px; display: flex; justify-content: space-between; align-items: flex-start; color: #fff; }
.live-tag { border-radius: 4px; border: none; }
.view-count { font-size: 12px; background-color: rgba(0,0,0,0.4); padding: 2px 6px; border-radius: 4px; display: flex; align-items: center; gap: 4px; }
.video-info { padding: 16px; }
.video-title { font-size: 15px; font-weight: 500; margin: 0 0 12px 0; color: var(--el-text-color-primary); display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden; }
.video-author { display: flex; align-items: center; gap: 8px; }
.author-name { font-size: 13px; color: var(--el-text-color-secondary); }

/* --- 分页 --- */
.pagination-container { display: flex; justify-content: center; margin-top: 24px; }

/* --- 响应式 --- */
@media (max-width: 992px) { .header-left .page-title { display: none; } }
@media (max-width: 768px) {
  .header-content { flex-wrap: wrap; height: auto; padding: 10px 0; }
  .header-left, .header-right { gap: 16px; }
  .search-input { order: 3; width: 100%; margin-top: 10px; }
  .content-container, .main-content { padding: 0 16px; }
  .main-content { padding-bottom: 16px; }
  .banner-content, .el-carousel { height: 300px; }
}
</style>