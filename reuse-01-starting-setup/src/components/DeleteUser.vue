<template>
  <user-alert v-if="alertIsVisible" :title="deleteUser" @close="hideAlert">
    <p>Do you want to continue with deleting a user?</p>
  </user-alert>
  <section>
    <h2>Delete a User</h2>
    <button @click="showAlert">Delete User</button>
  </section>
</template>

<script>
import alertMixin from '../mixins/alert.js'
import userAlert from '../components/UserAlert.vue'

export default {
  components: {
    userAlert
  },
  data() {
    return {
      deleteUser: 'delete?'
    }
  },
  mixins: [alertMixin]
};
</script>