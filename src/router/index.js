import { createRouter, createWebHistory } from "vue-router";
import store from '@/store'
const routes = [
  {
    path: "/home",
    name: "home",
    component: () =>
      import(/* webpackChunkName: "home" */ "../views/Home.vue"),
    meta:{
      needsUser: false,
    },
    },
  {
    path: "/login",
    name: "login",
    component: () =>
      import(/* webpackChunkName: "login" */ "../views/Login.vue"),
    meta:{
        needsUser: false,
      },
    },
  {
    path: "/signup",
    name: "signup",
    component: () =>
      import(/* webpackChunkName: "signup" */ "../views/Signup.vue"),
      meta:{
        needsUser: false,
      },
    },
  {
    path: "/rides",
    name: "rides",
    component: () =>
      import(/* webpackChunkName: "rides" */ "../views/Rides.vue"),
      meta:{
        needsUser: false,
      },
    },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
