import Vue from 'vue'
var globalVar = '111' // eslint-disable-line
new Vue({
  el: '#root',
  // template: `
  // <div v-bind="name" @click="handleClick">
  //   <p v-html="html"></p>
  // </div>
  // `,
  template: `
  <div
    :class="[{ active: isActive }]"
    :style="[styles, styles2]">
    <p>{{getJoinedArr(arr)}}</p>
  </div>
  `,
  data: {
    isActive: true,
    arr: [1, 2, 3],
    name: 'Lisa',
    html: '<span style="color:red">html 123</span>',
    styles: {
      background: 'pink',
      appearance: 'none'
    },
    styles2: {
      fontSize: '24px'
    }
  },
  computed: {
  },
  methods: {
    handleClick () {
      alert('clicked me') // eslint-disable-line
    },
    getJoinedArr () {
      return this.arr.join('$')
    }
  }
})
