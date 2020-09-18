<template>
  <div class="contentmain1">
    <div class="contents1">
      <p class="header1">To be continued</p>
      <img src="@/assets/img/us2.jpg" alt />
      <p class="description1">在物联网教研室的全体教师的支持下，物联网工程专业12级李国冬同学创建翼灵物联工作室， 物联网工程专业教研室主任周永老师担任指导教师。</p>
      <span>2013</span>
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
  font-size: 20px;
}

.contents1 {
  position: relative;
  display: flex;
  align-items: center;
  width: 50%;
  height: 300px;
  border: 2px solid #2980b9;
  transition: all 0.5s;
  top: 20px;
}
.contents1:hover {
  box-shadow: 10px 10px 15px #333;
}
.contents1 span {
  display: inline-block;
  position: absolute;
  text-align: center;
  bottom: 0;
  width: 100%;
  color: #fff;
  background: #2980b9; /* fallback for old browsers */
  background: -webkit-linear-gradient(to right, rgb(41, 128, 185), rgb(109, 213, 250), rgb(255, 255, 255)); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(to right, rgb(41, 128, 185), rgb(109, 213, 250), rgb(255, 255, 255)); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  height: 20px;
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
  color: #fff;
  width: 100%;
  text-align: center;
  background: #2980b9; /* fallback for old browsers */
  background: -webkit-linear-gradient(to right, rgb(41, 128, 185), rgb(109, 213, 250), rgb(255, 255, 255)); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(to right, rgb(41, 128, 185), rgb(109, 213, 250), rgb(255, 255, 255)); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
}
</style>
