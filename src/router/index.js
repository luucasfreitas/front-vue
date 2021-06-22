import Vue from 'vue'
import VueRouter from 'vue-router'
import Base from '../views/Base/BaseComponent.vue'
import Login from '../views/Login.vue'
import Teste from '../views/Teste.vue'

// import App from '../App.vue'


//import Home from '../views/Home.vue'


Vue.use(VueRouter)

  const routes = [
    {
      path: '/',
      component: Login
    },
    {
      path: '/home',
      name: 'home',
      component: Base,
      children: [
        {
          path: '/',
          component: Teste
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

