<template>
  <div>
    <vue-particles
      class="back"
      color="#9AB5DF"
      :particleOpacity="0.4"
      :particlesNumber="80"
      shapeType="star"
      :particleSize="6"
      linesColor="#fff"
      :linesWidth="2"
      :lineLinked="true"
      :lineOpacity="0.4"
      :linesDistance="150"
      :moveSpeed="3"
      :hoverEffect="true"
      hoverMode="grab"
      :clickEffect="true"
      clickMode="push"
    >
    </vue-particles>
    <headContent></headContent>
    <bodyContent></bodyContent>
  </div>
</template>

<script>
import headContent from './component/headContent'
import bodyContent from './component/bodyContent'
export default {
  name: 'aboutUs',
  components: {
    headContent,
    bodyContent
  }
}
</script>

<style>
.back {
  position: fixed;
  top: 0;
  width: 100%;
}
</style>
