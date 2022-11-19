<template>
  <section class="container">
    <user-data :first-name="firstName" :last-name="lastName" ></user-data>
    <button @click="setNewData">Change Age</button>
    <div>
      <input type="text" placeholder="first name" v-model="firstName">
      <input type="text" placeholder="last name" ref="lastNameInput">
      <button @click="setLastName">set last name</button>
    </div>
  </section>
</template>

<script setup>
    import { ref, reactive, toRefs,  watch, provide} from 'vue'
    import UserData from './components/UserData.vue'

    
    // const uName = ref('Gigi')
    const uAge = ref(17)
    const firstName = ref('')
    const lastName = ref('')
    const lastNameInput = ref(null)
    const user = reactive({
      name: 'gigi',
      age: 175
    })

    provide('userAge', uAge)

    // const uName = computed(() => {
    //   return firstName.value + ' ' + lastName.value
    // })
    watch([uAge, firstName] , function(newValues, oldValues) {
      console.log("old age:" + oldValues[1])
      console.log('new age' + newValues[0])
    })
    function setNewData() {
      uAge.value = 32
    }
    function setLastName() {
      lastName.value = lastNameInput.value.value
    }
    // function setFirstName(event){
    //   firstName.value = event.target.value
    // }
    // function setLastName(event){
    //   lastName.value = event.target.value
    // }
    console.log(uAge.value)
    const userRefs = toRefs(user)
    console.log(userRefs.name.value)
 
</script>

<style>
* {
  box-sizing: border-box;
}

html {
  font-family: sans-serif;
}

body {
  margin: 0;
}

.container {
  margin: 3rem auto;
  max-width: 30rem;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 1rem;
  text-align: center;
}
</style>