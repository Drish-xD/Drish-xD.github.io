import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Error from "../components/404.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/Portfolio",
    name: "Portfolio",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Portfolio.vue"),
  },
  {
    path: "/:pathMatch(.*)*",
    name: "Error",
    component: Error,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
