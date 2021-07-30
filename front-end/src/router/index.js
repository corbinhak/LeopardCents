import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Blog from '../views/Blog.vue'
import Resources from '../views/Resources.vue'
import Socials from '../views/Socials.vue'
import Tools from '../views/Tools.vue'
import Contact from '../views/Contact-Us.vue'

import CreditResource from '../views/Resources/Credit.vue'
import LoansResource from '../views/Resources/Loans.vue'
import SalaryNegResource from '../views/Resources/SalaryNeg.vue'
import BudgetingResource from '../views/Resources/Budgeting.vue'
import InvestingResource from '../views/Resources/Investing.vue'
import TaxesResource from '../views/Resources/Taxes.vue'
import RetirementResource from '../views/Resources/Retirement.vue'
import OnCampusResource from '../views/Resources/OnCampus.vue'
import HousingResource from '../views/Resources/Housing.vue'

import CreditTool from '../views/Tools/Credit.vue'
import RentingTool from '../views/Tools/Renting.vue'


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
    name: 'CreditResource',
    component: CreditResource
  },
  {
    path: '/resources/loans',
    name: 'LoansResource',
    component: LoansResource
  },
  {
    path: '/resources/salary-negotiation',
    name: 'SalaryNegResource',
    component: SalaryNegResource
  },
  {
    path: '/resources/budgeting',
    name: 'BudgetingResource',
    component: BudgetingResource
  },
  {
    path: '/resources/investing',
    name: 'InvestingResource',
    component: InvestingResource
  },
  {
    path: '/resources/taxes',
    name: 'TaxesResource',
    component: TaxesResource
  },
  {
    path: '/resources/retirement',
    name: 'RetirementResource',
    component: RetirementResource
  },
  {
    path: '/resources/oncampus',
    name: 'OnCampusResource',
    component: OnCampusResource
  },
  {
    path: '/resources/housing',
    name: 'HousingResource',
    component: HousingResource
  },
  {
    path: '/tools/credit',
    name: 'CreditTool',
    component: CreditTool
  },
  {
    path: '/tools/renting',
    name: 'RentingTool',
    component: RentingTool
  }

]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
