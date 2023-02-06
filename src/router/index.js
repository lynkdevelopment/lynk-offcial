/* eslint-disable */
import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

/**
 * @for meta
 * @param title 
 * @param icon 
 * @param name 
 */

const constantRouter = [
  // 
  {
    path: "/",
    redirect: "/",
    component: ()=>import("@/views/layout/Index"),
    meta: { title: "5,5" },
    children: [
      {
        path: "/",
        name: "home",
        component: () => import("@/views/home/Index"),
        meta: { title: "index" },
      },
      {
        path: "/home",
        name: "home",
        component: () => import("@/views/home/Index"),
        meta: { title: "index" },
      },

      {
        path: "/index",
        name: "index",
        component: () => import("@/views/index/Index"),
        meta: { title: "index" },
      },

    ],
  },
  {
    path: "*",
    redirect: "/",
    component: ()=>import("@/views/layout/Index"),
    meta: { title: "5,5" },
    children: [
      {
        path: "*",
        name: "tab1",
        component: () => import("@/views/index/Index"),
        meta: { title: "5,5 " },
      },
    ],
  },

  // 404
  {
    path: '*',
    name: 'Index',
    component: () => import(/* webpackChunkName: "nopage" */ '@/views/home/Index'),
    meta: { title: '' },
  },
];

export default new Router({
  base: "/",
  mode: "history",//"hash",
  routes: constantRouter,
  scrollBehavior(to, from, savedPosition) {
    return { x: 0, y: 0 };
  },
});
