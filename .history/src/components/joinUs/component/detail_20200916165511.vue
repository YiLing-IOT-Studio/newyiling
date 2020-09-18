<template>
  <div class="detailmain">
     <div class="iconfont icon_qianduankaifa temp"> </div>
     <div class="transform">
        <p class="direction">web前端</p>
      <div class="text">
       <p>作为翼灵物联网工作室最年轻的团队，</p>

       <p>协助后端共同搭建团队官网。</p>
       <p>我们的主要是利用HTML/CSS/JavaScript 等各种Web技术进行客户端产品的开发，</p>
       <P>完成客户端程序（也就是浏览器端）的开发，开发JavaScript以及Flash模块，</P>

       <P>同时结合后台开发技术模拟整体效果，</P>

       <P>进行丰富互联网的Web开发，致力于通过技术改善用户体验。</p>
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
   border:1px solid skyblue;
   border-radius: 100%;
   display: flex;
   justify-content: center;
   align-items: center;
   margin:0 20%;
   width:150px;
   height: 150px;
   transition: all 0.5s;
}
.temp:hover{
  font-size:120px;
}
.transform{
  position: relative;
  height: 200px;
  overflow: hidden;
}
.direction{
  position: absolute;
  color:#fff;
  width:50%;
  text-align: center;
  font-size:24px;
  font-weight: bolder;
}

.text{
   margin-top:200px;
   position: absolute;
   width:50%;
   color:#fff;
   text-align: center;
   transition:all 0.5s;
}
.transform:hover .text{
   margin-top:30px;
}
.imgs{
  position: absolute;
  width:50%;
  text-align: center;
  transition:all 0.3s;
}
</style>
