<template>
  <div class="mainjoin">
    <div class="mainimg"></div>
    <joinHead></joinHead>
    <introduce></introduce>
    <div class="detaildirection">
      <detail objclass="icon_qianduankaifa"></detail>
      <detail objclass="icon_houduankaifa"></detail>
      <detail objclass="iconziyuan"></detail>
      <detail objclass="iconanzhuo"></detail>
    </div>
    <icon></icon>
    <introduce :style="objstyle"></introduce>
    <register></register>
  </div>
</template>

<script>
import joinHead from './component/joinHead'
import introduce from './component/introduce'
import register from './component/register'
import detail from './component/detail'
import icon from './component/icon'
export default {
  name: 'joinUs',
  components: {
    joinHead,
    introduce,
    register,
    detail,
    icon
  },
  data() {
    return {
      objstyle: { background: '#343A40', color: '#fff' },
      objclass: ['']
    }
  }
}
</script>

<style>
.mainjoin {
  position: relative;
  width: 100%;
  height: 142vw;
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
.detaildirection {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  background-color: #d9ddd6;
}
</style>
