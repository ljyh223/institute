<template>
  <el-card class="venue-card" shadow="hover" :body-style="{ padding: '0px' }">
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
</template>

<script setup>
import { Location, User } from '@element-plus/icons-vue'
defineProps({
  venue: {
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
</style>