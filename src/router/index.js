import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue';
import TalentMoz from '../views/TalentMoz';
import OnitLogin from '../views/OnitLogin';
import Plataforma from "../views/Plataforma";
import BlogHome from "../views/BlogHome"
import PostDetails from "../views/PostDetails"

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/talentMoz',
    name: 'TalentMoz',
    component: TalentMoz,
  },
  {
    path: '/login',
    name: 'Login',
    component: OnitLogin,
  },
  {
    path: '/post/:id/',
    name: 'PostDetais',
    component: PostDetails,
  },
  {
    path: '/onit',
    name: 'Onit',
    component: Plataforma,
  },
  {
    path: '/blog',
    name: 'Blog',
    component: BlogHome,
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
