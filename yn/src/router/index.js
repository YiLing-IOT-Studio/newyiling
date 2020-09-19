import Vue from 'vue'
import Router from 'vue-router'
import main from '@/components/main'
import direction from '@/components/direction'
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
      path: '/direction/:id',

      name: 'direction',
      component: direction
    }
  ]
})
