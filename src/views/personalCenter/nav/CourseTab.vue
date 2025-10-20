<template>
  <div class="courses">
    <div class="sub-nav">
      <el-button-group>
        <el-button :type="activeSub === 'published' ? 'primary' : 'default'" plain
          @click="go('courses-published')">我发布的</el-button>
        <el-button :type="activeSub === 'purchased' ? 'primary' : 'default'" plain
          @click="go('courses-purchased')">我购买的</el-button>
      </el-button-group>
      <template v-if="activeSub === 'published'">
        <el-checkbox v-model="selectAll" size="small">全选下架</el-checkbox>
      </template>
    </div>
    <router-view />
  </div>

</template>

<script setup>
import { ref, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const route = useRoute()
const router = useRouter()
const activeSub = ref('published')
const selectAll = ref(false)

const go = (name) => {
  router.push({ name })
}

watch(
  () => route.name,
  (name) => {
    if (name === 'courses-published') activeSub.value = 'published'
    if (name === 'courses-purchased') activeSub.value = 'purchased'
  },
  { immediate: true }
)

</script>

<style scoped>
.sub-nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}
</style>
