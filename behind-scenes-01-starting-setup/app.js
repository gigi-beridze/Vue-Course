const app = Vue.createApp({
  data() {
    return {
      currentUserInput: '',
      message: 'Vue is great!',
    };
  },
  methods: {
    saveInput(event) {
      this.currentUserInput = event.target.value;
    },
    setText() {
      this.message = this.$refs.userText.value
    },
  },
  beforeCreate() {
    console.log('beforeCreate()')
  },
  created() {
    console.log('created')
  },
  beforeMount() {
    console.log('beforemount()')
  },
  mounted() {
    console.log('mounted()')
  },
  beforeUpdate() {
    console.log('beforeupdate()')
  },
  updated() {
    console.log('updated()')
  },
  beforeUnmount() {
    console.log('befoureUnmount()')
  },
  unmounted() {
    console.log('unmounted()')
  },
});

app.mount('#app');
setTimeout(() => {
  app.unmount()
}, 3000);


const app2 = Vue.createApp({
  template: `
    <h3>{{ favoriteMeal }}</h3>
  `,
  data() {
    return {
      favoriteMeal: 'pizza'
    }
  }
})

app2.mount('#app2')