<template>
    <div class="course-player-page">
        <!-- 1. 模拟的全局头部 (无变化) -->
        <header class="page-header">
            <div class="header-content content-container">
                <div class="logo-area">
                    <span class="logo-text">学会</span>
                    <el-button class="ai-button" plain size="small">AI 探索 <el-icon>
                            <Right />
                        </el-icon></el-button>
                </div>
                <div class="search-area hidden-sm-and-down">
                    <el-input placeholder="What do you want learn?">
                        <template #suffix>
                            <el-icon class="el-input__icon">
                                <Search />
                            </el-icon>
                        </template>
                    </el-input>
                </div>
                <div class="user-area">
                    <el-icon class="user-icon">
                        <Bell />
                    </el-icon>
                    <el-avatar :size="32" src="https://i.pravatar.cc/40?u=user" />
                </div>
            </div>
        </header>

        <!-- 2. 主布局 (无变化) -->
        <el-container class="main-layout-container content-container">
            <el-aside v-if="isSidebarOpen" width="320px" class="course-sidebar">
                <div class="sidebar-toggle-header">
                    <el-button text class="menu-toggle-button" @click="toggleSidebar">
                        <el-icon>
                            <Menu />
                        </el-icon>
                        <span class="toggle-text">隐藏菜单</span>
                    </el-button>
                </div>
                <div class="sidebar-content">
                    <p class="sidebar-intro-text">开始我们的学习之旅吧</p>
                    <el-scrollbar class="lesson-list-scrollbar">
                        <div class="lesson-list">
                            <div v-for="lesson in lessons" :key="lesson.id" class="lesson-item"
                                :class="{ 'is-active': activeLessonId === lesson.id }"
                                @click="setActiveLesson(lesson.id)">
                                <div class="active-indicator"></div>
                                <el-icon class="lesson-icon">
                                    <VideoPlay />
                                </el-icon>
                                <div class="lesson-info">
                                    <p class="lesson-title">{{ lesson.title }}</p>
                                    <span class="lesson-duration">{{ lesson.duration }}</span>
                                </div>
                            </div>
                        </div>
                    </el-scrollbar>
                </div>
            </el-aside>

            <!-- 右侧主内容区 (HTML部分无变化) -->
            <el-main class="course-main-content">
                <div class="main-content-header">
                    <el-button v-if="!isSidebarOpen" text class="menu-toggle-button" @click="toggleSidebar">
                        <el-icon>
                            <Menu />
                        </el-icon> 打开菜单
                    </el-button>
                    <el-breadcrumb separator=">" class="page-breadcrumb">
                        <el-breadcrumb-item>微软Power BI数据</el-breadcrumb-item>
                        <el-breadcrumb-item>第一单元: 从0-1基础跟练</el-breadcrumb-item>
                        <el-breadcrumb-item>
                            <span class="breadcrumb-active">第一节: 初步认识</span>
                        </el-breadcrumb-item>
                    </el-breadcrumb>
                </div>

                <div class="video-player-container">
                    <el-image src="https://fuss10.elemecdn.com/0/6f/e35ff375812e6b0020b6b4e8f9583jpeg.jpeg" fit="cover"
                        class="video-placeholder-image" />
                </div>

                <el-card shadow="never" class="info-card">
                    <div class="custom-tabs-header">
                        <el-tabs v-model="activeTab" class="info-tabs">
                            <!-- 所有 el-tab-pane 保持不变 -->
                            <el-tab-pane label="字幕" name="subtitles"></el-tab-pane>
                            <el-tab-pane label="笔记" name="notes"></el-tab-pane>
                            <el-tab-pane label="下载" name="downloads"></el-tab-pane>
                        </el-tabs>

                        <el-button v-if="isSidebarOpen" text @click="openScreenshotPanel">
                            <el-icon>
                                <Camera />
                            </el-icon>
                            <span>截屏</span>
                        </el-button>
                    </div>

                    <div class="custom-tabs-content">
                        <div v-if="activeTab === 'subtitles'" class="subtitles-content">
                            <div v-for="(line, index) in subtitles" :key="index" class="subtitle-line">
                                <span class="timestamp">{{ line.time }}</span>
                                <p class="text">{{ line.text }}</p>
                            </div>
                        </div>
                        <div v-if="activeTab === 'notes'" class="notes-content">
                            <el-scrollbar class="notes-scrollbar">
                                <div class="notes-list">
                                    <div v-for="note in notesData" :key="note.id" class="note-item">
                                        <div class="note-meta">
                                            <h4 class="note-title">{{ note.title }}</h4>
                                            <span class="note-date">{{ note.date }}</span>
                                        </div>
                                        <div class="note-thumbnail">
                                            <el-image :src="note.thumbnail" fit="cover" class="thumbnail-image" />
                                            <div class="play-overlay">
                                                <el-icon>
                                                    <VideoPlay />
                                                </el-icon>
                                            </div>
                                            <span class="duration-tag">{{ note.duration }}</span>
                                        </div>
                                        <p class="note-description">{{ note.description }}</p>
                                    </div>
                                </div>
                            </el-scrollbar>
                        </div>
                        <div v-if="activeTab === 'downloads'" class="downloads-content">
                            <div class="empty-state">暂无可下载内容。</div>
                        </div>
                    </div>
                </el-card>

                <el-drawer v-model="screenshotPanelOpen" direction="rtl" size="400px" :with-header="false"
                    custom-class="screenshot-drawer">
                    <div class="screenshot-panel">
                        <h3 class="panel-title">添加笔记</h3>
                        <div class="screenshot-preview">
                            <el-image src="https://fuss10.elemecdn.com/0/6f/e35ff375812e6b0020b6b4e8f9583jpeg.jpeg"
                                fit="cover" class="preview-image" />
                            <div class="preview-overlay">
                                <span class="time-tag">04:23</span>
                            </div>
                        </div>
                        <el-input v-model="screenshotNote" type="textarea" placeholder="请输入你的笔记..." :rows="6"
                            class="note-input" />
                        <div class="panel-actions">
                            <el-button @click="screenshotPanelOpen = false">取消</el-button>
                            <el-button type="primary" @click="confirmScreenshotNote">确认</el-button>
                        </div>
                    </div>
                </el-drawer>
            </el-main>
        </el-container>
    </div>
</template>

<script setup>
// Script 部分无任何变化
import { ref } from 'vue';
import { ElMessage } from 'element-plus';
import { Right, Search, Bell, Menu, VideoPlay, Camera } from '@element-plus/icons-vue';

const isSidebarOpen = ref(true);
const activeTab = ref('notes');
const activeLessonId = ref(1);
const screenshotPanelOpen = ref(false);
const screenshotNote = ref('');

const toggleSidebar = () => { isSidebarOpen.value = !isSidebarOpen.value; };
const subtitles = ref([
    { time: '0:00', text: '这门课程给我带来了远超预期的收获。...' },
    { time: '0:20', text: '授课老师对知识点的讲解深入浅出...' },
]);
const lessons = ref(
    Array.from({ length: 10 }).map((_, i) => ({
        id: i + 1,
        title: '视频: 微软 Power BI 数据微软 Power BI 数据',
        duration: `${i + 2}min`,
    }))
);
const notesData = ref(
    Array.from({ length: 5 }).map((_, i) => ({
        id: i,
        title: `课程小节笔记-${i + 1}`,
        date: '25.06.17 14:17',
        thumbnail: `https://picsum.photos/seed/${i + 1}/300/169`,
        duration: `+04:23`,
        description: '这门课程给我带来了远超预期的收获。授课老师对知识点的讲解深入浅出，总能用生动的案例把抽象概念拆解得清晰易懂...'
    }))
);

const openScreenshotPanel = () => {
    screenshotPanelOpen.value = true;
    screenshotNote.value = '';
};
const confirmScreenshotNote = () => {
    if (!screenshotNote.value.trim()) {
        ElMessage.warning('请输入笔记内容');
        return;
    }
    const currentTime = '04:23';
    const newNote = {
        id: Date.now(),
        title: '截图笔记',
        date: new Date().toLocaleDateString('zh-CN').replace(/\//g, '.') + ' ' + new Date().toLocaleTimeString('zh-CN', { hour12: false }),
        thumbnail: 'https://fuss10.elemecdn.com/0/6f/e35ff375812e6b0020b6b4e8f9583jpeg.jpeg',
        duration: `+${currentTime}`,
        description: screenshotNote.value.trim(),
    };
    notesData.value.unshift(newNote);
    activeTab.value = 'notes';
    screenshotPanelOpen.value = false;
};
const setActiveLesson = (lessonId) => {
    activeLessonId.value = lessonId;
};
</script>

<style scoped>
/* 所有样式均无变化，除了在 :deep(.el-tabs__header) 中添加了关键的几行 */
.course-player-page {
    background-color: #fff;
    min-height: 100vh;
}

.content-container {
    max-width: 1600px;
    margin: 0 auto;
    padding: 0 24px;
}

.page-header {
    background-color: #fff;
    border-bottom: 1px solid var(--el-border-color-light);
}

.header-content {
    display: flex;
    align-items: center;
    height: 60px;
}

.logo-area {
    display: flex;
    align-items: center;
}

.logo-text {
    font-size: 20px;
    font-weight: bold;
    color: var(--el-color-primary);
    margin-right: 10px;
}

.search-area {
    flex-grow: 1;
    max-width: 400px;
    margin: 0 40px;
}

.user-area {
    display: flex;
    align-items: center;
    gap: 15px;
}

.user-icon {
    font-size: 20px;
}

.main-layout-container {
    padding-top: 24px;
    align-items: flex-start;
}

.course-sidebar {
    background-color: var(--el-bg-color-page);
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    overflow: hidden;
    margin-right: 24px;
    transition: all 0.3s ease;
}

.sidebar-toggle-header {
    padding: 8px;
    flex-shrink: 0;
    border-bottom: 1px solid var(--el-border-color-light);
}

.toggle-text {
    margin-left: 8px;
}

.sidebar-content {
    padding: 0 8px;
    flex-grow: 1;
    overflow: hidden;
}

.sidebar-intro-text {
    padding: 16px 8px 8px;
    font-size: 14px;
    color: var(--el-text-color-secondary);
}

.lesson-list-scrollbar {
    flex-grow: 1;
}

.lesson-list {
    padding: 0 0 16px 0;
}

.lesson-item {
    display: flex;
    align-items: center;
    padding: 12px;
    border-radius: 4px;
    cursor: pointer;
    position: relative;
    transition: background-color 0.2s;
}

.lesson-item:hover {
    background-color: var(--el-color-primary-light-9);
}

.active-indicator {
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    width: 4px;
    height: 0;
    background-color: var(--el-color-primary);
    border-radius: 2px;
    transition: height 0.3s;
}

.lesson-icon {
    font-size: 18px;
    color: var(--el-text-color-secondary);
    margin-right: 12px;
}

.lesson-info {
    flex-grow: 1;
    overflow: hidden;
    white-space: nowrap;
}

.lesson-title {
    font-size: 14px;
    color: var(--el-text-color-primary);
    line-height: 1.5;
    margin: 0 0 4px 0;
    overflow: hidden;
    text-overflow: ellipsis;
}

.lesson-duration {
    font-size: 12px;
    color: var(--el-text-color-secondary);
}

.lesson-item.is-active {
    background-color: var(--el-color-primary-light-9);
}

.lesson-item.is-active .active-indicator {
    height: 60%;
}

.lesson-item.is-active .lesson-title {
    color: var(--el-color-primary);
    font-weight: 500;
}

.course-main-content {
    padding: 0;
}

.main-content-header {
    display: flex;
    align-items: center;
    gap: 16px;
    margin-bottom: 20px;
}

.menu-toggle-button {
    width: auto;
    justify-content: flex-start;
    font-size: 14px;
    font-weight: 500;
    color: var(--el-text-color-primary);
    flex-shrink: 0;
}

.page-breadcrumb {
    flex: 1;
    min-width: 0;
}

:deep(.el-breadcrumb__item .el-breadcrumb__inner) {
    color: var(--el-color-primary);
    font-weight: 500;
    cursor: pointer;
}

:deep(.el-breadcrumb__item .el-breadcrumb__inner:hover) {
    color: var(--el-color-primary-light-3);
}

.breadcrumb-active {
    color: var(--el-text-color-regular);
    font-weight: normal;
    cursor: text;
}

.video-player-container {
    width: 100%;
    aspect-ratio: 16 / 9;
    background-color: #000;
    border-radius: 4px;
    overflow: hidden;
    margin-bottom: 24px;
}

.video-placeholder-image {
    width: 100%;
    height: 100%;
}

.info-card {
    border: none;
    background-color: var(--el-bg-color-page);
    border-radius: 4px;
}

:deep(.el-card__body) {
    padding: 0;
}

.subtitles-content {
    padding: 24px 20px;
    font-size: 14px;
}

.subtitle-line {
    display: flex;
    gap: 24px;
    line-height: 1.8;
}

.subtitle-line:not(:last-child) {
    margin-bottom: 16px;
}

.timestamp {
    color: var(--el-text-color-secondary);
}

.text {
    color: var(--el-text-color-regular);
    margin: 0;
}

.empty-state {
    padding: 40px 20px;
    text-align: center;
    color: var(--el-text-color-secondary);
}

.notes-content {
    padding: 0 20px 20px;
}

.notes-scrollbar {
    height: 400px;
}

.notes-list {
    padding-right: 16px;
}

.note-item {
    display: flex;
    align-items: center;
    gap: 24px;
    padding: 20px 0;
    border-top: 1px solid var(--el-border-color-light);
}

.note-meta {
    flex-shrink: 0;
    width: 150px;
}

.note-title {
    font-size: 14px;
    font-weight: 500;
    color: var(--el-text-color-primary);
    margin: 0 0 4px 0;
}

.note-date {
    font-size: 13px;
    color: var(--el-text-color-secondary);
}

.note-thumbnail {
    flex-shrink: 0;
    width: 180px;
    aspect-ratio: 16 / 9;
    border-radius: 4px;
    overflow: hidden;
    position: relative;
    cursor: pointer;
}

.thumbnail-image {
    width: 100%;
    height: 100%;
}

.play-overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.3);
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
    font-size: 32px;
    opacity: 0;
    transition: opacity 0.3s;
}

.note-thumbnail:hover .play-overlay {
    opacity: 1;
}

.duration-tag {
    position: absolute;
    bottom: 8px;
    left: 8px;
    background-color: rgba(0, 0, 0, 0.6);
    color: #fff;
    font-size: 12px;
    padding: 2px 6px;
    border-radius: 4px;
}

.note-description {
    flex-grow: 1;
    font-size: 14px;
    line-height: 1.7;
    color: var(--el-text-color-regular);
    margin: 0;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
}

.screenshot-panel {
    height: 100%;
    display: flex;
    flex-direction: column;
}

.panel-title {
    font-size: 18px;
    font-weight: 600;
    margin-bottom: 20px;
    color: var(--el-text-color-primary);
}

.screenshot-preview {
    position: relative;
    width: 100%;
    aspect-ratio: 16 / 9;
    border-radius: 4px;
    overflow: hidden;
    margin-bottom: 20px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.preview-image {
    width: 100%;
    height: 100%;
}

.preview-overlay {
    position: absolute;
    bottom: 8px;
    left: 8px;
}

.time-tag {
    background-color: rgba(0, 0, 0, 0.6);
    color: white;
    padding: 2px 6px;
    border-radius: 4px;
    font-size: 12px;
}

.note-input {
    margin-bottom: 20px;
}

.panel-actions {
    display: flex;
    justify-content: flex-end;
    gap: 12px;
    margin-top: auto;
}

:deep(.screenshot-drawer .el-drawer__body) {
    padding: 20px !important;
}

.info-card {
    border: none;
    background-color: var(--el-bg-color-page);
    border-radius: 4px;
}

.custom-tabs-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px;
    border-bottom: 1px solid var(--el-border-color-light);
}

.info-tabs {
    /* 移除 el-tabs 自己的下边框，因为我们的容器已经有了 */
    --el-tabs-header-height: 50px;
    /* 可以根据需要调整高度 */
}

:deep(.info-tabs .el-tabs__header) {
    margin: 0;
}

:deep(.info-tabs .el-tabs__nav-wrap::after) {
    display: none;
}

.custom-tabs-content {
    padding: 20px;
}

.subtitles-content {
    padding: 0;
}

.notes-content {
    padding: 0;
}

.downloads-content {
    padding: 0;
}


@media (max-width: 992px) {
    .course-sidebar {
        display: none;
    }
}
</style>