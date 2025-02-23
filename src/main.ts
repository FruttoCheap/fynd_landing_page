import { createApp } from 'vue';
import './assets/tailwind.css';
import './style.css';
import App from './App.vue';
import router from './router/index.js';
import '@fortawesome/fontawesome-free/css/all.css';
import i18n from './i18n';
import Vue3Spline from 'vue3-spline';

const app = createApp(App);
app.use(router);
app.use(i18n);
app.use(Vue3Spline);
app.mount('#app');
