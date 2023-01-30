import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index.js'
import './assets/iconFont/iconfont.css' // 引入iconfont
import tool from './utils/tools'

import echarts from './utils/echarts'

const app = createApp(App);

app.config.globalProperties.$echarts = echarts
app.use(tool)
app.use(router)
app.mount('#app')
