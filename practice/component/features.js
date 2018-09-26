import Vue from 'vue'

const component = {
  template: `
    <div :style="style">
      <div class="header">
        <slot name="header"></slot>
      </div>
      <div class="body">
        <slot name="body"></slot>
      </div>
    </div>
  `,
  data () {
    return {
      style: {
        width: '200px',
        height: '200px',
        border: '2px dashed green'
      }
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
  template: `
    <div>
      <h3>Here you are?</h3>
      <comp-one>
        <span slot="header">Learning vue earning more money!</span>
        <span slot="body">this is body insert</span>
      </comp-one>
    </div>
  `
})
