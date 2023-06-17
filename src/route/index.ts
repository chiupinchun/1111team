import * as VueRouter from 'vue-router';

import Index from '../views/index.vue';

const routes: VueRouter.RouteRecordRaw[] = [
  {
    path: '/',
    component: Index
  }
];

const router = VueRouter.createRouter({
  history: VueRouter.createWebHashHistory(),
  routes
});

export default router;