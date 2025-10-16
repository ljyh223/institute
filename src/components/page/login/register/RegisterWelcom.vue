<template>
  <div class="welcome-container">
    <div class="header">
      <h2 class="title">欢迎来到学会</h2>
      <p class="description">让我们为您提供更好的服务</p>
    </div>

    <div class="login-options">
      <el-card shadow="hover" class="login-card" :class="{ 'is-selected': isSelected('individual') }">
        <div class="card-content">
          <el-icon class="icon" :size="30"><User /></el-icon>
          <span class="label">个人登录</span>
        </div>
      </el-card>

      <el-card shadow="hover" class="login-card" :class="{ 'is-selected': isSelected('teacher') }">
        <div class="card-content">
          <el-icon class="icon" :size="30"><Avatar /></el-icon>
          <span class="label">老师登录</span>
        </div>
      </el-card>

      <el-card shadow="hover" class="login-card" :class="{ 'is-selected': isSelected('institution') }">
        <div class="card-content">
          <el-icon class="icon" :size="30"><OfficeBuilding /></el-icon>
          <span class="label">机构登录</span>
        </div>
      </el-card>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { User, Avatar, OfficeBuilding } from '@element-plus/icons-vue';

// 仅用于模拟选中状态，实际应用中会通过逻辑控制
const selectedLoginType = ref('individual');

const isSelected = (type) => {
  return selectedLoginType.value === type;
};
</script>

<style scoped>
.welcome-container {
  max-width: 480px; /* 限制最大宽度，通常登录界面不会太宽 */
  margin: 0 auto;
  padding: 20px;
  font-family: 'Helvetica Neue', Helvetica, 'PingFang SC', 'Hiragino Sans GB', 'Microsoft YaHei', sans-serif;
  color: #303133;
}

.header {
  text-align: center;
  margin-bottom: 40px;
}

.title {
  font-size: 28px;
  font-weight: bold;
  margin-bottom: 10px;
  color: #303133;
}

.description {
  font-size: 16px;
  color: #606266;
}

.login-options {
  display: flex;
  flex-direction: column;
  gap: 20px; /* 卡片之间的间距 */
}

.login-card {
  cursor: pointer;
  border: 1px solid #DCDFE6; /* 默认边框 */
  background-color: #f6f7f9; /* 默认背景色，比白色略灰 */
}

.login-card.is-selected {
  border-color: #409eff; /* 选中状态边框颜色 */
  background-color: #ecf5ff; /* 选中状态背景颜色 */
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08); /* 选中状态阴影 */
}

.login-card:hover {
  border-color: #409eff; /* 鼠标悬停时的边框颜色 */
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08); /* 鼠标悬停时的阴影 */
}

.card-content {
  display: flex;
  align-items: center;
  padding: 15px 20px; /* 内部填充 */
}

.icon {
  margin-right: 20px;
  color: #303133; /* 默认图标颜色 */
}

.login-card.is-selected .icon {
  color: #409eff; /* 选中状态图标颜色 */
}

.label {
  font-size: 18px;
  font-weight: 500;
  color: #303133;
}

.login-card.is-selected .label {
  color: #409eff; /* 选中状态文本颜色 */
}

/* 适配手机端 */
@media (max-width: 767px) {
  .welcome-container {
    padding: 15px;
  }
  .title {
    font-size: 24px;
  }
  .description {
    font-size: 14px;
  }
  .header {
    margin-bottom: 30px;
  }
  .login-options {
    gap: 15px;
  }
  .card-content {
    padding: 12px 15px;
  }
  .icon {
    margin-right: 15px;
    font-size: 28px !important; /* 调整图标大小 */
  }
  .label {
    font-size: 16px;
  }
}

/* 适配平板端 */
@media (min-width: 768px) and (max-width: 991px) {
  .welcome-container {
    padding: 25px;
  }
  .title {
    font-size: 26px;
  }
  .description {
    font-size: 15px;
  }
  .header {
    margin-bottom: 35px;
  }
  .login-options {
    gap: 18px;
  }
  .card-content {
    padding: 14px 18px;
  }
  .icon {
    margin-right: 18px;
  }
  .label {
    font-size: 17px;
  }
}
</style>