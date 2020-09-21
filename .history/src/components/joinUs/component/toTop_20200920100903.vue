<template>
  <div v-if="visible">11111111</div>
</template>

<script>
export default {
  name: 'toTop',
  data() {
    return {
      // 下滑到一定位置才显示按钮控件
      visible: false,
      scrollTop: 0
    }
  },
  // 获取屏幕高度
  mounted() {
    window.addEventListener('scroll', this.handleScroll)
  },
  // 销毁时清空
  destroyed() {
    window.removeEventListener('scroll', this.handleScroll)
    if (this.interval) {
      clearInterval(this.interval)
    }
  },
  methods: {
    backToTopFun() {
      let timer = setInterval(() => {
        let speed = Math.floor(-this.scrollTop / 10)
        document.documentElement.scrollTop = document.body.scrollTop = this.scrollTop + speed
        if (this.scrollTop === 0) {
          clearInterval(timer)
        }
      }, 20)
    },
    handleScroll() {
      let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
      this.scrollTop = scrollTop
      if (this.scrollTop > 100) {
        this.visible = true
      } else {
        this.visible = false
      }
    }
  }
}
</script>

<style>
</style>
