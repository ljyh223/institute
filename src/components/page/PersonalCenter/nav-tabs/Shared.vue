<template>
  <div class="content-area">
    <div class="course-cards">
      <div v-for="item in currentList" :key="item.id" class="course-card">
        <div class="course-image">
          <img src="../assets/image.png" alt="封面" />
        </div>
        <div class="course-info">
          <div class="course-title">共享空间 {{ item.id }}</div>
          <div class="course-actions">
            <div class="course-author">{{ item.author }}</div>
            <el-button size="small" plain>查看详情</el-button>
          </div>
        </div>
      </div>
    </div>

    <div class="pagination">
      <PaginationBar
        :total="total"
        v-model:currentPage="currentPage"
        v-model:pageSize="pageSize"
        @size-change="onSizeChange"
        @current-change="onPageChange"
      />
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import PaginationBar from './components/PaginationBar.vue'

const data = ref(Array.from({ length: 5 }, (_, i) => ({ id: i + 1, author: '共享作者' })))
const currentPage = ref(1)
const pageSize = ref(8)
const total = computed(() => data.value.length)
const currentList = computed(() => {
  const start = (currentPage.value - 1) * pageSize.value
  const end = start + pageSize.value
  return data.value.slice(start, end)
})
const onSizeChange = (size) => {
  pageSize.value = Number(size) || 8
  const maxPage = Math.max(1, Math.ceil(total.value / pageSize.value))
  if (currentPage.value > maxPage) currentPage.value = 1
}
const onPageChange = (page) => {
  currentPage.value = page
}
</script>

<style scoped>
.course-cards { display: grid; grid-template-columns: repeat(4, 1fr); gap: 20px; margin-bottom: 12px; }
.course-card { border: 1px solid #ebeef5; border-radius: 4px; overflow: hidden; transition: box-shadow .3s ease; }
.course-card:hover { box-shadow: 0 2px 12px 0 rgba(0,0,0,.1); }
.course-image { width: 100%; height: 160px; overflow: hidden; }
.course-image img { width: 100%; height: 100%; object-fit: cover; }
.course-info { padding: 12px; }
.course-title { font-size: 15px; font-weight: bold; margin-bottom: 8px; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
.course-author { color: #909399; font-size: 13px; }
.course-actions { display: flex; justify-content: space-between; align-items: center; }
.pagination { display: flex; justify-content: flex-end; }
@media (max-width: 1024px) { .course-cards { grid-template-columns: repeat(3, 1fr); } }
@media (max-width: 768px) { .course-cards { grid-template-columns: repeat(2, 1fr); } }
@media (max-width: 480px) { .course-cards { grid-template-columns: 1fr; } }
</style>


