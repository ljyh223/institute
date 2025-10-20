<template>
  <div class="course-content-area">
    <!-- 课程详情Tab (全宽) -->
    <div class="course-details-section">
      <el-tabs :model-value="activeTab" @update:modelValue="$emit('update:activeTab', $event)">
        <el-tab-pane label="关于" name="about">
          <h4 class="tab-section-title">您将学到什么？</h4>
          <div class="learning-goals">
            <ul class="learning-goals-list">
              <li v-for="(item, index) in learningGoals.slice(0, 2)" :key="index">
                <el-icon>
                  <SuccessFilled />
                </el-icon> {{ item }}
              </li>
            </ul>
            <ul class="learning-goals-list">
              <li v-for="(item, index) in learningGoals.slice(2, 4)" :key="index">
                <el-icon>
                  <SuccessFilled />
                </el-icon> {{ item }}
              </li>
            </ul>
          </div>
          <h4 class="tab-section-title">您将获得的技能</h4>
          <div class="skills-tags">
            <el-tag v-for="skill in skills" :key="skill" type="info" effect="plain">{{ skill }}</el-tag>
          </div>
          <h4 class="tab-section-title">要了解的详细信息</h4>
          <div class="extra-info">
            <div class="info-item">
              <el-icon class="info-icon">
                <ChatDotSquare />
              </el-icon>
              <div class="info-text">
                <p class="info-label">授课语言</p>
                <p class="info-value">中文 (Chinese)</p>
              </div>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane label="课程" name="content">
          <p class="tab-content-text">课程内容正在更新中...</p>
        </el-tab-pane>
        <el-tab-pane label="推荐" name="recommendation">
          <p class="tab-content-text">相关推荐正在更新中...</p>
        </el-tab-pane>
      </el-tabs>
    </div>

    <!-- 大纲与侧边栏 (两栏对齐) -->
    <el-row :gutter="30" class="outline-sidebar-area">
      <!-- 左侧：课程大纲 -->
      <el-col :xs="24" :md="16">
        <div class="course-outline-container">
          <h3 class="section-title-sub">课程大纲</h3>
          <el-collapse :model-value="activeCollapse" @update:modelValue="$emit('update:activeCollapse', $event)"
            class="course-outline-collapse" accordion>
            <el-collapse-item v-for="(chapter, index) in courseOutline" :key="index" :name="index">
              <template #title>
                <div class="custom-collapse-header">
                  <el-image :src="chapter.image" class="collapse-thumb" fit="cover" />
                  <div class="collapse-title-section">
                    <p class="collapse-title">{{ chapter.title }}</p>
                    <p class="collapse-duration">{{ chapter.duration }}</p>
                  </div>
                </div>
              </template>
              <div class="collapse-content-wrapper">
                <div v-for="sub in chapter.subChapters" :key="sub.title" class="sub-chapter-block">
                  <p class="sub-chapter-title">{{ sub.title }}</p>
                  <div class="section-links">
                    <el-link v-for="section in sub.sections" :key="section" type="primary" :underline="false"
                      class="section-link">{{
                        section }}</el-link>
                  </div>
                </div>
              </div>
            </el-collapse-item>
          </el-collapse>
          <div class="load-more-container-outline">
            <el-button type="primary">查看更多</el-button>
          </div>
        </div>
      </el-col>

      <!-- 右侧：侧边栏 -->
      <el-col :xs="24" :md="8">
        <div class="sidebar">
          <el-card shadow="never" class="sidebar-card">
            <template #header>
              <div class="card-header">
                <span>授课教师</span>
              </div>
            </template>
            <div class="instructor-sidebar">
              <el-avatar :size="50" :src="instructor.avatar"></el-avatar>
              <div class="instructor-text">
                <p class="instructor-name-details">授课老师：{{ instructor.name }}</p>
              </div>
            </div>
          </el-card>
          <el-card shadow="never" class="sidebar-card">
            <template #header>
              <div class="card-header">
                <span>提供方</span>
              </div>
            </template>
            <div class="provider-info">
              <el-avatar shape="square" class="provider-logo">学会</el-avatar>
              <span>学会</span>
            </div>
          </el-card>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script setup>
import { SuccessFilled, ChatDotSquare } from '@element-plus/icons-vue';

// 1. 声明所有需要从父组件接收的数据
defineProps({
  activeTab: String,
  learningGoals: Array,
  skills: Array,
  activeCollapse: [String, Number],
  courseOutline: Array,
  instructor: Object
});

// 2. 声明所有需要更新父组件数据的事件 (用于v-model)
defineEmits(['update:activeTab', 'update:activeCollapse']);
</script>

<style scoped>
/* 
  将主页面中所有与 "课程内容区域" 相关的样式都剪切到这里。
*/
.course-content-area {
  margin-top: 40px;
}

.outline-sidebar-area {
  margin-top: 40px;
}

.course-details-section {
  margin-bottom: 0;
}

.tab-section-title {
  font-size: 18px;
  font-weight: 600;
  margin: 25px 0 15px;
  color: var(--el-text-color-primary);
  border-left: 3px solid var(--el-color-primary);
  padding-left: 10px;
}

.tab-content-text {
  font-size: 15px;
  line-height: 1.8;
  color: var(--el-text-color-regular);
}

:deep(.el-tabs__header) {
  margin-bottom: 25px;
}

:deep(.el-tabs__item) {
  font-size: 16px;
  font-weight: 500;
}

.learning-goals {
  display: flex;
  gap: 30px;
}

.learning-goals-list {
  list-style: none;
  padding-left: 0;
  margin: 0;
  flex: 1;
}

.learning-goals-list li {
  display: flex;
  align-items: flex-start;
  gap: 8px;
  margin-bottom: 12px;
  color: var(--el-text-color-regular);
  line-height: 1.6;
}

.learning-goals-list .el-icon {
  color: var(--el-color-primary);
  margin-top: 4px;
}

.skills-tags {
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
}

.extra-info {
  display: flex;
  gap: 40px;
  margin-top: 15px;
}

.info-item {
  display: flex;
  align-items: center;
  gap: 12px;
}

.info-icon {
  font-size: 24px;
  color: var(--el-text-color-secondary);
}

.info-text p {
  margin: 0;
  line-height: 1.4;
}

.info-label {
  font-size: 13px;
  color: var(--el-text-color-secondary);
}

.info-value {
  font-size: 15px;
  font-weight: 500;
  color: var(--el-text-color-primary);
}

.sidebar-card {
  border: 1px solid var(--el-border-color-lighter);
  margin-bottom: 20px;
  --el-card-padding: 20px;
}

.sidebar-card .card-header {
  font-size: 16px;
  font-weight: 600;
}

.instructor-sidebar,
.provider-info {
  display: flex;
  align-items: center;
  gap: 15px;
}

.instructor-name-details {
  font-weight: 500;
  margin: 0;
}

.provider-logo {
  background-color: var(--el-color-primary);
  color: white;
  font-weight: bold;
  font-size: 14px;
}

.course-outline-container {
  background-color: #f8f9fa;
  border-radius: 8px;
  padding: 25px;
}

.section-title-sub {
  font-size: 22px;
  font-weight: 600;
  margin-bottom: 20px;
  margin-top: 0;
}

.course-outline-collapse {
  border: none;
}

:deep(.el-collapse-item) {
  margin-bottom: 10px;
}

:deep(.el-collapse-item__header) {
  padding: 15px;
  height: auto;
  line-height: normal;
  background-color: #ffffff;
  border: 1px solid var(--el-border-color-lighter);
  border-radius: 4px;
  transition: border-radius 0.3s;
}

:deep(.el-collapse-item.is-active .el-collapse-item__header) {
  border-bottom-color: transparent;
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
}

:deep(.el-collapse-item__wrap) {
  background-color: #ffffff;
  border: 1px solid var(--el-border-color-lighter);
  border-top: none;
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
}

:deep(.el-collapse-item__content) {
  padding: 0;
}

.custom-collapse-header {
  display: flex;
  align-items: center;
  gap: 15px;
}

.collapse-thumb {
  width: 90px;
  height: 55px;
  border-radius: 4px;
  flex-shrink: 0;
}

.collapse-title-section {
  flex-grow: 1;
}

.collapse-title {
  font-size: 16px;
  font-weight: 600;
  margin: 0 0 5px 0;
  color: var(--el-text-color-primary);
}

.collapse-duration {
  font-size: 13px;
  color: var(--el-text-color-secondary);
  margin: 0;
}

.collapse-content-wrapper {
  padding: 20px 25px;
}

.sub-chapter-block {
  margin-bottom: 20px;
}

.sub-chapter-block:last-child {
  margin-bottom: 0;
}

.sub-chapter-title {
  font-weight: 600;
  font-size: 15px;
  color: var(--el-text-color-primary);
  margin: 0 0 12px 0;
}

.section-links {
  display: flex;
  flex-wrap: wrap;
  gap: 10px 25px;
}

.section-link {
  font-size: 14px;
}

.load-more-container-outline {
  text-align: left;
  margin-top: 25px;
}
</style>