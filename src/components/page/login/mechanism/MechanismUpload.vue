<template>
  <div class="institution-auth-container">
    <h2 class="title">机构认证</h2>
    
    <!-- 基本信息 -->
    <div class="section">
      <h3 class="section-title">基本信息</h3>
      <el-form label-width="0" class="form">
        <el-form-item>
          <el-input placeholder="请输入法人姓名" clearable />
        </el-form-item>
        <el-form-item>
          <el-input placeholder="请输入手机号码" clearable />
        </el-form-item>
      </el-form>
    </div>

    <!-- 证件信息 -->
    <div class="section">
      <h3 class="section-title">证件信息</h3>
      
      <div class="id-cards">
        <img src="./assets/card.png" alt="">
      </div>
      
      <el-form-item>
        <el-input placeholder="请输入身份证号码" clearable />
      </el-form-item>
    </div>

    <!-- 操作按钮 -->
    <div class="actions">
      <el-button>返回</el-button>
      <el-button type="primary">同意</el-button>
    </div>

    <!-- 底部链接 -->
    <div class="login-link">
        <el-link type="primary" @click="handleLogin">已认证过？去登录</el-link>
      </div>
  </div>
</template>

<script setup>
</script>

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

.section {
  margin-bottom: 30px;
}

.section-title {
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 15px;
  color: #333;
}

.form {
  margin-top: 15px;
}

.id-cards {
  display: flex;
  justify-content: space-between;
  gap: 20px;
  margin-bottom: 20px;
}

.id-card-item {
  flex: 1;
}

.upload-area {
  border-radius: 8px;
  padding: 15px;
  text-align: center;
  cursor: pointer;
  background-color: #f7fafc;
  min-height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.placeholder {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.example-image {
  width: 100px;
  height: 100px;
  object-fit: contain;
  margin-bottom: 10px;
  opacity: 0.6;
}

.actions {
  display: flex;
  justify-content: space-between;
  margin-top: 30px;
}

.actions .el-button {
  width: 48%;
  height: 50px;
  font-size: 16px;
}

.login-link {
  text-align: center;
  margin-top: 20px;
  color: #666;
}

.login-link a {
  text-decoration: none;
}


/* 响应式设计 */
@media (max-width: 768px) {
  .institution-auth-container {
    margin: 20px 15px;
    padding: 20px;
  }
  
  .id-cards {
    flex-direction: column;
    gap: 15px;
  }
  
  .actions .el-button {
    width: 100%;
  }
}
</style>