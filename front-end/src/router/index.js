import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Blog from '../views/Blog.vue'
import Resources from '../views/Resources.vue'
import Socials from '../views/Socials.vue'
import Tools from '../views/Tools.vue'
import Contact from '../views/Contact-Us.vue'

import Credit from '../views/Resources/Credit.vue'
import Loans from '../views/Resources/Loans.vue'
import SalaryNeg from '../views/Resources/SalaryNeg.vue'
import Budgeting from '../views/Resources/Budgeting.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/blog',
    name: 'Blog',
    component: Blog
  },
  {
    path: '/resources',
    name: 'Resources',
    component: Resources
  },
  {
    path: '/socials',
    name: 'Socials',
    component: Socials
  },
  {
    path: '/tools',
    name: 'Tools',
    component: Tools
  },
  {
    path: '/contact-us',
    name: 'Contact',
    component: Contact
  },
  {
    path: '/resources/credit',
    name: 'Credit',
    component: Credit
  },
  {
    path: '/resources/loans',
    name: 'Loans',
    component: Loans
  },
  {
    path: '/resources/salary-negotiation',
    name: 'SalaryNeg',
    component: SalaryNeg
  },
  {
    path: '/resources/budgeting',
    name: 'Budgeting',
    component: Budgeting
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
