import { createApp } from 'vue'
import { createPinia } from 'pinia'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import App from './App.vue'
// import router from './router'
import { ElPagination } from 'element-plus'
import zhCn from 'element-plus/es/locale/lang/zh-cn'

const app = createApp(App)
app.use(ElPagination, { locale: zhCn })
app.use(createPinia())
// app.use(router)
app.use(ElementPlus)

app.mount('#app')
