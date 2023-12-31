import './assets/main.css'
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import 'bootstrap-icons/font/bootstrap-icons.css';
import "@/utils/navbar.js";

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import vueScrollto from 'vue-scrollto';
import { createPinia } from 'pinia'

const app = createApp(App)

app.use(vueScrollto, {
    container: "body",
    duration: 100,
    easing: "ease",
    offset: -45,
    force: true,
    cancelable: true,
    onStart: false,
    onDone: false,
    onCancel: false,
    x: false,
    y: true
})

app.use(router)
app.use(createPinia())

app.mount('#app')
