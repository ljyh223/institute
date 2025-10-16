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
    <!-- 注意：课程数据未提供，所以这里显示空状态 -->
    <el-empty description="数据为空" class="empty-data-state">
      <template #image>
        <img class="custom-empty-image" src="@/assets/static/empty.png" alt="">
      </template>
    </el-empty>
  </div>

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
  }
})

const activeIdx = ref(0)

function switchTag(idx) {
  activeIdx.value = idx
}
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

.empty-data-state {
  margin-top: 20px;
  padding: 40px 0;
  background-color: transparent;
  box-shadow: none;
}

.custom-empty-image {
  opacity: 0.8;
}
</style>