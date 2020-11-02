<template>
  <div id="app">
    {{message}}
    <button @click="change">Change</button>
  </div>
</template>

<script>
import Vue from 'vue';

const state = Vue.observable({ message: 'Vue 2.6' })
const mutation = {
  setMessage(value) {
    state.message = value
  }
}

export default {
  name: 'App',
  components: {
  },
  computed: {
    message() {
      return state.message
    }
  },
  methods: {
    change() {
      mutation.setMessage('Vue 3.0')
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
