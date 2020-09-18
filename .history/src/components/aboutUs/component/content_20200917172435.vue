<template>
  <div>
    <van-swipe
      class="my-swipe"
      :class="objclass?objclass:objclass1"
      indicator-color="#333"
      :autoplay="3000"
      touchable="true"
    >
      <van-swipe-item>
        <div class="contents">
          <p class="year">2013</p>
          <img src="@/assets/img/us2.jpg" alt />
          <p class="description">在物联网教研室的全体教师的支持下，物联网工程专业12级李国冬同学创建翼灵物联工作室， 物联网工程专业教研室主任周永老师担任指导教师。</p>
        </div>
      </van-swipe-item>
      <van-swipe-item>
        <div class="contents">
          <p class="year">2013</p>
          <img src="@/assets/img/us2.jpg" alt />
          <p class="description">在物联网教研室的全体教师的支持下，物联网工程专业12级李国冬同学创建翼灵物联工作室， 物联网工程专业教研室主任周永老师担任指导教师。</p>
        </div>
      </van-swipe-item>
      <van-swipe-item>
        <div class="contents">
          <p class="year">2013</p>
          <img src="@/assets/img/us2.jpg" alt />
          <p class="description">在物联网教研室的全体教师的支持下，物联网工程专业12级李国冬同学创建翼灵物联工作室， 物联网工程专业教研室主任周永老师担任指导教师。</p>
        </div>
      </van-swipe-item>
      <template #indicator>
        <div class="custom-indicator">{{ current + 1 }}/4</div>
      </template>
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
.custom-indicator {
  display: flex;
  justify-content: center;
  padding: 2px 5px;
  font-size: 12px;
  background: rgba(0, 0, 0, 0.1);
}
.my-swipe {
  width: 49%;
  height: 300px;
}
.my-swipe .van-swipe-item {
  display: flex;
  justify-items: center;
  align-items: center;
  color: #fff;
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
.contents .year {
  position: absolute;
  top: 10%;
  left: 50%;
  color: #333;
}
</style>
