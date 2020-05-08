import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import register from '@/views/register.vue'
import accountregister from '@/views/AccountRegister.vue'
import next from '@/views/Nextstep.vue'
import complete from '@/views/complete.vue'
import login from '@/views/login.vue'
import admin from '@/views/admin.vue'
import addbill from '@/views/AddBill.vue'
import calendar from '@/views/Calendar.vue'
import billdetail from '@/views/BillDetail.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/register',
    name: 'register',
    component: register
  },
  {
    path: '/accountregister',
    name: 'accountregister',
    component: accountregister
  },
  {
    path: '/nextstep',
    name: 'nextstep',
    component: next
  },
  {
    path: '/complete',
    name: 'complete',
    component: complete
  },
  {
    path: '/login',
    name: 'login',
    component: login
  },
  {
    path: '/addbill',
    name: 'addbill',
    component: addbill
  },
  {
    path: '/admin',
    name: 'admin',
    component: admin,
  /*   meta:{
      auth:true
    }  */
  },
  {
    path: '/calendar',
    name: 'calendar',
    component: calendar
  },
  {
    path: '/billdetail',
    name: 'billdetail',
    component: billdetail
  },
]

const router = new VueRouter({
  routes
})

export default router
