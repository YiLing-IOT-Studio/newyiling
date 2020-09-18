<template>
  <div class="register">
    <div id="container">
      <input id="text1" type="text" />
      <div id="button">username</div>
    </div>
    <div id="container">
      <input id="text1" type="text" />
      <div id="button">emali</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'register'
}
</script>

<style>
.register {
  display: flex;
  flex-direction: row;
  justify-content: center;
}
#container {
  margin: 10px 10px;
}
#container input {
  display: inline-block;
  border: 0;
  outline: 0;
  height: 30px;
  width: 120px;
  border-radius: 30px;
  background-color: rgb(104, 101, 101);
  color: #fff;
  font-size: 20px;
  transition: 0.2s;
}
#container #button {
  display: inline-block;
  height: 30px;
  background: linear-gradient(90deg, #90f2ff, #99ddcc);
  line-height: 30px;
  font-size: 20px;
  color: #333;
  font-weight: bold;
  width: 170px;
  border-radius: 30px;

  cursor: pointer;
  margin-left: -170px;
  text-align: center;
  transition: 0.2s;
}
#container:hover input {
  width: 400px;
  animation: inputAction 0.4s ease-out;
}

#container:hover #button {
  width: 100px;
  height: 30px;
  margin-left: -100px;
  animation: btnAction 0.4s ease-out;
}

@keyframes inputAction {
  0% {
    width: 400px;
  }
  60% {
    width: 450px;
  }
  100% {
    width: 400px;
  }
}

@keyframes btnAction {
  0% {
    width: 100px;
    height: 30px;
    margin-left: -100px;
  }
  60% {
    width: 60px;
    height: 30px;
    margin-left: 10px;
  }
  100% {
    width: 100px;
    height: 30px;
    margin-left: -100px;
  }
}
</style>
