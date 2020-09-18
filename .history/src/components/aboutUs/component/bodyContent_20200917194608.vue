<template>
  <div class="backstyle">
    <contents1></contents1>
    <contents1 class="cons2"></contents1>
    <contents :class="objclass"></contents>
    <contents :class="objclass1"></contents>
    <contents :class="objclass"></contents>
    <contents1 class="cons2"></contents1>
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
  padding: 20px 40px;
}
.backstyle {
  position: relative;
  margin: 0 auto;
  background: #dbe2ef;
  opacity: 0.8;
  width: 80%;
  height: 130vw;
}
</style>
