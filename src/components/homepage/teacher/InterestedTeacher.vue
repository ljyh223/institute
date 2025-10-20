<template>

  <div class="filter-bar">
    <div class="filter-options">
      <div class="filter-option">
        <span class="filter-label">领域:</span>
        <el-dropdown @command="selectField">
          <el-button plain>
            {{ activeField }}<el-icon class="el-icon--right"><arrow-down /></el-icon>
          </el-button>

          <template #dropdown>
            <el-dropdown-menu>
              <el-dropdown-item v-for="item in props.field" :key="item" :command="item">
                {{ item }}
              </el-dropdown-item>
            </el-dropdown-menu>
          </template>
        </el-dropdown>
      </div>
      <div class="filter-option">
        <span class="filter-label">排序:</span>
        <el-dropdown @command="selectSort">
          <el-button plain>
            {{ activeSort }}<el-icon class="el-icon--right"><arrow-down /></el-icon>
          </el-button>
          <template #dropdown>
            <el-dropdown-menu>
              <el-dropdown-item v-for="item in props.sort" :key="item" :command="item">{{ item }}</el-dropdown-item>
            </el-dropdown-menu>
          </template>
        </el-dropdown>
      </div>
      <div class="filter-option">
        <span class="filter-label">形式:</span>
        <el-dropdown @command="selectModality">
          <el-button plain>
            {{ activeModality }}<el-icon class="el-icon--right"><arrow-down /></el-icon>
          </el-button>
          <template #dropdown>
            <el-dropdown-menu>
              <el-dropdown-item v-for="item in props.modality" :key="item" :command="item">{{ item }}</el-dropdown-item>
            </el-dropdown-menu>
          </template>
        </el-dropdown>
      </div>
    </div>
    <div class="filter-search">
      <el-input placeholder="搜索" :prefix-icon="Search" />
    </div>
  </div>

  <!-- Teacher List -->
  <el-row :gutter="24">
    <el-col v-for="t in teachers" :key="t.id" :xs="24" :sm="12" :md="8">
      <TeacherCard :teacher="t" @click="id => $emit('click', id)" :showRate="props.showRate" />
    </el-col>
  </el-row>

  <div class="load-more-container" @click="$emit('more')">
    <el-button type="primary" size="large">查看更多</el-button>
  </div>


</template>

<script setup>
import { ref } from 'vue'
import { Search, ArrowDown } from '@element-plus/icons-vue'
import TeacherCard from './TeacherCard.vue'
defineEmits(['click', 'more']);
const props = defineProps({
  teachers: {
    type: Array,
    required: true,
    default: () => [
      { id: 1, name: '李明', field: '基础教育', bio: '前Google数据科学家, 10年机器学习经验', avatar: '/src/assets/static/李明.png', rate: 4.8 }
    ]
  },
  sort: {
    type: Array,
    required: true,
    default: () => ['综合推荐', '人气最高']
  },
  modality: {
    type: Array,
    required: true,
    default: () => ['全部形式', '线上课', '直播课', '线下课']
  },
  field: {
    type: Array,
    required: true,
    default: () => ['全部领域', '艺术人文', '经济金融', '健康时尚', '职业教育']
  },
  showRate: {
    type: Boolean,
    default: true
  }
})



/* --------------  选中排序  -------------- */
const activeSort = ref(props.sort[0])
const activeModality = ref(props.modality[0])
const activeField = ref(props.field[0])
function selectSort(val) {
  activeSort.value = val
}
function selectField(val) {
  activeField.value = val
}
function selectModality(val) {
  activeModality.value = val
}


</script>
<style scoped>
.filter-bar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 20px;
  margin-bottom: 30px;
}

.filter-options {
  display: flex;
  align-items: center;
  gap: 15px;
  flex-wrap: wrap;
}

.filter-label {
  font-size: 14px;
  color: var(--el-text-color-secondary);
  margin-right: 10px;
}

.filter-search {
  width: 240px;
}


.load-more-container {
  text-align: left;
  margin-top: 20px;
}

.teacher-card {
  text-align: left;
  margin-bottom: 24px;
  position: relative;
  --el-card-padding: 30px 20px;
}

.teacher-card-sort-popover {
  position: absolute;
  top: 15px;
  right: 15px;
}

.teacher-card-sort-popover .el-button {
  --el-button-text-color: var(--el-text-color-secondary);
}

.teacher-info .el-avatar {
  margin-bottom: 15px;
  border: 3px solid #fff;
  box-shadow: var(--el-box-shadow-light);
}

.teacher-name {
  font-size: 18px;
  font-weight: 600;
  color: var(--el-text-color-primary);
  margin: 0 0 5px;
}

.teacher-field {
  font-size: 14px;
  color: var(--el-text-color-secondary);
  margin: 0 0 15px;
}

.teacher-bio {
  font-size: 14px;
  color: var(--el-text-color-regular);
  line-height: 1.6;
  margin: 0 0 20px;
  min-height: 45px;
}

.view-profile-btn {
  width: 100%;
}

/* 响应式适配 - 移动端 */
@media (max-width: 767px) {
  .filter-bar {
    flex-direction: column;
    align-items: stretch;
  }

  .filter-options {
    flex-direction: column;
    align-items: stretch;
    gap: 10px;
    margin-bottom: 15px;
  }

  .filter-option {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .filter-option .el-button {
    flex: 1;
    margin-left: 10px;
  }

  .filter-search {
    width: 100%;
  }

  .teacher-card {
    --el-card-padding: 20px 15px;
  }

  .teacher-info .el-avatar {
    width: 80px !important;
    height: 80px !important;
  }

  .teacher-name {
    font-size: 16px;
  }

  .teacher-field {
    font-size: 13px;
  }

  .teacher-bio {
    font-size: 13px;
    min-height: 40px;
  }
}

/* 响应式适配 - 平板 */
@media (min-width: 768px) and (max-width: 1024px) {
  .teacher-info .el-avatar {
    width: 90px !important;
    height: 90px !important;
  }

  .teacher-name {
    font-size: 17px;
  }
}
</style>
