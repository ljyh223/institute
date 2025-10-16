<template>
  <div class="institution-auth-container">
    <h2 class="title">机构认证</h2>

    <!-- 审核成功状态 -->
    <div class="status-content">
      <img src="./assets/审核成功图标.png" alt="审核成功" class="status-image" />
      <p class="status-text">审核成功</p>

      <el-link type="primary" class="register-link">去注册-></el-link>
    </div>

    <!-- 下一步按钮 -->
    <div class="actions">
      <el-button type="primary" style="width: 100%; height: 50px; font-size: 16px;">
        下一步
      </el-button>
    </div>
  </div>
</template>



<style scoped>
.institution-auth-container {
  max-width: 600px;
  margin: 40px auto;
  padding: 30px;
  background-color: #fff;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

.title {
  text-align: center;
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 30px;
  color: #333;
}

.status-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 250px;
  margin-bottom: 30px;
}

.status-image {
  width: 180px;
  height: auto;
  margin-bottom: 20px;
}

.status-text {
  font-size: 18px;
  color: #666;
  margin: 0;
}

.actions {
  margin-top: 30px;
}

.register-link{
  margin-top: 20px;
}

/* 响应式设计 */
@media (max-width: 768px) {
  .institution-auth-container {
    margin: 20px 15px;
    padding: 20px;
  }
  
  .status-image {
    width: 150px;
  }
  
  .status-text {
    font-size: 16px;
  }
}
</style>