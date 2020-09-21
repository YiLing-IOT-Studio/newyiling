<template>
  <div>
    <div class="joinmain">
      <div class="joinhead">翼灵物联网工作室</div>
      <div class="route">
        <a @click="change">进入官网</a>
        <a href="#newregis">立即报名</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'joinHead',
  methods: {
    change() {
      this.$router.push('/aboutus')
    }
  }
}
</script>

<style>
.joinmain {
  height: 450px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  font-family: 'Playball', cursive;
  z-index: 10px;
  text-shadow: -1px 0 #333, 0 -1px #333, 1px 0 #fff, 0 1px #fff;
}
@keyframes swing {
  /*围绕一个点左右荡秋千摆动：rotate3d(x,y,z,angle)围绕z轴进行旋转*/
  20% {
    transform: rotate3d(0, 0, 1, 15deg);
  }

  40% {
    transform: rotate3d(0, 0, 1, -10deg);
  }

  60% {
    transform: rotate3d(0, 0, 1, 5deg);
  }

  80% {
    transform: rotate3d(0, 0, 1, -5deg);
  }

  to {
    transform: rotate3d(0, 0, 1, 0deg);
  }
}
.joinhead {
  color: #fff;
  font-size: 50px;
  transition: all 0.5s;
  animation: swing 1s linear infinite top center;
}
.route a {
  display: inline-block;
  border: 0;
  outline: 0;
  height: 40px;
  margin: 20px 20px;
  width: 270px;
  color: #03e9f4;
  border-radius: 20px;
  border: 1px solid #03e9f4;
  transition: all 0.5s;
  font-weight: bolder;
  font-size: larger;
  line-height: 40px;
  text-align: center;
  text-decoration: none;
}
.route a:hover {
  background: #03e9f4;
  color: #fff;
  box-shadow: 0 0 5px #03e9f4, 0 0 25px #03e9f4, 0 0 50px #03e9f4, 0 0 100px #03e9f4;
}
</style>
