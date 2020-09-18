import Vue from 'vue'
import Router from 'vue-router'
import aboutUs from '@/components/aboutUs/aboutUs'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'aboutUs',
      component: aboutUs
    }
  ]
})
