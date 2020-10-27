<template>
  <div id="app">
    <div>原文：{{message}}</div>
    <div>使用过滤器：{{message | lower}}</div>
  </div>
</template>

<script>

export default {
  name: 'App',
  data () {
    return {
      message: 'VUE-FILTER'
    }   
  },
  filters: {
    lower(value) {
      return value.toLowerCase()
    }
  },
  components: {
  }
}
</script>

<style>
</style>
