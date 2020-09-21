<template>
  <div class="scrollman-box" ref="scrollman_box">
    <swiper
      class="swiper swiper-no-swiping"
      id="scroll_home"
      v-bind:options="Home_Option"
      ref="scroll_home"
    >
      <swiper-slide>
        <div id="home1" class="home_son"></div>
      </swiper-slide>
      <swiper-slide>
        <div id="home2" class="home_son"></div>
      </swiper-slide>
      <swiper-slide>
        <div id="home3" class="home_son"></div>
      </swiper-slide>
      <swiper-slide>
        <div id="home4" class="home_son"></div>
      </swiper-slide>
      <div class="swiper-scrollbar" slot="scrollbar"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  name: '',
  data() {
    return {
      limit_speed: true,
      Home_Option: {
        speed: 1000,
        direction: 'vertical',
        scrollbar: {
          el: '.swiper-scrollbar',
          hide: false,
          draggable: true
        }
      }
    }
  },
  mounted() {
    this.$refs.scrollman_box.addEventListener('mousewheel', this.handleScroll8, true)
  },
  methods: {
    handleScroll8(e) {
      if (this.limit_speed === true) {
        this.limit_speed = false
        let direction = e.deltaY > 0 ? 'down' : 'up'
        if (direction === 'down') {
          this.$refs.scroll_home.swiper.slideNext()
          setTimeout(() => {
            this.limit_speed = true
          }, 1100)
          console.log(direction)
        } else if (direction === 'up') {
          this.$refs.scroll_home.swiper.slidePrev()
          console.log(direction)
          setTimeout(() => {
            this.limit_speed = true
          }, 1100)
        }
      }
    }
  }
}
</script>

<style scoped>
* {
  padding: 0;
  margin: 0;
}
.scrollman-box {
  position: relative;
  width: 100%;
  height: 100%;
}
#scroll_home {
  position: relative;
  height: 100%;
  width: 100%;
}
.home_son {
  position: relative;
  width: 100%;
  height: 100%;
}
#home1 {
  background: url('../assets/home5_bg_baigui.jpg');
  background-size: 100% auto;
}
#home2 {
  background: url('../assets/home5_bg_buda.jpg');
  background-size: 100% auto;
}
#home3 {
  background: url('../assets/百鬼.jpg');
  background-size: 100% auto;
}
#home4 {
  background: url('../assets/诗音啊.jpg');
  background-size: 100% auto;
}
.swiper-scrollbar {
  position: absolute;
  right: 3px;
  top: 1%;
  z-index: 50;
  width: 5px;
  height: 98%;
}
.swiper-scrollbar >>> .swiper-scrollbar-drag {
  background: #ffeb3b;
}
</style>
