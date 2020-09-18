<template>
  <div class="joinmain">
    <div class="joinhead">翼灵物联网工作室</div>
    <div class="route">
      <a @click="change">进入官网</a>
      <a>立即报名</a>
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
}
.joinhead {
  font-size: 50px;
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
