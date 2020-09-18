<template>
  <div class="backstyle">
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
  background: #f9f7f7;
  opacity: 0.8;
  width: 80%;
  height: 80vw;
}
</style>
