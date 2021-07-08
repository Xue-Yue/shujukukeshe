import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ECharts from "vue-echarts"

import installElementPlus from './plugins/element'

const app = createApp(App)
installElementPlus(app)
app.component('v-chart', ECharts).use(store).use(router).mount('#app')