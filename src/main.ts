import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from "@/router"
import store from '@/store'
import * as Cesium from "cesium";
declare global {
    interface Window {
        CESIUM_BASE_URL: string
    }
}
const app = createApp(App)
createApp(App).mount('#app')

app.use(store).use(router)
router.isReady().then(() => {
    app.mount("#app")
})
