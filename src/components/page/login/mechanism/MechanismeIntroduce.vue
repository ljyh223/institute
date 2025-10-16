<template>
  <div class="institution-auth-container">
    <h2 class="title">机构认证</h2>

    <!-- 机构介绍 -->
    <div class="section">
      <h3 class="section-title">机构介绍</h3>
      <el-form label-width="0" class="form">
        <el-form-item>
          <el-input
            type="textarea"
            :rows="8"
            placeholder="请输入机构介绍"
            resize="none"
          />
        </el-form-item>
      </el-form>
    </div>

    <!-- 下一步按钮 -->
    <div class="actions">
      <el-button type="primary" style="width: 100%; height: 50px; font-size: 16px;">
        下一步
      </el-button>
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

.actions {
  margin-top: 30px;
}
</style>