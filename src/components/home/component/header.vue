<template>
  <div class="header">
    <div class="login">登录</div>
    <div class="logo_area"><img :src="logoUrl" alt=" " title="这是logo"></div>
    <ul class="header_ul">
      <router-link :to="{name: 'home'}" tag="li">翼灵官网</router-link>
      <router-link :to="{name: 'joinus'}" tag="li">加入我们</router-link>
      <router-link :to="{name: 'aboutUs'}" tag="li">关于我们</router-link>
      <router-link :to="{name: 'aboutUs'}" tag="li">开源空间</router-link>
      <router-link :to="{name: 'aboutUs'}" tag="li">签到系统</router-link>
      <router-link :to="{name: 'aboutUs'}" tag="li">答题系统</router-link>
      <div class="clearfloat"></div>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'homeheader',
  data () {
    return {
      logoUrl: require('@/assets/img/logo.png')
    }
  }
}
</script>

<style scoped>
.clearfloat{
  width: 0;
  height: 0;
  padding: 0;
  margin: 0;
  clear: both;
}
.header{
  background-color: #ffffff;
  min-width: 1600px;
  height: 80px;
  overflow: hidden;
  box-shadow: 1px 1px 0px 0px #ccc;
}
.login{
  float: right;
  height: 50px;
  padding: 15px;
  line-height: 50px;
}
.header_ul{
  width:1200px;
  height: 50px;
  padding: 15px 15px;
  text-align: center;
  overflow: hidden;
}
.header_ul li{
  position:relative;
  float: left;
  width:200px;
  height: 50px;
  line-height: 50px;
  font-size: 24px;
  cursor: pointer;
}
.header_ul li:hover{
  color: aqua;
}
.logo_area{
  float: left;
  padding-left:50px;
}
.logo_area img{
  height: 100%;
}
.router-link-active::before{
  content: "";
  display: block;
  position: absolute;
  width: 120px;
  height: 5px;
  top:60px;
  left:40px;
  border-radius: 2px;
  background-color: #409EFF;
  z-index: 2000;
}
</style>
