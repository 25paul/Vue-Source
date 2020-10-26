import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

Vue.component('Message', {
  template: '<div>{{msg}}</div>',
  props: {
    msg: {
      type: String,
      default: 'default'
    }
  }
})
console.log(App);
new Vue({
  render: h => h(App),
}).$mount('#app')
