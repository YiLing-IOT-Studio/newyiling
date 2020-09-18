<template>
  <div>
    <div class="joinhead">翼灵物联网工作室</div>
    <div class="route">
      <svg width="240" height="60">
        <rect class="rectangle" width="240" height="60"></rect>
      </svg>
      <p>进入官网</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'joinHead'
}
</script>

<style>
.route {
  position: relative;
}
.route p {
  position: absolute;
  top: 0;
  text-align: center;
}
.rectangle {
  stroke-width: 8px;
  stroke: #a8d8ea;
  fill: transparent;
  stroke-dasharray: 100px 500px;
  stroke-dashoffset: 228px;
  -webkit-transition: all 0.5s;
  -moz-transition: all 0.5s;
  -o-transition: all 0.5s;
  transition: all 0.5s;
}
.rectangle:hover {
  stroke-width: 4px;
  stroke-dasharray: 600px;
  stroke-dasharray: 0;
}
</style>
