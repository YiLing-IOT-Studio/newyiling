<template>
  <div id="newregis">
    <div class="register">
      <div id="container">
        <input v-model="name" type="text" />
        <div id="button">姓名</div>
      </div>
      <div id="container">
        <input v-model="studentId" type="text" />
        <div id="button">学号</div>
      </div>
    </div>
    <div class="regisbutton">
      <a class="regis" href="#">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        加入我们
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'register',
  data() {
    return {
      name: '',
      studentId: ''
    }
  }
}
</script>

<style>
#newregis {
  background: #343a40;
  padding: 20px 0;
}
.register {
  margin: 0 auto;
  width: 40%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
#container input {
  display: inline-block;
  border: 0;
  outline: 0;
  height: 30px;
  width: 120px;
  border-radius: 30px;
  background-color: #fff;
  color: #333;
  padding: 0 10px;
  font-size: 20px;
  transition: 0.2s;
  z-index: -10;
}
#container #button {
  position: relative;
  z-index: 999;
  display: inline-block;
  height: 32px;
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
  width: 300px;
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
    width: 300px;
  }
  60% {
    width: 350px;
  }
  100% {
    width: 300px;
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
.regisbutton {
  display: flex;
  justify-content: center;
}
.regis {
  position: relative;
  display: inline-block;
  padding: 7px 35px;
  margin: 10px auto;
  color: #fff;
  font-size: 18px;
  text-decoration: none;
  transition: all 0.5s;
  letter-spacing: 4px;
  overflow: hidden;
}
.regis:hover {
  background: #03e9f4;
  border-radius: 30px;
  box-shadow: 0 0 5px #03e9f4, 0 0 25px #03e9f4, 0 0 50px #03e9f4, 0 0 200px #03e9f4;
}
.regis span {
  position: absolute;
  display: block;
}
.regis span:first-child {
  top: 0;
  left: -100%;
  width: 100%;
  height: 2px;
  background: linear-gradient(90deg, transparent, #03e9f4);
  animation: animate1 1s linear infinite;
}
@keyframes animate1 {
  0% {
    left: -100%;
  }
  50%,
  100% {
    left: 100%;
  }
}
.regis span:nth-child(2) {
  top: -100%;
  right: 0;
  width: 2px;
  height: 100%;
  background: linear-gradient(180deg, transparent, #03e9f4);
  animation: animate2 1s linear infinite;
  animation-delay: 0.25s;
}
@keyframes animate2 {
  0% {
    top: -100%;
  }
  50%,
  100% {
    top: 100%;
  }
}
.regis span:nth-child(3) {
  right: -100%;
  bottom: 0;
  width: 100%;
  height: 2px;
  background: linear-gradient(270deg, transparent, #03e9f4);
  animation: animate3 1s linear infinite;
  animation-delay: 0.5s;
}
@keyframes animate3 {
  0% {
    right: -100%;
  }
  50%,
  100% {
    right: 100%;
  }
}
.regis span:last-child {
  bottom: -100%;
  left: 0;
  width: 2px;
  height: 100%;
  background: linear-gradient(360deg, transparent, #03e9f4);
  animation: animate4 1s linear infinite;
  animation-delay: 0.75s;
}
@keyframes animate4 {
  0% {
    bottom: -100%;
  }
  50%,
  100% {
    bottom: 100%;
  }
}
</style>
