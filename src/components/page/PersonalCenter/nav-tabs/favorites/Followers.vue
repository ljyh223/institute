<template>
  <div class="list">
    <div v-for="u in pagedUsers" :key="u.id" class="user-row">
      <el-avatar :size="36" :src="u.avatar" />
      <div class="name">{{ u.name }}</div>
      <div class="actions">
        <el-button size="small" type="primary" text>互相关注</el-button>
        <el-button size="small" text>私信</el-button>
      </div>
    </div>
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

const users = Array.from({ length: 120 }, (_, i) => ({ id: i + 1, name: '油猫病', avatar: 'https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png' }))
const currentPage = ref(1)
const pageSize = ref(8)
const total = computed(() => users.length)
const pagedUsers = computed(() => {
  const start = (currentPage.value - 1) * pageSize.value
  return users.slice(start, start + pageSize.value)
})
</script>

<style scoped>
.user-row { display: grid; grid-template-columns: 36px 1fr auto; align-items: center; gap: 12px; padding: 10px 0; border-bottom: 1px solid #f0f0f0; }
.name { color: #303133; }
.actions { display: flex; gap: 8px; }
.pagination { display: flex; justify-content: flex-end; margin-top: 12px; }
</style>


