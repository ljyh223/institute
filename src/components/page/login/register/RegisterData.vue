<template>
  <div class="complete-profile-container">
    <h2 class="title">完善资料</h2>
    <p class="subtitle">让我们为您提供更好的服务</p>

    <!-- 头像上传区域 -->
    <div class="avatar-upload-section">
      <div class="avatar-placeholder">
        <el-icon :size="60" color="#C0C4CC"><User /></el-icon>
      </div>
    </div>

    <div class="form-section">
      <el-form :model="profileForm" ref="profileFormRef" label-width="0px" class="profile-form">
        <!-- 起个好听的名字 -->
        <el-form-item prop="name" class="form-item-spacing">
          <span class="label">起个好听的名字</span>
          <el-input
            v-model="profileForm.name"
            placeholder="输入一个好听的名字"
          />
        </el-form-item>

        <!-- 选择您的性别 -->
        <el-form-item prop="gender" class="form-item-spacing">
          <span class="label">选择您的性别</span>
          <el-radio-group v-model="profileForm.gender" class="gender-radio-group">
            <!-- 女生按钮 -->
            <el-radio-button label="female" class="gender-button female-button">
              <div class="gender-content">
                <el-icon class="gender-icon"><Female /></el-icon>
                <span class="gender-text">女生</span>
              </div>
            </el-radio-button>
            <!-- 男生按钮 -->
            <el-radio-button label="male" class="gender-button male-button">
              <div class="gender-content">
                <el-icon class="gender-icon"><Male /></el-icon>
                <span class="gender-text">男生</span>
              </div>
            </el-radio-button>
            <!-- 保密按钮 -->
            <el-radio-button label="secret" class="gender-button secret-button">
              <div class="gender-content">
                <span class="gender-text-only">保密</span>
              </div>
            </el-radio-button>
          </el-radio-group>
        </el-form-item>

        <!-- 你的生日是 -->
        <el-form-item prop="birthday" class="form-item-spacing">
          <span class="label">你的生日是</span>
          <!-- 这里使用 Element Plus 的日期选择器 -->
          <el-date-picker
            v-model="profileForm.birthday"
            type="date"
            placeholder="选择日期"
            style="width: 100%;"
            format="YYYY/MM/DD"
            value-format="YYYY-MM-DD"
          />
        </el-form-item>
      </el-form>
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
import { User, Female, Male } from '@element-plus/icons-vue'; // 导入图标

// 仅用于 UI 绑定，无实际逻辑
const profileForm = ref({
  name: '',
  gender: 'female', // 默认选中女生，与图片一致
  birthday: '',
});
</script>

<style scoped>
/* 确保页面可以滚动 */
html, body {
  height: 100%;
  margin: 0;
  overflow-y: auto; /* 允许垂直滚动 */
}

#app {
  height: 100%;
}

.complete-profile-container {
  max-width: 450px; /* 限制最大宽度，适配 PC */
  margin: 40px auto; /* 居中显示，上下间距 */
  padding: 30px;
  background-color: #fff;
  /* box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1); */ /* 图片中没有明显阴影，移除 */
  border-radius: 8px; /* 增加圆角 */
  box-sizing: border-box; /* 包含 padding 和 border 在宽度内 */
  min-height: calc(100vh - 80px); /* 减去 margin-top 和 margin-bottom */
  display: flex;
  flex-direction: column;
}

/* 针对移动端进行适配 */
@media (max-width: 768px) {
  .complete-profile-container {
    margin: 0; /* 移动端顶部对齐 */
    padding: 20px;
    box-shadow: none; /* 移动端移除阴影，更简洁 */
    border-radius: 0; /* 移动端移除圆角 */
    width: 100%; /* 移动端全宽 */
    min-height: 100vh; /* 确保移动端内容撑满屏幕 */
    display: flex; /* 使得内部元素垂直排列 */
    flex-direction: column;
    overflow-y: auto; /* 移动端容器内可滚动 */
  }
}

.title {
  text-align: center;
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 5px; /* 标题与副标题之间更小的间距 */
  color: #333;
}

.subtitle {
  text-align: center;
  font-size: 14px;
  color: var(--el-text-color-secondary);
  margin-bottom: 30px; /* 副标题与头像之间间距 */
}

/* 响应式标题和副标题字体大小 */
@media (max-width: 768px) {
  .title {
    font-size: 20px;
    margin-bottom: 5px;
  }
  .subtitle {
    font-size: 12px;
    margin-bottom: 20px;
  }
}

/* 头像上传区域 */
.avatar-upload-section {
  display: flex;
  justify-content: center;
  margin-bottom: 30px; /* 头像与下方表单的间距 */
}

.avatar-placeholder {
  width: 90px;
  height: 90px;
  border-radius: 50%;
  background-color: var(--el-fill-color-light); /* Element Plus 默认的浅灰色填充 */
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid var(--el-border-color-lighter); /* 浅边框 */
}

.form-section {
  margin-bottom: 20px; /* 表单与下一步按钮的间距 */
}

.profile-form .form-item-spacing {
  margin-bottom: 22px; /* 增加表单项之间的间距 */
}

/* 标签样式 */
.label {
  display: block; /* 让标签独占一行 */
  font-size: 14px;
  color: var(--el-text-color-regular);
  margin-bottom: 12px; /* 标签与输入框/按钮的间距，图片中看起来更大一些 */
}

/* 性别选择按钮组 - 优化部分 */
.gender-radio-group {
  display: flex;
  flex-wrap: wrap; /* 允许换行，适配小屏幕 */
  gap: 10px; /* 统一按钮之间的间距 */
}

/* 覆盖 el-radio-button 内部的样式 */
.gender-radio-group :deep(.el-radio-button__inner) {
  border-left: none !important; /* 移除 Element Plus 默认的左边框 */
  box-shadow: none !important; /* 移除所有阴影 */
  background-color: transparent !important; /* 背景透明 */
  border-radius: 20px !important; /* 圆润边角，图片中看起来更小巧 */
  padding: 8px 15px !important; /* 调整内边距，使按钮更小巧 */
  height: auto !important; /* 允许内容撑开高度 */
  display: inline-flex !important; /* 确保图标和文本对齐 */
  align-items: center;
  justify-content: center;
  color: var(--el-text-color-regular) !important; /* 默认文本颜色 */
  border: 1px solid #E4E7ED !important; /* 非选中状态的边框颜色，图片中颜色更浅 */
  transition: background-color 0.3s ease, border-color 0.3s ease, color 0.3s ease; /* 过渡效果 */
}

/* 自定义性别内容布局 - 改变为横向排列 */
.gender-content {
  display: flex;
  flex-direction: row; /* 图标和文字横向排列 */
  align-items: center; /* 垂直居中 */
  line-height: 1; /* 消除额外的行高 */
}

.gender-icon {
  font-size: 16px; /* 图标大小，图片中看起来更小 */
  margin-right: 5px; /* 图标与文字的间距 */
  margin-bottom: 0px; /* 移除之前的底部间距 */
}

.gender-text, .gender-text-only {
  font-size: 14px; /* 文字大小 */
}


/* 激活状态的按钮 */
.gender-radio-group :deep(.el-radio-button.is-checked .el-radio-button__inner) {
  border-color: transparent !important; /* 激活时边框变为与背景色一致 */
  color: #fff !important; /* 激活时文字和图标变白 */
}

/* 女生按钮激活状态颜色 */
.gender-radio-group .female-button.is-checked :deep(.el-radio-button__inner) {
  background-color: rgba(245, 103, 160, 1) !important;
  border-color: rgba(245, 103, 160, 1) !important;
}

/* 男生按钮激活状态颜色 */
.gender-radio-group .male-button.is-checked :deep(.el-radio-button__inner) {
  background-color: rgba(126, 160, 247, 1) !important;
  border-color: rgba(126, 160, 247, 1) !important;
}

/* 保密按钮激活状态颜色 */
.gender-radio-group .secret-button.is-checked :deep(.el-radio-button__inner) {
  background-color: var(--el-color-primary) !important; /* Element Plus 主色 */
  border-color: var(--el-color-primary) !important;
}

/* 移除 Element Plus 默认的圆角处理，全部由我们控制 */
.gender-radio-group :deep(.el-radio-button:first-child .el-radio-button__inner),
.gender-radio-group :deep(.el-radio-button:last-child .el-radio-button__inner) {
  border-radius: 20px !important; /* 统一圆角 */
}

/* 确保日期选择器占满宽度 */
.el-date-picker {
  width: 100%;
}

/* 覆盖 Element Plus 的输入框默认高度，使其与图片更匹配 */
.el-input :deep(.el-input__inner) {
  height: 40px; /* 调整输入框高度 */
  line-height: 40px;
}
.el-date-editor :deep(.el-input__wrapper) {
  height: 40px !important;
  line-height: 40px !important;
}


.actions {
  margin-top: 30px;
  /* 移动端按钮居底 */
  @media (max-width: 768px) {
    margin-top: auto; /* 推到最底部 */
    padding-bottom: 20px; /* 底部内边距 */
  }
}

.next-step-button {
  width: 100%;
  height: 44px; /* 按钮高度更小 */
  font-size: 16px; /* 按钮字体更小 */
  font-weight: bold;
  border-radius: 22px; /* 按钮圆角更小 */
}
</style>