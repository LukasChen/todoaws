import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';

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

export const router = createRouter({
  history: createWebHistory(),
  routes
});
