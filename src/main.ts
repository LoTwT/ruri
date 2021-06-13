import { createApp } from 'vue'
import App from './App.vue'
import router from "@/router/router"

import "@/assets/css/main.css"

createApp(App).use(router).mount('#app')
