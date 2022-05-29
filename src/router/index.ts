import { createRouter, createWebHistory } from 'vue-router'
import { TRANSITION_TYPES } from '@/data/constants'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import Exam from '../views/Exam.vue'
import Account from '../views/Account.vue'

export type RouteMeta = {
  title: string
  displayOrder: number
  transitionType: TRANSITION_TYPES
}

const routes = [
  {
    path: '/login',
    name: 'login',
    component: Login,
    meta: {
      title: 'Login',
      displayOrder: 0,
      transitionType: TRANSITION_TYPES.NONE
    } as RouteMeta
  },
  {
    path: '/',
    name: 'home',
    component: Home,
    meta: {
      title: 'Home',
      displayOrder: 1,
      transitionType: ''
    } as RouteMeta
  },
  {
    path: '/exam',
    name: 'exam',
    component: Exam,
    meta: {
      title: 'Exam',
      displayOrder: 2,
      transitionType: ''
    } as RouteMeta
  },
  {
    path: '/account',
    name: 'account',
    component: Account,
    meta: {
      title: 'Account',
      displayOrder: 3,
      transitionType: ''
    } as RouteMeta
    // route level code-splitting
    // this generates a separate chunk (About.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: () => import('../views/Account.vue')
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

// Change document titles and create transition type based on route's position
router.beforeEach((to, from, next) => {
  const toMeta = to.meta as RouteMeta
  const fromMeta = from.meta as RouteMeta
  to.meta.transitionType =
    toMeta.displayOrder - fromMeta.displayOrder > 0
      ? TRANSITION_TYPES.SLIDE_DOWN
      : TRANSITION_TYPES.SLIDE_UP
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
