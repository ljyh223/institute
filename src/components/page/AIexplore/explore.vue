<template>
  <el-container class="chat-container">
    <!-- 移动端菜单触发器 -->
    <div class="mobile-menu-button">
      <el-button :icon="Menu" circle @click="isSidebarVisible = true" />
    </div>

    <!-- 左侧边栏 -->
    <el-aside class="chat-sidebar" :class="{ 'is-visible': isSidebarVisible }">
      <div class="sidebar-header">
        <div class="logo">
          <span class="logo-main">学会</span>
          <span class="logo-sub">XUEHUI</span>
        </div>
        <el-icon class="sidebar-close-button" @click="isSidebarVisible = false"><Close /></el-icon>
      </div>

      <div class="sidebar-content">
        <el-button class="new-chat-btn" :icon="Plus" type="primary" plain>开启新对话</el-button>
        
        <div class="history-list">
          <div v-for="group in historyGroups" :key="group.date" class="history-group">
            <div class="history-date">{{ group.date }}</div>
            <div
              v-for="(item, index) in group.items"
              :key="index"
              class="history-item"
            >
              {{ item }}
            </div>
          </div>
        </div>
      </div>

      <div class="sidebar-footer">
        <el-divider />
        <div class="user-profile">
            <el-avatar :size="32" :src="currentUser.avatar" />
            <span class="username">{{ currentUser.name }}</span>
        </div>
      </div>
    </el-aside>

    <!-- 主聊天区域 -->
    <el-main class="chat-main">
      <div class="chat-welcome">
        <h2>我能帮你做什么呢? Whishper</h2>
      </div>

      <div class="chat-input-area">
        <div class="chat-input-wrapper">
          <el-input
            v-model="message"
            type="textarea"
            :autosize="{ minRows: 1, maxRows: 5 }"
            resize="none"
            placeholder="给学会发消息"
            class="chat-input"
          />
          <el-button type="primary" circle class="send-button">
            <el-icon :size="16"><ArrowUpBold /></el-icon>
          </el-button>
        </div>
      </div>
    </el-main>
  </el-container>
</template>

<script setup>
import { ref } from 'vue';
import { Plus, ArrowUpBold, Menu, Close } from '@element-plus/icons-vue';

// 控制移动端侧边栏的显示与隐藏
const isSidebarVisible = ref(false);

// 聊天输入框的内容
const message = ref('');

// 模拟数据
const currentUser = ref({
  name: 'Whishper',
  avatar: 'https://randomuser.me/api/portraits/women/8.jpg',
});

const historyGroups = ref([
  {
    date: '2025-03',
    items: [
      '数字媒体时代传播变革分...',
    ],
  },
  {
    date: '2025-03',
    items: [
      '数字媒体时代传播变革分...',
      '数字媒体时代传播变革分...',
    ]
  },
  {
    date: '2025-03',
    items: [
      '数字媒体时代传播变革分...',
      '数字媒体时代传播变革分...',
    ]
  }
]);
</script>

<style scoped>
/* --- 整体布局 --- */
.chat-container {
  height: 100vh;
  width: 100vw;
  background-color: #f7f8fa; /* 调整为更柔和的背景色 */
  overflow: hidden;
}

/* --- 侧边栏 --- */
.chat-sidebar {
  width: 260px;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  transition: transform 0.3s ease;
  padding: 0;
  border: none;
}

.sidebar-header {
  padding: 16px 16px 20px 16px;
  flex-shrink: 0;
}
.logo {
  display: flex;
  align-items: center;
  gap: 8px;
}
.logo-main {
  font-size: 22px;
  font-weight: bold;
  color: var(--el-color-primary);
}
.logo-sub {
  font-size: 11px;
  font-weight: bold;
  color: #909399;
  position: relative;
  top: 2px;
}

.sidebar-content {
  flex-grow: 1;
  overflow-y: auto;
  padding: 0 12px;
}
.new-chat-btn {
  width: 100%;
  height: 44px;
  justify-content: flex-start;
  margin-bottom: 24px;
  background-color: #e8f3ff;
  border-color: #d1e7ff;
  color: var(--el-color-primary);
  font-weight: 500;
}

.history-group {
  margin-bottom: 16px;
}
.history-date {
  font-size: 12px;
  color: #c0c4cc; /* 调整日期颜色 */
  padding: 0 8px;
  margin-bottom: 8px;
}
.history-item {
  font-size: 14px;
  color: #303133;
  padding: 10px 12px;
  border-radius: 6px;
  cursor: pointer;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  margin-bottom: 4px; /* 增加项间距 */
}
.history-item:hover {
  background-color: #f5f7fa;
}

.sidebar-footer {
  padding: 16px;
  flex-shrink: 0;
}
.sidebar-footer .el-divider {
  margin: 0 0 16px 0;
}
.user-profile {
  display: flex;
  align-items: center;
  gap: 12px;
}
.username {
  font-weight: 500;
  font-size: 14px;
  color: #303133;
}

/* --- 主聊天区域 --- */
.chat-main {
  display: flex;
  flex-direction: column;
  padding: 0;
  background-color: #ffffff;
}

.chat-welcome {
  flex-grow: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-bottom: 10vh; /* 向上微调欢迎语位置 */
}
.chat-welcome h2 {
  font-size: 22px;
  font-weight: 600;
  color: #606266;
}

.chat-input-area {
  padding: 16px 20px 24px 20px;
  flex-shrink: 0;
  background-color: #ffffff;
}
.chat-input-wrapper {
  position: relative;
  width: 100%;
  max-width: 720px;
  margin: 0 auto;
}

.chat-input :deep(.el-textarea__inner) {
  padding: 12px 56px 12px 24px;
  border-radius: 16px !important;
  background-color: #f7f8fa; /* 调整输入框背景色 */
  box-shadow: none;
  border: 1px solid #e4e7ed;
  color: #303133;
  font-size: 15px;
  line-height: 1.5;
}
.chat-input :deep(.el-textarea__inner:focus) {
  border-color: var(--el-color-primary);
  box-shadow: 0 0 0 1px var(--el-color-primary, #409EFF);
}
.chat-input :deep(.el-textarea__inner::placeholder) {
  color: #a8abb2;
}

/* 模拟光标 */
.chat-input :deep(.el-textarea__inner::placeholder)::before {
  content: '|';
  font-weight: bold;
  color: var(--el-color-primary);
  animation: blink 1s infinite;
  margin-right: 6px;
  position: relative;
  top: 1px;
}
@keyframes blink {
  0%, 100% { opacity: 1; }
  50% { opacity: 0; }
}

.send-button {
  position: absolute;
  right: 8px;
  bottom: 8px;
  width: 36px;
  height: 36px;
}

/* --- 响应式设计 --- */

.mobile-menu-button {
  display: none;
  position: absolute;
  top: 16px;
  left: 16px;
  z-index: 100;
}
.sidebar-close-button {
  display: none;
  position: absolute;
  top: 16px;
  right: 16px;
  font-size: 24px;
  cursor: pointer;
  color: #909399;
}

@media (max-width: 768px) {
  .chat-sidebar {
    position: fixed;
    left: 0;
    top: 0;
    bottom: 0;
    z-index: 200;
    transform: translateX(-100%);
    border-right: 1px solid var(--el-border-color-light);
    box-shadow: 2px 0 12px rgba(0,0,0,0.1);
  }
  .chat-sidebar.is-visible {
    transform: translateX(0);
  }

  .mobile-menu-button {
    display: block;
  }
  .sidebar-close-button {
    display: block;
  }
  
  .chat-main {
    width: 100%;
  }
  .chat-input-area {
    padding: 16px;
  }
  .chat-welcome h2 {
    font-size: 20px;
    padding: 0 16px;
    text-align: center;
  }
}
</style>