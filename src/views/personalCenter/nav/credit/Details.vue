<template>
  <div class="credit-table">
    <el-table :data="rows" border style="width: 100%">
      <el-table-column prop="time" label="收获时间" width="160" />
      <el-table-column prop="scene" label="收益类别" width="160" />
      <el-table-column prop="score" label="收益学分" width="120" />
    </el-table>
  </div>
</template>

<script setup>
const rows = Array.from({ length: 6 }, (_, i) => ({
  time: `2025-06-0${(i % 5) + 1} 03:17`,
  scene: ['点赞帖子', '购买课程', '发布帖子'][i % 3],
  score: '+88',
}))
</script>

<style scoped>
.credit-table {
  background: #fff;
}
</style>
