<template>
  <div id="app">
    <button @click="showLoading">显示Loading</button>
  </div>
</template>

<script>

import Vue from 'vue'

const loadingPlugin = {
  install: function(vm) {
    const LoadingComponent = vm.extend({
      template: '<div id="loading-wrapper">{{msg}}</div>',
      props: {
        msg: {
          type: String,
          default: 'loading...'
        }
      }
    }, 'LoadingComponent')
    function Loading(msg) {
      const div = document.createElement('div')
      div.setAttribute('id', 'loading-wrapper')
      document.body.append(div)
      new LoadingComponent({
        props: {
          msg: {
            type: String,
            default: msg
          }
        } 
      }).$mount('#loading-wrapper')
      return () => {
        document.body.removeChild(document.getElementById('loading-wrapper'))
      }
    }
    vm.prototype.$loading = Loading
  }
}
Vue.use(loadingPlugin)

export default {
  name: 'App',
  components: {
  },
  methods: {
    showLoading() {
      const hide = this.$loading('正在加载，请稍等...')
      setTimeout(() => {
        hide()
      }, 2000)
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
