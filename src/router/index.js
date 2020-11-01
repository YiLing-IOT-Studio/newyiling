import Vue from 'vue'
import Router from 'vue-router'
import main from '@/components/main'
import match from '@/components/match'
import $ from 'jquery' 
//import 'bootstrap/dist/css/bootstrap.min.css'
//import 'bootstrap/dist/js/bootstrap.min'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/studyPage',

      name: 'main',
      component: main
    },
    
    {
      path: '/match',

      name: 'match',
      component: match
    },
    {
      path: '/direction/flush',
      component: ()=>import('../components/flush.vue')
    },
    {
      path: '/direction/back',
      component: ()=>import('../components/back.vue')
    },
    {
      path: '/direction/android',
      component: ()=>import('../components/android.vue')
    },
    {
      path: '/direction/front',
      component: ()=>import('../components/front.vue')
    },
  ]
})
