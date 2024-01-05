// const { createRouter } = require("vue-router");
import { createRouter, createWebHistory } from "vue-router";

import HomeView from "../views/HomeView.vue";
import EditView from "../views/EditView.vue";

const routes = [
  {
    name: "home",
    path: "/",
    component: HomeView,
  },
  {
    name: "edit",
    path: "/edit/:id",
    component: EditView,
    props: true,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
