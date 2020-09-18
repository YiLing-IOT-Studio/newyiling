<template>
  <div class="joinmain">
    <div class="joinhead">翼灵物联网工作室</div>
    <div class="route">
      <button>进入官网</button>
      <button>立即报名</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'joinHead'
}
</script>

<style>
.joinmain {
  height: 200px;
  display: flex;
  justify-content: flex-end;
  flex-direction: column;
  align-items: center;
  font-family: 'Playball', cursive;
}
.joinhead {
  font-size: 40px;
}
.route button {
  border: 0;
  outline: 0;
  height: 40px;
  margin: 20px 20px;
  width: 270px;
  color: #333;
  border-radius: 20px;
  background-color: aliceblue;
  border-radius: 10px;
  transition: all 0.5s;
  font-size: large;
  text-decoration: none;
  line-height: 40px;
  text-align: center;
}
.route button:hover {
  background: #03e9f4;
  color: #fff;
  box-shadow: 0 0 5px #03e9f4, 0 0 25px #03e9f4, 0 0 50px #03e9f4, 0 0 100px #03e9f4;
}
</style>
