<template>
  <div id="app">
    <div v-loading="isLoading">{{data}}</div>
    <button @click="update">更新</button>
  </div>
</template>

<script>
import Vue from 'vue'

Vue.directive('loading', {
  // 第二个参数直接传函数的话会直接提供给bind和uodate
  update(el, binding, vnode) {
		console.log('el', el);
		console.log('binding', binding);
		console.log('vnode', vnode);
		if (binding.value) {
			const div = document.createElement('div')
			div.innerText = '加载中...'
			div.setAttribute('id', 'loading')
			div.style.position = 'absolute'
			div.style.left = 0
			div.style.top = 0
			div.style.width = '100%'
			div.style.height = '100%'
			div.style.display = 'flex'
			div.style.justifyContent = 'center'
			div.style.alignItems = 'center'
			div.style.color = 'white'
			div.style.background = 'rgba(0, 0, 0, .7)'
			document.body.append(div)
		} else {
      // 加个loading元素是否存在的判断
			document.body.removeChild(document.getElementById('loading'))
		}
	}
})

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
