<template>
  <div class="icons">
    <span>
      <span class="iconfont1 iconkongjian"></span>
      <p>111</p>
    </span>
    <span>
      <span class="iconfont1 iconpeiyang"></span>
      <p>111</p>
    </span>
    <span>
      <span class="iconfont1 iconwodejiaren"></span>
      <p>111</p>
    </span>
    <span>
      <span class="iconfont1 iconfangwu"></span>
      <p>111</p>
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
.icons p {
  text-align: center;
  border: 1px solid red;
}
</style>
