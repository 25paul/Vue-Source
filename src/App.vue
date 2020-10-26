<template>
  <div id="app">
    <message :msg="message"></message>
  </div>
</template>

<script>

export default {
  name: 'App',
  data () {
    return {
      message: "vue test!!!"
    }
  },
  components: {
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
