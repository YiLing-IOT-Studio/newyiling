<template>
  <div class="contentmain1">
    <div class="contents1">
      <p class="year1">2013</p>
      <img src="@/assets/img/us2.jpg" alt />
      <p class="description1">在物联网教研室的全体教师的支持下，物联网工程专业12级李国冬同学创建翼灵物联工作室， 物联网工程专业教研室主任周永老师担任指导教师。</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'contents1'
}
</script>

<style>
.contents1 {
  position: relative;
  display: flex;
  align-items: center;
  width: 400px;
  height: 400px;
  border: 2px solid #8785a2;
  border-radius: 100%;
}
.contents1 img {
  border-radius: 100%;
  width: 200px;
  height: 200px;
}
.contents1 .description1 {
  display: flex;
  align-items: center;
  justify-content: center;
}
.contents1 .year1 {
  position: absolute;
  top: 10%;
  left: 50%;
  color: #333;
}
</style>
