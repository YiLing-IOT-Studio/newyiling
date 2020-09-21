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
@keyframes swirl-in-right-fwd {
  0% {
    -webkit-transform: rotate(-540deg) scale(0);
    transform: rotate(-540deg) scale(0);
    -webkit-transform-origin: 100% 50%;
    transform-origin: 100% 50%;
    opacity: 0;
  }
  100% {
    -webkit-transform: rotate(0) scale(1);
    transform: rotate(0) scale(1);
    -webkit-transform-origin: 100% 50%;
    transform-origin: 100% 50%;
    opacity: 1;
  }
}
.joinhead {
  color: #fff;
  font-size: 50px;
  transition: all 0.5s;
  animation: swirl-in-right-fwd 1.5s 3 both;
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
