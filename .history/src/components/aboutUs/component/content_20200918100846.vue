<template>
  <div>
    <van-swipe
      class="my-swipe"
      :class="objclass?objclass:objclass1"
      indicator-color="transparent"
      :autoplay="3000"
    >
      <van-swipe-item>
        <div class="contents">
          <p class="header">To be continued</p>
          <img src="@/assets/img/us2.jpg" alt />
          <p class="description">在物联网教研室的全体教师的支持下，物联网工程专业12级李国冬同学创建翼灵物联工作室， 物联网工程专业教研室主任周永老师担任指导教师。</p>
          <span>2013</span>
        </div>
      </van-swipe-item>
      <van-swipe-item>
        <div class="contents">
          <p class="header">To be continued</p>
          <img src="@/assets/img/us2.jpg" alt />
          <p class="description">在物联网教研室的全体教师的支持下，物联网工程专业12级李国冬同学创建翼灵物联工作室， 物联网工程专业教研室主任周永老师担任指导教师。</p>
          <span>2013</span>
        </div>
      </van-swipe-item>
      <van-swipe-item>
        <div class="contents">
          <p class="header">To be continued</p>
          <img src="@/assets/img/us2.jpg" alt />
          <p class="description">在物联网教研室的全体教师的支持下，物联网工程专业12级李国冬同学创建翼灵物联工作室， 物联网工程专业教研室主任周永老师担任指导教师。</p>
          <span>2013</span>
        </div>
      </van-swipe-item>
    </van-swipe>
  </div>
</template>

<script>
import Vue from 'vue'
import { Swipe, SwipeItem } from 'vant'

Vue.use(Swipe)
Vue.use(SwipeItem)
export default {
  name: 'contents',
  components: {
    [Swipe.name]: Swipe,
    [SwipeItem.name]: SwipeItem
  },
  props: ['objclass', 'objclass1']
}
</script>

<style>
.my-swipe {
  width: 49%;
  height: 300px;
}
.my-swipe .van-swipe-item {
  display: flex;
  justify-items: center;
  align-items: center;
  color: #52616b;
  font-size: 20px;
}
.toright {
  margin-top: 400px;
}
.contents {
  display: flex;
  align-items: center;
  position: relative;
  width: 550px;
  height: 300px;
  border: 2px solid #6190e8;
}
.contents img {
  border-radius: 100%;
  width: 200px;
  height: 200px;
  padding: 0 10px;
}
.contents .description {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 10px;
}
.contents span {
  position: absolute;
  text-align: center;
  bottom: 0;
  background: #6190e8; /* fallback for old browsers */
  background: -webkit-linear-gradient(to right, rgb(97, 144, 232), rgb(167, 191, 232)); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(to right, rgb(97, 144, 232), rgb(167, 191, 232)); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  color: #fff;
  width: 100%;
}
.header {
  position: absolute;
  text-align: center;
  top: 0;
  color: #fff;
  background: #6190e8; /* fallback for old browsers */
  background: -webkit-linear-gradient(to right, rgb(97, 144, 232), rgb(167, 191, 232)); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(to right, rgb(97, 144, 232), rgb(167, 191, 232)); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  width: 100%;
}
</style>
