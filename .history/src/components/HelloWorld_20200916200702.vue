<template>
  <div class="hello">
    <button @click="change">router change</button>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  methods: {
    change() {
      this.$router.push('/joinus')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
button {
  text-align: center;
  display: block;
}
</style>
