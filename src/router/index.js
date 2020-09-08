import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home";
import AddSmoothie from "../components/AddSmoothie";
import EditSmoothie from "../components/EditSmoothie";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/add-smoothie",
    name: "AddSmoothie",
    component: AddSmoothie
  },
  {
    path: "/edit-smoothie/:id",
    name: "EditSmoothie",
    component: EditSmoothie
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
