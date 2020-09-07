import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home";
import AddSmoothie from "../components/AddSmoothie";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/addSmoothie",
    name: "AddSmoothie",
    component: AddSmoothie
  }
];

const router = new VueRouter({
  mode: "hash",
  base: process.env.BASE_URL,
  routes
});

export default router;
