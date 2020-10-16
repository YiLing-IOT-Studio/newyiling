import Vue from 'vue'
import Router from 'vue-router'
import aboutUs from '@/components/aboutUs/aboutUs'
import joinUs from '@/components/joinUs/joinUs'
import Home from '@/components/home/home'
import Index from '@/components/index'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index,
      redirect: '/home'
    },
    {
      path: '/home',
      name: 'home',
      component: Home
    },
    {
      path: '/aboutus',
      name: 'aboutUs',
      component: aboutUs
    },
    {
      path: '/joinus',
      name: 'joinus',
      component: joinUs
    }
  ]
})
