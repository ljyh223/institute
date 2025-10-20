<template>

  <el-card shadow="hover" class="course-card" :body-style="{ padding: '0px' }" @click="$emit('click', props.course.id)">
    <el-image :src="props.course.image" fit="cover" class="course-image" />
    <div class="course-info">
      <h4 class="course-title">{{ props.course.title }}</h4>
      <p class="course-instructor">{{ props.course.instructor }}</p>
      <div class="course-meta">
        <span class="course-price">¥{{ props.course.price }} <span class="price-unit">/节</span></span>
        <el-button type="primary" link>免费详情</el-button>
      </div>
    </div>
  </el-card>

</template>


<script setup>

defineEmits('click')
const props = defineProps({
  course: {
    type: Object,
    default: () => {
      return { id: 1, title: '微软 Power BI 数据分析师', author: '陈恩翔', price: 99, image: '/src/assets/static/im-one.png', category: '热门' }
    },
  }
})
</script>


<style scoped>
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


@media (max-width: 767px) {
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

@media (min-width: 768px) and (max-width: 1024px) {
  .course-info {
    padding: 14px;
  }

  .course-title {
    font-size: 15px;
  }

  .course-image {
    height: 150px;
  }
}
</style>