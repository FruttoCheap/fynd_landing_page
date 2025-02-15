import { createApp } from 'vue'
import './assets/tailwind.css';
import './style.css';
import App from './App.vue'
import router from './router/index.js';
import '@fortawesome/fontawesome-free/css/all.css';

const app = createApp(App);
app.use(router);
app.mount('#app');
