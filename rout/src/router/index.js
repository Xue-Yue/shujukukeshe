import { createRouter, createWebHistory } from 'vue-router'

import Home from '../views/Home.vue'
import Course from "../views/Course"
import Temperament from "../views/Temperament";
import Adjust from "../views/Adjust";
import Empty from "../views/Empty";
import Login from "../views/Login";

const routes = [
  {
    path:'/',
    name:'index',
    component: Home
  },
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/course',
    name: 'Course',
    component:Course
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
  },
  {
    path: '/temper',
    name: 'Temperament',
    component: Temperament
  },
  {
    path: '/adjust',
    name:'Adjust',
    component: Adjust
  },
  {
    path: '/empty',
    name: 'Empty',
    component: Empty
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
