<template>
  <div class="top-banner-wrapper">
    <el-row :gutter="0" class="top-banner-row" justify="center" align="middle">
      <el-col :xs="24" :sm="14" :md="12" class="banner-left">
        <h1 class="banner-main-title">学会</h1>
        <h2 class="banner-sub-title">一学就会</h2>
        <p class="banner-description-en">Learn it--you'll pick it up in no time</p>
        <p class="banner-description-cn">构建AI技术驱动的终身学习生态</p>
      </el-col>
      <el-col :xs="24" :sm="10" :md="12" class="banner-right-image-col">
        <div class="banner-image-container">
          <el-image class="banner-main-image" src="https://img.js.design/assets/img/64db6e69d0d62d05779148d8.png"
            fit="cover"></el-image>
          <div class="background-circle circle-1"></div>
          <div class="background-circle circle-2"></div>
          <div class="background-circle circle-3"></div>
        </div>

        <div class="floating-bubble bubble-great-teacher">
          <div class="bubble-icon-wrapper bubble-icon-thumb">
            <el-icon>
              <Pointer />
            </el-icon>
          </div>
          <div class="bubble-content">
            <p class="bubble-text">伟大的老师</p>
            <el-rate v-model="teacherRating" disabled size="small"></el-rate>
          </div>
        </div>

        <div class="floating-bubble bubble-happy-students">
          <div class="bubble-icon-wrapper bubble-icon-students">
            <el-icon>
              <Document />
            </el-icon>
          </div>
          <div class="bubble-content">
            <p class="bubble-text">快乐的学生</p>
            <div class="student-avatars">
              <el-avatar :size="20" src="https://cube.elemecdn.com/0/88/03b0d40e0df97365330aa5fd22429.jpeg"></el-avatar>
              <el-avatar :size="20" src="https://cube.elemecdn.com/0/88/03b0d40e0df97365330aa5fd22429.jpeg"></el-avatar>
              <el-avatar :size="20" src="https://cube.elemecdn.com/0/88/03b0d40e0df97365330aa5fd22429.jpeg"></el-avatar>
              <span class="more-students">+10</span>
            </div>
          </div>
        </div>

        <div class="floating-bubble bubble-weekly-progress">
          <div class="bubble-icon-wrapper bubble-icon-calendar">
            <el-icon>
              <Calendar />
            </el-icon>
          </div>
          <div class="bubble-content">
            <p class="bubble-text">每周进度考试</p>
            <p class="bubble-subtext">时间: 星期天12:00</p>
          </div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { Calendar, Pointer, Document } from '@element-plus/icons-vue';
const teacherRating = ref(4.5);
</script>

<style scoped>
.top-banner-wrapper {
  background: rgba(0, 86, 210, 1);
  padding: 50px 20px;
  position: relative;
  overflow: hidden;
}

.top-banner-row {
  max-width: 1400px;
  margin: 0 auto;
  position: relative;
  z-index: 1;
}

.banner-left {
  text-align: left;
  color: #ffffff;
}

.banner-left h1 {
  font-size: 52px;
  margin-bottom: 10px;
  line-height: 1.1;
  font-weight: 800;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.banner-left h2 {
  font-size: 38px;
  margin-bottom: 15px;
  line-height: 1.1;
  font-weight: 700;
  color: #a0cfff;
}

.banner-description-en {
  font-size: 18px;
  color: rgba(255, 255, 255, 0.85);
  margin-bottom: 10px;
}

.banner-description-cn {
  font-size: 16px;
  font-weight: bold;
  color: rgba(255, 255, 255, 0.95);
}

.banner-right-image-col {
  position: relative;
  width: 100%;
  max-width: 500px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 400px;
  z-index: 10;
}

.banner-image-container {
  width: 350px;
  height: 350px;
  border-radius: 50%;
  overflow: hidden;
  position: relative;
  background-color: #fff;
  border: 10px solid #ffffff;
  box-shadow: 0 10px 40px rgba(0, 20, 50, 0.3);
  z-index: 5;
}

.banner-main-image {
  width: 100%;
  height: 100%;
}

.background-circle {
  position: absolute;
  border-radius: 50%;
  z-index: 0;
  background-color: rgba(255, 255, 255, 0.05);
}

.circle-1 {
  width: 400px;
  height: 400px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border: 4px solid rgba(255, 255, 255, 0.1);
}

.circle-2 {
  width: 380px;
  height: 380px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border: 2px dashed rgba(255, 255, 255, 0.2);
}

.circle-3 {
  width: 360px;
  height: 360px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border: 2px solid rgba(255, 255, 255, 0.3);
}

.floating-bubble {
  position: absolute;
  background-color: rgba(255, 255, 255, 0.98);
  backdrop-filter: blur(5px);
  border-radius: 12px;
  padding: 15px 20px;
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
  display: flex;
  align-items: center;
  gap: 10px;
  white-space: nowrap;
  font-size: 14px;
  color: var(--el-text-color-primary);
  z-index: 15;
  animation: float 3s ease-in-out infinite;
  border: 1px solid rgba(0, 0, 0, 0.05);
}

.bubble-icon-wrapper {
  width: 32px;
  height: 32px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.bubble-icon-wrapper .el-icon {
  font-size: 18px;
}

.bubble-icon-thumb {
  background-color: var(--el-color-warning-light-8);
  color: var(--el-color-warning);
}

.bubble-icon-students {
  background-color: var(--el-color-primary-light-8);
  color: var(--el-color-primary);
}

.bubble-icon-calendar {
  background-color: var(--el-color-success-light-8);
  color: var(--el-color-success);
}

.bubble-text {
  margin: 0;
  font-weight: bold;
}

.bubble-subtext {
  margin: 0;
  font-size: 12px;
  color: var(--el-text-color-secondary);
}

.student-avatars {
  display: flex;
  align-items: center;
}

.student-avatars .el-avatar {
  border: 2px solid #ffffff;
}

.student-avatars .el-avatar:not(:first-child) {
  margin-left: -10px;
}

.more-students {
  margin-left: 10px;
  font-size: 13px;
  color: var(--el-text-color-secondary);
  font-weight: bold;
}

.bubble-great-teacher {
  top: 10%;
  left: 0;
  animation-delay: 0.5s;
}

.bubble-happy-students {
  top: 15%;
  right: 0;
  animation-delay: 1.5s;
}

.bubble-weekly-progress {
  bottom: 10%;
  left: 10%;
  animation-delay: 2.5s;
}

@keyframes float {
  50% {
    transform: translateY(-8px);
  }
}
</style>