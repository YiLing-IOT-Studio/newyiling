<template>
  <div class="mainhead">
    <div class="title">翼灵物联网工作室</div>
    <div
      class="content"
    >翼灵工作室成立于2013年，隶属于物联网工程教研室，是一个集学生创新与项目实战与一体的科学性实验室。团队由留美教师梁宗文为指导老师。目前团队以探索物联网前沿科技为主导，形成嵌入式开发、移动端开发、web前端开发、服务器后端开发四大完整培养模型，以科研竞赛与外包项目实战为团队主导工作。团队各项成果丰硕，2年内承包外包项目6项，科研竞赛获省级以上奖项11项、国家级奖项7项。</div>
  </div>
</template>

<script>
export default {
  name: 'headContent'
}
</script>

<style>
.mainhead {
  width: 100%;
  height: 180px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-family: 'Playball', cursive;
  position: relative;
  z-index: 999;
  color: #e4f9f5;
  font-weight: bolder;
}
@keyframes rubberBand {
  /*橡皮经：y变窄，x变窄循环，然后恢复正常*/
  from {
    transform: scale3d(1, 1, 1);
  }

  30% {
    transform: scale3d(1.25, 0.75, 1);
  }

  40% {
    transform: scale3d(0.75, 1.25, 1);
  }

  50% {
    transform: scale3d(1.15, 0.85, 1);
  }

  65% {
    transform: scale3d(0.95, 1.05, 1);
  }

  75% {
    transform: scale3d(1.05, 0.95, 1);
  }

  to {
    transform: scale3d(1, 1, 1);
  }
}
.mainhead .title {
  position: absolute;
  font-weight: bolder;
  font-size: 40px;
  text-shadow: -1px 0px #333, 0px -1px #333, 1px 0 #fff, 0 1px #fff;
  transition: all 1s;
  animation: rubberBand 1.5s linear infinite;
}
.mainhead .content {
  position: absolute;
  font-size: 18px;
  margin-top: 10px;
  line-height: 25px;
  font-weight: bold;
  width: 50%;
  transition: all 0.5s;
  transform: rotateY(180deg);
  backface-visibility: hidden;
}
.mainhead:hover .content {
  transform: rotateY(0deg);
}
.mainhead:hover .title {
  transform: rotateY(180deg);
  opacity: 0;
}
</style>
