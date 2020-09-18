import Vue from 'vue'
import Router from 'vue-router'
import aboutUs from '@/components/aboutUs/aboutUs'
import joinUs from '@/components/joinUs/joinUs'
import HelloWorld from '@/components/HelloWorld'
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
    },
    {
      path: '/',
      name: 'hellowrold',
      component: HelloWorld
    }
  ]
})
