import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import { Auth } from 'aws-amplify';

import Home from './views/Home.vue';
import SignUpPage from './views/SignUpPage.vue';
import AlbumsPage from './views/AlbumsPage.vue';
import AlbumDetailPage from './views/AlbumDetailPage.vue';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'Home',
    component: Home
  }, {
    path: '/signup',
    name: 'Sign Up',
    component: SignUpPage
  }, {
    path: '/albums',
    name: 'Albums',
    component: AlbumsPage,
    meta: { requiresAuth: true }
  }, {
    path: '/album/:id',
    name: 'AlbumDetailPage',
    component: AlbumDetailPage,
    meta: { requiresAuth: true }
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

router.beforeEach(async (to, _, next) => {
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth);
  const isAuthenticated = await Auth.currentUserInfo();

  if(requiresAuth && !isAuthenticated) {
    next("/");
  } else {
    next();
  }
});

export  { router };
