<template>
  <div id="app">
    <router-view />
    <vue-particles
      class="back"
      color="#9AB5DF"
      :particleOpacity="0.4"
      :particlesNumber="80"
      shapeType="star"
      :particleSize="7"
      linesColor="#fff"
      :linesWidth="2"
      :lineLinked="true"
      :lineOpacity="0.4"
      :linesDistance="150"
      :moveSpeed="3"
      :hoverEffect="true"
      hoverMode="grab"
      :clickEffect="true"
      clickMode="repulse"
    >
    </vue-particles>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
.back {
  position: fixed;
  top: 0;
  width: 100%;
}
</style>
