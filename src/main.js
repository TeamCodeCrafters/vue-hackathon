import './assets/main.css'
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import "@/utils/navbar.js";

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import vueScrollto from 'vue-scrollto';

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

app.mount('#app')
