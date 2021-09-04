import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

// popperjs
import '@popperjs/core'
// bootstrap
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'


// Css
import './css/main.scss'


import VueKonva from "vue-konva";


Vue.use(VueKonva);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");