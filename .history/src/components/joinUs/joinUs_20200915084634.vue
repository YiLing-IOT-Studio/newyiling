<template>
  <div class="mainjoin">
    <joinHead></joinHead>
    <introduce></introduce>
  </div>
</template>

<script>
import joinHead from './component/joinHead'
import introduce from './component/introduce'
export default {
  name: 'joinUs',
  components: {
    joinHead,
    introduce
  }
}
</script>

<style>
.mainjoin {
  background: url('../../assets/us.jpg');
  background-size: cover;
  background-position: center center;
  background-attachment: fixed;
  background-color: aliceblue;
  z-index: -10;
}
</style>
