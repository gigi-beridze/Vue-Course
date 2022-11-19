const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: '',
      lastName: '',
      // fullName: ''
    };
  },
  watch: {
    counter(value){
      if(value > 50){
        setTimeout(() => {
          this.counter = 0
        }, 2000);
      }
    }
    // name(value){
    //   if(value === ''){
    //     return ''
    //   }else{
    //     this.fullName = value + ' ' + this.lastName
    //   }
    // },
    // lastName(value){
    //   if(value === ''){
    //     return ''
    //   }else{
    //     this.fullName = this.name + ' ' + value
    //   }
    // }
  },
  computed: {
    fullName(){
      console.log('red')
      if(this.name === '' || this.lastName === ''){
        return ''
      }
      return this.name + ' ' + this.lastName
    }
  },
  methods: {
    outputFullName(){
      if(this.name === ''){
        return ''
      }
      return this.name + ' ' + 'Beridze'
    },
    setName(event) {
      this.name = event.target.value;
    },
    add(num) {
      this.counter = this.counter + num;
    },
    reduce(num) {
      this.counter = this.counter - num;
    },
    resetInput(){
      this.name = ''
    }
  }
});

app.mount('#events');
