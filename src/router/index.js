import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [{
    path: "/",
    name: "Home",
    component: () =>
      import( /* webpackChunkName: "Home" */ "../views/Home.vue"),
  },
  {
    path: "/about",
    name: "about",
    component: () =>
      import( /* webpackChunkName: "About" */ "../views/About.vue"),
  },
  {
    path: "/galerie",
    name: "galerie",
    component: () =>
      import( /* webpackChunkName: "About" */ "../views/Galerie.vue"),
  },
  {
    path: "/seat",
    name: "seat",
    component: () =>
      import( /* webpackChunkName: "Seat" */ "../views/Seat.vue"),
  },
  {
    path: "/firmenfeiern",
    name: "firmenfeiern",
    component: () =>
      import( /* webpackChunkName: "Firmenfeiern" */ "../views/Firmenfeiern.vue"),
  },
  {
    path: "/anfahrt-kontakt",
    name: "anfahrt-kontakt",
    component: () =>
      import( /* webpackChunkName: "AnfahrtKontakt" */ "../views/AnfahrtKontakt.vue"),
  },
  {
    path: "/impressum",
    name: "impressum",
    component: () =>
      import( /* webpackChunkName: "Impressum" */ "../views/Impressum.vue"),
  },
  {
    path: "/payment",
    name: "payment",
    component: () =>
      import( /* webpackChunkName: "Payment" */ "../views/Payment.vue"),
  },
  {
    path: "/events",
    name: "events",
    component: () =>
      import( /* webpackChunkName: "Events" */ "../views/Events.vue"),
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