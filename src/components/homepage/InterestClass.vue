<template>
  <div class="explore-courses-section">
    <h3 class="explore-title">探索你感兴趣的课程</h3>
    <div class="tag-list">
      <span class="tag-label">标签：</span>
      <el-button v-for="(tag, idx) in props.tagList" :key="tag" :type="activeIdx === idx ? 'primary' : undefined"
        :plain="activeIdx !== idx" @click="switchTag(idx)">
        {{ tag }}
      </el-button>
    </div>

    <!-- 课程宫格列表（使用虚拟数据） -->
    <el-row :gutter="24">
      <el-col v-for="course in filteredCourses" :key="course.id" :xs="24" :sm="12" :md="8" :lg="6">
        <el-card shadow="hover" class="course-card">
          <div class="course-image-wrapper">
            <!-- 留空的图片路径，方便你后续替换 -->
            <img :src="course.image || ''" class="course-image" alt="" />
          </div>
          <div class="course-info">
            <h4 class="course-title">{{ course.title }}</h4>
            <p class="course-author">{{ course.author }}</p>
            <div class="course-bottom">
              <span class="course-price">¥ {{ course.price }}/课</span>
              <el-button size="small" type="primary" plain @click="goDetail(course.id)">查看详情</el-button>
            </div>
          </div>
        </el-card>
      </el-col>
    </el-row>

    <div class="load-more-container">
      <el-button type="primary" size="large" @click="goCourseList">查看更多</el-button>
    </div>
  </div>

</template>

<script setup>
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'

// 定义组件props
const props = defineProps({
  tagList: {
    type: Array,
    default: () => [
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
    ]
  }
})

const activeIdx = ref(0)
const router = useRouter()

function switchTag(idx) {
  activeIdx.value = idx
}

function goDetail(id) {
  router.push({ name: 'course-detail', params: { id } })
}

function goCourseList() {
  router.push({ name: 'teacher-list' })
}

// 虚拟课程数据（图片路径留空，后续你可自行替换）
// 字段：id、title、author、price、image、category
const courses = ref([
  { id: 101, title: '微软 Power BI 数据分析师', author: '陈恩翔', price: 99, image: '/src/assets/static/im-one.png', category: '热门' },
  { id: 102, title: 'AI 提效工作坊', author: '王晓', price: 129, image: '/src/assets/static/im-one.png', category: '热门' },
  { id: 103, title: '摄影构图基础', author: '李可', price: 59, image: '/src/assets/static/im-one.png', category: '艺术人文' },
  { id: 104, title: '金融投资入门', author: '周宁', price: 199, image: '/src/assets/static/im-one.png', category: '金融经济' },
  { id: 105, title: '健康饮食与体型管理', author: '宋琪', price: 79, image: '/src/assets/static/im-one.png', category: '健康时尚' },
  { id: 106, title: '数据分析求职简历与面试', author: '赵越', price: 149, image: '/src/assets/static/im-one.png', category: '职业教育' },
  { id: 107, title: '自然科学前沿导读', author: '刘航', price: 69, image: '/src/assets/static/im-one.png', category: '自然科学' },
  { id: 108, title: '中小学数学思维训练', author: '张老师', price: 49, image: '/src/assets/static/im-one.png', category: '基础教育' },
  { id: 109, title: '大学微积分快速通关', author: '韩博', price: 89, image: '/src/assets/static/im-one.png', category: '高等教育' },
  { id: 110, title: '个人成长与时间管理', author: '南风', price: 99, image: '/src/assets/static/im-one.png', category: '个人发展' },
  { id: 111, title: '手办模型制作入门', author: '木白', price: 129, image: '/src/assets/static/im-one.png', category: '兴趣爱好' },
  { id: 112, title: 'VR 交互体验设计', author: 'Kara', price: 159, image: '/src/assets/static/im-one.png', category: '热门' },
])

// 计算当前标签下的课程
const filteredCourses = computed(() => {
  const currentTag = props.tagList[activeIdx.value]
  if (!currentTag || currentTag === '热门') {
    // 热门：挑选部分或直接展示标记为热门的课程
    return courses.value.filter(c => c.category === '热门').slice(0, 8)
  }
  return courses.value.filter(c => c.category === currentTag)
})
</script>

<style scoped>
.explore-courses-section {
  max-width: 1200px;
  margin: 60px auto 80px;
  padding: 30px;
  background-color: #ffffff;
  box-sizing: border-box;
}

.explore-title {
  font-size: 22px;
  font-weight: 600;
  color: var(--el-text-color-primary);
  margin-bottom: 20px;
}

.tag-list {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 12px;
  margin-bottom: 40px;
}

.tag-label {
  font-size: 14px;
  color: var(--el-text-color-secondary);
  margin-right: 4px;
  flex-shrink: 0;
}

.tag-list .el-button {
  border-radius: 4px;
  padding: 8px 15px;
  font-size: 14px;
  font-weight: 400;
}

.tag-list .el-button.is-plain:hover,
.tag-list .el-button.is-plain:focus {
  background-color: var(--el-color-primary-light-9);
  color: var(--el-color-primary);
  border-color: var(--el-color-primary-light-7);
}

.course-card {
  border-radius: 10px;
  overflow: hidden;
}

.course-image-wrapper {
  width: 100%;
  height: 180px;
  background-color: #f4f5f7;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}

.course-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.course-info {
  padding-top: 10px;
}

.course-title {
  font-size: 16px;
  font-weight: 600;
  color: var(--el-text-color-primary);
  margin: 6px 0 2px;
}

.course-author {
  font-size: 13px;
  color: var(--el-text-color-secondary);
  margin: 0 0 10px;
}

.course-bottom {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.course-price {
  color: var(--el-color-danger);
  font-weight: 600;
}

.load-more-container {
  text-align: center;
  margin-top: 24px;
}
</style>
