import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
    meta: {
      title: 'Home'
    }
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
    meta: {
      title: 'login'
    }
  },
  {
    path: '/account',
    name: 'account',
    meta: {
      title: 'Account'
    },
    // route level code-splitting
    // this generates a separate chunk (About.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('../views/Account.vue')
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

// Change document titles
router.beforeEach((to, _from, next) => {
  document.title = `Quizk | ${to.meta.title}`
  next()
})


// Route guard for auth routes
router.beforeEach((_to, _from, next) => {
  // if (to.meta.auth) {
  //   // include codes to get user info here
  //   const user = ...
  //   if (user) {
  //     next()
  //     return
  //   } else {
  //     next({ name: 'Login' })
  //   }
  // }
  next()
})

export default router
