import Vue from 'vue'
import Counter from './Counter.vue'
import store from './store'

new Vue({
  el: '#app',
  data: {
    version: 'hello world',
  },
  store,
  render: h => h(Counter)
})
