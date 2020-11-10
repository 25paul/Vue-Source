## vuex的实现原理

[vuex源码](https://github.com/vuejs/vuex)

Vuex 的原理关键：使用 Vue 实例管理状态

#### 缩小版vuex

如下：

```javascript
function registerPlugin(Vue) {
    const vuex = {}
    vuex._vm = new Vue({
    data: {
        message: 'hello vue.js'
    }
    })
    vuex.state = vuex._vm
    vuex.mutations = {
    setMessage(value) {
        vuex.state.message = value
    }
    }
    function init() {
    this.$store = vuex
    }
    Vue.mixin({
    beforeCreate: init
    })
}
Vue.use(registerPlugin)
```

定义一个vuex插件，使用Vue.use来进行加载；

声明一个vuex对象，这个对象包含一个属性值_vm指向Vue实例，并将这个实例存放在vuex.state中；这样通过vuex.state就可以拿到存放在vuex中的状态了；

自定义一个init方法，放在全局mixin的beforeCreate生命周期中，使得每个vue 实例都会调用一次init方法；这样每个vue实例下都会有一个vue.$store = vuex; 