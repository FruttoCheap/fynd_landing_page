import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import Team from '../views/Team.vue';
import FAQ from '../views/Faq.vue';
import Quiz from '../views/Quiz.vue';

const routes = [
  { path: '/', component: Home },
  { path: '/team', component: Team },
  { path: '/faq', component: FAQ },
  { path: '/quiz', component: Quiz },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;