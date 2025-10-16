<template>
  <div class="find-password-container">
    <h2 class="title">找回密码</h2>

    <div class="form-section">
      <h3 class="section-title">找回密码</h3>
      <el-form :model="findPasswordForm" ref="findPasswordFormRef" label-width="0px" class="find-password-form">
        <!-- 手机号码 -->
        <el-form-item prop="phone">
          <el-input
            v-model="findPasswordForm.phone"
            placeholder="请输入手机号码"
          />
        </el-form-item>

        <!-- 设置新密码 -->
        <el-form-item prop="newPassword">
          <el-input
            v-model="findPasswordForm.newPassword"
            type="password"
            placeholder="设置新密码"
            show-password
          />
        </el-form-item>

        <!-- 确认新密码 -->
        <el-form-item prop="confirmNewPassword">
          <el-input
            v-model="findPasswordForm.confirmNewPassword"
            type="password"
            placeholder="确认新密码"
            show-password
          />
        </el-form-item>

        <!-- 验证码 -->
        <el-form-item prop="verificationCode" class="verification-code-item">
          <el-input
            v-model="findPasswordForm.verificationCode"
            placeholder="请输入验证码"
            class="verification-input"
          >
            <template #append>
              <el-button class="get-code-button">获取验证码</el-button>
            </template>
          </el-input>
        </el-form-item>
      </el-form>
    </div>

    <!-- 登录按钮 (图片中是登录，但语义上是完成找回密码) -->
    <div class="actions">
      <el-button type="primary" class="submit-button">
        登录
      </el-button>
    </div>

    <!-- 没有账号？去登录 -->
    <div class="footer-links">
      <span class="text-secondary">没有账号？</span>
      <el-link type="primary" :underline="false">去登录</el-link>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

// 仅用于 UI 绑定，无实际逻辑
const findPasswordForm = ref({
  phone: '',
  newPassword: '',
  confirmNewPassword: '',
  verificationCode: '',
});
</script>

<style scoped>
.find-password-container {
  max-width: 450px; /* 限制最大宽度，适配 PC */
  margin: 40px auto; /* 居中显示，上下间距 */
  padding: 30px;
  background-color: #fff;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  border-radius: 8px; /* 增加圆角 */
  box-sizing: border-box; /* 包含 padding 和 border 在宽度内 */
}

/* 针对移动端进行适配 */
@media (max-width: 768px) {
  .find-password-container {
    margin: 0; /* 移动端顶部对齐 */
    padding: 20px;
    box-shadow: none; /* 移动端移除阴影，更简洁 */
    border-radius: 0; /* 移动端移除圆角 */
    width: 100%; /* 移动端全宽 */
    min-height: 100vh; /* 确保移动端内容撑满屏幕 */
    display: flex; /* 使得内部元素垂直排列 */
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

/* 响应式标题字体大小 */
@media (max-width: 768px) {
  .title {
    font-size: 20px;
    margin-bottom: 20px;
  }
}

.form-section {
  margin-bottom: 20px;
}

.section-title {
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 15px;
  color: var(--el-text-color-regular);
}

.find-password-form .el-form-item {
  margin-bottom: 22px; /* 增加表单项之间的间距 */
}

/* 验证码输入框及其按钮 */
.verification-code-item .el-input {
  display: flex; /* 让输入框和按钮在 flex 容器中 */
}

/* 优化 append 部分使其与图片一致 */
.verification-code-item .el-input-group__append {
  background-color: transparent; /* 背景透明 */
  border: none; /* 移除边框 */
  padding: 0; /* 移除默认 padding */
  display: flex; /* 让内部按钮居中 */
  align-items: center; /* 垂直居中 */
  justify-content: center; /* 水平居中 */
  margin-left: -1px; /* 微调，与输入框右侧边框重叠 */
}

.get-code-button {
  color: var(--el-color-primary); /* Element Plus 主题色 */
  background-color: transparent; /* 背景透明 */
  border: none; /* 移除所有边框 */
  padding: 0 15px; /* 调整内边距，确保点击区域和视觉间距 */
  height: 100%; /* 高度与输入框对齐 */
  font-size: 14px;
  cursor: pointer;
  transition: color 0.2s ease-in-out;
}

.get-code-button:hover {
  color: var(--el-color-primary-light-1); /* 悬浮效果 */
}

/* 确保按钮在 Element Plus 的样式下居中 */
.el-input-group__append > .el-button {
  margin: 0;
}

.actions {
  margin-top: 30px;
  /* 移动端按钮居底 */
  @media (max-width: 768px) {
    margin-top: auto; /* 推到最底部 */
    padding-bottom: 20px; /* 底部内边距 */
  }
}

.submit-button {
  width: 100%;
  height: 50px;
  font-size: 18px;
  font-weight: bold;
}

.footer-links {
  text-align: center;
  margin-top: 20px;
  font-size: 14px;
  color: var(--el-text-color-secondary); /* Element Plus 次要文本颜色 */
}

.footer-links .el-link {
  font-size: 14px;
  vertical-align: baseline; /* 保持与文本对齐 */
  margin-left: 5px;
}

.text-secondary {
  color: var(--el-text-color-secondary);
}
</style>