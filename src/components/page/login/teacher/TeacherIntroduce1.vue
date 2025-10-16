<template>
  <div class="teacher-auth-container">
    <h2 class="title">老师认证</h2>

    <!-- 学位选择 -->
    <div class="section">
      <span class="section-title">学位选择</span>
      <el-radio-group v-model="selectedDegree" class="degree-radio-group">
        <el-radio-button label="学士" />
        <el-radio-button label="硕士" />
        <el-radio-button label="博士" />
        <el-radio-button label="博士后" />
      </el-radio-group>
    </div>

    <!-- 教育背景 -->
    <div class="section">
      <span class="section-title">教育背景</span>
      <el-input
        v-model="educationBackground"
        type="textarea"
        :rows="4"
        placeholder="请输入教育背景"
        resize="none"
      />
    </div>

    <!-- 工作经历 -->
    <div class="section">
      <span class="section-title">工作经历</span>
      <el-input
        v-model="workExperience"
        type="textarea"
        :rows="4"
        placeholder="请输入工作经历"
        resize="none"
      />
    </div>

    <!-- 下一步按钮 -->
    <div class="actions">
      <el-button type="primary" class="next-step-button">
        下一步
      </el-button>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

// 数据绑定
const selectedDegree = ref('学士');
const educationBackground = ref('');
const workExperience = ref('');
</script>

<style scoped>
.teacher-auth-container {
  max-width: 600px;
  margin: 40px auto;
  padding: 30px;
  background-color: #fff;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  box-sizing: border-box;
}

/* 移动端适配 */
@media (max-width: 768px) {
  .teacher-auth-container {
    margin: 0;
    padding: 20px;
    box-shadow: none;
    border-radius: 0;
    width: 100%;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
  }
}

.title {
  text-align: center;
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 30px;
  color: #333;
}

/* 响应式标题 */
@media (max-width: 768px) {
  .title {
    font-size: 20px;
    margin-bottom: 20px;
  }
}

.section {
  margin-bottom: 20px;
}

.section-title {
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 10px;
  color: #333;
  display: block;
}

.degree-radio-group {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

.el-radio-button {
  margin-right: 0 !important;
}

.el-textarea {
  width: 100%;
}

.actions {
  margin-top: 30px;
}

/* 移动端按钮定位 */
@media (max-width: 768px) {
  .actions {
    margin-top: auto;
    padding-bottom: 20px;
  }
}

.next-step-button {
  width: 100%;
  height: 50px;
  font-size: 16px;
}
</style>