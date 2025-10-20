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
import { ref } from 'vue'
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


.load-more-container {
  text-align: left;
  margin-top: 20px;
}

.load-more-container.text-center {
  text-align: left;
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

}
</style>
