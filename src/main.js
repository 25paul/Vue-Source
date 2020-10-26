import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

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

let aaa = Vue.extend(obj);

Vue.component('Content', aaa);

Vue.component('Message', {
  template: '<Content>mag</Content>',
  props: {
    msg: {
      type: String,
      default: 'default'
    }
  }
})

new Vue({
  render: h => h(App),
}).$mount('#app')
