<template>
  <div class="content-area">
    <div class="course-cards">
      <div v-for="item in currentCourseList" :key="item.id" class="course-card">
        <div class="course-image">
          <img src="../assets/image.png" alt="课程封面" />
        </div>
        <div class="course-info">
          <div class="course-title">{{ item.title }}</div>
          
          <div class="course-actions">
            <div class="course-author">{{ item.author }}</div>
            <el-button size="small" plain>查看详情</el-button>
          </div>
        </div>
      </div>
    </div>

    <div class="pagination">
      <el-pagination
        v-model:current-page="currentPage"
        v-model:page-size="pageSize"
        :total="total"
        :page-sizes="[8, 16, 24, 32]"
        layout="prev, pager, next, ->, sizes, slot"
        background
        size="small"
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
      >
        <template #page-size="{ value }">
          {{ value }}条/页
        </template>
        <template #default>
          <span class="jump-control">
            跳转
            <el-input-number
              v-model="jumpPage"
              :min="1"
              :max="Math.ceil(total / pageSize)"
              size="small"
              controls-position="right"
              style="width: 60px"
              @keyup.enter="handleJump"
            />
            页
            <el-button type="primary" size="small" @click="handleJump">确认</el-button>
          </span>
          <span class="total-text">
            共 {{ Math.ceil(total / pageSize) }} 页
          </span>
        </template>
      </el-pagination>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

const courseData = ref(
  Array.from({ length: 625 }, (_, i) => ({
    id: i + 1,
    title: `课程 ${i + 1}`,
    author: '陈恩翔'
  }))
)

const currentPage = ref(1)
const pageSize = ref(8)
const jumpPage = ref('')

const total = computed(() => courseData.value.length)
const currentCourseList = computed(() => {
  const start = (currentPage.value - 1) * pageSize.value
  const end = start + pageSize.value
  return courseData.value.slice(start, end)
})

const handleSizeChange = (val) => {
  const newSize = Number(val) || 8
  pageSize.value = newSize
  const maxPage = Math.max(1, Math.ceil(total.value / pageSize.value))
  if (currentPage.value > maxPage) currentPage.value = 1
}

const handleCurrentChange = (val) => {
  currentPage.value = val
}

const handleJump = () => {
  const page = Number.parseInt(String(jumpPage.value), 10)
  const maxPage = Math.max(1, Math.ceil(total.value / pageSize.value))
  if (Number.isInteger(page)) {
    const clamped = Math.min(Math.max(page, 1), maxPage)
    currentPage.value = clamped
  }
  jumpPage.value = ''
}
</script>

<style scoped>
.course-cards {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  margin-bottom: 20px;
}
.course-card { border: 1px solid #ebeef5; border-radius: 4px; overflow: hidden; transition: box-shadow 0.3s ease; }
.course-card:hover { box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1); }
.course-image { width: 100%; height: 160px; overflow: hidden; }
.course-image img { width: 100%; height: 100%; object-fit: cover; }
.course-info { padding: 12px; }
.course-title { font-size: 15px; font-weight: bold; margin-bottom: 8px; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
.course-author { color: #909399; font-size: 13px; margin-bottom: 12px; }
/* .course-actions { display: flex; gap: 8px; } */
.pagination { display: flex; justify-content: flex-end; margin-top: 12px; }
.pagination :deep(.el-pagination) { --el-pagination-button-height: 32px; display: flex; align-items: center; gap: 12px; }
/* 蓝色主题定制 */
.pagination :deep(.el-pagination .btn-prev),
.pagination :deep(.el-pagination .btn-next),
.pagination :deep(.el-pagination .el-pager li) { background: #fff; border: 1px solid #a0cfff; color: #409eff; border-radius: 4px; min-width: 36px; height: 32px; line-height: 30px; }
.pagination :deep(.el-pagination .el-pager li.is-active) { background-color: #409eff; border-color: #409eff; color: #fff; }
.pagination :deep(.el-pagination .el-pager li:hover) { border-color: #409eff; color: #409eff; }
.pagination :deep(.el-pagination .btn-prev:hover),
.pagination :deep(.el-pagination .btn-next:hover) { border-color: #409eff; }
.pagination :deep(.el-select .el-input__wrapper) {
  border: 1px solid #a0cfff;
  box-shadow: none !important;
  height: 32px;
  border-radius: 4px;
}
.pagination :deep(.el-select .el-input__inner) { color: #409eff; }
.pagination :deep(.el-pagination__sizes .el-select .el-input .el-input__suffix) { color: #409eff; }
.pagination :deep(.el-pagination button.is-active) { color: #fff; }
.pagination :deep(.el-pagination .is-disabled) { opacity: 0.6; }
.pagination :deep(.el-input-number .el-input__wrapper) { border: 1px solid #a0cfff; height: 32px; border-radius: 4px; }
.pagination :deep(.el-input-number .el-input__inner) { text-align: center; }
.pagination :deep(.el-button--primary) { background-color: #409eff; border-color: #409eff; }
.jump-control { display: flex; align-items: center; gap: 8px; font-size: 13px; color: #606266; }
@media (max-width: 1024px) { .course-cards { grid-template-columns: repeat(3, 1fr); } }
@media (max-width: 768px) { .course-cards { grid-template-columns: repeat(2, 1fr); } }
@media (max-width: 480px) { .course-cards { grid-template-columns: 1fr; } }
</style>


