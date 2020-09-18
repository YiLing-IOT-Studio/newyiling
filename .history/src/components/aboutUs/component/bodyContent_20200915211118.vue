<template>
  <div class="backstyle">
    <content></content>
  </div>
</template>

<script>
import content from './content'
export default {
  name: 'bodyContent',
  components: {
    content
  }
}
</script>

<style>
.backstyle {
  position: relative;
  margin: 0 auto;
  background: aliceblue;
  width: 80%;
  height: 100%;
}
</style>
