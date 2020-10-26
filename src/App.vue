<template>
  <div id="app">
    <div v-loading="isLoading">{{data}}</div>
    <button @click="update">更新</button>
  </div>
</template>

<script>

export default {
  name: 'App',
  data () {
    return {
      isLoading: false,
      data: ''
    }
  },
  components: {
  },
  methods: {
    update() {
      this.isLoading = true
      setTimeout(() => {
        this.data = '用户数据'
        this.isLoading = false
      }, 3000)
    }
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
