<template>
  <!-- 回顶部按钮为一张50*50的图片 -->
  <!-- btnFlag 控制图片显示隐藏 -->
  <!-- backTop 回顶部的方法 -->
  <div>
    <div v-if="btnFlag" class="iconfont1 iconfanhuidingbu go-top" @click="backTop"></div>
  </div>
</template>

<script>
export default {
  name: 'toTop',
  // vue的两个生命钩子，这里不多解释。
  // window对象，所有浏览器都支持window对象。它表示浏览器窗口，监听滚动事件
  data() {
    return {
      btnFlag: false,
      scrollTop: 0
    }
  },
  mounted() {
    window.addEventListener('scroll', this.scrollToTop)
  },
  destroyed() {
    window.removeEventListener('scroll', this.scrollToTop)
  },

  methods: {
    // 点击图片回到顶部方法，加计时器是为了过渡顺滑
    backTop() {
      const that = this
      let timer = setInterval(() => {
        let ispeed = Math.floor(-that.scrollTop / 5)
        document.documentElement.scrollTop = document.body.scrollTop = that.scrollTop + ispeed
        if (that.scrollTop === 0) {
          clearInterval(timer)
        }
      }, 16)
    },

    // 为了计算距离顶部的高度，当高度大于60显示回顶部图标，小于60则隐藏
    scrollToTop() {
      let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
      this.scrollTop = scrollTop
      if (this.scrollTop > 200) {
        this.btnFlag = true
      } else {
        this.btnFlag = false
      }
    }
  }
}
</script>

<style>
.go-top {
  width: 100px;
  height: 100px;
  position: fixed;
  right: 0;
  bottom: 0;
  color: skyblue;
}
@keyframes tops {
  0% {
    margin-bottom: 0px;
  }
  25% {
    margin-bottom: 5px;
  }
  50% {
    margin-bottom: 15px;
  }
  75% {
    margin-bottom: 5px;
  }
  100% {
    margin-bottom: 0px;
  }
}
.go-top:hover {
  animation: tops 1s linear infinite;
}
</style>
