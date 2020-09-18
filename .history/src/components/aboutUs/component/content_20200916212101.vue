<template>
  <div class="contents">
    <p class="year">2013</p>
    <img src="@/assets/img/us2.jpg" alt />
    <p class="description">在物联网教研室的全体教师的支持下，物联网工程专业12级李国冬同学创建翼灵物联工作室， 物联网工程专业教研室主任周永老师担任指导教师。</p>
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
  right: 0;
  display: flex;
  align-items: center;
  width: 400px;
  height: 400px;
  border: 2px solid #8785a2;
  border-radius: 100%;
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
