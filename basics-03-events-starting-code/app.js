const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: '',
      confirmedName: ''
    };
  },
  methods: {
    confirmedInput(){
      this.confirmedName = this.name
    },
    submitForm(){
      alert('submited')
    },
    setName(event, lastName){
      this.name = event.target.value + ' ' + lastName
    },
    add(num) {
      this.counter = this.counter + num
    },
    reduce(num){
      this.counter = this.counter - num
    }
  }
});

app.mount('#events');
