<template>
  <div class="backstyle">
    <div class="cons1">
      <contents1></contents1>
      <contents1></contents1>
    </div>
    <div class="cons2">
      <contents></contents>
    </div>

    <contents></contents>
    <contents></contents>
    <contents1 :style="objstyle1"></contents1>
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
      objstyle: { position: 'absolute', right: 0 },
      objstyle1: { marginTop: '400px' }
    }
  }
}
</script>

<style>
.cons1 {
  display: flex;
  justify-content: space-between;
}
.cons2 {
  margin: 0 auto;
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
