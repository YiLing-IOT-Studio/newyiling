// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI)
Vue.config.productionTip = false
var htmlWidth = document.documentElement.clientWidth || document.body.clientWidth //获取屏幕宽度
var  htmlDom = document.getElementsByTagName('html')[0] //获取html
htmlDom.style.fontSize = htmlWidth*16/1071 + 'px'; //设置html字体大小为屏幕的十分之一
console.log(htmlWidth)
//监听窗口大小改变
window.addEventListener('resize', () => {
    var  htmlWidth = document.documentElement.clientWidth || document.body.clientWidth
    var  htmlDom = document.getElementsByTagName('html')[0]
    htmlDom.style.fontSize = htmlWidth *16/1071+ 'px';
}) 
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
