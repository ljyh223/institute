<template>
  <div class="register-container">
    <h2 class="title">注册</h2>

    <div class="form-section">
      <h3 class="section-title">账号注册</h3>
      <el-form :model="registerForm" ref="registerFormRef" label-width="0px" class="register-form">
        <!-- 手机号码 -->
        <el-form-item prop="phone">
          <el-input
            v-model="registerForm.phone"
            placeholder="请输入手机号码"
            :prefix-icon="Phone"
          />
        </el-form-item>

        <!-- 设置密码 -->
        <el-form-item prop="password">
          <el-input
            v-model="registerForm.password"
            type="password"
            placeholder="设置密码"
            show-password
            :prefix-icon="Lock"
          />
        </el-form-item>

        <!-- 确认密码 -->
        <el-form-item prop="confirmPassword">
          <el-input
            v-model="registerForm.confirmPassword"
            type="password"
            placeholder="确认密码"
            show-password
            :prefix-icon="Lock"
          />
        </el-form-item>

        <!-- 验证码 -->
        <el-form-item prop="verificationCode" class="verification-code-item">
          <el-input
            v-model="registerForm.verificationCode"
            placeholder="请输入验证码"
            class="verification-input"
            :prefix-icon="Message"
          >
            <template #append>
              <el-button class="get-code-button">获取验证码</el-button>
            </template>
          </el-input>
        </el-form-item>
      </el-form>
    </div>

    <!-- 登录按钮 -->
    <div class="actions">
      <el-button type="primary" class="login-button">
        登录
      </el-button>
    </div>

    <!-- 没有账号？去注册 -->
    <div class="footer-links">
      <span class="text-secondary">没有账号？</span>
      <el-link type="primary" :underline="false">去注册</el-link>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { Phone, Lock, Message } from '@element-plus/icons-vue';

// 仅用于 UI 绑定，无实际逻辑
const registerForm = ref({
  phone: '',
  password: '',
  confirmPassword: '',
  verificationCode: '',
});
</script>

<style scoped>
.register-container {
  max-width: 450px;
  margin: 40px auto;
  padding: 30px;
  background-color: #fff;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  box-sizing: border-box;
}

@media (max-width: 768px) {
  .register-container {
    margin: 0;
    padding: 10px;
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

.register-form .el-form-item {
  margin-bottom: 10px;
}

/* 核心修改：增加输入框高度（默认约40px，增加20px后为60px） */
.register-form .el-input__inner {
  height: 60px;
  line-height: 60px; /* 保持文字垂直居中 */
  font-size: 16px; /* 适当增大字体 */
}

/* 验证码输入框及其按钮 */
.verification-code-item .el-input {
  display: flex;
}

.verification-code-item .el-input__inner {
  flex-grow: 1;
}

.verification-code-item .el-input-group__append {
  background-color: var(--el-fill-color-light);
  border-left: var(--el-border);
  height: 60px; /* 与输入框保持一致高度 */
}

.get-code-button {
  color: var(--el-color-primary);
  border-left: none;
  background-color: transparent;
  padding: 0 10px;
  height: 100%;
  font-size: 14px;
}

.el-input-group__append > .el-button {
  margin: 0;
}

.actions {
  margin-top: 30px;
  @media (max-width: 768px) {
    margin-top: auto;
    padding-bottom: 20px;
  }
}

.login-button {
  width: 100%;
  height: 60px; /* 按钮高度同步调整 */
  font-size: 18px;
  font-weight: bold;
}

.footer-links {
  text-align: center;
  margin-top: 20px;
  font-size: 14px;
  color: var(--el-text-color-secondary);
}

.footer-links .el-link {
  font-size: 14px;
  vertical-align: baseline;
  margin-left: 5px;
}

.text-secondary {
  color: var(--el-text-color-secondary);
}
</style>