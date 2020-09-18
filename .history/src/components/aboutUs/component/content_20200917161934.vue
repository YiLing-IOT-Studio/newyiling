<template>
  <div>
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="#fff">
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
    </van-swipe>
    <div class="contentmain">
      <div class="contents toright">
        <p class="year">2013</p>
        <img src="@/assets/img/us2.jpg" alt />
        <p class="description">在物联网教研室的全体教师的支持下，物联网工程专业12级李国冬同学创建翼灵物联工作室， 物联网工程专业教研室主任周永老师担任指导教师。</p>
      </div>
    </div>
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
  }
}
</script>

<style>
.my-swipe {
  width: 100%;
  height: 300px;
}
.my-swipe .van-swipe-item {
  display: flex;
  justify-items: center;
  align-items: center;
  color: #fff;
  font-size: 20px;
  background-color: #ccc;
}
.toright {
  margin-top: 400px;
}
.contents {
  display: flex;
  align-items: center;
  text-emphasis: wrap;
  position: relative;
  width: 550px;
  height: 300px;
}
.contents img {
  border-radius: 100%;
  width: 200px;
  height: 200px;
}
.contents .description {
  display: flex;
  align-items: center;
  justify-content: center;
}
.contents .year {
  position: absolute;
  top: 10%;
  left: 50%;
  color: #333;
}
</style>
