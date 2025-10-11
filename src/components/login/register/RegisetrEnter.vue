<template>
  <div class="login-container">
    <h2 class="title">登录</h2>

    <!-- 登录方式切换 -->
    <div class="login-tabs">
      <el-button
        :type="loginMethod === 'code' ? 'primary' : 'text'"
        @click="loginMethod = 'code'"
        class="tab-button"
      >
        验证码登录
      </el-button>
      <el-button
        :type="loginMethod === 'account' ? 'primary' : 'text'"
        @click="loginMethod = 'account'"
        class="tab-button"
      >
        账号登录
      </el-button>
    </div>

    <!-- 验证码登录表单 -->
    <div v-if="loginMethod === 'code'" class="login-form-section">
      <el-form :model="codeLoginForm" ref="codeLoginFormRef" label-width="0px" class="login-form">
        <!-- 手机号码 -->
        <el-form-item prop="phone">
          <span class="label">手机号码</span>
          <el-input
            v-model="codeLoginForm.phone"
            placeholder="请输入手机号码"
          />
        </el-form-item>

        <!-- 验证码 -->
        <el-form-item prop="verificationCode" class="verification-code-item">
          <span class="label">验证码</span>
          <el-input
            v-model="codeLoginForm.verificationCode"
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

    <!-- 账号登录表单 (图片中没有，但为了完整性先预留) -->
    <div v-else class="login-form-section">
      <el-form :model="accountLoginForm" ref="accountLoginFormRef" label-width="0px" class="login-form">
        <!-- 账号 (手机号/邮箱/用户名) -->
        <el-form-item prop="account">
          <span class="label">账号</span>
          <el-input
            v-model="accountLoginForm.account"
            placeholder="请输入账号"
          />
        </el-form-item>

        <!-- 密码 -->
        <el-form-item prop="password">
          <span class="label">密码</span>
          <el-input
            v-model="accountLoginForm.password"
            type="password"
            placeholder="请输入密码"
            show-password
          />
        </el-form-item>
      </el-form>
    </div>

    <!-- 登录按钮 -->
    <div class="actions">
      <el-button type="primary" class="login-submit-button">
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

// 仅用于 UI 绑定，无实际逻辑
const loginMethod = ref('code'); // 'code' for 验证码登录, 'account' for 账号登录

const codeLoginForm = ref({
  phone: '',
  verificationCode: '',
});

const accountLoginForm = ref({
  account: '',
  password: '',
});
</script>

<style scoped>
.login-container {
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
  .login-container {
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

/* 登录方式切换按钮组 */
.login-tabs {
  display: flex;
  justify-content: center; /* 按钮组居中 */
  margin-bottom: 30px;
  border-bottom: 1px solid var(--el-border-color-light); /* 底部边框 */
  position: relative;
}

.login-tabs .tab-button {
  flex: 1; /* 每个按钮占据相同宽度 */
  border: none;
  background-color: transparent;
  font-size: 16px;
  font-weight: bold;
  padding-bottom: 10px; /* 留出空间给下划线 */
  color: var(--el-text-color-regular); /* 默认文本颜色 */
  position: relative;
  transition: color 0.3s ease;
}

.login-tabs .tab-button:hover {
  color: var(--el-color-primary); /* 鼠标悬浮时变色 */
}

/* 激活状态的按钮 */
.login-tabs .tab-button.is-text.el-button--primary {
  color: var(--el-color-primary); /* 激活状态颜色 */
}

/* 模拟 Element Plus Tabs 的下划线 */
.login-tabs .tab-button.is-text.el-button--primary::after {
  content: '';
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  bottom: -1px; /* 刚好覆盖父容器的 border-bottom */
  width: 60%; /* 下划线宽度 */
  height: 2px;
  background-color: var(--el-color-primary);
  border-radius: 2px;
}

.login-form-section {
  margin-top: 20px; /* 表单顶部间距 */
}

.login-form .el-form-item {
  margin-bottom: 22px; /* 增加表单项之间的间距 */
}

/* 标签样式 */
.label {
  display: block; /* 让标签独占一行 */
  font-size: 14px;
  color: var(--el-text-color-regular);
  margin-bottom: 8px; /* 标签与输入框的间距 */
}

/* 验证码输入框及其按钮 - 优化部分 */
.verification-code-item .el-input {
  /* 确保整个输入框容器是 flex 布局 */
  display: flex;
}

/* 移除 append 的背景和边框，使其与输入框的背景融合 */
.verification-code-item .el-input-group__append {
  background-color: transparent; /* 背景透明 */
  border: none; /* 移除边框 */
  padding: 0; /* 移除默认 padding */
  display: flex; /* 让内部按钮居中 */
  align-items: center; /* 垂直居中 */
  justify-content: center; /* 水平居中 */
  margin-left: -1px; /* 微调，与输入框右侧边框重叠 */
}

/* 获取验证码按钮的样式 */
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

.login-submit-button {
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