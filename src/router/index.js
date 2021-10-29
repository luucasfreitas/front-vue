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
    component: LoginView
  },
  {
    path: '/patients',
    component: Base,
    children: [
      {
        path: '/',
        component: PatientsListView
      },
      {
        path: 'results',
        component: ResultsView
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

