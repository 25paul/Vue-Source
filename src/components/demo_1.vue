<template>
  <div class="content">
    <Content :msg="msg"></Content>
  </div>
</template>

<script>
import {objExtend} from '../extend/index.js'
export default {
  name: 'demo_1',
  data () {
    return {
      msg: 'normal'
    }
  },
  props: {
  },
  components: {
      Content: objExtend 
  }
}
</script>

<style scoped>
</style>
