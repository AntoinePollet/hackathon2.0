import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'
import { createPinia } from 'pinia'

// Vuetify
import vuetify from "./plugins/vuetify"

const pinia = createPinia();

createApp(App)
    .use(router)
    .use(pinia)
    .use(vuetify)
    .mount('#app')
