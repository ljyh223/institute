<template>
  <div class="chat-app-container">
    <!-- 顶部深色条 -->
    <div class="top-bar"></div>

    <el-container class="chat-layout">
      <!-- 左侧边栏：聊天列表 -->
      <el-aside class="sidebar" :class="{ 'is-visible': isSidebarVisible }">
        <div class="sidebar-header">
          <el-icon class="back-icon" @click="isSidebarVisible = false"><ArrowLeft /></el-icon>
          <el-avatar src="https://randomuser.me/api/portraits/women/68.jpg" />
          <span class="user-name">Whispher</span>
        </div>
        <div class="sidebar-search">
           <el-input placeholder="搜索小组" class="custom-search-input">
             <template #append>
               <el-button :icon="Search" type="primary" circle />
             </template>
           </el-input>
        </div>
        <el-scrollbar class="chat-list-scrollbar">
          <ul class="chat-list">
            <li v-for="chat in chatList" :key="chat.id" class="chat-item" :class="{ 'is-active': chat.id === activeChatId }">
              <el-avatar :src="chat.avatar" />
              <div class="chat-info">
                <div class="chat-name">{{ chat.name }}</div>
                <div class="last-message">{{ chat.lastMessage }}</div>
              </div>
            </li>
          </ul>
        </el-scrollbar>
      </el-aside>

      <!-- 右侧主区域：聊天窗口 -->
      <el-main class="main-content">
        <div class="chat-window-wrapper">
          <el-container class="chat-window">
            <el-header class="chat-header">
              <div class="chat-title">
                <el-icon class="menu-icon" @click="isSidebarVisible = true"><Menu /></el-icon>
                <span>数字媒体小组 (22人)</span>
              </div>
              <!-- ✅ 点击此图标会打开抽屉 -->
              <el-icon class="more-icon" @click="isGroupDetailsVisible = true"><MoreFilled /></el-icon>
            </el-header>
            <el-scrollbar ref="messageScrollbar" class="message-area">
              <div class="message-container">
                <template v-for="msg in messages" :key="msg.id">
                  <div v-if="msg.type === 'timestamp'" class="timestamp">{{ msg.text }}</div>
                  <div v-else class="message-item" :class="msg.sender === 'me' ? 'message-item-right' : 'message-item-left'">
                    <el-avatar v-if="msg.sender !== 'me'" :src="msg.avatar" class="message-avatar" />
                    <div class="message-content">
                      <div v-if="msg.sender !== 'me'" class="message-sender-info">{{ msg.name }} <span class="time">{{ msg.time }}</span></div>
                      <div v-else class="message-sender-info"><span class="time">{{ msg.time }}</span> 我</div>
                      <div class="message-bubble" :class="{ 'is-me': msg.sender === 'me' }">{{ msg.text }}</div>
                    </div>
                    <el-avatar v-if="msg.sender === 'me'" :src="myAvatar" class="message-avatar" />
                  </div>
                </template>
              </div>
            </el-scrollbar>
            <el-footer class="chat-footer">
              <div class="input-area-wrapper">
                <el-input v-model="newMessage" type="textarea" :autosize="{ minRows: 1, maxRows: 4 }" placeholder="给伙伴发消息" class="message-input" />
                <el-button type="primary" circle class="send-button"><el-icon><ArrowUpBold /></el-icon></el-button>
              </div>
            </el-footer>
          </el-container>
        </div>
      </el-main>
    </el-container>

    <!-- ===================================================== -->
    <!-- 小组详情 Drawer -->
    <!-- ===================================================== -->
    <el-drawer v-model="isGroupDetailsVisible" :with-header="false" direction="rtl" size="340px">
      <div class="group-details-drawer">
        <div class="details-content">
          <el-input placeholder="搜索" class="custom-search-input drawer-search">
            <template #append><el-button :icon="Search" type="primary" circle /></template>
          </el-input>

          <div class="member-grid">
            <div v-for="member in groupMembers" :key="member.id" class="member-grid-item">
              <el-avatar :src="member.avatar" size="large" />
              <span>{{ member.name }}</span>
            </div>
            <!-- 添加按钮 -->
            <div class="member-grid-item action-item" @click="isAddMemberVisible = true">
              <div class="action-icon-wrapper"><el-icon><Plus /></el-icon></div>
              <span>添加</span>
            </div>
            <!-- 删除按钮 -->
            <div class="member-grid-item action-item" @click="isRemoveMemberVisible = true">
              <div class="action-icon-wrapper"><el-icon><Minus /></el-icon></div>
              <span>删除</span>
            </div>
          </div>

          <div class="info-section">
            <div class="info-label">小组名称</div>
            <div class="info-value">小猿教育科技（江苏）有限公司</div>
          </div>
          <div class="info-section">
            <div class="info-label">简介</div>
            <div class="info-value">小猿教育科技（江苏）有限公司小猿教育科技（江苏）有限公司</div>
          </div>
        </div>
        
        <div class="details-footer">
          <el-button type="danger" text class="action-button">清除当前聊天记录</el-button>
          <el-button type="danger" text class="action-button">删除小组</el-button>
        </div>
      </div>
    </el-drawer>

    <!-- ===================================================== -->
    <!-- 添加/删除成员 Dialog -->
    <!-- ===================================================== -->
    <el-dialog v-model="isAddMemberVisible" title="添加成员" width="400px" center>
       <div class="selector-body">
        <el-input placeholder="搜索" :prefix-icon="Search" class="search-input" />
        <div class="list-title">关注的人</div>
        <el-scrollbar max-height="250px">
          <el-checkbox-group v-model="tempSelectedMembers" class="member-list">
            <el-checkbox v-for="member in memberList" :key="member.id" :label="member.id" size="large">
              <div class="member-item">
                <el-avatar :size="32" :src="member.avatar" />
                <span class="member-name">{{ member.name }}</span>
              </div>
            </el-checkbox>
          </el-checkbox-group>
        </el-scrollbar>
      </div>
      <template #footer>
        <el-button @click="isAddMemberVisible = false">返回</el-button>
        <el-button type="primary" @click="isAddMemberVisible = false">同意</el-button>
      </template>
    </el-dialog>
    
    <el-dialog v-model="isRemoveMemberVisible" title="删除成员" width="400px" center>
      <div class="selector-body">
        <el-input placeholder="搜索" :prefix-icon="Search" class="search-input" />
        <div class="list-title">关注的人</div>
        <el-scrollbar max-height="250px">
          <el-checkbox-group v-model="tempSelectedMembers" class="member-list">
            <el-checkbox v-for="member in memberList" :key="member.id" :label="member.id" size="large">
              <div class="member-item">
                <el-avatar :size="32" :src="member.avatar" />
                <span class="member-name">{{ member.name }}</span>
              </div>
            </el-checkbox>
          </el-checkbox-group>
        </el-scrollbar>
      </div>
      <template #footer>
        <el-button @click="isRemoveMemberVisible = false">返回</el-button>
        <el-button type="primary" @click="isRemoveMemberVisible = false">同意</el-button>
      </template>
    </el-dialog>

  </div>
</template>

<script setup>
import { ref } from 'vue';
import { Search, ArrowLeft, Menu, MoreFilled, ArrowUpBold, Plus, Minus } from '@element-plus/icons-vue';

// --- 状态管理 ---
const activeChatId = ref(1);
const newMessage = ref('');
const myAvatar = ref('https://randomuser.me/api/portraits/women/68.jpg');
const isSidebarVisible = ref(false); 
const isGroupDetailsVisible = ref(false); // 控制抽屉
const isAddMemberVisible = ref(false); // 控制添加成员弹窗
const isRemoveMemberVisible = ref(false); // 控制删除成员弹窗
const tempSelectedMembers = ref([1]); // 弹窗内的临时选中成员

// --- 模拟数据 ---
const chatList = ref([ { id: 1, name: '数字媒体小组', lastMessage: '这是学什么', avatar: 'https://images.unsplash.com/photo-1496171367470-9ed9a91ea931?auto=format&fit=crop&w=80' }, { id: 2, name: '数字媒体小组', lastMessage: '这是学什么', avatar: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=80' }, { id: 3, name: '数字媒体小组', lastMessage: '这是学什么', avatar: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=80' }, ]);
const messages = ref([ { id: 1, type: 'message', sender: 'other', name: '花开富贵', time: '02:12 PM', text: '数字媒体时代传播变革的历史', avatar: 'https://randomuser.me/api/portraits/women/71.jpg' }, { id: 2, type: 'message', sender: 'me', time: '02:12 PM', text: '数字媒体时代传播变革的历史' }, { id: 3, type: 'timestamp', text: '昨天 02:10' }, ]);
const groupMembers = ref([ { id: 1, name: '张晓梅', avatar: 'https://randomuser.me/api/portraits/women/1.jpg' }, { id: 2, name: '张晓梅', avatar: 'https://randomuser.me/api/portraits/men/2.jpg' }, { id: 3, name: '张潘利亚', avatar: 'https://randomuser.me/api/portraits/women/3.jpg' }, { id: 4, name: '张晓梅', avatar: 'https://randomuser.me/api/portraits/men/4.jpg' }, { id: 5, name: '张晓梅', avatar: 'https://randomuser.me/api/portraits/women/5.jpg' }, { id: 6, name: '张晓梅', avatar: 'https://randomuser.me/api/portraits/men/6.jpg' }, { id: 7, name: '张潘利亚', avatar: 'https://randomuser.me/api/portraits/women/7.jpg' }, { id: 8, name: '张晓梅', avatar: 'https://randomuser.me/api/portraits/men/8.jpg' }, { id: 9, name: '张晓梅', avatar: 'https://randomuser.me/api/portraits/women/9.jpg' }, { id: 10, name: '张晓梅', avatar: 'https://randomuser.me/api/portraits/men/10.jpg' }, ]);
const memberList = ref([ { id: 1, name: '陈都灵', avatar: 'https://randomuser.me/api/portraits/women/68.jpg' }, { id: 2, name: '陈都灵', avatar: 'https://randomuser.me/api/portraits/women/69.jpg' }, { id: 3, name: '陈都灵', avatar: 'https://randomuser.me/api/portraits/women/70.jpg' }, ]);
</script>

<style scoped>
/* --- 全局布局 --- */
.chat-app-container { display: flex; flex-direction: column; height: 100vh; width: 100vw; overflow: hidden; font-family: sans-serif; }
.top-bar { height: 8px; background-color: #303133; width: 100%; flex-shrink: 0; }
.chat-layout { height: calc(100vh - 8px); background-color: #f0f2f5; }

/* --- 左侧边栏 --- */
.sidebar { width: 280px; background-color: #f9fafb; border-right: 1px solid var(--el-border-color-light); display: flex; flex-direction: column; transition: width 0.3s ease; }
.sidebar-header { display: flex; align-items: center; padding: 16px; border-bottom: 1px solid var(--el-border-color-light); flex-shrink: 0; background-color: #ffffff; }
.sidebar-header .user-name { margin-left: 12px; font-weight: 600; font-size: 16px; }
.sidebar-search { padding: 12px 16px; flex-shrink: 0; }
.chat-list-scrollbar { flex-grow: 1; }
.chat-list { list-style: none; padding: 0; margin: 0; }
.chat-item { display: flex; align-items: center; padding: 12px 16px; cursor: pointer; transition: background-color 0.2s; }
.chat-item:hover { background-color: #f0f2f5; }
.chat-item.is-active { background-color: #e8e9eb; }
.chat-info { margin-left: 12px; overflow: hidden; }
.chat-name { font-weight: 500; color: var(--el-text-color-primary); }
.last-message { font-size: 12px; color: var(--el-text-color-secondary); white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }

/* --- 搜索框自定义样式 --- */
.custom-search-input { --el-border-radius-base: 20px; }
.custom-search-input :deep(.el-input__wrapper) { background-color: #f0f2f5; box-shadow: none; padding-right: 8px; }
.custom-search-input :deep(.el-input-group__append) { background-color: transparent; box-shadow: none; border: none; padding: 0 4px; }
.custom-search-input :deep(.el-input-group__append .el-button) { --el-button-size: 32px; }
.drawer-search { margin-bottom: 24px; }

/* --- 右侧主内容 --- */
.main-content { padding: 20px; background-color: #f0f2f5; }
.chat-window-wrapper { width: 100%; height: 100%; border-radius: 8px; overflow: hidden; box-shadow: 0 2px 12px 0 rgba(0,0,0,0.05); }
.chat-window { height: 100%; display: flex; flex-direction: column; background-color: #ffffff; }
.chat-header { display: flex; justify-content: space-between; align-items: center; padding: 0 20px; border-bottom: 1px solid var(--el-border-color-light); height: 60px; flex-shrink: 0; }
.chat-title { font-weight: 600; font-size: 16px; display: flex; align-items: center; }
.more-icon { cursor: pointer; font-size: 20px; }

/* --- 消息区域 --- */
.message-area { flex-grow: 1; padding: 20px; background-color: #f9fafb; }
.timestamp { text-align: center; color: var(--el-text-color-placeholder); font-size: 12px; margin: 16px 0; }
.message-item { display: flex; margin-bottom: 20px; }
.message-avatar { flex-shrink: 0; }
.message-content { display: flex; flex-direction: column; max-width: 60%; }
.message-sender-info { font-size: 12px; color: var(--el-text-color-secondary); margin-bottom: 4px; }
.message-sender-info .time { margin: 0 4px; }
.message-bubble { padding: 10px 14px; border-radius: 12px; background-color: #ffffff; color: var(--el-text-color-primary); line-height: 1.5; word-break: break-word; box-shadow: 0 1px 2px rgba(0,0,0,0.05); }
.message-bubble.is-me { background-color: var(--el-color-primary); color: #ffffff; }
.message-item-left { justify-content: flex-start; }
.message-item-left .message-content { margin-left: 12px; align-items: flex-start; }
.message-item-right { justify-content: flex-end; }
.message-item-right .message-content { margin-right: 12px; align-items: flex-end; }
.message-item-right .message-sender-info { text-align: right; }

/* --- 输入区域 --- */
.chat-footer { padding: 16px 20px; border-top: 1px solid var(--el-border-color-light); height: auto; background-color: #ffffff; }
.input-area-wrapper { position: relative; display: flex; align-items: flex-end; border: 1px solid var(--el-border-color-light); border-radius: 22px; background-color: #f9fafb; padding: 4px; }
.input-area-wrapper::before { content: ''; position: absolute; left: 16px; top: 15px; height: 16px; width: 3px; background-color: var(--el-color-primary); border-radius: 2px; }
.message-input :deep(.el-textarea__inner) { background-color: transparent; box-shadow: none; padding: 8px 48px 8px 24px; resize: none; border: none; min-height: 38px !important; }
.send-button { position: absolute; right: 8px; bottom: 8px; width: 32px; height: 32px; flex-shrink: 0; }

/* --- 小组详情 Drawer 样式 --- */
.group-details-drawer { display: flex; flex-direction: column; height: 100%; padding: 20px; }
.details-content { flex-grow: 1; }
.member-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 16px; margin-bottom: 32px; }
.member-grid-item { display: flex; flex-direction: column; align-items: center; text-align: center; font-size: 12px; color: var(--el-text-color-regular); }
.member-grid-item span { margin-top: 8px; }
.member-grid-item.action-item { cursor: pointer; }
.action-icon-wrapper { width: 56px; height: 56px; border-radius: 50%; background-color: #f9fafb; border: 1px dashed var(--el-border-color); display: flex; justify-content: center; align-items: center; font-size: 20px; color: var(--el-text-color-placeholder); }
.info-section { margin-bottom: 24px; }
.info-label { font-size: 14px; color: var(--el-text-color-secondary); margin-bottom: 8px; }
.info-value { font-size: 14px; color: var(--el-text-color-primary); line-height: 1.6; }
.details-footer { flex-shrink: 0; display: flex; flex-direction: column; align-items: center; gap: 8px; padding-top: 20px; border-top: 1px solid var(--el-border-color-light); }
.action-button { font-size: 14px; }

/* --- 添加/删除成员 Dialog 样式 --- */
.selector-body { padding: 0 10px; }
.search-input { margin-bottom: 24px; }
.list-title { color: var(--el-text-color-secondary); font-size: 14px; margin-bottom: 12px; }
.member-list { display: flex; flex-direction: column; }
.member-list .el-checkbox { display: flex; align-items: center; height: auto; padding: 8px 0; width: 100%; }
.member-list :deep(.el-checkbox__label) { width: 100%; }
.member-item { display: flex; align-items: center; gap: 12px; }
.member-name { color: var(--el-text-color-primary); }

/* --- 响应式适配 --- */
@media (max-width: 768px) {
  .sidebar { position: absolute; left: -100%; top: 0; bottom: 0; width: 80%; max-width: 280px; z-index: 1000; transition: left 0.3s ease-in-out; }
  .sidebar.is-visible { left: 0; box-shadow: 2px 0 10px rgba(0,0,0,0.1); }
  .sidebar-header .back-icon { display: block; cursor: pointer; margin-right: 12px; }
  .chat-header .chat-title .menu-icon { display: block; cursor: pointer; margin-right: 16px; font-size: 20px; }
  .main-content { padding: 0; }
  .chat-window-wrapper { border-radius: 0; box-shadow: none; }
}
</style>