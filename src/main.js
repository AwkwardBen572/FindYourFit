import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import { auth } from './firebase'

let appInstance = null

auth.onAuthStateChanged(() => {
  if (!appInstance) {
    const app = createApp(App)
    app.use(createPinia())
    app.use(router)
    app.mount('#app')
    appInstance = app
  }
})
