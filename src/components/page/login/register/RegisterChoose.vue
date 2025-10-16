<template>
  <div class="knowledge-selection-container">
    <div class="header">
      <h2 class="title">选择你感兴趣的知识</h2>
      <p class="description">为了创造出独属于您的学会，请您填写一下</p>
    </div>

    <div class="selection-grid">
      <el-row :gutter="20">
        <el-col :xs="12" :sm="8" :md="8" :lg="8" v-for="(item, index) in knowledgeOptions" :key="index">
          <div class="grid-item" :class="{ 'is-selected': item.selected }">
            <el-button :type="item.selected ? 'primary' : ''" plain class="knowledge-button">{{ item.label }}</el-button>
          </div>
        </el-col>
      </el-row>
    </div>

    <div class="footer">
      <el-button type="primary" class="complete-button">完成</el-button>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const knowledgeOptions = ref([
  { label: '艺术人文', selected: true },
  { label: '经济金融', selected: false },
  { label: '健康时尚', selected: false },
  { label: '职业教育', selected: true },
  { label: '自然科学', selected: false },
  { label: '基础教育', selected: false },
  { label: '高等教育', selected: true },
  { label: '个人发展', selected: false },
  { label: '兴趣爱好', selected: false },
]);

// 注意：这里只提供了UI，没有实现选择逻辑
</script>

<style scoped>
.knowledge-selection-container {
  width: 500px; /* 限制最大宽度，在PC端居中 */
  height: 700px;
  margin: 0 auto;
  padding: 20px;
  font-family: 'Helvetica Neue', Helvetica, 'PingFang SC', 'Hiragino Sans GB', 'Microsoft YaHei', sans-serif;
  color: #303133; /* Element Plus 默认文本颜色 */
}

.header {
  text-align: center;
  margin-bottom: 40px;
}

.title {
  font-size: 28px;
  font-weight: bold;
  margin-bottom: 10px;
  color: #303133;
}

.description {
  font-size: 16px;
  color: #606266; /* Element Plus 辅助文本颜色 */
}

.selection-grid {
  margin-bottom: 40px;
}

.grid-item {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px; /* 控制行之间的间距 */
}

.knowledge-button {
  width: 100%;
  height: 50px;
  font-size: 16px;
  border-radius: 4px;
  border-color: #DCDFE6; /* 默认边框颜色 */
  color: #606266; /* 默认文本颜色 */
}

.knowledge-button.el-button--primary.is-plain {
  background-color: #ecf5ff; /* Element Plus primary plain 按钮的背景色 */
  border-color: #a0cfff; /* Element Plus primary plain 按钮的边框色 */
  color: #409eff; /* Element Plus primary plain 按钮的文本色 */
}

/* 适配手机端 */
@media (max-width: 767px) {
  .knowledge-selection-container {
    padding: 15px;
  }
  .title {
    font-size: 24px;
  }
  .description {
    font-size: 14px;
  }
  .header {
    margin-bottom: 30px;
  }
  .selection-grid {
    margin-bottom: 30px;
  }
  .knowledge-button {
    height: 45px;
    font-size: 14px;
  }
}

/* 适配平板端 */
@media (min-width: 768px) and (max-width: 991px) {
  .knowledge-selection-container {
    padding: 25px;
  }
  .title {
    font-size: 26px;
  }
  .description {
    font-size: 15px;
  }
  .header {
    margin-bottom: 35px;
  }
  .selection-grid {
    margin-bottom: 35px;
  }
  .knowledge-button {
    height: 48px;
    font-size: 15px;
  }
}

.footer {
  text-align: center;
}

.complete-button {
  width: 100%;
  max-width: 300px; /* 限制完成按钮的最大宽度 */
  height: 50px;
  font-size: 18px;
  border-radius: 4px;
}
</style>