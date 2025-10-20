<template>
  <div class="personal-center">
    <!-- 主要内容区域 -->
    <div class="main-content">
      <!-- 顶部操作区 -->
      <div class="top-actions">
        <div class="logo-area">
          <span class="logo-text">学会</span>
          <el-button type="primary" plain size="small">
            AI探索
            <el-icon>
              <Right />
            </el-icon>
          </el-button>
        </div>

        <div class="search-box">
          <el-input placeholder="What do you want learn?" :suffix-icon="Search" size="small" />
        </div>

        <div class="user-actions">
          <el-badge :value="3" class="item">
            <el-button icon="Bell" circle size="small" />
          </el-badge>
          <el-dropdown trigger="click">
            <el-avatar :size="30" src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png" />
            <template #dropdown>
              <el-dropdown-menu>
                <el-dropdown-item>个人中心</el-dropdown-item>
                <el-dropdown-item>我的订单</el-dropdown-item>
                <el-dropdown-item>联系场馆</el-dropdown-item>
                <el-dropdown-item>设置</el-dropdown-item>
                <el-dropdown-item divided>退出</el-dropdown-item>
              </el-dropdown-menu>
            </template>
          </el-dropdown>
        </div>
      </div>

      <!-- 用户信息区 -->
      <div class="user-info">
        <el-avatar :size="60" src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png" />
        <div class="user-details">
          <div class="user-name">徐明栋</div>
          <div class="user-location">
            <el-icon>
              <Location />
            </el-icon>
            苏州
          </div>
          <div class="user-stats">
            <span>粉丝 <strong>18</strong></span>
            <span>关注 <strong>18</strong></span>
            <span>学分 <strong>18</strong></span>
          </div>
        </div>
      </div>

      <!-- 导航标签 -->
      <div class="nav-tabs">
        <el-tabs v-model="activeTab" type="card" @tab-change="onTabChange">
          <el-tab-pane label="我的课程" name="courses" />
          <el-tab-pane label="共享空间" name="shared" />
          <el-tab-pane label="我的商品" name="products" />
          <el-tab-pane label="我的钱包" name="wallet" />
          <el-tab-pane label="学分银行" name="credit" />
          <el-tab-pane label="关注收藏" name="favorites" />
        </el-tabs>
      </div>

      <!-- 内容区域 -->
      <div class="content-area">
        <!-- 子导航 -->


        <router-view />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, watch } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { ElMessage } from 'element-plus'
import {
  Search,
  Right,
  Location,
  Bell
} from '@element-plus/icons-vue'

const router = useRouter()
const route = useRoute()
const activeTab = ref(route.name && ['courses', 'shared', 'products', 'wallet', 'credit', 'favorites'].includes(route.name) ? route.name : 'courses')

const onTabChange = (name) => {
  router.push({ name })
}

watch(
  () => route.name,
  (newName) => {
    if (typeof newName === 'string' && ['courses', 'shared', 'products', 'wallet', 'credit', 'favorites'].includes(newName)) {
      activeTab.value = newName
    }
  }
)
const selectAll = ref(false)

// 下方原有课程卡片与分页展示被替换为基于路由的子视图
</script>

<style lang="scss" scoped>
.personal-center {
  font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB", Arial, sans-serif;
  background-color: #f5f5f5;
  min-height: 100vh;
}

.header {
  background-color: #333;
  padding: 10px 20px;
  color: #fff;
  font-size: 14px;
  max-width: 1200px;
  margin: 0 auto;

  .breadcrumb {
    margin-bottom: 10px;
  }
}

.main-content {
  max-width: 1200px;
  margin: 20px auto;
  padding: 20px;
  background-color: #fff;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
}

.top-actions {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 0;
  border-bottom: 1px solid #ebeef5;
  margin-bottom: 20px;

  .logo-area {
    display: flex;
    align-items: center;
    gap: 10px;

    .logo-text {
      font-size: 24px;
      font-weight: bold;
      color: #409eff;
    }
  }

  .search-box {
    flex: 1;
    max-width: 400px;
    margin: 0 20px;
  }

  .user-actions {
    display: flex;
    align-items: center;
    gap: 15px;
  }
}

.user-info {
  display: flex;
  align-items: center;
  padding: 20px 0;
  border-bottom: 1px solid #ebeef5;
  margin-bottom: 20px;

  .user-details {
    margin-left: 20px;

    .user-name {
      font-size: 20px;
      font-weight: bold;
      margin-bottom: 5px;
    }

    .user-location {
      display: flex;
      align-items: center;
      color: #606266;
      margin-bottom: 10px;
    }

    .user-stats {
      display: flex;
      gap: 20px;
      color: #909399;

      span {
        display: flex;
        align-items: center;

        strong {
          font-weight: bold;
          margin: 0 5px;
        }
      }
    }
  }
}

.nav-tabs {
  margin-bottom: 20px;
}

.sub-nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}

.course-cards {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  /* 固定 4 列 */
  gap: 20px;
  margin-bottom: 20px;

  .course-card {
    border: 1px solid #ebeef5;
    border-radius: 4px;
    overflow: hidden;
    transition: box-shadow 0.3s ease;

    &:hover {
      box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
    }

    .course-image {
      width: 100%;
      height: 160px;
      /* 稍微调小高度 */
      overflow: hidden;

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }

    .course-info {
      padding: 12px;

      .course-title {
        font-size: 15px;
        font-weight: bold;
        margin-bottom: 8px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }

      .course-author {
        color: #909399;
        font-size: 13px;
        margin-bottom: 12px;
      }

      .course-actions {
        display: flex;
        gap: 8px;

        button {
          padding: 6px 10px;
          font-size: 12px;
        }
      }
    }
  }
}

.pagination {
  display: flex;
  justify-content: center;
  margin-top: 20px;

  .el-pagination {
    display: flex;
    align-items: center;
    gap: 12px;

    .jump-control {
      display: flex;
      align-items: center;
      gap: 8px;
      font-size: 13px;
      color: #606266;

      .el-input-number {
        width: 60px;
      }

      .el-button {
        padding: 6px 10px;
        font-size: 12px;
      }
    }
  }
}

/* 响应式：小屏调整列数 */
@media (max-width: 1024px) {
  .course-cards {
    grid-template-columns: repeat(3, 1fr);
  }
}

@media (max-width: 768px) {
  .top-actions {
    flex-direction: column;
    gap: 15px;

    .logo-area {
      width: 100%;
      justify-content: space-between;
    }

    .search-box {
      width: 100%;
      max-width: none;
    }

    .user-actions {
      width: 100%;
      justify-content: flex-end;
    }
  }

  .user-info {
    flex-direction: column;
    text-align: center;

    .user-details {
      margin-left: 0;
      margin-top: 15px;
    }
  }

  .course-cards {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 480px) {
  .main-content {
    padding: 10px;
    margin: 10px;
  }

  .top-actions {
    padding: 10px 0;
  }

  .user-info {
    padding: 15px 0;
  }

  .course-cards {
    grid-template-columns: 1fr;
  }

  .pagination {
    flex-wrap: wrap;
  }
}
</style>