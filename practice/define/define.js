import Vue from 'vue'

const compoent = {
  props: {
    active: {
      // type: Boolean,
      // required: true
      validator (value) {
        // customer validator
        return typeof value === 'boolean'
      }
    },
    propOne: String
  },
  template: `
  <div>
    <input type="text" v-model="propOne"/>
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
// global defined component
Vue.component('compOne', compoent)
new Vue({
  components: {
    CompOne: compoent
  },
  data: {
    prop1: 'text1'
  },
  methods: {
    // 事件绑定单向数据流
    // handelChange () {
    //   this.prop1 += 1
    // }
    handelChange () {
      this.prop1 += 1
    }
  },
  mounted () {
    console.log(this.$refs.comp1)
  },
  el: '#root',
  template: `
  <div>
   <comp-one ref="comp1" :active="true" :prop-one="prop1" @change="handelChange"></comp-one>
   <comp-one :active="false"></comp-one>
  </div>
  `
})
