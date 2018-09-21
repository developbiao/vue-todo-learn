import Vue from 'vue'
// Vue origin directive

new Vue({
  el: '#root',
  template: `
    <div>
      <div v-cloak>Text: {{text}}</div>
      <div v-pre>{{text}}</div>
      <div v-text="'Value:' + text" :id="id"></div>
      <div v-html="html" v-show="false"></div>
      <div v-html="html" v-if="false"></div>
      <div v-else-if="text === '520'">Yes is 520</div>
      <div v-else>else content</div>
      <!-- foreach array -->
      <ul>
        <li v-for="(item, index) in arr" :key="item">{{item}} : {{index}}</li>
      </ul>
      <!-- foreach object -->
      <ul>
        <li v-for="(value, key, index) in obj">{{value}} => {{key}} : {{index}}</li>
      </ul>
      <h3 v-on:click="clickMe">Event test</h3>
      Value:<input text="text" v-model.lazy="text"/>
      <input type="checkbox" v-model="active"/>
      <div>
        <input type="checkbox" :value="1" v-model="arr"/>
        <input type="checkbox" :value="2" v-model="arr"/>
        <input type="checkbox" :value="3" v-model="arr"/>
      </div>
      <div>
        男<input type="radio" v-model="checked" value="one" v-model="picked"/>
        女<input type="radio" v-model="checked" value="two" v-model="picked"/>
      </div>
      <div v-once>Text: {{text}}</div>
    </div>
  `,
  data: {
    arr: [10, 20, 30, 40],
    obj: {
      a: '123',
      b: '456',
      c: '789'
    },
    text: '520',
    id: 'great',
    html: '<h3 style="color:purple">This is my html</h3>',
    active: true,
    picked: ''
  },
  methods: {
    clickMe () {
      alert('Click me invoke') // eslint-disable-line
    }
  }
})
