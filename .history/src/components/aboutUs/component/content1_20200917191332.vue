<template>
  <div class="contentmain1">
    <div class="contents1">
      <p class="header1">To be continued</p>
      <p class="year1">2013</p>
      <img src="@/assets/img/us2.jpg" alt />
      <p class="description1">在物联网教研室的全体教师的支持下，物联网工程专业12级李国冬同学创建翼灵物联工作室， 物联网工程专业教研室主任周永老师担任指导教师。</p>
      <span></span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'contents1'
}
</script>

<style>
.contentmain1 {
  padding: 20px 10px;
}
.contents1 {
  position: relative;
  display: flex;
  align-items: center;
  width: 50%;
  height: 300px;
  border: 5px solid #cccccc;
}
.contents1 span {
  display: inline-block;
  width: 100%;
  background: #cccccc;
}
.contents1 img {
  border-radius: 100%;
  width: 200px;
  height: 200px;
  padding: 10px 10px;
}
.contents1 .description1 {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50%;
}
.contents1 .year1 {
  position: absolute;
  top: 10%;
  width: 100%;
  text-align: center;
  color: #333;
}
.header1 {
  position: absolute;
  top: 0;
  width: 100%;
  text-align: center;
  background: #cccccc;
}
</style>
