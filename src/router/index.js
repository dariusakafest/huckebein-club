import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [{
    path: "/",
    name: "Home",
    component: () =>
      import( /* webpackChunkName: "seat" */ "../views/Home.vue"),
  },
  {
    path: "/about",
    name: "About",
    component: () =>
      import( /* webpackChunkName: "seat" */ "../views/About.vue"),
  },
  {
    path: "/seat",
    name: "seat",
    component: () =>
      import( /* webpackChunkName: "seat" */ "../views/Seat.vue"),
  },
  {
    path: "/tickt-options",
    name: "tickt-options",
    component: () =>
      import( /* webpackChunkName: "seat" */ "../views/TicktOptions.vue"),
  },
  {
    path: "/payment",
    name: "payment",
    component: () =>
      import( /* webpackChunkName: "seat" */ "../views/Payment.vue"),
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