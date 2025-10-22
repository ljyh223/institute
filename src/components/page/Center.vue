<template>
  <el-container class="settings-page-container">
    <!-- 顶部深色条 -->
    <div class="top-bar"></div>

    <!-- 全局页头 -->
    <el-header class="page-header">
      <div class="header-content">
        <div class="logo-area">
          <span class="logo-text">学会</span>
          <el-button text bg>AI探索 &rarr;</el-button>
        </div>
        <div class="search-area">
          <el-input placeholder="What do you want to learn?" :prefix-icon="Search" />
        </div>
        <div class="user-area">
          <el-icon :size="20"><Bell /></el-icon>
          <el-avatar src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png" />
        </div>
      </div>
    </el-header>
    
    <!-- 主体内容 -->
    <el-main class="page-main">
       <!-- 面包屑导航 -->
      <el-breadcrumb :separator-icon="ArrowRight" class="page-breadcrumb">
        <el-breadcrumb-item :to="{ path: '#' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item :to="{ path: '#' }">个人中心</el-breadcrumb-item>
        <el-breadcrumb-item>设置</el-breadcrumb-item>
      </el-breadcrumb>
      
      <!-- 设置页面主体布局 -->
      <el-container class="settings-layout">
        <!-- 左侧设置菜单 -->
        <el-aside class="settings-aside" :class="{ 'is-visible': isMenuVisible }">
          <div class="settings-menu-header">
             <h3 class="settings-menu-title">设置 <el-icon><Setting /></el-icon></h3>
             <el-icon class="close-menu-icon" @click="isMenuVisible = false"><Close /></el-icon>
          </div>
          <el-menu :default-active="activeMenu" class="settings-menu" @select="handleMenuSelect">
            <el-menu-item v-for="item in menuItems" :key="item.index" :index="item.index">
              <span>{{ item.title }}</span>
            </el-menu-item>
          </el-menu>
        </el-aside>
        
        <!-- 右侧内容区 -->
        <el-main class="settings-main">
          <!-- 移动端菜单触发器 -->
          <div class="mobile-menu-trigger">
            <el-button @click="isMenuVisible = true"><el-icon><Operation /></el-icon> 设置菜单</el-button>
          </div>
          
          <!-- ================= 视图: 账号管理 ================= -->
          <div v-if="activeMenu === '1'" class="content-section">
            <h2 class="content-title">账号管理</h2>
            <div class="accounts-card">
              <template v-for="(account, index) in accounts" :key="account.id">
                <div class="account-item"><div class="account-details"><div class="avatar-wrapper"><el-avatar :size="50" :src="account.avatar" /><div v-if="account.isMain" class="main-account-badge"><el-icon :size="12" color="#ffffff"><Check /></el-icon></div></div><div class="account-info"><h4 class="account-name">{{ account.name }}</h4><div class="account-tags"><el-tag v-if="account.isMain" type="warning" size="small" effect="plain">主账号</el-tag><span>{{ account.tags }}</span></div></div></div><div class="account-actions"><el-button plain><el-icon><Switch /></el-icon> 切换</el-button><el-button type="danger" text>删除</el-button></div></div>
                <el-divider v-if="index < accounts.length - 1" />
              </template>
            </div>
            <el-button type="primary" :icon="Plus" class="add-account-btn">添加账号</el-button>
            <div class="deregister-section"><h3 class="section-title">注销账号</h3><p class="section-description">注销账号后将清除所有的数据和资料，请谨慎操作</p><el-button>注销主账号</el-button></div>
          </div>
          
          <!-- ================= 视图: 账号安全 ================= -->
          <div v-if="activeMenu === '2'" class="content-section">
            <h2 class="content-title">安全管理</h2>
            <div class="custom-card">
              <div class="custom-list-item" @click="isPasswordModalVisible = true"><div class="item-left"><div class="item-icon-wrapper"><el-icon :size="20"><Lock /></el-icon></div><span>修改密码</span></div><el-icon class="arrow-icon"><ArrowRight /></el-icon></div>
              <el-divider />
              <div class="custom-list-item" @click="isVerificationModalVisible = true"><div class="item-left"><div class="item-icon-wrapper"><el-icon :size="20"><User /></el-icon></div><span>实名认证</span></div><el-icon class="arrow-icon"><ArrowRight /></el-icon></div>
              <el-divider />
              <div class="custom-list-item" @click="isBankCardModalVisible = true"><div class="item-left"><div class="item-icon-wrapper"><el-icon :size="20"><CreditCard /></el-icon></div><span>银行卡绑定</span></div><el-icon class="arrow-icon"><ArrowRight /></el-icon></div>
            </div>
          </div>

          <!-- ================= 视图: 收货地址 ================= -->
           <div v-if="activeMenu === '6'" class="content-section">
             <h2 class="content-title">收货地址</h2>
             <div class="address-list">
              <el-radio-group v-model="defaultAddress" class="full-width">
                <!-- 单个地址卡片 -->
                <div class="address-card" v-for="addr in addresses" :key="addr.id">
                  <!-- 地址信息 -->
                  <div class="address-info">
                    <p class="addr-line-1">{{ addr.region }}</p>
                    <p class="addr-line-2">{{ addr.detail }}</p>
                    <p class="addr-line-3">{{ addr.name }} {{ addr.phone }}</p>
                  </div>
                  <!-- 地址操作 -->
                  <div class="address-actions">
                    <el-radio :label="addr.id" size="large">设为默认</el-radio>
                    <div class="action-links">
                      <el-button type="primary" text>修改</el-button>
                      <el-button type="danger" text>删除</el-button>
                    </div>
                  </div>
                </div>
              </el-radio-group>
             </div>
             <!-- 主要操作按钮 -->
             <el-button type="primary" size="large" class="full-width-btn">下一步</el-button>
          </div>
        </el-main>
      </el-container>
    </el-main>
    <!-- ===================================================== -->
    <!-- 弹窗: 修改密码 (已按新设计优化) -->
    <!-- ===================================================== -->
     <el-dialog v-model="isPasswordModalVisible" title="修改密码" width="420px" center>
       <el-form label-position="top" class="custom-form modal-form">
        <el-form-item label="输入新密码"><el-input placeholder="请输入新密码" type="password" show-password /></el-form-item>
        <el-form-item label="确认新密码"><el-input placeholder="请确认新密码" type="password" show-password /></el-form-item>
        <el-form-item label="手机验证"><el-input placeholder="请输入手机号码" class="form-item-gap"/></el-form-item>
        <el-form-item>
          <el-input placeholder="请输入验证码" class="verification-code-input">
            <template #append><el-button text>获取验证码</el-button></template>
          </el-input>
        </el-form-item>
      </el-form>
      <template #footer>
        <div class="dialog-footer"><el-button @click="isPasswordModalVisible = false">返回</el-button><el-button type="primary" @click="isPasswordModalVisible = false">同意</el-button></div>
      </template>
    </el-dialog>

    <!-- ===================================================== -->
    <!-- 弹窗: 实名认证 -->
    <!-- ===================================================== -->
     <el-dialog v-model="isVerificationModalVisible" title="实名认证" width="520px" center>
      <div class="verification-modal-body">
        <!-- 基本信息区块 -->
        <div class="modal-section">
          <h3 class="modal-section-title">基本信息</h3>
          <el-form label-width="0" class="modal-form">
            <el-form-item><el-input placeholder="请输入真实姓名" clearable /></el-form-item>
            <el-form-item><el-input placeholder="请输入手机号码" clearable /></el-form-item>
          </el-form>
        </div>
        <!-- 证件信息区块 -->
        <div class="modal-section">
          <h3 class="modal-section-title">证件信息</h3>
          <div class="modal-id-cards-container">
            <!-- 身份证示例图 -->
            <img src="https://i.imgur.com/Y1gRkL3.png" alt="ID Card Examples" class="modal-id-card-image"/>
          </div>
          <el-form-item><el-input placeholder="请输入身份证号码" clearable /></el-form-item>
        </div>
      </div>
      <template #footer>
        <!-- 底部操作按钮 -->
        <div class="modal-actions-footer">
          <el-button @click="isVerificationModalVisible = false">返回</el-button>
          <el-button type="primary" @click="isVerificationModalVisible = false">同意</el-button>
        </div>
        <!-- 底部额外链接 -->
        <div class="dialog-extra-link">
          <el-link type="primary" :underline="false">已认证过？去登录</el-link>
        </div>
      </template>
    </el-dialog>
    <!-- ===================================================== -->
    <!-- 弹窗: 银行卡绑定 -->
    <!-- ===================================================== -->
     <el-dialog v-model="isBankCardModalVisible" title="银行卡绑定" width="480px" center>
      <el-form label-position="top" class="custom-form">
        <h3 class="form-section-title">银行卡</h3>
        <div class="upload-container"><div class="upload-wrapper"><div class="purple-corners"></div><el-upload action="#" list-type="picture-card" :auto-upload="false"><el-icon><Camera /></el-icon></el-upload><div class="upload-text">点击上传银行卡正面</div></div><div class="upload-wrapper"><div class="purple-corners"></div><el-upload action="#" list-type="picture-card" :auto-upload="false"><el-icon><Camera /></el-icon></el-upload><div class="upload-text">点击上传银行卡背面</div></div></div>
        <h3 class="form-section-title">银行卡信息</h3><el-input placeholder="请输入银行账户" class="form-item-gap" /><el-input placeholder="请输入开户行名称" class="form-item-gap" /><el-input placeholder="请输入开户行行号" class="form-item-gap" />
      </el-form>
      <template #footer>
        <div class="dialog-footer"><el-button @click="isBankCardModalVisible = false">返回</el-button><el-button type="primary" @click="isBankCardModalVisible = false">同意</el-button></div>
        <div class="dialog-extra-link">已认证过？ <el-link type="primary">去登录</el-link></div>
      </template>
    </el-dialog>
  </el-container>
</template>

<script setup>
import { ref } from 'vue';
import { Search, Bell, ArrowRight, Setting, Check, Switch, Plus, Operation, Close, Lock, User, CreditCard, Avatar, Checked, Camera } from '@element-plus/icons-vue';
// ... (所有状态和模拟数据保持不变)
const isMenuVisible = ref(false); const activeMenu = ref('2'); const isPasswordModalVisible = ref(false); const isVerificationModalVisible = ref(false); const isBankCardModalVisible = ref(false); const defaultAddress = ref(2); const handleMenuSelect = (index) => { activeMenu.value = index; isMenuVisible.value = false; }; const menuItems = ref([ { index: '1', title: '账号管理' }, { index: '2', title: '账号安全' }, { index: '3', title: '拉黑列表' }, { index: '4', title: '举报记录' }, { index: '5', title: '账号申诉' }, { index: '6', title: '收货地址' }, { index: '7', title: '信息收集' }, { index: '8', title: '消息通知' }, { index: '9', title: '隐私设置' }, { index: '10', title: '联系客服' }, ]); const accounts = ref([ { id: 1, name: '胡老师de语法教学', tags: '英语 · 时态 · 语法', avatar: 'https://randomuser.me/api/portraits/women/1.jpg', isMain: true }, { id: 2, name: '胡老师de语法教学', tags: '英语 · 时态 · 语法', avatar: 'https://randomuser.me/api/portraits/women/2.jpg', isMain: false }, ]); const addresses = ref([ { id: 1, region: '江苏省南通市如皋市经济开发区', detail: '庆余路356号上海嘉苑 菜鸟驿站', name: '赵女士', phone: '19552698532' }, { id: 2, region: '江苏省南通市如皋市经济开发区', detail: '庆余路356号上海嘉苑 菜鸟驿站', name: '赵女士', phone: '19552698532' }, ]);
</script>

<style scoped>
/* --- 顶层布局 --- */
.settings-page-container { min-height: 100vh; display: flex; flex-direction: column; background-color: #f9fafb; }
.page-header { flex-shrink: 0; }
.page-main { flex-grow: 1; display: flex; flex-direction: column; padding: 20px; max-width: 1200px; width: 100%; margin: 0 auto; }
.settings-layout { flex-grow: 1; display: flex; background-color: #ffffff; border: 1px solid var(--el-border-color-light); border-radius: 8px; }

/* --- 基础样式 --- */
.top-bar { height: 8px; background-color: #303133; width: 100%; }
.page-header { background-color: #ffffff; border-bottom: 1px solid var(--el-border-color-light); display: flex; align-items: center; justify-content: center; padding: 0 20px; height: 64px; }
.header-content { width: 100%; max-width: 1200px; display: flex; justify-content: space-between; align-items: center; }
.logo-area { display: flex; align-items: center; }
.logo-text { font-size: 24px; font-weight: bold; color: var(--el-color-primary); margin-right: 16px; }
.search-area { flex-grow: 1; max-width: 400px; margin: 0 24px; }
.user-area { display: flex; align-items: center; gap: 16px; }
.page-breadcrumb { margin-bottom: 20px; flex-shrink: 0; }

/* --- 设置页面主体布局 --- */
.settings-aside { width: 220px; border-right: 1px solid var(--el-border-color-light); padding: 16px; flex-shrink: 0; }
.settings-main { padding: 24px 32px; }
.settings-menu-header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px; }
.settings-menu-title { font-size: 18px; font-weight: 600; color: var(--el-text-color-primary); display: flex; align-items: center; gap: 8px; margin: 0; }
.settings-menu { border-right: none; }
.settings-menu .el-menu-item { border-radius: 6px; }
.settings-menu .el-menu-item.is-active { background-color: var(--el-color-primary-light-9); color: var(--el-color-primary); font-weight: 600; }

/* --- 右侧内容通用样式 --- */
.content-title { font-size: 20px; font-weight: 600; margin: 0 0 24px 0; }
.custom-card { border: 1px solid var(--el-border-color-light); border-radius: 12px; padding: 8px 24px; }
.custom-list-item { display: flex; justify-content: space-between; align-items: center; padding: 20px 0; cursor: pointer; }
.item-left { display: flex; align-items: center; gap: 16px; font-size: 16px; font-weight: 500; }
.item-icon-wrapper { width: 40px; height: 40px; border-radius: 50%; background-color: var(--el-color-primary-light-9); color: var(--el-color-primary); display: flex; justify-content: center; align-items: center; }
.arrow-icon { font-size: 16px; color: var(--el-text-color-placeholder); }
.accounts-card { border: 1px solid var(--el-border-color-light); border-radius: 12px; padding: 8px 24px; }
.account-item { display: flex; align-items: center; justify-content: space-between; padding: 16px 0; }
.avatar-wrapper { position: relative; margin-right: 16px; }
.main-account-badge { position: absolute; bottom: -2px; right: -2px; width: 20px; height: 20px; background-color: var(--el-color-warning); border-radius: 50%; display: flex; justify-content: center; align-items: center; border: 2px solid #ffffff; }
.account-info { display: flex; flex-direction: column; gap: 4px; }
.account-name { font-size: 16px; font-weight: 500; margin: 0; }
.account-tags { display: flex; align-items: center; gap: 8px; font-size: 14px; color: var(--el-text-color-secondary); }
.add-account-btn { margin-top: 24px; }
.deregister-section { margin-top: 48px; padding-top: 24px; border-top: 1px solid var(--el-border-color-lighter); }
.address-list { display: flex; flex-direction: column; gap: 16px; margin-bottom: 24px; }
.address-card { border: 1px solid var(--el-border-color-light); border-radius: 8px; padding: 16px; }
.address-info p { margin: 0; color: var(--el-text-color-primary); }
.addr-line-2 { font-size: 16px; font-weight: 600; margin-bottom: 8px; }
.address-actions { display: flex; justify-content: space-between; align-items: center; margin-top: 16px; padding-top: 16px; border-top: 1px solid var(--el-border-color-lighter); }
.full-width-btn, .full-width { width: 100%; }

/* --- 弹窗统一样式 --- */
.dialog-footer { display: flex; gap: 12px; justify-content: center; }
.dialog-footer .el-button { width: 120px; }
.dialog-extra-link { text-align: center; margin-top: 16px; }
.custom-form .el-form-item { margin-bottom: 16px; }
.custom-form .form-section-title { font-size: 16px; font-weight: 600; margin: 24px 0 16px; }
.custom-form .form-item-gap { margin-bottom: 16px; }
.upload-container { display: flex; gap: 24px; justify-content: center; }
.upload-wrapper { position: relative; text-align: center; }
.upload-text { color: var(--el-text-color-secondary); font-size: 14px; margin-top: 8px; }
.upload-wrapper :deep(.el-upload--picture-card) { width: 160px; height: 100px; border-style: dashed; }
.upload-wrapper :deep(.el-upload-list--picture-card .el-upload-list__item) { width: 160px; height: 100px; }
.purple-corners::before, .purple-corners::after, .upload-wrapper::before, .upload-wrapper::after { content: ''; position: absolute; width: 20px; height: 20px; border-color: #6c5ce7; border-style: solid; }
.purple-corners::before { top: -4px; left: -4px; border-width: 3px 0 0 3px; }
.purple-corners::after { top: -4px; right: -4px; border-width: 3px 3px 0 0; }
.upload-wrapper::before { bottom: 1.8rem; left: -4px; border-width: 0 0 3px 3px; }
.upload-wrapper::after { bottom: 1.8rem; right: -4px; border-width: 0 3px 3px 0; }
.modal-form :deep(.el-form-item__label) { font-size: 16px; font-weight: 600; color: var(--el-text-color-primary); margin-bottom: 8px; }
.modal-form .verification-code-input :deep(.el-input-group__append) { background-color: transparent; box-shadow: none; padding: 0 12px; }
.modal-form .verification-code-input :deep(.el-input-group__append .el-button) { color: var(--el-color-primary); border-left: 1px solid var(--el-border-color); border-radius: 0; padding: 0 0 0 12px; }
.modal-form .verification-code-input :deep(.el-input-group__append .el-button:hover) { color: var(--el-color-primary-light-3); }
.modal-form .form-item-gap { margin-bottom: 16px; }

/* --- ✅ “实名认证”弹窗的新增专属样式 --- */
.verification-modal-body { padding: 0 20px; }
.modal-section { margin-bottom: 24px; }
.modal-section-title { font-size: 18px; font-weight: 600; margin-bottom: 16px; color: var(--el-text-color-primary); }
.modal-id-cards-container { margin-bottom: 16px; }
.modal-id-card-image { width: 100%; height: auto; display: block; border-radius: 8px; }
.modal-actions-footer { display: flex; justify-content: space-between; gap: 16px; width: 100%; }
.modal-actions-footer .el-button { flex: 1; height: 48px; font-size: 16px; }


/* --- ✅ “收货地址”视图的精修样式 --- */
.address-list {
  display: flex;
  flex-direction: column;
  gap: 20px; /* 加大卡片间距 */
  margin-bottom: 32px; /* 加大与底部按钮的间距 */
}
.address-card {
  border: 1px solid var(--el-border-color-lighter);
  border-radius: 12px; /* 更大的圆角 */
  padding: 20px;
  background-color: #ffffff;
  transition: box-shadow 0.2s;
}
.address-card:hover {
  box-shadow: var(--el-box-shadow-light);
}
.address-info p {
  margin: 0;
}
.addr-line-1 {
  font-size: 14px;
  color: var(--el-text-color-regular);
  margin-bottom: 4px;
}
.addr-line-2 {
  font-size: 16px;
  font-weight: 600;
  color: var(--el-text-color-primary);
  margin-bottom: 8px;
}
.addr-line-3 {
  font-size: 14px;
  color: var(--el-text-color-secondary);
}
.address-actions {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 16px;
  padding-top: 16px;
  border-top: 1px solid var(--el-border-color-lighter);
}
.action-links {
  display: flex;
  gap: 16px;
}
.full-width-btn {
  width: 100%;
  height: 48px;
  font-size: 16px;
}
.full-width {
  width: 100%;
}
/* --- 响应式适配 --- */
@media (max-width: 768px) {
  .search-area { display: none; }
  .page-main { padding: 16px 0; }
  .settings-layout { border: none; background-color: transparent; position: relative; overflow: hidden; }
  .settings-aside { position: absolute; top: 0; left: 0; bottom: 0; background-color: #ffffff; z-index: 100; transform: translateX(-100%); transition: transform 0.3s ease-in-out; border-right: 1px solid var(--el-border-color-light); width: 250px; }
  .settings-aside.is-visible { transform: translateX(0); box-shadow: 2px 0 12px rgba(0,0,0,0.1); }
  .close-menu-icon { display: block; cursor: pointer; font-size: 20px; }
  .settings-main { padding: 16px; }
  .mobile-menu-trigger { display: block; margin-bottom: 20px; }
  .accounts-card, .custom-card { padding: 8px 16px; }
  .account-item { flex-direction: column; align-items: flex-start; gap: 12px; }
  .account-actions { width: 100%; justify-content: flex-end; }
}
</style>