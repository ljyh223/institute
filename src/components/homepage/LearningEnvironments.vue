<template>
  <div class="learning-environments-container">
    <el-row :gutter="24">
      <el-col v-for="env in props.environments" :key="env.id" :xs="24" :sm="12" :md="8">
        <div class="env-card" :class="{ 'is-selected': env.selected }" @click="handleSelect(env.id)">
          <el-image :src="env.image" class="env-image" fit="cover" />
          <div class="env-name-overlay">
            <span>{{ env.name }}</span>
          </div>
        </div>
      </el-col>
    </el-row>
    <div class="load-more-container" @click="$emit('more')">
      <el-button type="primary" size="large">查看更多</el-button>
    </div>
  </div>
</template>

<script setup>
// 定义组件的emits
const emit = defineEmits(['select', 'more'])

// 定义组件的props
const props = defineProps({
  environments: {
    type: Array,
    required: true,
    default: () => [],
    validator: (value) => {
      // 验证每个环境对象是否包含必要的字段
      return value.every(env =>
        typeof env.id === 'number' &&
        typeof env.name === 'string' &&
        typeof env.image === 'string' &&
        typeof env.selected === 'boolean'
      )
    }
  }
})

// 处理环境选择事件
const handleSelect = (envId) => {
  // 发出select事件，传递环境ID
  emit('select', envId)
}
</script>

<style scoped>
/* 学习环境容器样式 */
.learning-environments-container {
  width: 100%;
}

/* 环境卡片样式 */
.env-card {
  position: relative;
  border-radius: 8px;
  overflow: hidden;
  margin-bottom: 24px;
  border: 3px solid transparent;
  transition: all 0.3s ease;
  cursor: pointer;
}

.env-card:hover {
  transform: translateY(-5px);
  box-shadow: var(--el-box-shadow);
}

.env-card.is-selected {
  border-color: var(--el-color-primary);
  box-shadow: 0 4px 12px rgba(0, 123, 255, 0.3);
}

/* 环境图片样式 */
.env-image {
  width: 100%;
  display: block;
  aspect-ratio: 4 / 3;
}

/* 环境名称覆盖层 */
.env-name-overlay {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: linear-gradient(to top, rgba(235, 233, 233, 0.7) 4%, transparent);
  padding: 30px 20px 15px;
  color: #000;
  font-size: 16px;
  font-weight: 500;
  text-align: left;
  transition: background 0.3s;
}

/* 加载更多按钮容器 */
.load-more-container {
  text-align: left;
  margin-top: 10px;
}

/* 响应式适配 */
@media (max-width: 992px) {
  .env-name-overlay {
    font-size: 15px;
    padding: 25px 15px 12px;
  }
}

@media (max-width: 767px) {
  .env-card {
    margin-bottom: 18px;
  }

  .env-name-overlay {
    font-size: 14px;
    padding: 20px 15px 10px;
  }

  .load-more-container {
    margin-top: 8px;
  }
}
</style>