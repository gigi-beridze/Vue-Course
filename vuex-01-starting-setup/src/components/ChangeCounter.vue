<template>
    <button @click="inc">add 2</button>
    <button @click="increase({ value: 11 })">add 11</button>
</template>

<script>
import { mapActions } from 'vuex'
export default {
    methods: {
        // addOne() {
        //     this.$store.dispatch('increment')
        // }
        // ...mapActions(['increment', 'increase'])
        ...mapActions('numbers', {
            inc: 'increment',
            increase: 'increase'
        })
    }
}
</script>