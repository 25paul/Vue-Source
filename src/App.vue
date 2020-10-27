<template>
  <div id="app">
    <Test></Test>
  </div>
</template>

<script>

import Vue from 'vue'

function registerPlugin() {
  console.log('vue')
  Vue.component('Test', {
    template: '<div>{{message}}<Test2 /></div>',
    provide() {
      return {
        elTest: this
      }
    }, // function 的用途是为了获取运行时环境，否则 this 将指向 window
    data() {
      return {
        message: 'message from Test'
      }
    },
    methods: {
      change(component) {
        this.message = 'message from ' + component
      }
    }
  })
  Vue.component('Test2', {
    template: '<Test3 />'
  })
  Vue.component('Test3', {
    template: '<button @click="changeMessage">change</button>',
    inject: ['elTest'],
    methods: {
      changeMessage() {
        this.elTest.change(this.$options._componentTag)
      }
    }
  })
}
Vue.use(registerPlugin)

export default {
  name: 'App',
  components: {
  }
}
</script>

<style>
</style>
