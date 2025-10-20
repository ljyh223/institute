<template>
  <div class="favorites">
    <div class="sub-nav">
      <el-button-group>
        <el-button :type="activeSub === 'followings' ? 'primary' : 'default'" plain
          @click="go('favorites-followings')">我的关注</el-button>
        <el-button :type="activeSub === 'followers' ? 'primary' : 'default'" plain
          @click="go('favorites-followers')">我的粉丝</el-button>
        <el-button :type="activeSub === 'collections' ? 'primary' : 'default'" plain
          @click="go('favorites-collections')">我的收藏</el-button>
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
const activeSub = ref('followings')

const go = (name) => router.push({ name })

watch(
  () => route.name,
  (name) => {
    if (name === 'favorites-followings') activeSub.value = 'followings'
    if (name === 'favorites-followers') activeSub.value = 'followers'
    if (name === 'favorites-collections') activeSub.value = 'collections'
  },
  { immediate: true }
)
</script>

<style scoped>
.favorites {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.sub-nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
