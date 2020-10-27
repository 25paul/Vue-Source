<template>
  <div id="app">
    <Demo-one></Demo-one>
    <Demo-two></Demo-two>
  </div>
</template>

<script>

import DemoOne from './components/demo_1';
import DemoTwo from './components/demo_2';

export default {
  name: 'App',
  data () {
    return {
    }
  },
  components: {
    DemoOne,
    DemoTwo
  },
  methods: {
  }
}
</script>

<style>
</style>
