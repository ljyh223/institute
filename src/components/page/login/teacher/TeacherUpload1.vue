<template>
  <div class="institution-auth-container">
    <h2 class="title">机构认证</h2>

    <!-- 上传营业执照 -->
    <div class="section">
      <img src="./assets/upload.png" alt="">
    </div>

    <!-- 上传机构照片 -->
    <div class="section">
        <img src="./assets/upload.png" alt="">
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

.section {
  margin-bottom: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 160px; /* 可选：给一个最小高度，避免内容太小导致布局不稳定 */
}

.section-title {
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 15px;
  color: #333;
}

.upload-wrapper {
  display: flex;
  align-items: center;
  gap: 15px;
}

.upload-area {
  flex: 1;
  border: 2px dashed #d9d9d9;
  border-radius: 8px;
  padding: 20px;
  text-align: center;
  cursor: pointer;
  background-color: #fafafa;
  min-height: 150px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
}

.upload-area:hover {
  border-color: #409EFF;
  background-color: #f7fafc;
}

.upload-icon {
  font-size: 36px;
  color: #409EFF;
  margin-bottom: 10px;
}

.upload-text {
  color: #666;
  font-size: 14px;
  margin: 0;
}

.add-button {
  width: 50px;
  height: 50px;
  border: 2px dashed #409EFF;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;
  color: #409EFF;
  font-size: 24px;
}

.add-button:hover {
  background-color: #e6f2ff;
}

.actions {
  margin-top: 30px;
}

/* 响应式设计 */
@media (max-width: 768px) {
  .institution-auth-container {
    margin: 20px 15px;
    padding: 20px;
  }
  
  .upload-wrapper {
    flex-direction: column;
    gap: 15px;
  }
  
  .upload-area {
    min-height: 120px;
    padding: 15px;
  }
  
  .add-button {
    width: 40px;
    height: 40px;
    font-size: 20px;
  }
  
  .upload-icon {
    font-size: 28px;
  }
}
</style>
