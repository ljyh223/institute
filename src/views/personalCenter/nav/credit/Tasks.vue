<template>
  <div class="credit-tasks">
    <el-table :data="rows" border style="width: 100%">
      <el-table-column prop="task" label="任务" />
      <el-table-column prop="desc" label="说明" />
      <el-table-column prop="action" label="操作" width="120">
        <template #default="scope">
          <el-button type="primary" text>{{ scope.row.action }}</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script setup>
const rows = [
  { task: '购买课程获得学分', desc: '上课满十五分钟得40学分', action: '去买课' },
  { task: '点赞帖子获得学分', desc: '点赞可获得学分', action: '去点赞' },
  { task: '发布帖子获得学分', desc: '发帖可获得学分', action: '去发布' },
  { task: '发布课程获得学分', desc: '发布课可获得学分', action: '去发布' },
  { task: '点赞帖子获得学分', desc: '点赞可获得学分', action: '去点赞' },
]
</script>

<style scoped>
.credit-tasks {
  background: #fff;
}
</style>
