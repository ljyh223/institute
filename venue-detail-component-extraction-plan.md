# VenueDetail 页面组件提取计划

## 分析结果

基于对 VenueDetail.vue 页面的分析，以及与现有组件的对比，确定以下组件提取方案：

### 已有组件（可直接使用）
1. **Head.vue** - 页面头部组件
2. **BottomBar.vue** - 页面底部组件
3. **HomePageVenue.vue** - 场馆卡片列表组件
4. **InterestClass1.vue** - 课程卡片列表组件

### 需要提取的新组件
1. **SharedSpaces.vue** - 共享空间卡片列表（水平滚动）
2. **LearningEnvironments.vue** - 学习环境图片选择器

### 不需要提取的部分
根据用户反馈，以下部分不需要提取为组件：
- 场馆信息（VenueBanner）
- 设施服务（AmenitiesBar）
- 机构简介（InstitutionIntro）

## 组件详细设计

### 1. SharedSpaces 组件

**功能**：展示共享空间的水平滚动卡片列表

**Props**：
- `spaces`: Array - 空间数据数组
  - `id`: Number - 空间ID
  - `name`: String - 空间名称
  - `image`: String - 空间图片URL

**Events**：
- `click`: Function - 点击空间卡片时触发，参数为空间ID
- `more`: Function - 点击"查看更多"按钮时触发

**样式特点**：
- 水平滚动容器
- 固定宽度的卡片
- 悬停效果
- 响应式设计

**代码结构**：
```vue
<template>
  <div class="shared-spaces-container">
    <div class="space-items-container">
      <div v-for="space in spaces" :key="space.id" class="space-item-card" @click="handleClick(space.id)">
        <el-image :src="space.image" class="space-item-image" fit="cover" />
        <div class="space-item-info">
          <span class="space-item-name">{{ space.name }}</span>
          <el-button type="primary" text class="details-btn">查看详情</el-button>
        </div>
      </div>
    </div>
    <div class="load-more-container" @click="$emit('more')">
      <el-button type="primary" size="large">查看更多</el-button>
    </div>
  </div>
</template>
```

### 2. LearningEnvironments 组件

**功能**：展示学习环境的可选择图片列表

**Props**：
- `environments`: Array - 环境数据数组
  - `id`: Number - 环境ID
  - `name`: String - 环境名称
  - `image`: String - 环境图片URL
  - `selected`: Boolean - 是否选中

**Events**：
- `select`: Function - 选择环境时触发，参数为环境ID
- `more`: Function - 点击"查看更多"按钮时触发

**样式特点**：
- 网格布局
- 可选中状态
- 悬停效果
- 选中状态边框高亮

**代码结构**：
```vue
<template>
  <div class="learning-environments-container">
    <el-row :gutter="24">
      <el-col v-for="env in environments" :key="env.id" :xs="24" :sm="12" :md="8">
        <div class="env-card" :class="{ 'is-selected': env.selected }" @click="handleSelect(env.id)">
          <el-image :src="env.image" class="env-image" fit="cover"/>
          <div class="env-name-overlay">
            <span>{{ env.name }}</span>
          </div>
        </div>
      </el-col>
    </el-row>
    <div class="load-more-container" @click="$emit('more')">
      <el-button type="primary" size="large">查看更多</el-button>
    </div>
  </div>
</template>
```

## 重构后的 VenueDetail.vue 结构

```vue
<template>
  <div class="common-layout">
    <!-- 黑色顶部条 -->
    <div class="top-black-bar"></div>
    
    <el-container class="main-container">
      <!-- Header -->
      <HomePageHead />
      
      <!-- Main Content -->
      <el-main class="main-content">
        <div class="page-container">
          <!-- 面包屑导航 -->
          <el-breadcrumb :separator-icon="ArrowRight" class="page-breadcrumb">
            <!-- 面包屑内容 -->
          </el-breadcrumb>
          
          <!-- 场馆主 Banner -->
          <div class="venue-banner">
            <!-- 场馆信息内容（不提取） -->
          </div>
          
          <!-- 设施服务栏 -->
          <div class="amenities-section">
            <!-- 设施服务内容（不提取） -->
          </div>

          <!-- 机构简介 -->
          <div class="institution-intro-section">
            <!-- 机构简介内容（不提取） -->
          </div>
        </div>

        <!-- 您可能感兴趣的课程 -->
        <div class="page-section interested-courses-section">
          <h3 class="section-title">您可能感兴趣的课程</h3>
          <InterestClass1 :courses="interestedCourses" />
        </div>
        
        <!-- 共享的空间 -->
        <div class="page-section shared-spaces-section">
          <h3 class="section-title">共享的空间</h3>
          <SharedSpaces :spaces="sharedSpaces" @click="handleSpaceClick" @more="handleLoadMoreSpaces" />
        </div>

        <!-- 附近适合您的场馆 -->
        <div class="page-section nearby-venues-section">
          <h3 class="section-title">附近适合您的场馆</h3>
          <HomePageVenue :venues="nearbyVenues" />
        </div>

        <!-- 学习环境 -->
        <div class="page-section learning-environment-section">
          <h3 class="section-title">学习环境</h3>
          <LearningEnvironments :environments="learningEnvironments" @select="handleEnvSelect" @more="handleLoadMoreEnvs" />
        </div>
      </el-main>
    </el-container>
    
    <!-- Footer -->
    <BottomBar />
  </div>
</template>
```

## 实现步骤

1. 创建 SharedSpaces.vue 组件
2. 创建 LearningEnvironments.vue 组件
3. 重构 VenueDetail.vue 页面，使用已有组件和新提取的组件
4. 为新组件创建 Storybook 故事文件

## 注意事项

1. 保持组件的单一职责原则
2. 确保组件的 props 和 events 设计合理
3. 保持样式的一致性和响应式设计
4. 组件应该具有良好的可复用性