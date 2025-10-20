<template>
  <div class="course-banner-new">
    <div class="course-info-main">
      <!-- 使用从父组件传入的 props -->
      <h1 class="course-title">{{ title }}</h1>
      <p class="course-subtitle">{{ subtitle }}</p>
      
      <!-- v-if 确保在 instructor 数据不存在时不报错 -->
      <div v-if="instructor" class="instructor-info-banner">
        <el-avatar size="small" :src="instructor.avatar"></el-avatar>
        <span class="instructor-name">授课老师：{{ instructor.name }}</span>
      </div>

      <!-- 点击按钮时，向父组件发送一个 'join-course' 事件 -->
      <el-button type="primary" size="large" class="join-course-btn" @click="$emit('join-course')">
        加入我的课程
      </el-button>
    </div>
    <div class="progress-circle-placeholder"></div>
  </div>
</template>

<script setup>
// 声明组件可以接收的 props
defineProps({
  title: {
    type: String,
    required: true,
  },
  subtitle: {
    type: String,
    default: '',
  },
  instructor: {
    type: Object,
    // 提供一个默认的空对象，以防父组件未传递此 prop
    default: () => ({ name: '', avatar: '' }) 
  }
});

// 声明组件可以触发的事件
defineEmits(['join-course']);
</script>

<style scoped>
/* 
  将主页面中所有与 Banner 相关的样式都剪切到这里，
  使得组件的样式是自包含的。
*/
.course-banner-new {
    background-color: #F3F8FF;
    padding: 40px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
}
.course-info-main {
    max-width: 60%;
}
h1.course-title {
    font-size: 36px;
    font-weight: bold;
    margin: 0 0 10px;
    line-height: 1.3;
}
.course-subtitle {
    font-size: 16px;
    color: #606266;
    margin-bottom: 25px;
}
.instructor-info-banner {
    display: flex;
    align-items: center;
    gap: 8px;
    margin-bottom: 30px;
    font-size: 14px;
    color: var(--el-text-color-regular);
}
.join-course-btn {
    font-weight: bold;
    padding: 10px 25px;
    height: auto;
}
.progress-circle-placeholder {
    width: 150px;
    height: 150px;
    border-radius: 50%;
    border: 12px solid #E0E7FF;
    border-left-color: transparent;
    border-right-color: transparent;
    flex-shrink: 0;
    position: relative;
    transform: rotate(30deg);
}
.progress-circle-placeholder::before {
    content: '';
    position: absolute;
    top: -22px;
    left: -22px;
    right: -22px;
    bottom: -22px;
    border-radius: 50%;
    border: 1px solid #D6DEFF;
    border-top-color: transparent;
    border-bottom-color: transparent;
    transform: rotate(-30deg);
}
.progress-circle-placeholder::after {
    content: '';
    position: absolute;
    top: 20px;
    left: 20px;
    right: 20px;
    bottom: 20px;
    border-radius: 50%;
    border: 1px solid #D6DEFF;
    border-top-color: transparent;
    transform: rotate(60deg);
}

/* 响应式适配 */
@media (max-width: 767px) {
  .course-banner-new { 
    flex-direction: column; 
    text-align: center; 
    gap: 20px; 
  }
  .course-info-main { 
    max-width: 100%; 
  }
}
</style>