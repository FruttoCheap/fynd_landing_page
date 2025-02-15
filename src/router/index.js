import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import Team from '../views/Team.vue';
import FAQ from '../views/Faq.vue';
import Quiz from '../views/Quiz.vue';
import Fynder from '../views/Fynder.vue';

const routes = [
  { path: '/', component: Home },
  { path: '/team', component: Team },
  { path: '/faq', component: FAQ },
  { path: '/quiz', component: Quiz },
  { path: '/fynder', component: Fynder },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;