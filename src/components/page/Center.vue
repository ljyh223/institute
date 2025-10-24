<template>
  <el-container class="settings-page-container">
    <!-- 顶部深色条 -->
    <div class="top-bar"></div>
    <!-- 全局页头 -->
        <HomePageHead/>
    
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

          <!-- ================= 视图: 拉黑列表 ================= -->
          <div v-if="activeMenu === '3'" class="content-section">
            <h2 class="content-title">拉黑列表</h2>
            <div class="custom-card">
              <template v-for="(user, index) in blockedUsers" :key="user.id">
                <div class="blocked-item">
                  <div class="blocked-item-details">
                    <el-avatar :size="40" :src="user.avatar" />
                    <span class="blocked-item-name">{{ user.name }}</span>
                  </div>
                  <el-button plain>移出黑名单</el-button>
                </div>
                <el-divider v-if="index < blockedUsers.length - 1" class="list-divider"/>
              </template>
            </div>
          </div>

          <!-- ================= 视图: 举报记录 ================= -->
          <div v-if="activeMenu === '4'" class="content-section">
            <h2 class="content-title">举报记录</h2>
            <div class="report-list">
              <div class="report-card" v-for="item in reportHistory" :key="item.id">
                <div class="report-card-header">
                  <h3 class="report-card-title">{{ item.title }}</h3>
                </div>
                <el-divider />
                <p class="report-card-content">{{ item.content }}</p>
                <div class="report-card-footer">
                  <span class="report-card-timestamp">{{ item.timestamp }}</span>
                </div>
              </div>
            </div>
          </div>

          <!-- ================= 视图: 账号申诉 ================= -->
          <div v-if="activeMenu === '5'" class="content-section">
            <h2 class="content-title">账号申诉</h2>
            <div class="appeal-container">
              <div class="appeal-card">
                <div class="appeal-card-header">
                  <h3 class="appeal-card-title">申诉信息</h3>
                </div>
                <el-divider />
                <div class="appeal-card-body">
                  <el-input
                    v-model="appealReason"
                    type="textarea"
                    :rows="4"
                    placeholder="请输入申诉理由"
                    class="appeal-textarea"
                  />
                  <el-upload
                    v-model:file-list="appealFiles"
                    action="#"
                    list-type="picture-card"
                    :auto-upload="false"
                  >
                    <el-icon><Plus /></el-icon>
                  </el-upload>
                </div>
              </div>
              <div class="appeal-footer">
                <div class="appeal-actions">
                  <el-button type="primary">确认</el-button>
                  <el-button>取消</el-button>
                </div>
                <span class="appeal-timestamp">2025-06-04 20:00</span>
              </div>
            </div>
          </div>

          <!-- ================= 视图: 收货地址 ================= -->
           <div v-if="activeMenu === '6'" class="content-section">
             <h2 class="content-title">收货地址</h2>
             <el-radio-group v-model="defaultAddress" class="address-list">
              <div class="address-card" v-for="addr in addresses" :key="addr.id">
                <div class="address-card-header">
                  <el-radio :label="addr.id" size="large">
                    <span class="default-address-text">设为默认</span>
                  </el-radio>
                  <div class="address-card-actions">
                    <el-button text>删除</el-button>
                    <el-button text>修改</el-button>
                  </div>
                </div>
                <el-divider />
                <div class="address-card-body">
                  <p class="address-line-1">{{ addr.detail }}</p>
                  <p class="address-line-2">{{ addr.name }} {{ addr.phone }}</p>
                  <p class="address-line-3">{{ addr.region }}</p>
                </div>
              </div>
            </el-radio-group>
          </div>

          <!-- ================= 视图: 信息收集 ================= -->
          <div v-if="activeMenu === '7'" class="content-section">
            <h2 class="content-title">信息收集</h2>
            <div class="info-collection-list">
              <div class="info-card" v-for="(group, groupIndex) in infoCollectionItems" :key="groupIndex">
                <template v-for="(item, itemIndex) in group" :key="item.id">
                  <div class="info-item">
                    <span>{{ item.text }}</span>
                    <el-icon><ArrowRight /></el-icon>
                  </div>
                  <el-divider v-if="itemIndex < group.length - 1" />
                </template>
              </div>
            </div>
          </div>

          <!-- ================= 视图: 消息通知 ================= -->
          <div v-if="activeMenu === '8'" class="content-section">
            <h2 class="content-title">消息通知</h2>
            <div class="custom-card">
              <div class="settings-item">
                <span>平台消息</span>
                <el-switch v-model="notificationSettings.platform" />
              </div>
              <el-divider />
              <div class="settings-item">
                <span>互动消息</span>
                <el-switch v-model="notificationSettings.interaction" />
              </div>
              <el-divider />
              <div class="settings-item">
                <span>私信消息</span>
                <el-switch v-model="notificationSettings.private" />
              </div>
            </div>
          </div>

          <!-- ================= 视图: 隐私设置 ================= -->
          <div v-if="activeMenu === '9'" class="content-section">
            <h2 class="content-title">隐私设置</h2>
            <div class="custom-card">
              <div class="settings-item">
                <span>关注收藏</span>
                <el-switch v-model="privacySettings.hideLikes" />
              </div>
              <el-divider />
              <div class="settings-item">
                <span>评价隐藏</span>
                <el-switch v-model="privacySettings.hideReviews" />
              </div>
            </div>
          </div>

          <!-- ================= 视图: 联系客服 ================= -->
          <div v-if="activeMenu === '10'" class="content-section">
            <h2 class="content-title">联系客服</h2>
            <div class="contact-us-container">
              <!-- 联系方式 -->
              <div class="contact-card">
                <div class="contact-item">
                  <span class="contact-label">联系方式</span>
                  <div class="contact-value">
                    <span>{{ contactEmail }}</span>
                    <el-icon class="copy-icon"><DocumentCopy /></el-icon>
                  </div>
                </div>
              </div>
              <!-- 常见问题 -->
              <div class="contact-card">
                <div class="faq-header">
                  <el-icon :size="16" color="#409EFC"><QuestionFilled /></el-icon>
                  <h3 class="faq-title">常见问题</h3>
                </div>
                <el-divider />
                <div class="faq-list">
                  <div v-for="item in faqItems" :key="item.id" class="faq-item" @click="showProblemDetails(item)">
                    <span>{{ item.title }}</span>
                  </div>
                </div>
              </div>
              <!-- 问题描述 -->
              <div class="contact-card problem-form-card">
                 <h3 class="problem-form-title">请描述具体问题</h3>
                 <el-input v-model="problemDescription" type="textarea" :rows="5" placeholder="请输入您遇到的问题" class="problem-textarea" />
                 <el-upload v-model:file-list="problemFiles" action="#" list-type="picture-card" :auto-upload="false">
                   <el-icon><Plus /></el-icon>
                 </el-upload>
              </div>
            </div>
          </div>
        </el-main>
      </el-container>
    </el-main>
    
    <!-- ===================================================== -->
    <!-- 弹窗们 -->
    <!-- ===================================================== -->

    <!-- 问题详情弹窗 -->
    <el-dialog v-model="isProblemModalVisible" title="问题详情" width="480px" center>
      <div class="problem-modal-content">
        <h3 class="problem-modal-subtitle">{{ currentProblem.title }}</h3>
        <div class="problem-modal-text" v-html="currentProblem.details"></div>
      </div>
    </el-dialog>

    <!-- 修改密码弹窗 -->
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

    <!-- 实名认证弹窗 -->
     <el-dialog v-model="isVerificationModalVisible" title="实名认证" width="520px" center>
      <div class="verification-modal-body">
        <div class="modal-section">
          <h3 class="modal-section-title">基本信息</h3>
          <el-form label-width="0" class="modal-form">
            <el-form-item><el-input placeholder="请输入真实姓名" clearable /></el-form-item>
            <el-form-item><el-input placeholder="请输入手机号码" clearable /></el-form-item>
          </el-form>
        </div>
        <div class="modal-section">
          <h3 class="modal-section-title">证件信息</h3>
          <div class="id-cards">
            <img src="./assets/card.png" alt="ID card illustration">
          </div>
          <el-form-item><el-input placeholder="请输入身份证号码" clearable /></el-form-item>
        </div>
      </div>
      <template #footer>
        <div class="modal-actions-footer">
          <el-button @click="isVerificationModalVisible = false">返回</el-button>
          <el-button type="primary" @click="isVerificationModalVisible = false">同意</el-button>
        </div>
        <div class="dialog-extra-link">
          <el-link type="primary" :underline="false">已认证过？去登录</el-link>
        </div>
      </template>
    </el-dialog>
    
    <!-- 银行卡绑定弹窗 -->
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
import { Search, Bell, ArrowRight, Setting, Check, Switch, Plus, Operation, Close, Lock, User, CreditCard, Camera, DocumentCopy, QuestionFilled } from '@element-plus/icons-vue';
import HomePageHead from '@/components/homepage/Head.vue';

// 菜单激活状态，默认为'9'以显示隐私设置
const isMenuVisible = ref(false); 
const activeMenu = ref('9'); 

// 菜单项
const menuItems = ref([ 
  { index: '1', title: '账号管理' }, 
  { index: '2', title: '账号安全' }, 
  { index: '3', title: '拉黑列表' }, 
  { index: '4', title: '举报记录' }, 
  { index: '5', title: '账号申诉' }, 
  { index: '6', title: '收货地址' }, 
  { index: '7', title: '信息收集' }, 
  { index: '8', title: '消息通知' }, 
  { index: '9', title: '隐私设置' }, 
  { index: '10', title: '联系客服' }, 
]);

// 弹窗可见性状态
const isPasswordModalVisible = ref(false); 
const isVerificationModalVisible = ref(false); 
const isBankCardModalVisible = ref(false);
const isProblemModalVisible = ref(false);

// --- 各页面模拟数据 ---

// 账号管理
const accounts = ref([ { id: 1, name: '胡老师de语法教学', tags: '英语 · 时态 · 语法', avatar: 'https://randomuser.me/api/portraits/women/1.jpg', isMain: true }, { id: 2, name: '胡老师de语法教学', tags: '英语 · 时态 · 语法', avatar: 'https://randomuser.me/api/portraits/women/2.jpg', isMain: false }, ]);
// 拉黑列表
const blockedUsers = ref([ { id: 1, name: '胡老师de语法教学', avatar: 'https://randomuser.me/api/portraits/women/65.jpg' }, { id: 2, name: '胡老师de语法教学', avatar: 'https://randomuser.me/api/portraits/men/32.jpg' }, { id: 3, name: '胡老师de语法教学', avatar: 'https://randomuser.me/api/portraits/men/83.jpg' }, { id: 4, name: '胡老师de语法教学', avatar: 'https://randomuser.me/api/portraits/men/26.jpg' }, { id: 5, name: '胡老师de语法教学', avatar: 'https://randomuser.me/api/portraits/men/55.jpg' }, ]);
// 举报记录
const reportHistory = ref([ { id: 1, title: '举报通知', content: '您因XXXXX原因被举报, 请联系客服, 下架或删除内容, 被举报超过三次将直接封号。', timestamp: '2025-06-04 20:00' }, { id: 2, title: '举报通知', content: '您因XXXXX原因被举报, 请联系客服, 下架或删除内容, 被举报超过三次将直接封号。', timestamp: '2025-06-04 20:00' }, ]);
// 账号申诉
const appealReason = ref('');
const appealFiles = ref([ { name: 'uploaded.jpg', url: 'https://images.unsplash.com/photo-1554224155-16954405a255?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG9otby1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80', }, ]);
// 收货地址
const addresses = ref([ { id: 1, region: '江苏省南通市如皋市经济开发区', detail: '庆余路356号上海嘉苑 菜鸟驿站', name: '赵女士', phone: '19552698532' }, { id: 2, region: '江苏省南通市如皋市经济开发区', detail: '庆余路356号上海嘉苑 菜鸟驿站', name: '赵女士', phone: '19552698532' }, ]);
const defaultAddress = ref(2);
// 信息收集
const infoCollectionItems = ref([ [ { id: 1, text: '社区服务协议' }, { id: 2, text: '用户登录协议' }, { id: 3, text: '交易协议' }, ], [ { id: 4, text: '隐私协议' }, { id: 5, text: '软件许可协议' }, { id: 6, text: '服务协议' }, ], [ { id: 7, text: '商户入驻协议' }, ] ]);
// 消息通知
const notificationSettings = ref({ platform: true, interaction: true, private: false });
// 隐私设置
const privacySettings = ref({ hideLikes: true, hideReviews: true });
// 联系客服
const contactEmail = ref('2801506560@qq.com');
const problemDescription = ref('');
const problemFiles = ref([ { name: 'uploaded.jpg', url: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80' } ]);
const currentProblem = ref({});
const faqItems = ref([
  { id: 1, title: '为什么支付失败了?', details: '亲爱的用户，请按照以下路径尝试解决。<br><br>第一步：检查支付方式的余额，确保有足够的资金完成支付<br>第二步：重新输入支付密码或验证码，注意输入的准确性<br>第三步：确认网络连接正常，可尝试重新连接网络后再次支付<br>第四步：检查银行卡或支付账户是否被冻结、挂失等，如有异常联系对应的银行或支付平台解决<br><br>若以上均无问题，可能是商家或平台的支付系统出现故障，可稍后再试或联系客服处理' },
  { id: 2, title: '支付成功了但没有收到商品', details: '支付成功后商品未到账通常是由于网络延迟导致的。请您耐心等待5-10分钟，并刷新页面查看。如果问题仍然存在，请联系客服并提供您的支付截图和订单号，我们会尽快为您处理。' },
  { id: 3, title: '为什么无法加载图片等视频内容', details: '无法加载内容可能是您的网络连接不稳定，请尝试切换到更稳定的Wi-Fi或移动网络。您也可以尝试清除应用缓存或浏览器缓存后重启应用/浏览器。如果问题持续，可能是我们的服务器正在维护，请稍后再试。' },
  { id: 4, title: '接收不到验证码', details: '请检查您的手机是否将短信拦截，或者查看垃圾信箱。如果确认没有拦截，可能是运营商网络问题导致延迟，请稍等片刻或点击重新发送。' },
]);

// --- 方法定义 ---

// 处理菜单选择
const handleMenuSelect = (index) => { 
  activeMenu.value = index; 
  isMenuVisible.value = false; 
};

// 显示常见问题详情弹窗
const showProblemDetails = (problem) => {
  currentProblem.value = problem;
  isProblemModalVisible.value = true;
};
</script>

<style scoped>
/* --- 顶层布局 --- */
.settings-page-container { min-height: 100vh; display: flex; flex-direction: column; background-color: #f9fafb; }
.page-header { flex-shrink: 0; }
.page-main { flex-grow: 1; display: flex; flex-direction: column; padding: 20px; max-width: 1200px; width: 100%; margin: 0 auto; }
.settings-layout { flex-grow: 1; display: flex; background-color: #ffffff; border: 1px solid var(--el-border-color-light); border-radius: 8px; }

/* --- 基础样式 --- */
.top-black-bar { width: 100%; height: 30px; background: rgba(56, 56, 56, 1); position: sticky; top: 0; z-index: 1001;}
/* --- 设置页面主体布局 --- */
.settings-aside { width: 220px; border-right: 1px solid var(--el-border-color-light); padding: 16px; flex-shrink: 0; }
.settings-main { padding: 24px 32px; }
.settings-menu-header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px; }
.settings-menu-title { font-size: 18px; font-weight: 600; color: var(--el-text-color-primary); display: flex; align-items: center; gap: 8px; margin: 0; }
.settings-menu { border-right: none; }
.settings-menu .el-menu-item { border-radius: 6px; }
.settings-menu .el-menu-item.is-active { background-color: var(--el-color-primary-light-9); color: var(--el-color-primary); font-weight: 600; }
.mobile-menu-trigger { display: none; }

/* --- 右侧内容通用样式 --- */
.content-title { font-size: 20px; font-weight: 600; margin: 0 0 24px 0; }
.custom-card { border: 1px solid var(--el-border-color-light); border-radius: 12px; padding: 8px 24px; }
.custom-list-item { display: flex; justify-content: space-between; align-items: center; padding: 20px 0; cursor: pointer; }
.item-left { display: flex; align-items: center; gap: 16px; font-size: 16px; font-weight: 500; }
.item-icon-wrapper { width: 40px; height: 40px; border-radius: 50%; background-color: var(--el-color-primary-light-9); color: var(--el-color-primary); display: flex; justify-content: center; align-items: center; }
.arrow-icon { font-size: 16px; color: var(--el-text-color-placeholder); }
.accounts-card { border: 1px solid var(--el-border-color-light); border-radius: 12px; padding: 8px 24px; }
.account-item { display: flex; align-items: center; justify-content: space-between; padding: 16px 0; }
.account-details { display: flex; align-items: center;}
.avatar-wrapper { position: relative; margin-right: 16px; }
.main-account-badge { position: absolute; bottom: -2px; right: -2px; width: 20px; height: 20px; background-color: var(--el-color-warning); border-radius: 50%; display: flex; justify-content: center; align-items: center; border: 2px solid #ffffff; }
.account-info { display: flex; flex-direction: column; gap: 4px; }
.account-name { font-size: 16px; font-weight: 500; margin: 0; }
.account-tags { display: flex; align-items: center; gap: 8px; font-size: 14px; color: var(--el-text-color-secondary); }
.add-account-btn { margin-top: 24px; }
.deregister-section { margin-top: 48px; padding-top: 24px; border-top: 1px solid var(--el-border-color-lighter); }

/* --- 拉黑列表 --- */
.blocked-item { display: flex; align-items: center; justify-content: space-between; padding: 16px 0; }
.blocked-item-details { display: flex; align-items: center; gap: 16px; }
.blocked-item-name { font-size: 16px; font-weight: 500; color: var(--el-text-color-primary); }
.list-divider { margin: 0; }

/* --- 举报记录 --- */
.report-list { display: flex; flex-direction: column; gap: 24px; }
.report-card { background-color: #ffffff; border-radius: 8px; border: 1px solid var(--el-border-color-light); padding: 20px 24px; }
.report-card-header { margin-bottom: 8px; }
.report-card .el-divider { margin: 0 0 16px 0; }
.report-card-title { font-size: 16px; font-weight: 600; color: var(--el-text-color-primary); margin: 0; }
.report-card-content { font-size: 14px; color: var(--el-text-color-regular); line-height: 1.6; margin: 0 0 20px 0; }
.report-card-footer { text-align: right; }
.report-card-timestamp { font-size: 14px; color: var(--el-text-color-placeholder); }

/* --- 账号申诉 --- */
.appeal-container { /* 容器 */ }
.appeal-card { background-color: #ffffff; border: 1px solid var(--el-border-color-light); border-radius: 8px; padding: 24px; }
.appeal-card-title { font-size: 16px; font-weight: 600; margin: 0; }
.appeal-card .el-divider { margin: 16px 0; }
.appeal-textarea { margin-bottom: 24px; }
.appeal-textarea :deep(.el-textarea__inner) { border: none; box-shadow: none !important; resize: none; padding: 0; }
.appeal-card :deep(.el-upload--picture-card) { width: 100px; height: 100px; }
.appeal-card :deep(.el-upload-list--picture-card .el-upload-list__item) { width: 100px; height: 100px; }
.appeal-footer { display: flex; justify-content: space-between; align-items: center; margin-top: 24px; }
.appeal-actions { display: flex; gap: 12px; }
.appeal-timestamp { font-size: 14px; color: var(--el-text-color-placeholder); }

/* --- 收货地址 --- */
.address-list { display: flex; flex-direction: column; gap: 20px; width: 100%; }
.address-card { background-color: #f9f9f9; border: 1px solid var(--el-border-color-lighter); border-radius: 6px; padding: 16px 24px; }
.address-card-header { display: flex; justify-content: space-between; align-items: center; }
.address-card .el-divider { margin: 12px 0; }
.default-address-text { font-size: 14px; font-weight: 500; }
.address-card-actions { display: flex; gap: 16px; }
.address-card-actions .el-button { padding: 0; font-size: 14px; color: var(--el-text-color-placeholder); }
.address-card-body p { margin: 0; }
.address-line-1 { font-size: 16px; font-weight: 600; margin-bottom: 8px; }
.address-line-2 { font-size: 15px; font-weight: 600; margin-bottom: 10px; }
.address-line-3 { font-size: 14px; color: var(--el-text-color-secondary); }

/* --- 信息收集 --- */
.info-collection-list { display: flex; flex-direction: column; gap: 20px; }
.info-card { border: 1px solid var(--el-border-color-light); border-radius: 8px; padding: 8px 24px; }
.info-item { display: flex; justify-content: space-between; align-items: center; padding: 16px 0; cursor: pointer; font-size: 15px; }
.info-item .el-icon { color: var(--el-text-color-placeholder); }
.info-card .el-divider { margin: 0; }

/* --- 消息通知 & 隐私设置 --- */
.settings-item { display: flex; justify-content: space-between; align-items: center; padding: 12px 0; font-size: 15px; }
.custom-card .el-divider { margin: 0; }

/* --- 联系客服 --- */
.contact-us-container { display: flex; flex-direction: column; gap: 20px; }
.contact-card { border: 1px solid var(--el-border-color-light); border-radius: 8px; padding: 16px 24px; background-color: #ffffff; }
.contact-item { display: flex; justify-content: space-between; align-items: center; font-size: 15px; }
.contact-label { /* 标签样式 */ }
.contact-value { display: flex; align-items: center; gap: 8px; }
.copy-icon { cursor: pointer; color: var(--el-text-color-placeholder); }
.faq-header { display: flex; align-items: center; gap: 8px; }
.faq-title { margin: 0; font-size: 15px; font-weight: 500; color: var(--el-text-color-secondary); }
.contact-card .el-divider { margin: 12px 0; }
.faq-list { display: flex; flex-direction: column; }
.faq-item { padding: 10px 0; font-size: 14px; color: var(--el-text-color-regular); cursor: pointer; }
.faq-item:hover { color: var(--el-color-primary); }
.problem-form-card { padding: 20px 24px; }
.problem-form-title { margin: 0 0 16px 0; font-size: 15px; font-weight: 500; color: var(--el-text-color-secondary); }
.problem-textarea { margin-bottom: 16px; }
.problem-textarea :deep(.el-textarea__inner) { background-color: #f9fafb; }
.problem-form-card :deep(.el-upload--picture-card) { width: 80px; height: 80px; background-color: #f9fafb; }
.problem-form-card :deep(.el-upload-list--picture-card .el-upload-list__item) { width: 80px; height: 80px; }

/* --- 问题详情弹窗 --- */
.problem-modal-subtitle { text-align: center; font-size: 18px; font-weight: 600; margin: 0 0 24px 0; }
.problem-modal-text { font-size: 14px; color: var(--el-text-color-regular); line-height: 1.8; }

/* --- 其他弹窗通用样式 --- */
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
.modal-form :deep(.el-form-item__label) { font-size: 16px; font-weight: 600; }
.modal-form .verification-code-input :deep(.el-input-group__append) { background-color: transparent; box-shadow: none; padding: 0 12px; }
.modal-form .verification-code-input :deep(.el-input-group__append .el-button) { color: var(--el-color-primary); border-left: 1px solid var(--el-border-color); border-radius: 0; padding: 0 0 0 12px; }
.verification-modal-body { padding: 0 20px; }
.modal-section { margin-bottom: 24px; }
.modal-section-title { font-size: 18px; font-weight: 600; margin-bottom: 16px; }
.modal-id-cards-container { margin-bottom: 16px; }
.modal-id-card-image { width: 100%; height: auto; display: block; border-radius: 8px; }
.modal-actions-footer { display: flex; justify-content: space-between; gap: 16px; width: 100%; }
.modal-actions-footer .el-button { flex: 1; height: 48px; font-size: 16px; }

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
  .accounts-card, .custom-card, .contact-card { padding: 8px 16px; }
  .account-item { flex-direction: column; align-items: flex-start; gap: 12px; }
  .account-actions { width: 100%; justify-content: flex-end; }
}
</style>