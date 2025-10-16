<template>
  <div class="credit">
    <div class="balance-card">
      <div class="title">当前学分</div>
      <div class="amount">350</div>
      <div class="actions">
        <el-button type="primary">去兑换</el-button>
      </div>
      <div class="tips">可兑换多种好礼</div>
    </div>

    <div class="sub-nav">
      <el-button-group>
        <el-button :type="activeSub === 'details' ? 'primary' : 'default'" plain @click="go('credit-details')">学分明细</el-button>
        <el-button :type="activeSub === 'tasks' ? 'primary' : 'default'" plain @click="go('credit-tasks')">做任务赚学分</el-button>
      </el-button-group>
    </div>

    <router-view />
  </div>
</template>

<script setup>
import { ref, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const route = useRoute()
const router = useRouter()
const activeSub = ref('details')

const go = (name) => router.push({ name })

watch(
  () => route.name,
  (name) => {
    if (name === 'credit-details') activeSub.value = 'details'
    if (name === 'credit-tasks') activeSub.value = 'tasks'
  },
  { immediate: true }
)
</script>

<style scoped>
.credit { display: flex; flex-direction: column; gap: 16px; }
.balance-card {
  border: 1px solid #e4e7ed;
  border-radius: 8px;
  padding: 16px 20px;
  background: linear-gradient(90deg, rgba(220, 231, 245, 1) 0%, rgba(255, 255, 255, 1) 99.31%);
  display: grid;
  grid-template-columns: 1fr auto;
  grid-template-areas:
    'title action'
    'amount action'
    'tips tips';
  row-gap: 6px;
}
.balance-card .title { grid-area: title; color: #606266; }
.balance-card .amount { grid-area: amount; font-size: 28px; font-weight: 700; color: #409eff; }
.balance-card .actions { grid-area: action; align-self: center; }
.balance-card .tips { grid-area: tips; color: #909399; font-size: 12px; }
.sub-nav { display: flex; justify-content: space-between; align-items: center; }
@media (max-width: 768px) {
  .balance-card { grid-template-columns: 1fr; grid-template-areas: 'title' 'amount' 'action' 'tips'; }
  .balance-card .actions { justify-self: start; }
}
</style>


