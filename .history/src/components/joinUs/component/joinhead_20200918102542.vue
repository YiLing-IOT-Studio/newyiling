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
@keyframes bounce {
  from,
  20%,
  53%,
  80%,
  to {
    -webkit-animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    -webkit-transform: translate3d(0, 0, 0); /* 跳回到原点*/
    transform: translate3d(0, 0, 0);
  }

  40%,
  43% {
    -webkit-animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);
    animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);

    -webkit-transform: translate3d(0, -30px, 0); /* 向上跳30*/
    transform: translate3d(0, -30px, 0);
  }

  70% {
    -webkit-animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);
    animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);

    -webkit-transform: translate3d(0, -15px, 0); /* 向上跳15*/
    transform: translate3d(0, -15px, 0);
  }

  90% {
    -webkit-transform: translate3d(0, -4px, 0); /* 向上跳4*/
    transform: translate3d(0, -4px, 0);
  }
}
.joinhead {
  color: #fff;
  font-size: 50px;
  transition: all 0.5s;
  animation: bounce 1s ease-in-out infinite;
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
