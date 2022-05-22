import Vue from 'vue'
import VueRouter from 'vue-router'
import Base from '../views/Base/BaseComponent.vue'
import LoginView from '../views/LoginView.vue'
import PatientsListView from '../views/PatientsListView.vue'
import ResultsView from '../views/ResultsView.vue'


// import App from '../App.vue'


//import Home from '../views/Home.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'login',
    component: LoginView
  },
  {
    path: '/patients',
    name: 'patients',
    component: Base,
    children: [
      {
        path: '/',
        component: PatientsListView,
        name: 'card_selection'
      },
      {
        path: 'updrs_patients',
        component: PatientsListView,
        name: 'patients_list_updrs'
      },
      {
        path: 'sensor_patients',
        component: PatientsListView,
        name: 'patients_list_sensor'
      },
      {
        path: 'results',
        component: ResultsView,
        name: 'results'

      }
    ]

  },


  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

