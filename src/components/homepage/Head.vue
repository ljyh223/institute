
<template>

  <el-header class="header">
    <el-row align="middle" class="header-content">
      <el-col :xs="10" :sm="6" :md="4" class="logo-section">
        <span class="logo-text">学会</span>
        <el-button type="primary" link class="ai-learning-btn">
          AI搜索
          <el-icon>
            <ArrowRight />
          </el-icon>
        </el-button>
      </el-col>
      <el-col :xs="0" :sm="12" :md="14" class="search-section">
        <el-input placeholder="What do you want to learn?" class="header-search-input">
          <template #suffix>
            <el-icon>
              <Search />
            </el-icon>
          </template>
        </el-input>
      </el-col>
      <el-col :xs="14" :sm="6" :md="6" class="user-action-section">
        <el-icon :size="20" class="icon-notification">
          <Bell />
        </el-icon>
        <el-avatar :size="30" src="https://cube.elemecdn.com/3/7c/3ed689582b989fd05f42a77428753.jpeg"></el-avatar>
        <el-popover placement="bottom-end" :width="150" trigger="hover">
          <template #reference>
            <el-button link class="personal-center-btn hidden-xs-only" @click="goPersonalCenter">个人中心</el-button>
          </template>
          <div class="popover-menu">
            <p @click="goPersonalCenter">个人中心</p>
            <p>我的订单</p>
            <p>联系市场</p>
            <p>我的收藏</p>
            <p>退出</p>
          </div>
        </el-popover>
      </el-col>
    </el-row>
  </el-header>
</template>

<script setup>
import { Bell, ArrowRight } from '@element-plus/icons-vue'
import { useRouter } from 'vue-router'

// 跳转到个人中心（publish.vue 作为个人中心布局页）
const router = useRouter()
function goPersonalCenter() {
  router.push({ name: 'PersonalCenter' })
}

// 定义组件名称
defineOptions({
  name: 'HomePageHead'
})
</script>



<style scoped>
/* Header样式 */
.header {
  background-color: #ffffff;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.06);
  /* 优化阴影效果 */
  padding: 0 20px;
  height: 60px;
  display: flex;
  align-items: center;
  top: 30px;
  z-index: 1000;
}

.header-content {
  max-width: 1400px;
  margin: 0 auto;
  width: 100%;
}

.logo-section {
  display: flex;
  align-items: center;
}

.logo-text {
  font-size: 20px;
  font-weight: bold;
  color: var(--el-text-color-primary);
  margin-right: 15px;
}

.ai-learning-btn {
  background-color: var(--el-color-primary-light-9);
  border-radius: 20px;
  padding: 5px 12px;
  font-size: 13px;
  display: flex;
  align-items: center;
  border: 1px solid var(--el-color-primary-light-7);
  /* 增加边框提升质感 */
}

.ai-learning-btn .el-icon {
  margin-left: 5px;
}

.search-section {
  display: flex;
  justify-content: center;
}

.header-search-input {
  max-width: 400px;
  --el-input-border-radius: 20px;
}

.header-search-input .el-input__wrapper {
  background-color: #f5f5f7;
  /* 调整搜索框背景色 */
  box-shadow: none !important;
}

.user-action-section {
  display: flex;
  align-items: center;
  justify-content: flex-end;
}

.icon-notification {
  margin-right: 20px;
  color: var(--el-text-color-regular);
  cursor: pointer;
}

.user-action-section .el-avatar {
  margin-right: 10px;
  cursor: pointer;
}

.popover-menu p {
  line-height: 30px;
  cursor: pointer;
  padding: 0 10px;
  margin: 0;
}

.popover-menu p:hover {
  background-color: var(--el-color-primary-light-9);
}

/* 响应式适配 - 移动端 */
@media (max-width: 767px) {
  .header {
    height: auto;
    padding: 10px 15px;
  }

  .header-content {
    flex-wrap: wrap;
  }

  .logo-section {
    flex: 1 0 50%;
  }

  .search-section {
    order: 3;
    flex: 1 0 100%;
    margin-top: 10px;
  }

  .user-action-section {
    flex: 1 0 50%;
  }

  .header-search-input {
    max-width: 100%;
  }

  .personal-center-btn {
    display: none;
  }
}
</style>
