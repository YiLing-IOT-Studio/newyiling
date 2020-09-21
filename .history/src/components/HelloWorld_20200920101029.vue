<template>
  <div class="hello">
    <button @click="change">router change</button>
    <toTop></toTop>
  </div>
</template>

<script>
import toTop from './joinUs/component/toTop'
export default {
  name: 'HelloWorld',
  methods: {
    change() {
      this.$router.push('/joinus')
    }
  },
  components: {
    toTop
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hello {
  height: 100vw;
}
button {
  text-align: center;
  display: block;
}
</style>
