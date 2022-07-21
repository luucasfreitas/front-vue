import Vue from "vue";
import VueRouter from "vue-router";
import Base from "../views/Base/BaseComponent.vue";
import CardSelectionView from "../views/CardSelectionView.vue";
import LoginView from "../views/LoginView.vue";
import PatientsListView from "../views/PatientsListView.vue";
import ResultsView from "../views/ResultsView.vue";
import SensorView from "../views/SensorView.vue";
import store from "../store";
// import App from '../App.vue'

//import Home from '../views/Home.vue'

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "login",
    component: LoginView,
    meta: { guest: true }
  },
  {
    path: "/patients",
    name: "patients",
    component: Base,
    meta: { requiresAuth: true },
    children: [
      {
        path: "/",
        component: CardSelectionView,
        name: "card_selection",
        meta: { requiresAuth: true }
      },
      {
        path: "updrs_patients",
        component: PatientsListView,
        name: "updrs_patients",
        meta: { requiresAuth: true }
      },
      {
        path: "sensor_patients",
        component: PatientsListView,
        name: "sensor_patients",
        meta: { requiresAuth: true }
      },
      {
        path: "updrs",
        component: ResultsView,
        name: "updrsResult",
        meta: { requiresAuth: true }
      },
      {
        path: "sensor",
        component: SensorView,
        name: "sensor",
        meta: { requiresAuth: true }
      }
    ]
  }

  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (store.getters["session/isAuthenticated"]) {
      next();
      return;
    }
    next("/");
  } else {
    next();
  }
});

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.guest)) {
    if (store.getters["session/isAuthenticated"]) {
      next("/patients");
      return;
    }
    next();
  } else {
    next();
  }
});

export default router;
