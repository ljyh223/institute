<template>
  <div class="page-container">
       <!-- 1. 顶部深灰色细条 -->
    <div class="top-black-bar"></div>
    <!-- 1. 模拟的全局头部 -->
    <HomePageHead/>

    <!-- 2. 主内容区 -->
    <el-main class="main-content">
      <div class="content-container">
        <!-- 面包屑导航 -->
        <el-breadcrumb separator=">" class="page-breadcrumb">
          <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
          <el-breadcrumb-item>我的</el-breadcrumb-item>
          <el-breadcrumb-item>团队管理</el-breadcrumb-item>
        </el-breadcrumb>

        <!-- 3. 表单主体 -->
        <el-form :model="form" label-position="top" class="space-form">
          <!-- 空间图片 -->
          <div class="section">
            <h2 class="section-title">空间图片</h2>
            <p class="section-subtitle">请上传空间图片</p>
            <div class="image-uploader-container">
              <el-image 
                src="https://fuss10.elemecdn.com/2/11/6535bcfb26e4c79b48ddde44f4b6fjpeg.jpeg" 
                fit="cover" 
                class="uploaded-image"
              />
              <el-upload
                action="#"
                :auto-upload="false"
                list-type="picture-card"
                :show-file-list="false"
              >
                <el-icon><CameraFilled /></el-icon>
              </el-upload>
            </div>
          </div>

          <!-- 空间信息 -->
          <div class="section">
            <h2 class="section-title">空间信息</h2>
            <p class="section-subtitle">请输入空间信息</p>
            <el-row :gutter="24">
              <el-col :xs="24" :sm="12">
                <el-form-item label="空间名称">
                  <el-input v-model="form.name" placeholder="请输入空间名称" />
                </el-form-item>
              </el-col>
              <el-col :xs="24" :sm="12">
                <el-form-item label="标签">
                  <!-- 自定义标签选择器 -->
                  <el-popover placement="bottom-start" :width="300" trigger="click">
                    <template #reference>
                      <el-input
                        v-model="form.tagsDisplay"
                        placeholder="请选择空间标签"
                        readonly
                        suffix-icon="ArrowDown"
                      />
                    </template>
                    <div class="tag-selector-popover">
                      <div class="tag-group">
                        <el-check-tag v-for="tag in tagOptions.group1" :key="tag" class="tag-item">{{ tag }}</el-check-tag>
                      </div>
                      <div class="tag-group">
                        <el-check-tag v-for="tag in tagOptions.group2" :key="tag" checked class="tag-item">{{ tag }}</el-check-tag>
                      </div>
                      <div class="popover-footer">
                        <el-button>返回</el-button>
                        <el-button type="primary">同意</el-button>
                      </div>
                    </div>
                  </el-popover>
                </el-form-item>
              </el-col>
              <el-col :span="24">
                <el-form-item label="简介">
                  <el-input v-model="form.description" type="textarea" :rows="3" placeholder="请输入空间简介" />
                </el-form-item>
              </el-col>
              <el-col :xs="24" :sm="12">
                <el-form-item label="地址">
                   <el-select v-model="form.address" placeholder="请输入空间地址" style="width: 100%;">
                    <el-option label="地址一" value="addr1" />
                    <el-option label="地址二" value="addr2" />
                  </el-select>
                </el-form-item>
              </el-col>
              <el-col :xs="24" :sm="12">
                <el-form-item label="学习设施">
                  <!-- 自定义设施选择器 -->
                  <el-popover placement="bottom-start" :width="200" trigger="click">
                    <template #reference>
                      <el-input
                        v-model="form.facilitiesDisplay"
                        placeholder="请选择学习设施"
                        readonly
                        suffix-icon="ArrowDown"
                      />
                    </template>
                    <el-menu class="facilities-menu">
                       <template v-for="item in facilityOptions" :key="item.label">
                        <el-sub-menu v-if="item.children" :index="item.label">
                          <template #title><el-icon><component :is="item.icon" /></el-icon><span>{{ item.label }}</span></template>
                          <el-menu-item v-for="child in item.children" :key="child" :index="child">{{ child }}</el-menu-item>
                        </el-sub-menu>
                        <el-menu-item v-else :index="item.label">
                          <el-icon><component :is="item.icon" /></el-icon><span>{{ item.label }}</span>
                        </el-menu-item>
                      </template>
                    </el-menu>
                  </el-popover>
                </el-form-item>
              </el-col>
               <el-col :xs="24" :sm="12">
                <el-form-item label="选择时间">
                   <el-date-picker v-model="form.startDate" type="date" placeholder="请选择开始时间" style="width: 100%;" />
                </el-form-item>
              </el-col>
               <el-col :xs="24" :sm="12">
                 <el-form-item label="&nbsp;"> <!-- 占位符label -->
                   <el-date-picker v-model="form.endDate" type="date" placeholder="请选择结束时间" style="width: 100%;" />
                </el-form-item>
              </el-col>
              <el-col :span="24">
                 <el-checkbox v-model="form.holidayOpen" label="节假日开放 (包含周六、周日)" />
              </el-col>
               <el-col :span="24">
                <el-form-item label="价格">
                  <el-checkbox-group v-model="form.priceType">
                    <el-checkbox label="付费" name="price" />
                    <el-checkbox label="免费" name="price" />
                  </el-checkbox-group>
                </el-form-item>
              </el-col>
            </el-row>
          </div>

          <!-- 4. 操作按钮 -->
          <el-form-item>
            <el-button type="primary">保存</el-button>
            <el-button>
              <el-icon style="margin-right: 4px;"><Plus /></el-icon>
              添加时间段
            </el-button>
          </el-form-item>
        </el-form>
      </div>
    </el-main>
  </div>
</template>

<script setup>
import { reactive } from 'vue';
// [修复] 1. 将不存在的 'Wifi' 替换为正确的 'Connection'
import { 
  Search, Bell, CameraFilled, Plus, OfficeBuilding, Connection, Coffee, Dish, Help,
  Place, Sunset, Mug, Goblet, Opportunity, ForkSpoon, Refrigerator, User
} from '@element-plus/icons-vue';
import HomePageHead from '@/components/homepage/Head.vue';

// 表单数据模型 (UI占位)
const form = reactive({
  name: '',
  tags: [],
  tagsDisplay: '已选2个', // 仅为UI显示
  description: '',
  address: '',
  facilities: [],
  facilitiesDisplay: 'Wi-Fi, 茶歇', // 仅为UI显示
  startDate: '',
  endDate: '',
  holidayOpen: true,
  priceType: ['付费']
});

// 标签选项 (UI占位)
const tagOptions = {
  group1: ['2-5人小班', '技术答疑', '助教点评'],
  group2: ['安全救援', '证书认证', '器材租赁', '个人保险', '中国移动wifi']
};

// 设施选项 (UI占位)
const facilityOptions = [
  { label: '停车车位', icon: OfficeBuilding, children: ['免费停车', '收费停车'] },
  { label: 'Wi-Fi', icon: Connection }, // [修复] 2. 此处使用 Connection 替代 Wifi
  { label: '茶歇', icon: Coffee },
  { label: '西餐', icon: Dish },
  { label: '卫生间', icon: Help },
  { label: '空调', icon: Place },
  { label: '酒吧', icon: Sunset },
  { label: '饮料', icon: Mug },
  { label: '咖啡', icon: Goblet },
  { label: '健身', icon: Opportunity },
  { label: '无障碍', icon: User },
  { label: '早餐', icon: ForkSpoon },
  { label: '冰箱', icon: Refrigerator }
];

</script>

<style scoped>
/* --- 全局与头部 --- */
.page-container {
  background-color: #fff;
}
.content-container { 
  max-width: 1200px; 
  margin: 0 auto; 
  padding: 0 20px; 
}

.top-black-bar { 
  width: 100%; 
  height: 30px; 
  background-color:rgba(56, 56, 56, 1); 
}

.logo-area { display: flex; align-items: center; }
.logo-text { font-size: 20px; font-weight: bold; color: var(--el-color-primary); margin-right: 10px; }
.search-area { flex-grow: 1; max-width: 400px; margin: 0 40px; }
.user-area { display: flex; align-items: center; gap: 15px; }

.user-icon { font-size: 20px; }

/* --- 主内容区 --- */
.main-content {
  padding: 20px 0;
}
.page-breadcrumb {
  margin-bottom: 24px;
}
.space-form {
  max-width: 900px; /* 限制表单最大宽度，提升PC端可读性 */
}

/* --- Section 通用样式 --- */
.section {
  margin-bottom: 32px;
}
.section-title {
  font-size: 18px;
  font-weight: 500;
  color: var(--el-text-color-primary);
  margin: 0;
}
.section-subtitle {
  font-size: 14px;
  color: var(--el-text-color-secondary);
  margin: 4px 0 20px 0;
}

/* --- 图片上传 --- */
.image-uploader-container {
  display: flex;
  gap: 16px;
  align-items: center;
}
.uploaded-image {
  width: 148px;
  height: 148px;
  border-radius: var(--el-border-radius-base);
}
:deep(.el-upload--picture-card) {
  width: 148px;
  height: 148px;
  background-color: #f5f7fa;
}

/* --- 表单元素 --- */
:deep(.el-form-item__label) {
  font-weight: 500;
  color: var(--el-text-color-primary);
}

/* --- 自定义选择器 Popover --- */
.tag-selector-popover, .facilities-menu {
  padding: 8px;
}
.tag-group {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  padding: 8px;
}
.tag-group:not(:last-child) {
  margin-bottom: 8px;
}
.tag-item {
  cursor: pointer;
}
.popover-footer {
  display: flex;
  justify-content: flex-end;
  padding: 8px;
  border-top: 1px solid var(--el-border-color-light);
  margin-top: 8px;
}
.facilities-menu {
  border-right: none;
}

/* 覆盖 input readonly 样式使其看起来像 select */
:deep(.el-input.is-readonly) .el-input__inner {
  cursor: pointer;
}

/* 移动端适配 */
@media (max-width: 768px) {
  .header-content {
    flex-wrap: wrap;
    height: auto;
    padding: 10px 0;
  }
  .search-area {
    order: 3; /* 换行 */
    width: 100%;
    max-width: 100%;
    margin: 10px 0 0 0;
  }
}
</style>