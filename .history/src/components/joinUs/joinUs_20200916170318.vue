<template>
  <div class="mainjoin">
    <div class="mainimg"></div>

    <joinHead></joinHead>
    <introduce></introduce>
    <detail></detail>
    <detail></detail>
    <detail></detail>
    <detail></detail>
    <introduce :style="objstyle"></introduce>
    <register></register>
  </div>
</template>

<script>
import joinHead from './component/joinHead'
import introduce from './component/introduce'
import register from './component/register'
import detail from './component/detail'
export default {
  name: 'joinUs',
  components: {
    joinHead,
    introduce,
    register,
    detail
  },
  data() {
    return {
      objstyle: { background: '#343A40', color: '#fff' }
    }
  }
}
</script>

<style>
.mainjoin {
  position: relative;
  width: 100%;
  height: 100vw;
  background: rgba(0, 0, 0, 0.5);
  overflow: hidden;
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
