<template>
  <div class="wallet-table">
    <el-table :data="pagedRows" border style="width: 100%">
      <el-table-column prop="time" label="支出时间" width="160" />
      <el-table-column prop="amount" label="支出金额" width="120" />
      <el-table-column prop="type" label="类型" width="120" />
      <el-table-column prop="course" label="课程名称" width="160" />
      <el-table-column prop="publisher" label="发布者" width="120" />
    </el-table>
    <div class="pagination">
      <PaginationBar
        :total="total"
        v-model:currentPage="currentPage"
        v-model:pageSize="pageSize"
      />
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import PaginationBar from '../components/PaginationBar.vue'

const rows = Array.from({ length: 70 }, (_, i) => ({
  time: `2025-06-0${(i % 5) + 1} 03:17`,
  amount: `- ${88}`,
  type: '购买',
  course: '课程名字',
  publisher: '某某某',
}))

const currentPage = ref(1)
const pageSize = ref(8)
const total = computed(() => rows.length)
const pagedRows = computed(() => {
  const start = (currentPage.value - 1) * pageSize.value
  return rows.slice(start, start + pageSize.value)
})
</script>

<style scoped>
.wallet-table { background: #fff; }
.pagination { display: flex; justify-content: flex-end; margin-top: 12px; }
</style>


