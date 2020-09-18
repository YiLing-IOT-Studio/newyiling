<template>
  <div class="iconmain">
    <div class="iconhead">
      <h1>了解更多</h1>
      <h2>Learn WingLing， Learn more</h2>
    </div>
    <div class="icons">
      <span>
        <span class="iconfont1 iconfangwu"></span>
        <p>翼灵官网</p>
      </span>
      <span>
        <span class="iconfont1 iconkongjian"></span>
        <p>开源空间</p>
      </span>
      <span>
        <span class="iconfont1 iconwodejiaren"></span>
        <p>翼灵一家人</p>
      </span>
      <span>
        <span class="iconfont1 iconpeiyang"></span>
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
  font-weight: bolder;
  text-align: center;
  margin: 20px 0;
  padding: 20px 0;
}
.icons {
  color: #f8f3d4;
  justify-content: center;
  display: flex;
  align-items: baseline;
}
.icons > span {
  padding: 0 20px;
}
.icons span p {
  text-align: center;
}
</style>
