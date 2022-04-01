import { createApp } from 'vue'
import { createPinia } from 'pinia'
import piniaPluginPersist from 'pinia-plugin-persist'
import router from '@/router'
import App from './App.vue'

const app = createApp(App)

app.use(createPinia().use(piniaPluginPersist))
  .use(router)
  .mount('#app')