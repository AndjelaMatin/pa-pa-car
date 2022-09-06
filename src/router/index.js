import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import store from "@/store";
const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    meta: {
      requiresAuth: false,
    },
  },
  {
    path: "/login",
    name: "login",
    component: () =>
      import(/* webpackChunkName: "login" */ "../views/Login.vue"),
    meta: {
      requiresAuth: false,
    },
  },
  {
    path: "/signup",
    name: "signup",
    component: () =>
      import(/* webpackChunkName: "signup" */ "../views/Signup.vue"),
    meta: {
      requiresAuth: false,
    },
  },
  {
    path: "/rides",
    name: "rides",
    component: () =>
      import(/* webpackChunkName: "rides" */ "../views/Rides.vue"),
    meta: {
      requiresAuth: false,
    },
  },
  {
    path: "/newride",
    name: "newride",
    component: () =>
      import(/* webpackChunkName: "newride" */ "../views/NewRide.vue"),
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/profile",
    name: "profile",
    component: () =>
      import(/* webpackChunkName: "profile" */ "../views/Profile.vue"),
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/changeprofile",
    name: "changeprofile",
    component: () =>
      import(/* webpackChunkName: "changeprofile" */ "../views/ChangeProfile.vue"),
    meta: {
      requiresAuth: true,
    },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});
router.beforeEach((to, from, next) => {
  console.log(
    "stara: ",
    from.name,
    "nova: ",
    to.name,
    "korisnik:",
    store.currentUser
  );
  const noUser = store.currentUser === null;
  if (to.meta.requiresAuth && noUser) {
    console.log("****", store.currentUser);
    next("login");
  } else {
    next();
  }
});
export default router;
