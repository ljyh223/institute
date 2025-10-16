<template>
  <div class="pagination-wrap">
    <div class="pager">
      <button class="pg-btn" :disabled="currentPage <= 1" @click="go(currentPage - 1)">‹</button>
      <button
        v-for="n in displayPages"
        :key="n.key"
        class="pg-btn"
        :class="{ active: n.page === currentPage, ellipsis: n.ellipsis }"
        :disabled="n.ellipsis"
        @click="!n.ellipsis && go(n.page)"
      >
        {{ n.label }}
      </button>
      <button class="pg-btn" :disabled="currentPage >= pageCount" @click="go(currentPage + 1)">›</button>
    </div>

    <div class="tools">
      <select class="pg-select" :value="pageSize" @change="onSizeChange">
        <option v-for="s in pageSizes" :key="s" :value="s">{{ s }}/page</option>
      </select>
      <span class="jump-text">跳转</span>
      <input class="pg-input" type="number" :min="1" :max="pageCount" v-model="jumpInput" @keyup.enter="confirmJump" />
      <span class="jump-unit">页</span>
      <button class="pg-primary" @click="confirmJump">确认</button>
      <span class="total-text">共 {{ pageCount }} 页</span>
    </div>
  </div>
</template>

<script setup>
import { computed, ref, watch } from 'vue'

const props = defineProps({
  total: { type: Number, required: true },
  pageSize: { type: Number, required: true },
  currentPage: { type: Number, required: true },
  pageSizes: { type: Array, default: () => [8, 16, 24, 32] },
})

const emit = defineEmits(['update:currentPage', 'update:pageSize', 'size-change', 'current-change'])

const pageCount = computed(() => Math.max(1, Math.ceil(props.total / props.pageSize)))

const clamp = (v, min, max) => Math.min(Math.max(v, min), max)

function go(page) {
  const p = clamp(page, 1, pageCount.value)
  emit('update:currentPage', p)
  emit('current-change', p)
}

function onSizeChange(e) {
  const size = Number(e.target.value) || props.pageSizes[0]
  emit('update:pageSize', size)
  emit('size-change', size)
}

const jumpInput = ref('')
function confirmJump() {
  const page = Number.parseInt(String(jumpInput.value), 10)
  if (Number.isInteger(page)) {
    go(page)
  }
  jumpInput.value = ''
}

const displayPages = computed(() => {
  const total = pageCount.value
  const cur = props.currentPage
  const maxToShowDesktop = 9
  const maxToShowTablet = 7
  const maxToShowMobile = 5

  const width = typeof window !== 'undefined' ? window.innerWidth : 1024
  const limit = width <= 480 ? maxToShowMobile : width <= 768 ? maxToShowTablet : maxToShowDesktop

  const pages = []
  if (total <= limit) {
    for (let i = 1; i <= total; i++) pages.push({ key: `p${i}`, page: i, label: i })
    return pages
  }
  // Always show first and last, and a window around current
  const windowSize = Math.max(1, Math.floor((limit - 3) / 2))
  let start = clamp(cur - windowSize, 2, total - 1)
  let end = clamp(cur + windowSize, 2, total - 1)
  if (end - start < windowSize * 2) {
    const missing = windowSize * 2 - (end - start)
    start = clamp(start - Math.ceil(missing / 2), 2, total - 1)
    end = clamp(start + windowSize * 2, 2, total - 1)
  }

  pages.push({ key: 'p1', page: 1, label: 1 })
  if (start > 2) pages.push({ key: 'e1', ellipsis: true, label: '…' })
  for (let i = start; i <= end; i++) pages.push({ key: `p${i}`, page: i, label: i })
  if (end < total - 1) pages.push({ key: 'e2', ellipsis: true, label: '…' })
  pages.push({ key: `p${total}`, page: total, label: total })
  return pages
})

// Recompute pages when resizing (simple listener)
if (typeof window !== 'undefined') {
  const rerender = () => (resizeTick.value = Date.now())
  const resizeTick = ref(0)
  window.addEventListener('resize', rerender)
  watch(resizeTick, () => {})
}
</script>

<style scoped>
.pagination-wrap {
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 12px;
}
.pager { display: flex; gap: 6px; flex-wrap: wrap; }
.pg-btn {
  min-width: 32px;
  height: 28px;
  padding: 0 8px;
  border: 1px solid #a0cfff;
  background: #fff;
  color: #409eff;
  border-radius: 6px;
  cursor: pointer;
}
.pg-btn[disabled] { opacity: 0.5; cursor: not-allowed; }
.pg-btn.active { background: #409eff; color: #fff; border-color: #409eff; }
.pg-btn.ellipsis { cursor: default; }

.tools { display: flex; align-items: center; gap: 8px; flex-wrap: wrap; }
.pg-select {
  height: 28px;
  border: 1px solid #a0cfff;
  border-radius: 6px;
  color: #409eff;
  background: #fff;
  padding: 0 8px;
}
.pg-input {
  width: 56px;
  height: 28px;
  border: 1px solid #a0cfff;
  border-radius: 6px;
  text-align: center;
}
.pg-primary { height: 28px; padding: 0 10px; background: #409eff; color: #fff; border: 1px solid #409eff; border-radius: 6px; }
.jump-text, .jump-unit, .total-text { color: #409eff; }

/* Tablet */
@media (max-width: 768px) {
  .pagination-wrap { gap: 10px; }
  .pg-btn { min-width: 30px; height: 26px; }
  .pg-select, .pg-input, .pg-primary { height: 26px; }
}
/* Mobile */
@media (max-width: 480px) {
  .pager { gap: 4px; }
  .tools { gap: 6px; }
  .pg-btn { min-width: 28px; height: 24px; padding: 0 6px; }
  .pg-select, .pg-input, .pg-primary { height: 24px; }
  .total-text { display: none; }
}
</style>


