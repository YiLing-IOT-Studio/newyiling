<template>
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
</template>

<script>
export default {
  name: 'icon'
}
</script>

<style>
.icons {
  color: aliceblue;
  height: 300px;
  justify-content: center;
  display: flex;
  align-items: center;
}
.icons > span {
  padding: 0 20px;
}
.icons span p {
  text-align: center;
}
</style>
