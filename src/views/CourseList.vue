<template>
  <div class="common-layout">
    <!-- 顶部深灰色细条 -->
    <div class="top-black-bar"></div>

    <!-- 顶部固定Header -->
    <HomePageHead />
    <!-- 主内容区 -->
    <el-main class="main-content">
      <div class="content-container">
        <!-- 面包屑导航 -->
        <el-breadcrumb :separator-icon="ArrowRight" class="page-breadcrumb">
          <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
          <el-breadcrumb-item>探索您感兴趣的课程</el-breadcrumb-item>
          <el-breadcrumb-item>查看更多</el-breadcrumb-item>
        </el-breadcrumb>

        <!-- 筛选区域 (优化后) -->
        <div class="filter-area">
          <!-- 标签筛选 -->
          <div class="filter-row">
            <span class="filter-label">标签:</span>
            <div class="filter-options">
              <el-button v-for="tag in tags" :key="tag.name" :type="tag.active ? 'primary' : ''">
                {{ tag.name }}
              </el-button>
            </div>
          </div>
          <!-- 类型筛选 -->
          <div class="filter-row">
            <span class="filter-label">类型:</span>
            <div class="filter-options">
              <el-button v-for="type in types" :key="type.name" :type="type.active ? 'primary' : ''" plain>
                {{ type.name }}
              </el-button>
            </div>
          </div>
        </div>

        <!-- 排序区域 -->
        <div class="sort-section">
          <el-button v-for="sort in sorts" :key="sort.name" :type="sort.active ? 'primary' : 'default'" link>
            {{ sort.name }}
            <el-icon v-if="sort.icon">
              <component :is="sort.icon" />
            </el-icon>
          </el-button>
        </div>

        <!-- 课程卡片网格 -->
        <el-row :gutter="24">
          <el-col v-for="course in courses" :key="course.id" :xs="12" :sm="8" :md="6">
            <el-card class="course-card" shadow="hover" :body-style="{ padding: '0px' }"
              @click="goCourseDetail(course.id)">
              <el-image :src="course.image" class="course-image" fit="cover" />
              <div class="course-info">
                <h4 class="course-title">{{ course.title }}</h4>
                <p class="course-instructor">{{ course.instructor }}</p>
                <div class="course-meta">
                  <span class="course-price">¥{{ course.price }}<span class="price-suffix">/起</span></span>
                  <span class="course-participants">{{ course.participants }}人参与</span>
                </div>
              </div>
            </el-card>
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
import { useRouter } from 'vue-router';
import { ref, reactive, onMounted, onBeforeUnmount } from 'vue';
import { ArrowRight, ArrowUp } from '@element-plus/icons-vue';
import 'element-plus/theme-chalk/display.css';
import HomePageHead from '@/components/homepage/Head.vue';


const router = useRouter();
// 头部搜索框
const headerSearch = ref('');

// 筛选标签
const tags = ref([
  { name: '热门', active: true },
  { name: '艺术人文', active: false },
  { name: '金融经济', active: false },
  { name: '健康时尚', active: false },
  { name: '职业教育', active: false },
  { name: '自然科学', active: false },
  { name: '基础教育', active: false },
  { name: '高等教育', active: false },
  { name: '个人发展', active: false },
  { name: '兴趣爱好', active: false },
]);

// 筛选类型
const types = ref([
  { name: '线上课', active: true },
  { name: '线下课', active: false },
  { name: '直播课', active: false },
]);

// 排序选项
const sorts = ref([
  { name: '综合', active: true },
  { name: '销量', active: false },
  { name: '价格', active: false, icon: ArrowUp },
]);

// 课程数据
const courses = ref(Array.from({ length: 16 }).map((_, i) => ({
  id: i + 1,
  title: '微软 Power BI 数据分析师',
  instructor: '陈老师',
  price: '99',
  participants: 220,
  // 使用不同图片增加真实感
  image: `https://picsum.photos/400/225?random=${i + 1}`,
})));

// 分页数据
const pagination = reactive({
  currentPage: 1,
  pageSize: 16,
  total: 400,
});

// --- 响应式处理 ---
const isMobile = ref(false);

function goCourseDetail(id) {
  router.push({ name: 'course-detail', params: { id } })
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
.common-layout {
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

/* 筛选与排序 (优化后) */
.filter-area {
  margin-bottom: 16px;
  /* 筛选区与下方排序区的间距 */
}

.filter-row {
  display: flex;
  align-items: center;
  /* 垂直居中对齐 */
  margin-bottom: 20px;
}

.filter-row:last-child {
  margin-bottom: 0;
}

.filter-label {
  flex-shrink: 0;
  font-size: 14px;
  color: var(--el-text-color-secondary);
  margin-right: 16px;
}

.filter-options {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
}

/* 移除 el-button 默认的左边距，以确保 gap 属性生效 */
.filter-options .el-button {
  margin-left: 0 !important;
}

.sort-section {
  display: flex;
  align-items: center;
  gap: 24px;
  padding: 8px 0;
  margin-bottom: 24px;
  border-bottom: 1px solid var(--el-border-color-lighter);
}

.sort-section .el-button {
  font-size: 14px;
}

.sort-section .el-button.is-link.el-button--primary {
  font-weight: bold;
}


/* 课程卡片 */
.course-card {
  margin-bottom: 24px;
  border-radius: 8px;
  border: 1px solid var(--el-border-color-lighter);
  transition: all 0.3s ease;
}

.course-image {
  width: 100%;
  aspect-ratio: 16 / 9;
  /* 保持图片比例 */
  display: block;
}

.course-info {
  padding: 16px;
}

.course-title {
  font-size: 16px;
  font-weight: 500;
  color: var(--el-text-color-primary);
  margin: 0 0 8px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.course-instructor {
  font-size: 13px;
  color: var(--el-text-color-secondary);
  margin: 0 0 12px;
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

.price-suffix {
  font-size: 12px;
  color: var(--el-text-color-secondary);
  font-weight: normal;
  margin-left: 2px;
}

.course-participants {
  font-size: 13px;
  color: var(--el-text-color-secondary);
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
  .content-container {
    padding: 0 15px;
  }

  .search-section {
    margin: 0 1rem;
  }
}

/* 手机 (小于 768px) */
@media (max-width: 767px) {
  .header {
    padding: 0 15px;
  }

  .logo-text {
    font-size: 20px;
  }

  .user-action-section {
    gap: 1rem;
  }

  .filter-row {
    flex-direction: column;
    align-items: flex-start;
  }

  .filter-label {
    margin-bottom: 8px;
    line-height: normal;
  }

  .el-col-xs-12 {
    padding-left: 6px !important;
    padding-right: 6px !important;
  }

  .course-card {
    margin-bottom: 12px;
  }

  .course-info {
    padding: 12px;
  }

  .course-title {
    font-size: 14px;
  }

  .course-price {
    font-size: 16px;
  }

  .pagination-container {
    padding: 24px 0;
  }
}
</style>