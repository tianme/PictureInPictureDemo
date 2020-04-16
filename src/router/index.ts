import Vue from 'vue';

import VueRouter, { RouteConfig } from 'vue-router';
import Home from '../views/Home.vue';

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: '/',
    redirect: '/picture-in-picture-demo/dist/home',
  },
  {
    path: '/picture-in-picture-demo/dist/home',
    name: 'Home',
    component: Home,
  },
  {
    path: '/picture-in-picture-demo/dist/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  routes,
});

export default router;
