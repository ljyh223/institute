<template>
  <div class="common-layout">
    <el-container class="main-container">
      <HomePageHead />
      <el-main class="main-content">
        <HomePageTopBar />
        <HomePageSearchBar />
        <div class="efficiency-section">
          <h3 class="efficiency-title">让你的学习更高效</h3>
          <p class="efficiency-description">
            构建AI技术驱动的终身学习生态,让每个人都能在成长的任何阶段都能找到属于自己的进阶路径
          </p>
        </div>
        <!-- 探索你感兴趣的课程 -->

        <div class="explore-courses-section">
          <h3 class="explore-title">探索你感兴趣的课程</h3>
          <InterestCourse :tag-list="tagList" :courses="courses" @click="goDetail" @more="goCourseList" />
        </div>


        <div class="explore-teachers-section">
          <h3 class="section-title">探索你感兴趣的老师</h3>

          <InterestedTeacher :teachers="teachers" :sort="sort" :modality="modality" :field="field" :showRate="false"
            @click="goTeacherHome" @more="goTeacherList" />
        </div>

        <!-- Nearby Venues Section -->
        <div class="nearby-venues-section">
          <h3 class="section-title">附近适合您的场馆</h3>
          <HomePageVenue :venues="venues" @click="goVenueDetail" @more="goVenueList" />

        </div>

      </el-main>
    </el-container>

    <footer class="site-footer">
      <BottomBar />
    </footer>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import HomePageHead from '@/components/homepage/Head.vue';
import HomePageTopBar from '@/components/homepage/bar/TopBar.vue';
import HomePageSearchBar from '@/components/homepage/SearchBar.vue';
import InterestedTeacher from '@/components/homepage/teacher/InterestedTeacher.vue';
import HomePageVenue from '@/components/homepage/venue/Venue.vue';
import InterestCourse from '@/components/homepage/course/InterestCourse1.vue';
import BottomBar from '@/components/homepage/bar/BottomBar.vue';
import 'element-plus/theme-chalk/display.css'; // 引入响应式隐藏类


const tagList = ref([
  '热门',
  '艺术人文',
  '金融经济',
  '健康时尚',
  '职业教育',
  '自然科学',
  '基础教育',
  '高等教育',
  '个人发展',
  '兴趣爱好'
]);

const courses = ref([
  { id: 1, title: '微软 Power BI 数据分析师', instructor: '陈老师', price: '99', image: 'src/assets/static/course.png' },
  { id: 2, title: '微软 Power BI 数据分析师', instructor: '陈老师', price: '99', image: 'src/assets/static/course.png' },
  { id: 3, title: '微软 Power BI 数据分析师', instructor: '陈老师', price: '99', image: 'src/assets/static/course.png' }
])

const sort = ref([
  '综合推荐',
  '人气最高'
]);

const modality = ref([
  '全部形式',
  '线上课',
  '直播课',
  '线下课'
]);
const field = ref([
  '全部领域',
  '艺术人文',
  '经济金融',
  '健康时尚',
  '职业教育',
  '自然科学',
  '基础教育',
  '高等教育',
  '个人发展',
  '兴趣爱好'
]);
const teachers = ref([
  { id: 1, name: '李明', field: '基础教育', bio: '前Google数据科学家, 10年机器学习经验', avatar: 'src/assets/static/圆形_3.png' },
  { id: 2, name: '李明', field: '基础教育', bio: '前Google数据科学家, 10年机器学习经验', avatar: 'src/assets/static/圆形_3.png' },
  { id: 3, name: '李明', field: '基础教育', bio: '前Google数据科学家, 10年机器学习经验', avatar: 'src/assets/static/圆形_3.png' },
  { id: 4, name: '李明', field: '基础教育', bio: '前Google数据科学家, 10年机器学习经验', avatar: 'src/assets/static/圆形_3.png' },
  { id: 5, name: '李明', field: '基础教育', bio: '前Google数据科学家, 10年机器学习经验', avatar: 'src/assets/static/圆形_3.png' },
  { id: 6, name: '李明', field: '基础教育', bio: '前Google数据科学家, 10年机器学习经验', avatar: 'src/assets/static/圆形_3.png' },
]);

const venues = ref([
  { id: 1, name: '飞羽竞技场', type: '篮球场馆', address: '苏州市工业园区独墅湖校区258号', phone: '19552698532', image: 'src/assets/static/矩形_17.png' },
  { id: 2, name: '飞羽竞技场', type: '篮球场馆', address: '苏州市工业园区独墅湖校区258号', phone: '19552698532', image: 'src/assets/static/矩形_17.png' },
  { id: 3, name: '飞羽竞技场', type: '篮球场馆', address: '苏州市工业园区独墅湖校区258号', phone: '19552698532', image: 'src/assets/static/矩形_17.png' },
]);

const router = useRouter();
function goDetail(id) {
  router.push({ name: 'course-detail', params: { id } })
}

function goCourseList() {
  router.push({ name: 'course-list' })
}
function goTeacherHome(id) {
  router.push({ name: 'teacher-home', params: { id } })
}

function goTeacherList() {
  router.push({ name: 'teacher-list' })
}
function goVenueDetail(id) {
  router.push({ name: 'venue-detail', params: { id } })
}

function goVenueList() {
  router.push({ name: 'venue-list' })
}

</script>

<style scoped>
/* 全局布局 */
.common-layout {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: #f7f8fa;
  /* 使用更柔和的背景色 */
}

.main-container {
  display: flex;
  flex-direction: column;
  flex: 1;
}


/* 主内容区 */
.main-content {
  padding: 0;
}



.explore-courses-section {
  max-width: 1200px;
  margin: 60px auto 80px;
  padding: 0 20px;
}

.explore-title {
  font-size: 28px;
  font-weight: 600;
  color: var(--el-text-color-primary);
  margin-bottom: 20px;
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



/* 老师探索区 */
.explore-teachers-section {
  max-width: 1200px;
  margin: 60px auto 80px;
  padding: 30px;
}

.section-title {
  font-size: 28px;
  font-weight: bold;
  color: var(--el-text-color-primary);
  margin-bottom: 25px;
}

/* 附近场馆区 */
.nearby-venues-section {
  max-width: 1200px;
  margin: 60px auto 80px;
  padding: 0 30px;
}


/* 页脚 */
.site-footer {
  background-color: var(--el-fill-color-lighter);
  padding: 60px 20px;
  border-top: 1px solid var(--el-border-color-light);
}






/* 响应式适配 - 页面布局相关 */

/* 响应式适配 (Tablet) */
@media (min-width: 768px) and (max-width: 1024px) {

  .efficiency-title,
  .explore-title {
    font-size: 26px;
  }

  .section-title {
    font-size: 26px;
  }
}

/* 响应式适配 (Mobile) */
@media (max-width: 767px) {

  .efficiency-title,
  .explore-title {
    font-size: 24px;
  }

  .efficiency-description {
    font-size: 14px;
  }

  .section-title {
    font-size: 24px;
    text-align: center;
  }
}
</style>
