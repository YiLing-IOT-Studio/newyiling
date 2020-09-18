<template>
  <div class="backstyle">
    <contents1></contents1>
    <contents1 class="cons2"></contents1>
    <contents></contents>
    <contents :class="objclass1"></contents>
    <contents></contents>
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
  },
  data() {
    return {
      objclass: 'cons4',
      objclass1: 'cons2'
    }
  }
}
</script>

<style>
.cons2 {
  display: flex;
  justify-content: flex-end;
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
