<template>
  <div class="shared-spaces-container">
    <div class="space-items-container">
      <div v-for="space in props.spaces" :key="space.id" class="space-item-card" @click="handleClick(space.id)">
        <el-image :src="space.image" class="space-item-image" fit="cover" />
        <div class="space-item-info">
          <span class="space-item-name">{{ space.name }}</span>
          <el-button type="primary" text class="details-btn">查看详情</el-button>
        </div>
      </div>
    </div>
    <div class="load-more-container" @click="$emit('more')">
      <el-button type="primary" size="large">查看更多</el-button>
    </div>
  </div>
</template>

<script setup>
// 定义组件的emits
const emit = defineEmits(['click', 'more'])

// 定义组件的props
const props = defineProps({
  spaces: {
    type: Array,
    required: true,
    default: () => [],
    validator: (value) => {
      // 验证每个空间对象是否包含必要的字段
      return value.every(space =>
        typeof space.id === 'number' &&
        typeof space.name === 'string' &&
        typeof space.image === 'string'
      )
    }
  }
})

// 处理空间卡片点击事件
const handleClick = (spaceId) => {
  // 发出click事件，传递空间ID
  emit('click', spaceId)
}
</script>

<style scoped>
/* 共享空间容器样式 */
.shared-spaces-container {
  width: 100%;
}

/* 水平滚动容器 */
.space-items-container {
  display: flex;
  gap: 20px;
  overflow-x: auto;
  padding-bottom: 15px;
  /* 为滚动条留出空间 */
}

/* 自定义滚动条样式 */
.space-items-container::-webkit-scrollbar {
  height: 6px;
}

.space-items-container::-webkit-scrollbar-thumb {
  background: #ccc;
  border-radius: 6px;
}

.space-items-container::-webkit-scrollbar-track {
  background: #f1f1f1;
}

/* 空间卡片样式 */
.space-item-card {
  flex-shrink: 0;
  /* 防止项目在容器中收缩 */
  width: 220px;
  /* 固定宽度 */
  border: 1px solid var(--el-border-color-light);
  border-radius: 8px;
  background-color: #fff;
  transition: box-shadow 0.3s;
  overflow: hidden;
  cursor: pointer;
}

.space-item-card:hover {
  box-shadow: var(--el-box-shadow-light);
}

/* 空间图片样式 */
.space-item-image {
  width: 100%;
  display: block;
  aspect-ratio: 4 / 3;
}

/* 空间信息区域 */
.space-item-info {
  padding: 12px 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

/* 空间名称 */
.space-item-name {
  font-size: 14px;
  color: var(--el-text-color-primary);
  font-weight: 500;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  padding-right: 10px;
}

/* 查看详情按钮 */
.details-btn.el-button {
  border: 1px solid var(--el-color-primary);
  color: var(--el-color-primary);
  background-color: transparent;
  padding: 4px 10px;
  border-radius: 4px;
  font-size: 12px;
}

.details-btn.el-button:hover {
  background-color: var(--el-color-primary-light-9);
}

/* 加载更多按钮容器 */
.load-more-container {
  text-align: left;
  margin-top: 25px;
}

/* 响应式适配 */
@media (max-width: 767px) {
  .space-item-card {
    width: 180px;
    /* 在小屏幕上减小卡片宽度 */
  }

  .space-item-name {
    font-size: 13px;
  }

  .details-btn.el-button {
    font-size: 11px;
    padding: 3px 8px;
  }
}
</style>