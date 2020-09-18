<template>
  <div class="backstyle">
    <div class="cons1">
      <contents1></contents1>
      <contents1></contents1>
    </div>
    <div class="cons4">
      <contents></contents>
    </div>
    <div class="cons1">
      <contents></contents>
      <contents></contents>
    </div>
    <div class="cons4">
      <contents1></contents1>
    </div>
  </div>
</template>

<script>
import contents from './content'
import contents1 from './content1'
export default {
  name: 'bodyContent',
  components: {
    contents,
    contents1
  }
}
</script>

<style>
.cons1 {
  display: flex;
  justify-content: space-between;
}
.cons2 {
}
.cons4 {
  display: flex;
  justify-content: center;
}
.backstyle {
  position: relative;
  margin: 0 auto;
  background: #dbe2ef;
  opacity: 0.8;
  width: 80%;
  height: 160vw;
  padding: 20px 20px;
}
</style>
