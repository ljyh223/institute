<!-- eslint-disable vue/multi-word-component-names -->
<template>

  <el-row :gutter="24">
    <el-col v-for="venue in props.venues" :key="venue.id" :xs="24" :sm="12" :md="8">
      <el-card class="venue-card" shadow="hover" :body-style="{ padding: '0px' }" @click="$emit('click', venue.id)">
        <!-- 封面图 -->
        <el-image :src="venue.image" class="venue-image" fit="cover" />

        <!-- 详细信息 -->
        <div class="venue-info-body">
          <h4 class="venue-name">
            {{ venue.name }}（{{ venue.type }}）
          </h4>

          <p class="venue-detail">
            <el-icon>
              <Location />
            </el-icon>
            <span>{{ venue.address }}</span>
          </p>

          <p class="venue-detail">
            <el-icon>
              <User />
            </el-icon>
            <span>{{ venue.phone }}</span>
          </p>
        </div>
      </el-card>
    </el-col>
  </el-row>


  <div class="load-more-container" @click="$emit('more')">
    <el-button type="primary" size="large">查看更多</el-button>
  </div>
</template>

<script setup>
import { Location, User } from '@element-plus/icons-vue'


defineEmits(['click', 'more'])
const props = defineProps({
  venues: {
    type: Object,
    required: true,
    default: () => ({ id: 1, name: '飞羽竞技场', type: '篮球场馆', address: '苏州市工业园区独墅湖校区258号', phone: '19552698532', image: 'src/components/Homepage1/Person/picture/矩形_17.png' }),
    validator: v =>
      ['name', 'type', 'address', 'phone', 'image'].every(k => k in v)
  }
})
</script>

<style scoped>
.venue-card {
  margin-bottom: 24px;
  border-radius: var(--el-card-border-radius);
  overflow: hidden;
}

.venue-image {
  width: 100%;
  height: 200px;
  display: block;
}

.venue-info-body {
  padding: 20px;
}

.venue-name {
  font-size: 18px;
  font-weight: 600;
  color: var(--el-text-color-primary);
  margin: 0 0 15px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.venue-detail {
  display: flex;
  align-items: center;
  font-size: 14px;
  color: var(--el-text-color-secondary);
  margin: 0 0 10px;
}

.venue-detail .el-icon {
  margin-right: 8px;
  font-size: 16px;
  flex-shrink: 0;
}

.venue-detail span {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.venue-detail:last-child {
  margin-bottom: 0;
}

/* 响应式适配 - 移动端 */
@media (max-width: 767px) {
  .venue-image {
    height: 160px;
  }

  .venue-info-body {
    padding: 15px;
  }

  .venue-name {
    font-size: 16px;
    margin-bottom: 12px;
  }

  .venue-detail {
    font-size: 13px;
    margin-bottom: 8px;
  }

  .venue-detail .el-icon {
    font-size: 14px;
    margin-right: 6px;
  }
}

/* 响应式适配 - 平板 */
@media (min-width: 768px) and (max-width: 1024px) {
  .venue-image {
    height: 180px;
  }

  .venue-info-body {
    padding: 18px;
  }

  .venue-name {
    font-size: 17px;
  }
}
</style>
