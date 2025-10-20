<!-- TeacherCard.vue -->
<template>
  <el-card class="teacher-card" shadow="hover" @click="$emit('click', teacher.id)">
    <!-- 老师信息 -->
    <div class="teacher-info">
      <el-avatar :size="100" :src="teacher.avatar" class="teacher-avatar" />
      <h4 class="teacher-name">{{ teacher.name }}</h4>
      <p class="teacher-field">{{ teacher.field }}</p>
      <!-- 根据 showRate 决定是否显示评分 -->
      <el-rate v-if="showRate" class="teacher-rate" :model-value="teacher.rate" disabled show-score
        score-template="{value}" />
      <p class="teacher-bio">{{ teacher.bio }}</p>
    </div>

    <el-button type="primary" class="view-profile-btn">查看主页</el-button>
  </el-card>
</template>

<script setup>
defineEmits(['click'])
defineProps({
  teacher: {
    type: Object,
    required: true,
    default: () => {
      return { id: 1, name: '李明', field: '基础教育', bio: '前Google数据科学家, 10年机器学习经验', avatar: '/src/assets/static/李明.png', rate: 4.8 }
    }
  },
  showRate: {
    type: Boolean,
    default: true
  }
})
</script>

<style scoped>
.teacher-card {
  text-align: center;
  margin-bottom: 24px;
  position: relative;
  --el-card-padding: 30px 20px;
}

.teacher-info {
  text-align: center;
}

.teacher-info .el-avatar {
  margin: 0 auto 15px;
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

.teacher-rate {
  margin-bottom: 15px;
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

/* 响应式 */
@media (max-width: 767px) {
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