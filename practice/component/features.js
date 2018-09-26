import Vue from 'vue'

const component = {
  template: `
    <div :style="style">
      <div class="header">
        <slot :value="value" node="child23"></slot>
      </div>
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
    </div>
  `
})
