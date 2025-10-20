
<template>
  <div class="course-banner">
    <el-row :gutter="30" align="middle">
      <el-col :xs="24" :md="14" class="course-info-col">
        <h1 class="course-title">{{ title }}</h1>
        <p class="course-subtitle">{{ subtitle }}</p>
        <div class="course-price">¥ {{ price }}</div>
        <!-- 当按钮被点击时，向父组件发送一个 'join-course' 事件 -->
        <el-button type="primary" size="large" class="join-course-btn" @click="$emit('join-course')">
          加入我的课程
        </el-button>
      </el-col>
      <el-col :xs="24" :md="10" class="course-image-col">
        <el-image 
          :src="imageUrl" 
          fit="cover" 
          class="course-main-image"
        >
           <template #placeholder>
                <div class="image-slot">加载中<span class="dot">...</span></div>
           </template>
        </el-image>
      </el-col>
    </el-row>
  </div>
</template>

<script setup>

defineProps({
  title: {
    type: String,
    required: true,
    default: '默认课程标题'
  },
  subtitle: {
    type: String,
    default: '这是一个很棒的课程副标题。'
  },
  price: {
    type: [String, Number],
    default: 0
  },
  imageUrl: {
    type: String,
    required: true,
    default: '' // 最好提供一个默认的占位图URL
  }
});

defineEmits(['join-course']);
</script>

<style scoped>
/* 课程 Banner */
.course-banner {
    background: rgba(0, 86, 210, 1);
    color: #ffffff;
    padding: 40px;
    margin-bottom: 20px;
}
.course-title {
    font-size: 36px;
    font-weight: bold;
    margin: 0 0 10px;
    line-height: 1.3;
}
.course-subtitle {
    font-size: 16px;
    opacity: 0.85;
    margin: 0 0 20px;
}
.course-price {
    font-size: 32px;
    font-weight: bold;
    margin-bottom: 25px;
}
.join-course-btn {
    --el-button-bg-color: #ffffff;
    --el-button-text-color: var(--el-color-primary);
    --el-button-hover-bg-color: #f0faff;
    border: none;
    font-weight: bold;
}
.course-main-image {
    width: 100%;
    height: 250px;
    border-radius: 8px;
    overflow: hidden;
}
.image-slot {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    background: var(--el-fill-color-light);
    color: var(--el-text-color-secondary);
    font-size: 14px;
}

/* 响应式适配 */
@media (max-width: 992px) {
    .course-title { font-size: 30px; }
    .course-banner { padding: 30px; }
}

@media (max-width: 767px) {
    .course-banner { padding: 20px; text-align: center; }
    .course-info-col { margin-bottom: 25px; }
    .course-title { font-size: 24px; }
    .course-subtitle { font-size: 14px; }
    .course-price { font-size: 28px; }
    .course-main-image { height: 200px; }
}
</style>