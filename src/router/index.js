import Vue from 'vue'
import VueRouter from 'vue-router'
import Base from '../components/HelloWorld.vue'
import Login from '../views/Login.vue'

import App from '../App.vue'


//import Home from '../views/Home.vue'


Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Base',
    component: App,
    children: [
      {
        // UserProfile will be rendered inside User's <router-view>
        // when /user/:id/profile is matched
        path: 'teste',
        //name: 'taskslist',
        component:Base
      },
      {
        path: 'todo',
        component: Login
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

