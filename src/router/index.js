import { createRouter, createWebHistory } from 'vue-router';

import HomeAr from '../components/ar/KidsPage.vue';
import HomeEn from '../components/en/KidsPage.vue';
import CartEn from '../components/en/CartPage.vue';
import CartAr from '../components/ar/CartPage.vue';

const englishRoutes = [
  { 
    path: '/en/', 
    name: 'HomeEn', 
    component: HomeEn, 
    meta: {
      title: 'Kids Page - English',
      description: 'Explore fun and educational content for kids in English.',
      canonical: '/en/'
    }
  },
  { 
    path: '/en/cart/', 
    name: 'CartEn', 
    component: CartEn, 
    meta: {
      title: 'Cart - English',
      description: 'Review and manage your shopping cart in English.',
      canonical: '/en/cart/'
    }
  }
];

const arabicRoutes = [
  { 
    path: '/', 
    name: 'HomeAr', 
    component: HomeAr, 
    meta: {
      title: 'صفحة الأطفال - عربي',
      description: 'استكشف محتوى ممتع وتعليمي للأطفال باللغة العربية.',
      canonical: '/'
    }
  },
  { 
    path: '/ar/cart/', 
    name: 'CartAr', 
    component: CartAr, 
    meta: {
      title: 'عربة التسوق - عربي',
      description: 'مراجعة وإدارة عربة التسوق الخاصة بك باللغة العربية.',
      canonical: '/ar/cart/'
    }
  }
];

const routes = [
  ...englishRoutes,
  ...arabicRoutes,
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

// Navigation guard to set meta tags
router.beforeEach((to, from, next) => {
  if (to.meta.title) {
    document.title = to.meta.title;
  }
  if (to.meta.description) {
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', to.meta.description);
    } else {
      const newMetaDescription = document.createElement('meta');
      newMetaDescription.setAttribute('name', 'description');
      newMetaDescription.setAttribute('content', to.meta.description);
      document.head.appendChild(newMetaDescription);
    }
  }
  if (to.meta.canonical) {
    let linkCanonical = document.querySelector('link[rel="canonical"]');
    if (linkCanonical) {
      linkCanonical.setAttribute('href', window.location.origin + to.meta.canonical);
    } else {
      linkCanonical = document.createElement('link');
      linkCanonical.setAttribute('rel', 'canonical');
      linkCanonical.setAttribute('href', window.location.origin + to.meta.canonical);
      document.head.appendChild(linkCanonical);
    }
  }
  next();
});

export default router;
