<template>
  <div class="backstyle">
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
  height: 150vw;
  padding: 20px 20px;
}
</style>
