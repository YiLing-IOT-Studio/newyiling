<template>
  <div class="backstyle">
    <contents1></contents1>
    <contents1 :style="objstyle"></contents1>
    <contents1 :style="objstyle1"></contents1>
    <contents></contents>
    <contents></contents>
    <contents></contents>
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
