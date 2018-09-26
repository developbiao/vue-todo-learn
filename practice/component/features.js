import Vue from 'vue'

const ChildComponent = {
  template: '<div>Child component: {{data.value}}</div>',
  inject: ['yeye', 'data'],
  mounted () {
    console.log(this.yeye)
  }

}

const component = {
  name: 'parent-comp',
  components: {
    ChildComponent
  },
  template: `
    <div :style="style">
        <slot :value="value" node="child23"></slot>
        <child-component />
    </div>
  `,
  data () {
    return {
      style: {
        width: '200px',
        height: '200px',
        border: '2px dashed green'
      },
      value: 'component value'
    }
  }
}

new Vue({
  components: {
    CompOne: component
  },
  provide () {
    const data = {}
    Object.defineProperty(data, 'value', {
      get: () => this.value,
      enumerable: true
    })
    return {
      yeye: this,
      data
    }
  },
  el: '#root',
  data () {
    return {
      value: '98765'
    }
  },
  mounted () {
    console.log(this.$refs.comp.value, this.$refs.span)
  },
  template: `
    <div>
      <h3>Here you are?</h3>
      <comp-one ref="comp">
        <span ref="span" slot-scope="props">{{props.value}} - {{props.node}}</span>
      </comp-one>
      <input type="text" v-model="value" />
    </div>
  `
})
