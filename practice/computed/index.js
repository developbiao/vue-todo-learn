import Vue from 'vue'

new Vue({
  el: '#root',
  template: `
  <div>
    <p>Name: {{name}}</p>
    <p>Name2: {{getName()}}</p>
    <p>FullName: {{fullName}}</p>
    <p>{{number}}</p>
    <p>FirstName<input type="text" v-model="firstName"></p>
    <p>LastName<input type="text" v-model="lastName"></p>
    <p>Obj.a<input type="text" v-model="obj.a"></p>
  </div>
  `,
  data: {
    firstName: 'Biao',
    lastName: 'Gong',
    fullName: '',
    obj: {
      a: 123
    },
    number: 175
  },
  computed: {
    name () {
      return `${this.firstName} ${this.lastName}`
    }
  },
  watch: {
    // normal wtach
    // firstName (newName, oldName) {
    //   console.log('Watched first name chagned')
    //   this.fullName = newName + ' ' + this.lastName
    // }
    firstName: {
      handler (newName, oldName) {
        console.log('Watched first name chagned')
        this.fullName = newName + ' ' + this.lastName
      },
      immediate: true
    },
    obj: {
      // watch object
      handler () {
        console.log('obj.a changed')
      },
      immediate: true,
      deep: true
    }
  },
  methods: {
    getName () {
      return this.firstName + ' ' + this.lastName
    }
  },
  mounted () {
    this.obj = {
      a: 345
    }
  }
})
