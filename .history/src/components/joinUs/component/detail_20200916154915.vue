<template>
  <div class="detailmain">
     <div class="iconfont icon_qianduankaifa temp"> </div>
     <div class="transform">
      <div class="text">
       <p>作为翼灵物联网工作室最年轻的团队，</p>

       <p>协助后端共同搭建团队官网。</p>
       <p>我们的主要是利用HTML/CSS/JavaScript 等各种Web技术进行客户端产品的开发，</p>
       <P>完成客户端程序（也就是浏览器端）的开发，开发JavaScript以及Flash模块，</P>

       <P>同时结合后台开发技术模拟整体效果，</P>

       <P>进行丰富互联网的Web开发，致力于通过技术改善用户体验。</p>
      </div>
      <div class="imgs">
        <img src="@/assets/img/前端.jpg" alt="">
      </div>
     </div>
  </div>
</template>

<script>
export default {
  name: 'detail'
}
</script>

<style>
.detailmain{
  height: 400px;
}
.temp{
   display: flex;
   justify-content: center;
   width:50%;
   transition: all 0.5s;
}
.transform{
  position: relative;
}
.text{
   position: absolute;
   width:50%;
   color:#fff;
   text-align: center;
   transition:all 0.5s;
}
.imgs{
  position: absolute;
  width:300px;
  height: 100px;
}

</style>
