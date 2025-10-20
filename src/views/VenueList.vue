<template>
  <div class="venue-list-page">
    <HomePageHead />

    <!-- 主内容区 -->
    <el-main class="main-content">
      <div class="content-container">
        <!-- 面包屑导航 -->
        <el-breadcrumb :separator-icon="ArrowRight" class="page-breadcrumb">
          <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
          <el-breadcrumb-item>附近适合您的场馆</el-breadcrumb-item>
          <el-breadcrumb-item>查看更多</el-breadcrumb-item>
        </el-breadcrumb>

        <!-- 排序区域 -->
        <div class="sort-section">
          <el-button v-for="sort in sorts" :key="sort.name" :type="sort.active ? 'primary' : 'default'" link>
            {{ sort.name }}
            <el-icon v-if="sort.icon">
              <component :is="sort.icon" />
            </el-icon>
          </el-button>
        </div>

        <!-- 场馆卡片网格 -->
        <el-row :gutter="24">
          <el-col v-for="venue in venues" :key="venue.id" :xs="24" :sm="12" :md="8">
            <VenueCard :venue="venue" @click="goVenueDetail(venue.id)" />
          </el-col>
        </el-row>

        <!-- 分页 -->
        <div class="pagination-container">
          <el-pagination v-model:current-page="pagination.currentPage" v-model:page-size="pagination.pageSize"
            :page-sizes="[12, 24, 36, 48]" :small="isMobile" :background="true"
            layout="total, sizes, prev, pager, next, jumper" :total="pagination.total" />
        </div>

      </div>
    </el-main>
  </div>
</template>

<script setup>
import { ref, reactive, onMounted, onBeforeUnmount } from 'vue';
import { ArrowRight, CaretTop } from '@element-plus/icons-vue';
import VenueCard from '@/components/homepage/venue/VenueCard.vue';
import HomePageHead from '@/components/homepage/Head.vue';
import { useRouter } from 'vue-router';
import 'element-plus/theme-chalk/display.css';

// --- 数据定义 ---
const router = useRouter();
const headerSearch = ref('');

// 排序选项
const sorts = ref([
  { name: '综合', active: true },
  { name: '销量', active: false, icon: CaretTop },
  { name: '距离', active: false, icon: CaretTop },
]);

// 场馆数据 (生成12条模拟数据)
const venues = ref(Array.from({ length: 12 }).map((_, i) => ({
  id: i + 1,
  name: '飞羽竞技场',
  type: '篮球场馆',
  address: '苏州市工业园区独墅湖校区258号',
  phone: '19552698532',
  image: `https://picsum.photos/400/250?random=${i + 1}`, // 使用picsum.photos生成随机图片
})));

// 分页数据
const pagination = reactive({
  currentPage: 1,
  pageSize: 12,
  total: 625,
});

// --- 响应式处理 ---
const isMobile = ref(false);

function goVenueDetail(id) {
  router.push({ name: 'venue-detail', params: { id } })
}
const checkScreenSize = () => {
  isMobile.value = window.innerWidth < 768;
};

onMounted(() => {
  checkScreenSize();
  window.addEventListener('resize', checkScreenSize);
});

onBeforeUnmount(() => {
  window.removeEventListener('resize', checkScreenSize);
});
</script>

<style scoped>
/* 全局布局 */
.venue-list-page {
  background-color: #ffffff;
}

/* 顶部深灰色细条 */
.top-black-bar {
  width: 100%;
  height: 30px;
  background: rgba(56, 56, 56, 1);
  position: sticky;
  top: 0;
  z-index: 1001;
}

/* 主内容区 */
.main-content {
  padding: 0;
  overflow: visible;
}

.content-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

.page-breadcrumb {
  padding: 24px 0;
}

/* 排序区域 */
.sort-section {
  display: flex;
  align-items: center;
  gap: 24px;
  margin-bottom: 24px;
}

.sort-section .el-button {
  font-size: 14px;
}

.sort-section .el-button.is-link.el-button--primary {
  font-weight: bold;
}

/* 分页 */
.pagination-container {
  display: flex;
  justify-content: center;
  padding: 40px 0;
}

/* --- 响应式适配 --- */

/* iPad (小于 992px) */
@media (max-width: 991px) {

  .header-content,
  .content-container {
    padding: 0 15px;
  }
}

/* 手机 (小于 768px) */
@media (max-width: 767px) {
  .logo-text {
    font-size: 20px;
  }

  .user-action-section {
    gap: 1rem;
  }


  .pagination-container {
    padding: 24px 0;
  }
}
</style>