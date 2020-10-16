<template>
  <div>
    <full-page :options='options' id="fullpage" ref="fullpage">
      <div class='section'>
        <first-page></first-page>
      </div>
      <div class='section'>
        <div class='box2'>
        section2
        </div>
      </div>
      <div class='section'>
        <div class='box3'>
        section3
        </div>
      </div>
      <div class='section'>
        <div class='box3'>
        section3
        </div>
      </div>
      <div class='section'>
        <div class='box3'>
        section3
        </div>
      </div>
      <div class='section'>
        <div class='box3'>
        section3
        </div>
      </div>
  </full-page>
  </div>
</template>

<script>
import 'fullpage.js/vendors/scrolloverflow' // Optional. When using scrollOverflow:true
import FirstPage from './mainpages/firstpage.vue'
export default {
  components: {
    FirstPage
  },
  data () {
    return {
      options: {
        css3: true, // 是否使用 CSS3 transforms 滚动,默认false
        licenseKey: null,
        afterLoad: this.afterLoad,
        autoScrolling: true, // 是否使用插件的滚动方式，如果选择 false，则会出现浏览器自带的滚动条
        scrollOverflow: false, // 内容超过满屏时是否显示滚动条，需要jquery.slimscroll插件
        scrollBar: false, // true则是一滚动就是一整屏
        easing: 'easeInOutCubic', // 滚动方式
        easingcss3: 'ease',
        resize: true, // 字体是否随着窗口缩放而缩放
        menu: '#menu', // 绑定菜单，设定相关属性和anchors的值对应后，菜单可以控制幻灯片
        // navigation: true,
        // anchors: ['page1', 'page2', 'page3'],
        scrollingSpeed: 700, // 页面滚动速度
        paddingTop: '0px', // 设置每个section顶部的padding，当我们要设置一个固定在顶部的菜单、导航、元素等时使用
        paddingTBottom: '0px', // 设置每个sectiond底部的padding，当我们要设置一个固定在顶部的菜单、导航、元素等时使用
        continuousVertical: false, // 是否循环滚动，默认为false。如果设置为true，则页面会循环滚动，而不像loopTop或loopBottom那样出现跳动，注意这个属性和loopTop、loopBottom不兼容和，不要同时设置
        sectionsColor: ['#fff', '#000000', '#fff', '#000', '#4BBFC3', '#ccddff']
      }
    }
  },
  methods: {
    afterLoad: function(origin, destination, direction) {
      // afterLoad为滚动某一页后的回调函数，可在其中定义一些操作
      console.log('After load....')
      console.log(destination)
    }
  }
}
</script>

<style scoped>
</style>
