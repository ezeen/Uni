import { createRouter, createWebHistory } from 'vue-router'
import LandingPage from '../components/LandingPage.vue'
import About from '../components/AboutUs.vue'
import Login from '../components/Login.vue'
import SignUp from '../components/SignUp.vue'
import Register from '../components/Register.vue'
import Students from '../components/Students.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'landingpage',
      component: LandingPage
    },
    {
      path: '/about',
      name: 'aboutus',
      component: About
    },
    {
      path: '/signup',
      name: 'signup',
      component: SignUp
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/Register',
      name: 'register',
      component: Register
    },
    {
        path: '/Students',
        name: 'students',
        component: Students
      }
  ]
})

export default router