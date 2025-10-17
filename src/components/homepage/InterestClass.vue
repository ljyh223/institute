<template>
  <div class="tag-list">
    <span class="tag-label">标签：</span>
    <el-button v-for="(tag, idx) in props.tagList" :key="tag" :type="activeIdx === idx ? 'primary' : undefined"
      :plain="activeIdx !== idx" @click="switchTag(idx)">
      {{ tag }}
    </el-button>
  </div>
  <!-- 注意：课程数据未提供，所以这里显示空状态 -->
  <el-row :gutter="24" v-if="props.courses.length != 0">
    <el-col v-for="course in props.courses" :key="course.id" :xs="12" :sm="8" :md="6">
      <el-card shadow="hover" class="course-card" :body-style="{ padding: '0px' }">
        <el-image :src="course.image" fit="cover" class="course-image" />
        <div class="course-info">
          <h4 class="course-title">{{ course.title }}</h4>
          <p class="course-instructor">{{ course.instructor }}</p>
          <div class="course-meta">
            <span class="course-price">¥{{ course.price }} <span class="price-unit">/节</span></span>
            <el-button type="primary" link>免费详情</el-button>
          </div>
        </div>
      </el-card>
    </el-col>
  </el-row>
  <el-empty description="数据为空" class="empty-data-state" v-else>
    <template #image>
      <img class="custom-empty-image" src="@/assets/static/empty.png" alt="">
    </template>
  </el-empty>

</template>

<script setup>
import { ref } from 'vue'

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
  },

  courses: {
    type: Array,
    default: () => [
      { id: 1, title: '微软 Power BI 数据分析师', instructor: '陈老师', price: '99', image: 'src/assets/static/course.png' }
    ]
  }
})

const activeIdx = ref(0)

function switchTag(idx) {
  activeIdx.value = idx
}
</script>

<style scoped>
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

.course-card {
  margin-bottom: 24px;
  border-radius: 12px;
  overflow: hidden;
  border: 1px solid var(--el-border-color-lighter);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.course-card:hover {
  transform: translateY(-5px);
  box-shadow: var(--el-box-shadow);
}

.course-image {
  width: 100%;
  height: 160px;
  display: block;
}

.course-info {
  padding: 16px;
}

.course-title {
  font-size: 16px;
  font-weight: 600;
  color: var(--el-text-color-primary);
  margin: 0 0 8px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.course-instructor {
  font-size: 13px;
  color: var(--el-text-color-secondary);
  margin: 0 0 16px;
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

.price-unit {
  font-size: 13px;
  color: var(--el-text-color-secondary);
  font-weight: normal;
  margin-left: 2px;
}

.load-more-container {
  text-align: left;
  margin-top: 20px;
}

.load-more-container.text-center {
  text-align: center;
}

/* 响应式适配 - 移动端 */
@media (max-width: 767px) {
  .tag-list {
    justify-content: center;
  }

  .tag-list .el-button {
    font-size: 12px;
    padding: 5px 10px;
  }

  .course-image {
    height: 140px;
  }

  .course-info {
    padding: 12px;
  }

  .course-title {
    font-size: 14px;
  }

  .course-instructor {
    font-size: 12px;
  }

  .course-price {
    font-size: 16px;
  }
}

/* 响应式适配 - 平板 */
@media (min-width: 768px) and (max-width: 1024px) {
  .course-image {
    height: 150px;
  }

  .course-info {
    padding: 14px;
  }

  .course-title {
    font-size: 15px;
  }
}
</style>