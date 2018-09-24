import Vue from 'vue'

const compoent = {
  props: {
    active: Boolean,
    propOne: String
  },
  template: `
  <div>
    <input type="text" v-model="text"/>
    <h5 @click="handelChange">{{propOne}}</h5>
    <h3 v-show="active" style="color:purple">Now you can see me^^</h3>
  </div>
  `,
  mounted () {
  },
  data () {
    return {
      text: 123
    }
  },
  methods: {
    handelChange () {
      // 子组件中定义emit change
      this.$emit('change')
    }
  }
}

// method 01
// const CompVue = Vue.extend(compoent)
// new CompVue({
//   el: '#root',
//   propsData: {
//     propOne: 'IphoneXXX'
//   },
//   data: {
//     text: '123'
//   },
//   mounted () {
//     console.log('instance mounted')
//   }
// })

const parent = new Vue({
  name: 'parent'
})

const compoent2 = {
  extends: compoent,
  data () {
    return {
      text: 233
    }
  },
  mounted () {
    console.log(this.$parent.$options.name)
    // modify parent value
    // this.$parent.text = 12346
  }
}

new Vue({
  parent: parent,
  name: 'Root',
  el: '#root',
  components: {
    Comp: compoent2
  },
  data () {
    return {
      text: 119
    }
  },
  template: `
  <div>
    <span>{{text}}</span>
    <comp></comp>
  </div>
  `,
  mounted () {
    console.log(this.$parent.$options.name)
  }
})
