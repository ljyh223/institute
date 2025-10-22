<template> 
    <div class="top-bar"></div>
    <HomePageHead/>
  <el-container class="page-container">

    <!-- 主体内容 -->
    <el-main class="page-main">
      <el-breadcrumb :separator-icon="ArrowRight" class="page-breadcrumb">
        <el-breadcrumb-item :to="{ path: '#' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item :to="{ path: '#' }">个人中心</el-breadcrumb-item>
        <el-breadcrumb-item>创建小组</el-breadcrumb-item>
      </el-breadcrumb>
      
      <div class="form-wrapper">
        <div class="user-profile">
          <el-avatar :size="80" src="https://images.unsplash.com/photo-1501785888041-af3ef285b470?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%D%D&auto=format&fit=crop&w=2070&q=80" />
          <div class="user-details">
            <h2 class="user-name">WHISPHER</h2>
            <p class="user-intro">简介: 1238905690</p>
          </div>
        </div>

        <!-- 创建小组表单 -->
        <el-form :model="form" :label-position="labelPosition" label-width="80px" class="create-group-form">
          <el-row :gutter="24">
            <!-- 名称 -->
            <el-col :xs="24" :sm="12">
              <el-form-item label="名称">
                <el-input v-model="form.name" placeholder="请输入小组名称" />
              </el-form-item>
            </el-col>
            
            <!-- 标签 -->
            <el-col :xs="24" :sm="12">
              <el-form-item label="标签">
                <el-input
                  v-model="form.tag.label"
                  placeholder="请选择小组标签"
                  readonly
                  class="input-as-button"
                  @click="openTagSelector"
                />
              </el-form-item>
            </el-col>

            <!-- 简介 -->
            <el-col :span="24">
              <el-form-item label="简介">
                <el-input
                  v-model="form.description"
                  type="textarea"
                  :rows="3"
                  placeholder="请输入简介"
                />
              </el-form-item>
            </el-col>

            <!-- 成员 -->
            <el-col :xs="24" :sm="12">
              <el-form-item label="成员">
                 <el-input
                  :model-value="form.members.length ? `${form.members.length} 位成员已选择` : ''"
                  placeholder="请选择成员"
                  readonly
                  class="input-as-button"
                  @click="openMemberSelector"
                />
              </el-form-item>
            </el-col>

            <!-- 操作按钮 -->
            <el-col :span="24">
               <el-form-item label=" ">
                <el-button type="primary">立即创建</el-button>
                <el-button>取消</el-button>
              </el-form-item>
            </el-col>
          </el-row>
        </el-form>
      </div>
    </el-main>

    <!-- ===================================================== -->
    <!-- 选择成员 Dialog -->
    <!-- ===================================================== -->
    <el-dialog v-model="memberDialogVisible" title="选择成员" width="400px" center :show-close="false">
      <div class="selector-body">
        <el-input v-model="memberSearchQuery" placeholder="搜索" :prefix-icon="Search" class="search-input" />
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
        <span class="dialog-footer">
          <el-button @click="memberDialogVisible = false">返回</el-button>
          <el-button type="primary" @click="handleMemberConfirm">同意</el-button>
        </span>
      </template>
    </el-dialog>

    <!-- ===================================================== -->
    <!-- 选择标签 Dialog -->
    <!-- ===================================================== -->
    <el-dialog v-model="tagDialogVisible" title="选择标签" width="480px" center :show-close="false">
      <div class="tag-grid">
        <el-button
          v-for="tag in tagList"
          :key="tag.value"
          :type="tempSelectedTag === tag.value ? 'primary' : ''"
          :plain="tempSelectedTag === tag.value"
          @click="tempSelectedTag = tag.value"
          class="tag-button"
        >
          {{ tag.label }}
        </el-button>
      </div>
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="tagDialogVisible = false">返回</el-button>
          <el-button type="primary" @click="handleTagConfirm">同意</el-button>
        </span>
      </template>
    </el-dialog>

  </el-container>
</template>

<script setup>
import { ref, reactive, onMounted, onBeforeUnmount } from 'vue';
import { Search, Bell, ArrowRight } from '@element-plus/icons-vue';
import HomePageHead from '@/components/homepage/Head.vue';

// --- 主页面表单数据 ---
const form = reactive({
  name: '',
  tag: { label: '', value: '' },
  description: '',
  members: [],
});

// --- 响应式布局状态 ---
const labelPosition = ref('left');
const checkResize = () => {
  labelPosition.value = window.innerWidth < 768 ? 'top' : 'left';
};

// --- 选择成员 Dialog 相关状态和逻辑 ---
const memberDialogVisible = ref(false);
const memberSearchQuery = ref('');
const tempSelectedMembers = ref([]);
const memberList = ref([
  { id: 1, name: '陈都灵', avatar: 'https://randomuser.me/api/portraits/women/68.jpg' },
  { id: 2, name: '陈都灵', avatar: 'https://randomuser.me/api/portraits/women/69.jpg' },
  { id: 3, name: '陈都灵', avatar: 'https://randomuser.me/api/portraits/women/70.jpg' },
  { id: 4, name: '陈都灵', avatar: 'https://randomuser.me/api/portraits/women/71.jpg' },
  { id: 5, name: '陈都灵', avatar: 'https://randomuser.me/api/portraits/women/72.jpg' },
]);

const openMemberSelector = () => {
  // 打开弹窗时，用表单的当前值初始化弹窗内的临时选项
  tempSelectedMembers.value = [...form.members];
  memberDialogVisible.value = true;
};

const handleMemberConfirm = () => {
  // 确认时，将弹窗内的临时选项同步回表单
  form.members = tempSelectedMembers.value;
  memberDialogVisible.value = false;
};

// --- 选择标签 Dialog 相关状态和逻辑 ---
const tagDialogVisible = ref(false);
const tempSelectedTag = ref('');
const tagList = ref([
  { label: '艺术人文', value: 'art' },
  { label: '经济金融', value: 'finance' },
  { label: '健康时尚', value: 'health' },
  { label: '职业教育', value: 'career' },
  { label: '自然科学', value: 'science' },
  { label: '基础教育', value: 'basic' },
  { label: '高等教育', value: 'higher' },
  { label: '个人发展', value: 'develop' },
  { label: '兴趣爱好', value: 'hobby' },
]);

const openTagSelector = () => {
  tempSelectedTag.value = form.tag.value;
  tagDialogVisible.value = true;
};

const handleTagConfirm = () => {
  const selectedTagObject = tagList.value.find(t => t.value === tempSelectedTag.value);
  if (selectedTagObject) {
    form.tag = selectedTagObject;
  }
  tagDialogVisible.value = false;
};

// --- 生命周期钩子 ---
onMounted(() => {
  checkResize();
  window.addEventListener('resize', checkResize);
});

onBeforeUnmount(() => {
  window.removeEventListener('resize', checkResize);
});
</script>

<style scoped>
/* --- 全局和主页面样式 --- */
.page-container { background-color: #f9fafb; min-height: 100vh; }
.top-bar { width: 100%; height: 30px; background: rgba(56, 56, 56, 1); position: sticky; top: 0; z-index: 1001;}
.page-main { padding: 20px; display: flex; flex-direction: column; align-items: center; }
.page-breadcrumb, .form-wrapper { width: 100%; max-width: 900px; }
.page-breadcrumb { margin-bottom: 20px; }
.form-wrapper { background-color: #ffffff; padding: 40px; border-radius: var(--el-border-radius-base); border: 1px solid var(--el-border-color-light); }
.user-profile { display: flex; align-items: center; margin-bottom: 40px; }
.user-details { margin-left: 20px; }
.user-name { font-size: 1.5rem; font-weight: 600; color: var(--el-text-color-primary); margin: 0; }
.user-intro { font-size: 0.9rem; color: var(--el-text-color-secondary); margin: 4px 0 0; }
.create-group-form :deep(.el-form-item) { margin-bottom: 22px; }
.create-group-form :deep(.el-form-item__label) { justify-content: flex-start; }
.input-as-button { cursor: pointer; }
.input-as-button :deep(.el-input__inner) { cursor: pointer; }

/* --- 选择成员 Dialog 样式 --- */
.selector-body { padding: 0 10px; }
.search-input { margin-bottom: 24px; }
.list-title { color: var(--el-text-color-secondary); font-size: 14px; margin-bottom: 12px; }
.member-list { display: flex; flex-direction: column; }
.member-list .el-checkbox { display: flex; align-items: center; height: auto; padding: 8px 0; width: 100%; }
.member-list :deep(.el-checkbox__label) { width: 100%; }
.member-item { display: flex; align-items: center; gap: 12px; }
.member-name { color: var(--el-text-color-primary); }
.dialog-footer .el-button { min-width: 100px; }

/* --- 选择标签 Dialog 样式 --- */
.tag-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 16px; padding: 10px; }
.tag-button { width: 100%; height: 40px; margin: 0; }

/* --- 响应式适配 --- */
@media (max-width: 768px) {
  .search-area { display: none; }
  .page-header { padding: 0 16px; }
  .page-main { padding: 16px; }
  .form-wrapper { padding: 24px 16px; border: none; background-color: transparent; }
}
</style>