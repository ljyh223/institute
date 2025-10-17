<template>
  <div class="upload-page-layout">
    <!-- 顶部深灰色细条 -->
    <div class="top-black-bar"></div>

    <!-- 白色导航栏 -->
    <el-header class="header">
  <div class="header-content">
    <div class="logo-section">
      <span class="logo-text">学会</span>
      <el-button class="ai-explore-btn">
        AI探索
        <el-icon><ArrowRight /></el-icon>
      </el-button>
    </div>
    <div class="search-container hidden-xs-only">
      <el-input
        placeholder="What do you want learn?"
        class="header-search-input"
      />
      <el-button type="primary" :icon="Search" circle class="search-icon-btn" />
    </div>
    <div class="user-action-section">
      <el-icon :size="22" class="notification-bell"><Bell /></el-icon>
      <el-avatar :size="32" src="src/components/Personlcenter1/picture/矩形2(1).png" />
    </div>
  </div>
</el-header>

    <!-- 主内容区 -->
    <el-main class="main-content">
      <div class="content-container">
        <!-- 面包屑导航 -->
        <el-breadcrumb :separator-icon="ArrowRight" class="page-breadcrumb">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item>个人中心</el-breadcrumb-item>
        <el-breadcrumb-item>上传课程</el-breadcrumb-item>
        </el-breadcrumb>

        <!-- 表单容器 -->
        <div class="form-container">
          <!-- 课程类型 -->
          <div class="form-section">
            <h3 class="section-title">课程类型</h3>
            <p class="section-subtitle">请选择课程的类型</p>
            <div class="course-type-selector">
              <div
                v-for="item in courseTypes"
                :key="item.id"
                :class="['type-card', { active: selectedType === item.id }]"
                @click="selectedType = item.id"
              >
                <div :class="['type-icon', `icon-bg-${item.id}`]">
                  <el-icon :size="24"><component :is="item.icon" /></el-icon>
                </div>
                <div class="type-text">
                  <span>{{ item.label }} / {{ item.name }}</span>
                </div>
              </div>
            </div>
          </div>

          <!-- 课程信息 -->
          <div class="form-section">
            <h3 class="section-title">课程信息</h3>
            <p class="section-subtitle">请填写课程的类型</p>
            <el-form :model="courseForm" label-position="top" class="info-form">
              <el-form-item label="课程名称" class="form-item-half">
                <el-input v-model="courseForm.name" placeholder="请输入课程名称" />
              </el-form-item>
              <el-form-item label="副标题" class="form-item-half">
                <el-input v-model="courseForm.subtitle" placeholder="请输入课程副标题" />
              </el-form-item>
              <el-form-item label="简介" class="form-item-full">
                <el-input v-model="courseForm.description" type="textarea" :rows="3" placeholder="请输入简介" />
              </el-form-item>
              <el-form-item label="容量" class="form-item-full">
                <el-select v-model="courseForm.capacity" placeholder="请选择课程容量">
                  <el-option label="10人" value="10" />
                  <el-option label="30人" value="30" />
                  <el-option label="50人" value="50" />
                </el-select>
              </el-form-item>
              <el-form-item label="价格" class="form-item-half">
                <el-checkbox-group v-model="courseForm.priceType">
                    <el-checkbox label="付费" />
                    <el-checkbox label="免费" />
                </el-checkbox-group>
            </el-form-item>
            <el-form-item label="是否创建对应的学习小组" class="form-item-half">
                <el-checkbox-group v-model="courseForm.createGroup">
                    <el-checkbox label="是" />
                    <el-checkbox label="否" />
                </el-checkbox-group>
            </el-form-item>
            </el-form>
          </div>

          <!-- 上传课件 -->
          <div class="form-section">
            <h3 class="section-title">上传课件</h3>
            <p class="section-subtitle">请上传课程的相关资料</p>
            <el-upload
              class="course-uploader"
              drag
              action="https://run.mocky.io/v3/9d059bf9-4660-45f2-925d-ce80ad6c4d15"
              multiple
              :show-file-list="false"
            >
              <el-icon class="el-icon--upload"><UploadFilled /></el-icon>
              <div class="el-upload__text">
                点击, 或拖拽文件到这里上传
              </div>
            </el-upload>
            <div class="upload-actions">
                <el-button type="primary" :icon="Edit">立即编辑</el-button>
                <span>打开本地文件夹立即编辑课件。</span>
            </div>
            <div class="file-list">
                <div v-for="file in fileList" :key="file.name" class="file-item">
                    <div :class="['file-icon-wrapper', `icon-bg-${file.type}`]">
                        <el-icon :size="24"><component :is="file.icon" /></el-icon>
                    </div>
                    <div class="file-info">
                        <span class="file-name">{{ file.name }}</span>
                        <span class="file-size">{{ file.size }}</span>
                    </div>
                    <div class="file-status">
                        <el-progress :percentage="file.percentage" :status="file.status" :show-text="false" />
                         <div class="status-icon">
                            <el-icon v-if="file.status === 'success'" color="var(--el-color-primary)"><CircleCheckFilled /></el-icon>
                            <span v-if="file.status !== 'success' && file.status !== 'exception'">{{ file.percentage }}%</span>
                            <el-icon v-if="file.status === 'exception'" class="delete-icon"><Delete /></el-icon>
                        </div>
                    </div>
                </div>
            </div>
          </div>
        </div>
      </div>
    </el-main>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue';
import { 
  ArrowRight, Search, Bell, VideoPlay, Document, VideoCamera, 
  UploadFilled, Edit, Picture as PictureIcon, Files, Delete, CircleCheckFilled
} from '@element-plus/icons-vue';
import 'element-plus/theme-chalk/display.css';

// 课程类型数据
const selectedType = ref('online');
const courseTypes = ref([
  { id: 'online', name: '线上', label: 'Online', icon: VideoPlay },
  { id: 'offline', name: '线下', label: 'Offline', icon: Document },
  { id: 'live', name: '直播', label: 'Offline', icon: VideoCamera },
]);

// 课程信息表单
const courseForm = reactive({
  name: '',
  subtitle: '',
  description: '',
  capacity: '',
  priceType: ['免费'], 
  createGroup: ['否'], 
});

// 模拟文件列表
const fileList = ref([
    {
        name: '课程名称.JPG',
        size: '20MB',
        percentage: 72,
        status: 'success',
        type: 'image',
        icon: PictureIcon,
    },
    {
        name: '课程名称.PNG',
        size: '20MB',
        percentage: 100,
        status: 'exception',
        type: 'file',
        icon: Files,
    }
]);
</script>

<style scoped>
/* 全局布局 */
.upload-page-layout { background-color: #fff; }
.main-content { padding: 0; }
.top-black-bar { width: 100%; height: 30px; background-color:rgba(56, 56, 56, 1); position: sticky; top: 0; z-index: 1001; }
.content-container { max-width: 900px; margin: 0 auto; padding: 0 20px 60px; }

/* Header样式 */
.header {
  background-color: #ffffff;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.08);
  height: 64px;
  position: sticky;
  top: 0; /* 直接固定在页面顶部 */
  z-index: 1000;
  display: flex;
  align-items: center;
}
.header-content {
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
}
.logo-section { display: flex; align-items: center; gap: 16px; }
.logo-text { font-size: 24px; font-weight: bold; color: var(--el-color-primary); }
.ai-explore-btn { border-color: var(--el-border-color-light); color: var(--el-text-color-primary); }
.ai-explore-btn .el-icon { margin-left: 4px; }
.search-container { display: flex; align-items: center; flex-grow: 1; max-width: 450px; margin: 0 24px; }
.header-search-input { --el-input-border-radius: 20px; }
.header-search-input :deep(.el-input__wrapper) { box-shadow: none !important; border: 1px solid var(--el-border-color); }
.header-search-input :deep(.el-input__wrapper:hover) { border-color: var(--el-color-primary); }
.search-icon-btn { margin-left: -35px; z-index: 5; }
.user-action-section { display: flex; align-items: center; gap: 20px; }
.notification-bell { color: var(--el-color-primary); cursor: pointer; }

/* 面包屑 */
.page-breadcrumb { padding: 24px 0; }

/* 表单容器 */
.form-container { display: flex; flex-direction: column; gap: 40px; }
.form-section { border-top: 1px solid var(--el-border-color-lighter); padding-top: 24px; }
.section-title { font-size: 18px; font-weight: 600; margin: 0 0 4px; }
.section-subtitle { font-size: 14px; color: var(--el-text-color-secondary); margin: 0 0 20px; }

/* 课程类型选择器 */
.course-type-selector { display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px; }
.type-card {
  display: flex;
  align-items: center;
  padding: 20px;
  border: 1px solid var(--el-border-color-lighter);
  border-radius: 12px;
  cursor: pointer;
  transition: all 0.3s ease;
  background-color: #f7f8fa;
}
.type-card:hover { border-color: var(--el-color-primary); }
.type-card.active {
  background-color: var(--el-color-primary);
  color: #fff;
  border-color: var(--el-color-primary);
}
.type-icon {
  width: 48px;
  height: 48px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 16px;
  background-color: #e9ecef;
  color: var(--el-text-color-primary);
}
.type-card.active .type-icon { background-color: rgba(255,255,255,0.2); color: #fff; }
.type-text span { font-size: 16px; font-weight: 500; }
.icon-bg-offline .el-icon { color: #fd7e14; }
.icon-bg-live .el-icon { color: #20c997; }

/* 课程信息表单 */
.info-form { display: grid; grid-template-columns: repeat(2, 1fr); gap: 16px 24px; }
.form-item-full { grid-column: 1 / -1; }

/* 上传区域 */
.course-uploader :deep(.el-upload-dragger) {
  border: 2px dashed var(--el-color-primary-light-5);
  background-color: var(--el-color-primary-light-9);
  padding: 40px;
}
.upload-actions { margin-top: 16px; display: flex; align-items: center; gap: 12px; }
.upload-actions span { font-size: 14px; color: var(--el-text-color-secondary); }

/* 文件列表 */
.file-list { margin-top: 24px; display: flex; flex-direction: column; gap: 16px; }
.file-item {
  display: flex;
  align-items: center;
  gap: 16px;
  background-color: #f7f8fa;
  padding: 16px;
  border-radius: 8px;
  border: 1px solid transparent;
}
.file-icon-wrapper {
  width: 48px;
  height: 48px;
  flex-shrink: 0;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.icon-bg-image { background-color: #fff0d1; color: #ff9900; }
.icon-bg-file { background-color: #e0f8e9; color: #20c997; }
.file-info { flex-grow: 1; }
.file-name { display: block; font-weight: 500; }
.file-size { display: block; font-size: 13px; color: var(--el-text-color-secondary); }
.file-status { width: 150px; display: flex; align-items: center; gap: 12px; }
.file-status .el-progress { flex-grow: 1; }
.status-icon { width: 24px; text-align: center; }
.delete-icon { cursor: pointer; color: var(--el-color-danger); }

/* --- 响应式适配 --- */
@media (max-width: 767px) {
  .course-type-selector, .info-form { grid-template-columns: 1fr; }
}
</style>