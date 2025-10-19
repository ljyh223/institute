<template>
  <!-- 组件的根元素，包含画廊的所有内容 -->
  <div class="gallery-section">
    <el-row :gutter="20">
      <el-col :xs="24" :sm="18">
        <!-- 使用从父组件传入的 mainImage prop -->
        <el-image :src="mainImage" fit="cover" class="gallery-main-image" />
      </el-col>
      <el-col :xs="24" :sm="6" class="preview-col">
        <div class="gallery-preview-wrapper">
          <!-- 使用从父组件传入的 previewImage prop -->
          <el-image :src="previewImage" fit="cover" class="gallery-preview-image" />
          <div class="gallery-arrow">
            <el-icon><ArrowRight /></el-icon>
          </div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script setup>
import { ArrowRight } from '@element-plus/icons-vue';

// 使用 defineProps 声明该组件需要从父组件接收两个图片URL
defineProps({
  mainImage: {
    type: String,
    required: true, // 标记为必需
  },
  previewImage: {
    type: String,
    required: true, // 标记为必需
  }
});
</script>

<style scoped>
/* 
  将主页面中所有与 "图片画廊" 相关的样式都剪切到这里，
  使得组件的样式是自包含的。
*/
.gallery-section {
  margin: 60px auto;
  /* 注意：父组件的 .page-container 样式在这里不需要，因为父组件会提供这个容器 */
}
.gallery-main-image {
  width: 100%;
  height: 450px;
  border-radius: 12px;
  border: 2px solid var(--el-color-primary-light-8);
  display: block;
}
.gallery-preview-wrapper {
  position: relative;
  height: 450px;
  cursor: pointer;
}
.gallery-preview-image {
  width: 100%;
  height: 100%;
  border-radius: 12px;
  display: block;
}
.gallery-arrow {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 44px;
  height: 44px;
  border-radius: 50%;
  background-color: rgba(255, 255, 255, 0.85);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--el-text-color-primary);
  font-size: 22px;
  transition: background-color 0.3s;
  backdrop-filter: blur(2px);
}
.gallery-preview-wrapper:hover .gallery-arrow {
  background-color: #fff;
}

/* 响应式适配 */
@media (max-width: 991px) {
  .gallery-main-image, .gallery-preview-wrapper { 
    height: 350px; 
  }
}

@media (max-width: 767px) {
  .gallery-main-image { 
    height: 250px; 
    margin-bottom: 15px; 
  }
  .preview-col { 
    display: none; /* 在手机上直接隐藏预览图以简化布局 */
  } 
}
</style>