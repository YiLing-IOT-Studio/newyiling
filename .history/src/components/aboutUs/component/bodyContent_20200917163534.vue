<template>
  <div class="backstyle">
    <contents1></contents1>
    <contents1 :style="objstyle"></contents1>
    <contents></contents>
    <contents></contents>
    <contents></contents>
    <contents1 :style="objstyle"></contents1>
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
  data(){
    return {
      objstyle:{margin-left:100%}
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
