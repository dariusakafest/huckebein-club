import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [{
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/admin",
    name: "admin",
    component: () =>
      import( /* webpackChunkName: "seat" */ "../views/Admin.vue"),
  },
  {
    path: "/seat",
    name: "seat",
    component: () =>
      import( /* webpackChunkName: "seat" */ "../views/Seat.vue"),
  },
  {
    path: "/events",
    name: "events",
    component: () =>
      import( /* webpackChunkName: "event-preview" */ "../views/Events.vue"),
  },
  {
    path: "/event/:id",
    name: "event-preview",
    component: () =>
      import( /* webpackChunkName: "event-preview" */ "../views/EventPreview.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;