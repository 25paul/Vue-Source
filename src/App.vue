<template>
  <div id="app">
    <div @click="handle">点击</div>
  </div>
</template>

<script>

export default {
  name: 'App',
  data: () => {
    return {
      eventArr: ['event1', 'event2']
    }
  },
  components: {
  },
  methods: {
    handle () {
      this.$emit('event_self', 'hahaha');
      // this.$emit('event_self', 'hahaha');
      // this.$emit('event_self', 'hahaha');
      // this.$emit('event_self', 'hahaha');
      // this.$emit('event_self', 'hahaha');

      // this.$emit('event1', 'event1');
      // this.$emit('event2', 'event2');
    },
    func (val) {
      console.log('hello world: ' + val);
    }
  },
  created () {
    this.$on('event_self', this.func);

    this.$on(this.eventArr, this.func);
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
