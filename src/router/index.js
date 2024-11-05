import { createRouter, createWebHistory } from 'vue-router';


import HomeAr from '../components/ar/KidsPage.vue';
import HomeEn from '../components/en/KidsPage.vue';

const englishRoutes = [
  { path: '/en/', name: 'IletsEn', component: HomeEn },
];

const arabicRoutes = [
  { path: '/', name: 'IletsAr', component: HomeAr },
];

const routes = [
  ...englishRoutes,
  ...arabicRoutes,
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;