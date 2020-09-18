<template>
  <div class="mainjoin">
    <div class="mainimgs">
      <div class="mainimg"></div>
    </div>

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
.mainimgs {
  position: relative;
  width: 100%;
  height: 400px;
  background: rgba(0, 0, 0, 0.5);
}
.mainimg {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background: url('../../assets/us.jpg');
  background-size: cover;
  background-position: center center;
  background-attachment: fixed;
  z-index: -10;
}
</style>
