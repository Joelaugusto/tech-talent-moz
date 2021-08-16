import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue';
import TalentMoz from '../views/TalentMoz';
import OnitLogin from '../views/OnitLogin';
import CreateUser from '../views/CreateUser';
import CompleteRegistration from '../views/CompleteRegistration.vue'
import PasswordRecoveryRequest from '../views/PasswordRecoveryRequest.vue';
import PasswordRecoveryReset from '../views/PasswordRecoveryReset.vue';
import Plataforma from "../views/Plataforma";
import BlogHome from "../views/BlogHome"
import PostDetails from "../views/PostDetails"
import NotFoundPage from "../views/NotFoundPage.vue"

import api from '../services/api'

let routes = [
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
    path: '/auth/login',
    name: 'login',
    component: OnitLogin,
  },
  {
    path: '/auth/password/request',
    name: 'PasswordRecoveryRequest',
    component: PasswordRecoveryRequest,
  },
  {
    path: '/auth/password/reset/:token',
    name: 'PasswordRecoveryReset',
    component: PasswordRecoveryReset,
  },
  {
    path: '/users/create',
    name: 'CreateUsers',
    component: CreateUser,
  },
  {
    path: '/users/complete-registration',
    name: 'complete-registration',
    component: CompleteRegistration,
    meta: {
      requiresAuth: true  
    }
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
    meta: {
      requiresAuth: true  
    }
  },
  {
    path: '/blog',
    name: 'Blog',
    component: BlogHome,
  },
  { path: '/:pathMatch(.*)*', name: 'not-found', component: NotFoundPage },
  // if you omit the last `*`, the `/` character in params will be encoded when resolving or pushing
  { path: '/:pathMatch(.*)', name: 'bad-not-found', component: NotFoundPage },
]


let router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})


router.beforeEach(async (to, from, next) => {

  if(to.matched.some(record => record.meta.requiresAuth)) {
    if (localStorage.getItem('access-token') == null) {
        next({path: '/auth/login'})
    } else {
     await api.get('api/auth/me').then((loggedUser)=>{
        to.params.user = loggedUser.data;
        next()
      }).catch(()=>{
        //localStorage.removeItem('access-token')
        next({path: '/auth/login'})
      })
    }
  }
  next() 
})



export default router
