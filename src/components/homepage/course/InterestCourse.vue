<template>
  <!-- 注意：课程数据未提供，所以这里显示空状态 -->
  <el-row :gutter="24" v-if="props.courses.length != 0">
    <el-col v-for="course in props.courses" :key="course.id" :xs="12" :sm="8" :md="6">
      <ClassCard :course="course" @click="$emit('click', course.id)" />
    </el-col>
  </el-row>
  <el-empty description="数据为空" class="empty-data-state" v-else>
    <template #image>
      <img class="custom-empty-image" src="@/assets/static/empty.png" alt="">
    </template>
  </el-empty>

  <div class="load-more-container" @click="$emit('more')">
    <el-button type="primary" size="large">查看更多</el-button>
  </div>

</template>

<script setup>
import ClassCard from './CourseCard.vue'
defineEmits(['click', 'more'])
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
      { id: 1, title: '微软 Power BI 数据分析师', author: '陈恩翔', price: 99, image: '/src/assets/static/im-one.png', category: '热门' },
      { id: 2, title: 'AI 提效工作坊', author: '王晓', price: 129, image: '/src/assets/static/im-one.png', category: '热门' },
      { id: 3, title: '摄影构图基础', author: '李可', price: 59, image: '/src/assets/static/im-one.png', category: '艺术人文' },
      { id: 4, title: '金融投资入门', author: '周宁', price: 199, image: '/src/assets/static/im-one.png', category: '金融经济' },
    ]
  }
})

</script>

<style scoped>
.load-more-container {
  text-align: left;
  margin-top: 20px;
}

.load-more-container.text-center {
  text-align: left;
}

.load-more-container {
  text-align: left;
  margin-top: 24px;
}
</style>
