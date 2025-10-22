<template>
  <div class="live-stream-page">
        <!-- 顶部深灰色细条 -->
    <div class="top-black-bar"></div>
    <!-- 1. 模拟的全局头部 (无变化) -->
    <HomePageHead/>

    <!-- 2. 主内容区 -->
    <el-main class="main-content">
      <div class="content-container">
        <!-- 面包屑 (无变化) -->
        <el-breadcrumb separator=">" class="page-breadcrumb">
          <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
          <el-breadcrumb-item>直播中心</el-breadcrumb-item>
          <el-breadcrumb-item>查看详情</el-breadcrumb-item>
        </el-breadcrumb>

        <el-card shadow="never" class="stream-container-card">
          <!-- 头部信息 -->
          <div class="stream-header">
            <h1 class="stream-title">揭秘大学“潜规则” 大一大二必看的纯干货！</h1>
            <div class="stream-meta">
              <el-avatar :size="28" src="https://fuss10.elemecdn.com/0/6f/e35ff375812e6b0020b6b4e8f9583jpeg.jpeg" />
              <span class="host-name">张老师</span>
              <el-tag type="primary" size="small" effect="dark" round>主持人</el-tag>
              <div class="time-info">
                <el-icon><Clock /></el-icon>
                <span>直播时间 2025年9月9日 16:00-18:00</span>
              </div>
            </div>
          </div>
          
          <!-- 主要内容区：白板、视频、聊天 -->
          <el-row :gutter="20" class="content-row">
            <!-- 左侧：白板 + 主播视频 -->
            <el-col :xs="24" :sm="24" :md="16" :lg="17" class="main-content-col">
              <div class="media-panel">
                <!-- 白板区域 -->
                <div class="whiteboard-wrapper">
                   <div class="panel-header">
                    <el-icon><User /></el-icon>
                    <span>当前观看人数 2580</span>
                  </div>
                  <div class="whiteboard-content">
                    <img src="https://i.imgur.com/7g4O5aN.png" alt="Whiteboard content" class="whiteboard-image"/>
                  </div>
                </div>
                <!-- 主播视频区域 -->
                <div class="presenter-video-wrapper">
                  <el-image 
                    src="https://i.imgur.com/B9Gb8C2.png"
                    fit="cover"
                    class="presenter-image"
                  />
                </div>
              </div>
            </el-col>
            
            <!-- 右侧：聊天室 -->
            <el-col :xs="24" :sm="24" :md="8" :lg="7" class="chat-col">
              <div class="chat-card">
                <div class="panel-header">聊天室</div>
                <el-scrollbar class="chat-messages">
                  <template v-for="(msg, index) in chatMessages" :key="index">
                    <!-- 时间戳 -->
                    <div v-if="msg.timestamp" class="chat-timestamp">{{ msg.timestamp }}</div>
                    <!-- 消息体 -->
                    <div class="message-wrapper" :class="{ 'my-message': msg.isMe }">
                      <el-avatar :size="32" :src="msg.avatar" />
                      <div class="message-content">
                        <div class="message-meta">
                          <span class="user-name">{{ msg.name }}</span>
                          <el-tag v-if="msg.isHost" type="primary" size="small" effect="light" round>主持人</el-tag>
                        </div>
                        <div class="message-bubble">{{ msg.text }}</div>
                      </div>
                    </div>
                  </template>
                </el-scrollbar>
                <div class="chat-input-area">
                  <el-input v-model="myMessage" placeholder="我也来发言" />
                  <el-button type="primary" circle><el-icon><Promotion /></el-icon></el-button>
                </div>
              </div>
            </el-col>
          </el-row>

          <!-- 底部参会者列表 -->
          <div class="participants-grid">
            <div v-for="p in participants" :key="p.name" class="participant-card">
              <el-avatar :size="60" :src="p.avatar" />
              <div class="participant-footer">
                <el-icon><Microphone /></el-icon>
                <span>{{ p.name }}</span>
              </div>
            </div>
            <div class="participant-card apply-card">
              <div class="apply-icon-wrapper">
                <el-icon><Plus /></el-icon>
              </div>
              <div class="apply-footer">
                <span>申请加入连线</span>
              </div>
            </div>
          </div>
        </el-card>
      </div>
    </el-main>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import {  Clock, User, Microphone, Plus, Promotion } from '@element-plus/icons-vue';
import HomePageHead from '@/components/homepage/Head.vue';

// 模拟数据
const myMessage = ref('');
const participants = ref([
  { name: '武轩轩', avatar: 'https://fuss10.elemecdn.com/3/28/bbf89d79253ace063125f67e1c242jpeg.jpeg' },
  { name: '武轩轩', avatar: 'https://fuss10.elemecdn.com/3/28/bbf89d79253ace063125f67e1c242jpeg.jpeg' },
  { name: '武轩轩', avatar: 'https://fuss10.elemecdn.com/3/28/bbf89d79253ace063125f67e1c242jpeg.jpeg' },
  { name: '武轩轩', avatar: 'https://fuss10.elemecdn.com/3/28/bbf89d79253ace063125f67e1c242jpeg.jpeg' },
  { name: '武轩轩', avatar: 'https://fuss10.elemecdn.com/3/28/bbf89d79253ace063125f67e1c242jpeg.jpeg' },
]);

const chatMessages = ref([
  { name: '张老师', avatar: 'https://fuss10.elemecdn.com/0/6f/e35ff375812e6b0020b6b4e8f9583jpeg.jpeg', text: '看完直播添加助教微信，可领取四六级核心资料、雅思干货、各学科期末历年卷以及学霸笔记等！', isHost: true, isMe: false },
  { name: '王予芳', avatar: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg', text: '老师您好！', isHost: false, isMe: true },
  { timestamp: '17:30', isMe: false },
  { name: '王子芳', avatar: 'https://fuss10.elemecdn.com/3/28/bbf89d79253ace063125f67e1c242jpeg.jpeg', text: '老师您好！', isHost: false, isMe: false },
]);
</script>

<style scoped>
/* 顶部深灰色细条 */
.top-black-bar {
  width: 100%;
  height: 30px;
  background: rgba(56, 56, 56, 1);
  position: sticky;
  top: 0;
  z-index: 1001;
}

/* --- 主内容区 --- */
.main-content { padding: 24px 0; }
.page-breadcrumb { margin-bottom: 24px; }

.stream-container-card {
  background-color: var(--el-bg-color-page);
  border: none;
  padding: 24px;
}
:deep(.el-card__body) {
  padding: 0;
}

/* 头部信息 */
.stream-header { margin-bottom: 20px; }
.stream-title { font-size: 24px; font-weight: 600; color: var(--el-text-color-primary); margin: 0 0 16px 0; }
.stream-meta { display: flex; align-items: center; gap: 12px; font-size: 14px; color: var(--el-text-color-regular); }
.host-name { font-weight: 500; }
.time-info { display: flex; align-items: center; gap: 4px; }

.content-row {
  margin-bottom: 20px;
}
.main-content-col, .chat-col {
  display: flex; /* 让子元素可以更好地伸缩 */
}
.media-panel {
  display: flex;
  flex-direction: column; /* 移动端上下布局 */
  gap: 20px;
  width: 100%;
}
.whiteboard-wrapper, .presenter-video-wrapper {
  background-color: #fff;
  border-radius: var(--el-border-radius-base);
  overflow: hidden;
}
.panel-header {
  font-size: 14px;
  color: var(--el-text-color-secondary);
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 16px;
  border-bottom: 1px solid var(--el-border-color-light);
}

/* 白板 */
.whiteboard-content {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
  min-height: 400px; /* 保证有足够的高度 */
  flex-grow: 1;
}
.whiteboard-image { max-width: 100%; max-height: 100%; object-fit: contain; }

/* 主播视频 */
.presenter-video-wrapper {
  aspect-ratio: 10 / 16; /* 调整为更垂直的比例 */
  background-color: #000;
}
.presenter-image { width: 100%; height: 100%; }

/* 聊天室 */
.chat-card {
  display: flex;
  flex-direction: column;
  width: 100%;
  background-color: #fff;
  border-radius: var(--el-border-radius-base);
  overflow: hidden;
  height: 100%; /* 占满父容器高度 */
}
.chat-messages { flex-grow: 1; padding: 16px; }
.chat-timestamp { text-align: center; color: var(--el-text-color-secondary); font-size: 12px; margin-bottom: 16px; }
.message-wrapper { display: flex; gap: 10px; margin-bottom: 16px; }
.message-content { display: flex; flex-direction: column; align-items: flex-start; }
.message-meta { display: flex; align-items: center; gap: 6px; margin-bottom: 4px; }
.user-name { font-size: 13px; color: var(--el-text-color-secondary); }
.message-bubble { background-color: var(--el-bg-color-page); padding: 8px 12px; border-radius: 4px; font-size: 14px; color: var(--el-text-color-primary); max-width: 100%; word-wrap: break-word; }
.message-wrapper.my-message { flex-direction: row-reverse; }
.message-wrapper.my-message .message-content { align-items: flex-end; }
.message-wrapper.my-message .message-bubble { background-color: var(--el-color-primary-light-9); color: var(--el-color-primary); }
.chat-input-area { padding: 16px; border-top: 1px solid var(--el-border-color-light); display: flex; gap: 10px; }

.participants-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(100px, 1fr)); gap: 16px; }
.participant-card { background-color: var(--el-bg-color); border-radius: 4px; overflow: hidden; position: relative; aspect-ratio: 1 / 1; }
.participant-card .el-avatar { width: 100%; height: 100%; border-radius: 0; }
.participant-footer {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: #00000080;
  color: #fff;
  font-size: 12px;
  padding: 4px 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
}
.apply-card { background-color: #fff; border: 1px dashed var(--el-border-color); display: flex; flex-direction: column; align-items: center; justify-content: center; cursor: pointer; }
.apply-card:hover { border-color: var(--el-color-primary); color: var(--el-color-primary); }
.apply-icon-wrapper { width: 40px; height: 40px; border-radius: 50%; background-color: var(--el-bg-color-page); display: flex; align-items: center; justify-content: center; font-size: 20px; margin-bottom: 8px; }
.apply-footer { color: var(--el-text-color-regular); font-size: 12px; }

/* --- 响应式适配 --- */
@media (min-width: 768px) {
  .media-panel {
    flex-direction: row; /* 在平板及以上，白板和视频水平排列 */
  }
  .whiteboard-wrapper {
    flex: 3; /* 白板占 3 份 */
  }
  .presenter-video-wrapper {
    flex: 2; /* 视频占 2 份 */
    aspect-ratio: auto; /* 取消固定比例，让其自适应高度 */
  }
}
@media (max-width: 991px) {
  .content-row {
     flex-direction: column; /* 中等屏幕下，聊天室换行 */
  }
}
</style>