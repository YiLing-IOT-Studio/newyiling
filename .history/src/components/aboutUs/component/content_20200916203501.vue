<template>
  <div class="contents">
    <img src="@/assets/img/us2.jpg" alt />
    <p>在物联网教研室的全体教师的支持下，物联网工程专业12级李国冬同学创建翼灵物联工作室， 物联网工程专业教研室主任周永老师担任指导教师。</p>
  </div>
</template>

<script>
export default {
  name: 'contents'
}
</script>

<style>
.contents {
  position: relative;
  z-index: 999;
  display: flex;
  width: 50%;
  border: 2px solid lightblue;
  border-radius: 50%;
}
.contents img {
  border-radius: 100%;
  width: 200px;
  height: 200px;
}
.contents p {
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
