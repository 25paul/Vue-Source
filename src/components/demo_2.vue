<template>
  <div class="content">
    <div @click="handle">点击更换文本</div>
    <p id="text">{{msg}}</p>
  </div>
</template>

<script>
import {objExtend} from '../extend/index.js'
export default {
  name: 'demo_1',
  data () {
    return {
      msg: 'change'
    }
  },
  props: {
  },
  components: {
  },
  methods: {
    handle () {
        const extendComponent = new objExtend().$mount('#text');
        console.log(extendComponent);
    }
  }
}
</script>

<style scoped>
</style>
