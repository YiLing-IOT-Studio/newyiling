<template>
  <div class="backstyle">
    <contents></contents>
    <contents></contents>
    <contents></contents>
    <contents></contents>
    <contents></contents>
    <contents></contents>
  </div>
</template>

<script>
import contents from './content'
export default {
  name: 'bodyContent',
  components: {
    contents
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
  height: 80vw;
  padding: 20px 20px;
  display: flex;
  flex-wrap: wrap;
}
</style>
