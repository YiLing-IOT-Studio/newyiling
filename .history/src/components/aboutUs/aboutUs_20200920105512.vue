<template>
  <div>
    <vue-particles
      class="back"
      color="#6495ED"
      :particleOpacity="0.7"
      :particlesNumber="80"
      shapeType="star"
      :particleSize="4"
      linesColor="#ccc"
      :linesWidth="2"
      :lineLinked="true"
      :lineOpacity="0.4"
      :linesDistance="150"
      :moveSpeed="3"
      :hoverEffect="true"
      hoverMode="grab"
      :clickEffect="true"
      clickMode="push"
    ></vue-particles>
    <headContent></headContent>
    <bodyContent></bodyContent>
    <toTop></toTop>
  </div>
</template>

<script>
import headContent from './component/headContent'
import bodyContent from './component/bodyContent'
import toTop from '../joinUs/component/toTop'
export default {
  name: 'aboutUs',
  components: {
    headContent,
    bodyContent,
    toTop
  }
}
</script>

<style>
.back {
  position: fixed;
  top: 0;
  width: 100%;
  background: url('../../assets//img/back.jpg');
  background-attachment: fixed;
  background-size: cover;
  background-position: center;
}
</style>
