import Vue from 'vue'

const app = new Vue({
  // el: '#root',
  template: '<div ref="div">this is content {{text}} {{obj.a}}</div>',
  data: {
    text: 0,
    obj: {}
  }
  // watch: {
  //   text (newText, oldText) {
  //     console.log(`${newText} : ${oldText}`)
  //   }
  // }
})

app.$mount('#root')

let i = 0
setInterval(() => {
  i++
  app.text += 1
  app.obj.a = i
}, 1000)

// console.log(app.$data)
// console.log(app.$options)
// console.log(app.$el)
// app.$options.render = (h) => {
//   return h('div', {}, 'new render function')
// }

// console.log(app.$root === app)
// console.log(app.$children)
// console.log(app.$slots)
// console.log(app.$scopedslots)
// console.log(app.$refs)
// console.log(app.$isServer)

// watch value
// const unWatch = app.$watch('text', (newText, oldText) => {
//   console.log(`${newText} : ${oldText}`)
// })

// cancel watch
// setTimeout(() => {
//   unWatch()
// }, 3000)

app.$once('test', (a, b) => {
  console.log(`test emited ${a} and ${b}`)
})

setInterval(() => {
  app.$emit('test', 'G', 'K')
}, 1000)
