<template>
  <div id="home">
    <header-content class="header_content"></header-content>
    <main-content class="main_content"></main-content>
    <footer-content class="footer_content"></footer-content>
  </div>
</template>

<script>
import HeaderContent from './component/header'
import MainContent from './component/main'
import FooterContent from './component/footer'
export default {
  name: 'home',
  components: {
    HeaderContent,
    MainContent,
    FooterContent
  },
  data() {
    return {
    }
  },
  mounted() {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
@import '../../assets/css/home/home.css';
</style>
