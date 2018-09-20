import Vue from 'vue'

new Vue({
  el: '#root',
  // template: '<div>{{text}}</div>',
  data: {
    text: 'bbbb'
  },
  beforeCreate () {
    console.log(this.$el, 'beforeCreate')
  },
  created () {
    console.log(this.$el, 'created')
  },
  beforeMount () {
    console.log(this.$el, 'beforeMount')
  },
  mounted () {
    console.log(this.$el, 'mounted')
  },
  beforeUpdate () {
    console.log(this.$el, 'beforeUpdated')
  },
  updated () {
    console.log(this.$el, 'updated')
  },
  render (h) {
    throw new TypeError('render error test')
    // console.log('render function invoked')
    // return h('div', {}, this.text)
  },
  renderError (h, err) {
    return h('div', {}, err.stack)
  }
})
