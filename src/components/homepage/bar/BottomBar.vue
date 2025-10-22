<template>
  <div class="footer-wrapper">
    <div class="footer-container">
      <el-row :gutter="30" justify="space-between" align="top">
        
        <!-- Brand Info -->
        <el-col :xs="24" :sm="12" :md="5" class="footer-col footer-brand">
          <h3>学会</h3>
          <p>新一代学习生态系统</p>
        </el-col>

        <!-- Footer Links Group -->
        <el-col :xs="24" :sm="12" :md="12">
          <el-row :gutter="30">
            <el-col :xs="12" :sm="8" class="footer-col" v-for="section in footerLinks" :key="section.title">
              <h4>{{ section.title }}</h4>
              <ul>
                <li v-for="link in section.links" :key="link.name">
                  <el-link :underline="false">{{ link.name }}</el-link>
                </li>
              </ul>
            </el-col>
          </el-row>
        </el-col>

        <!-- Social and App Downloads -->
        <el-col :xs="24" :sm="24" :md="6" class="footer-col footer-social">
          <div class="social-icons">
            <a href="#" class="social-icon" aria-label="Facebook">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z"/></svg>
            </a>
            <a href="#" class="social-icon instagram" aria-label="Instagram">
               <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 512 512"><path fill="#fff" d="M389.2 48h70.6c15.7 0 28.5 12.8 28.5 28.5v70.6c0 15.7-12.8 28.5-28.5 28.5h-70.6c-15.7 0-28.5-12.8-28.5-28.5V76.5c0-15.7 12.8-28.5 28.5-28.5zM256 160c-53 0-96 43-96 96s43 96 96 96 96-43 96-96-43-96-96-96zm0 160c-35.3 0-64-28.7-64-64s28.7-64 64-64 64 28.7 64 64-28.7 64-64 64zm192-128c0 106-86 192-192 192S64 362 64 256 150 64 256 64s192 86 192 192zm-32 0c0-88.4-71.6-160-160-160S96 167.6 96 256s71.6 160 160 160 160-71.6 160-160z"/></svg>
            </a>
            <a href="#" class="social-icon" aria-label="Twitter">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616v.064c0 2.295 1.616 4.212 3.763 4.649-.69.188-1.432.233-2.193.084.623 1.955 2.441 3.364 4.604 3.404-1.72 1.34-3.882 2.083-6.242 2.083-.404 0-.802-.023-1.195-.069 2.209 1.409 4.833 2.231 7.646 2.231 9.177 0 14.209-7.469 13.945-14.517.975-.701 1.816-1.583 2.483-2.578z"/></svg>
            </a>
          </div>
          <h4 class="download-title">下载我们的APP</h4>
           <div class="app-badges">
          <a href="#" class="app-badge">
            <img class="app-badge-icon" src="/src/assets/static/google-play_1.png" alt="">
            <span class="app-badge-text">
              <span>GET IT ON</span>
              <strong>Google Play</strong>
            </span>
          </a>
          <a href="#" class="app-badge">
            <img class="app-badge-icon" src="/src/assets/static/apple.png" alt="">
            <span class="app-badge-text">
              <span>Available on the</span>
              <strong>Apple Store</strong>
            </span>
          </a>
        </div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
const footerLinks = ref([
  {
    title: '公司',
    links: [ { name: '关于我们', url: '#' }, { name: '职业', url: '#' }, { name: '其他', url: '#' } ]
  },
  {
    title: '常见问题',
    links: [ { name: '帮助/常见问题', url: '#' }, { name: '问题', url: '#' }, { name: '客服', url: '#' } ]
  },
  {
    title: '更多',
    links: [ { name: '服务协议', url: '#' }, { name: '隐私政策', url: '#' }, { name: '商务洽谈', url: '#' }, { name: '帮助中心', url: '#' } ]
  }
]);
</script>

<style scoped>
.footer-wrapper {
  background: rgba(242, 246, 253, 1);
  padding: 60px 20px;
  width: 100%;
  box-sizing: border-box;
}

.footer-container {
  max-width: 1200px;
  margin: 0 auto;
}

.footer-col {
  margin-bottom: 30px;
}

/* Brand Styles */
.footer-brand h3 {
  font-size: 28px;
  font-weight: 600;
  color: #303133;
  margin: 0 0 10px 0;
}
.footer-brand p {
  font-size: 14px;
  color: #909399;
  margin: 0;
}

/* Link List Styles */
.footer-col h4 {
  font-size: 16px;
  font-weight: 600;
  color: #303133;
  margin: 0 0 16px 0;
}
.footer-col ul {
  list-style: none;
  padding: 0;
  margin: 0;
}
.footer-col ul li {
  margin-bottom: 10px;
}
.footer-col .el-link {
  font-size: 14px;
  color: #606266;
  font-weight: 400;
}
.footer-col .el-link:hover {
  color: var(--el-color-primary);
}

/* Social and App Download Styles */
.footer-social {
  display: flex;
  flex-direction: column;
}
.social-icons {
  display: flex;
  gap: 15px;
  margin-bottom: 24px;
}
.social-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: #fff;
  color: #303133;
  box-shadow: 0 4px 14px rgba(0, 0, 0, 0.07);
  transition: all 0.3s ease;
}
.social-icon:hover {
  transform: translateY(-3px);
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.1);
}
.social-icon.instagram {
  background: linear-gradient(45deg, #feda75, #fa7e1e, #d62976, #962fbf, #4f5bd5);
}

.download-title {
  color: #606266;
  font-weight: 500;
  margin-bottom: 16px;
}

.app-badge-icon {
  width: 24px;
  height: 24px;
  margin-right: 12px;
}

.app-badge-text {
  display: flex;
  flex-direction: column;
  text-align: left;
  line-height: 1.2;
}

.app-badge-text span {
  font-size: 10px;
}

.app-badge-text strong {
  font-size: 16px;
  font-weight: 600;
}

.app-badges {
  display: flex;
  gap: 15px;
  flex-wrap: wrap;
  /* 在小屏幕上允许换行 */
}

.social-icon:hover {
  transform: translateY(-3px);
  box-shadow: var(--el-box-shadow);
  color: var(--el-text-color-primary);
}

.social-icon.instagram {
  background: linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%);
  color: #fff;
}

.social-icon.instagram:hover {
  opacity: 0.9;
}

.social-icons {
  display: flex;
  gap: 15px;
  margin-bottom: 20px;
}

.social-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: #fff;
  color: var(--el-text-color-secondary);
  box-shadow: var(--el-box-shadow-light);
  transition: all 0.3s ease;
}

.app-badge {
  display: inline-flex;
  align-items: center;
  background-color: #404040;
  /* 深灰色背景 */
  color: #ffffff;
  padding: 8px 16px;
  border-radius: 20px;
  /* 圆角 */
  text-decoration: none;
  transition: background-color 0.2s;
}

.app-badge:hover {
  background-color: #2c2c2c;
  /* 悬停时颜色变深 */
}
/* Responsive Styles */
@media (max-width: 991px) {
  .footer-social {
    align-items: center;
    text-align: center;
  }
}

@media (max-width: 767px) {
  .footer-col {
    text-align: center;
    width: 100%;
    margin-bottom: 40px;
  }
  .footer-col:last-child {
    margin-bottom: 0;
  }
  .social-icons,
  .app-badges {
    justify-content: center;
  }
}
</style>