<template>
  <div id="app">
    <cont :msg="message">haha</cont>
  </div>
</template>

<script>

let obj = {
  template: '<div>{{msg}}</div>',
  props: {
    msg: {
      type: String,
      default: 'default'
    }
  },
  name: 'Content'
}

export default {
  name: 'App',
  data () {
    return {
      message: "vue extend test!!!"
    }
  },
  components: {
    cont: obj
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
