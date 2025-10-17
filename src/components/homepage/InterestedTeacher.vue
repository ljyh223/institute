<template>
  <el-card class="teacher-card" shadow="hover">
    <!-- 排序按钮 -->
    <div class="teacher-card-sort-popover">
      <el-popover placement="bottom-end" :width="100" trigger="hover">
        <template #reference>
          <el-button text bg>
            {{ activeSort }} <el-icon><arrow-down /></el-icon>
          </el-button>
        </template>

        <!-- 动态渲染排序选项 -->
        <div class="popover-menu">
          <p v-for="s in sortOptions" :key="s" @click="selectSort(s)" class="sort-item">
            {{ s }}
          </p>
        </div>
      </el-popover>
    </div>

    <!-- 老师信息 -->
    <div class="teacher-info">
      <el-avatar :size="100" :src="teacher.avatar" />
      <h4 class="teacher-name">{{ teacher.name }}</h4>
      <p class="teacher-field">{{ teacher.field }}</p>
      <p class="teacher-bio">{{ teacher.bio }}</p>
    </div>

    <el-button type="primary" class="view-profile-btn" @click="goTeacherHome(teacher.id)">
      查看主页
    </el-button>
  </el-card>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const props = defineProps({
  teacher: {
    type: Object,
    required: true,
    default: () => ({ id: 1, name: '李明', field: '基础教育', bio: '前Google数据科学家, 10年机器学习经验', avatar: 'src/components/Homepage1/Person/picture/圆形_3.png' })
  },
  sortOptions: {
    type: Array,
    default: () => ['综合推荐', '人气最高']
  }
})

/* --------------  选中排序  -------------- */
const activeSort = ref(props.sortOptions[0])   // 默认第一项
function selectSort(val) {
  activeSort.value = val
  // 如需通知父组件，可 emit 出去
  // emit('sortChange', val)
}

// 跳转到老师主页（HomepageDetail1）
const router = useRouter()
function goTeacherHome(id) {
  router.push({ name: 'teacher-home', params: { id } })
}
</script>
<style scoped>
.teacher-card {
  text-align: center;
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
</style>
