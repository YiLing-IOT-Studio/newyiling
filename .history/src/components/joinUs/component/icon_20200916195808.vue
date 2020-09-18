<template>
  <div class="iconmain">
    <div class="iconhead">
      <h1>了解更多</h1>
      <h2>Learn WingLing， Learn more</h2>
    </div>
    <div class="icons">
      <span>
        <div class="iconfont1 iconfangwu iconation"></div>
        <p>翼灵官网</p>
      </span>
      <span>
        <div class="iconfont1 iconkongjian iconation"></div>
        <p>开源空间</p>
      </span>
      <span>
        <div class="iconfont1 iconwodejiaren iconation"></div>
        <p>翼灵一家人</p>
      </span>
      <span>
        <div class="iconfont1 iconpeiyang iconation"></div>
        <p>培养方向</p>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'icon'
}
</script>

<style>
.iconmain {
  height: 300px;
}
.iconhead {
  color: #f8f3d4;
  text-align: center;
  margin: 20px 0;
  padding: 20px 0;
}
.icons {
  color: #f8f3d4;
  margin: 0 auto;
}
.icons span {
  float: left;
  padding: 0 20px;
}
.icons .iconation {
  transition: all 0.5s;
  width: 100px;
  height: 100px;
  border-radius: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid wheat;
}
.icons .iconation:hover {
  width: 120px;
  height: 120px;
  font-size: 70px;
}
.icons span p {
  padding: 10px 0;
  text-align: center;
}
</style>
