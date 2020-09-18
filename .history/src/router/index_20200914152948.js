import Vue from 'vue'
import Router from 'vue-router'
import aboutUs from '@/components/aboutUs/aboutUs'
import joinUs from '@/components/joinUs/joinUs'

Vue.use(Router)

export default new Router({
  routes: [
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
