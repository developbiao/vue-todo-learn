import Vue from 'vue'

const component = {
  props: ['props1'],
  name: 'comp',
  // template: `
  //   <div :style="style">
  //       <slot></slot>
  //   </div>
  // `,
  render (createElement) {
    return createElement('div', {
      style: this.style,
      on: {
        click: () => { this.$emit('click') }
      }
    }, [this.$slots.header, this.props1])
  },
  data () {
    return {
      style: {
        width: '200px',
        height: '200px',
        border: '5px dashed green'
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
      value: 'render 123'
    }
  },
  methods: {
    handleClick () {
      console.log('%c clicked function', 'font-size:32px; color:red')
    }
  },
  mounted () {
    console.log(this.$refs.comp.value, this.$refs.span)
  },
  // template: `
  //   <div>
  //     <comp-one ref="comp">
  //       <span ref="span" slot-scope="props">{{value}}</span>
  //     </comp-one>
  //   </div>
  // `,
  render (createElement) {
    return createElement('comp-one', {
      ref: 'comp',
      props: {
        props1: this.value
      },
      // on: {
      //   click: this.handleClick
      // }
      nativeOn: {
        click: this.handleClick
      }
    }, [
      createElement('span', {
        ref: 'span',
        slot: 'header',
        attrs: {
          id: 'test-id'
        }
      }, this.value)
    ])
  }
})
