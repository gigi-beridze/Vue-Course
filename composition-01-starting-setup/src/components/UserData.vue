<template>
    <div>
        <h2>{{ userName }}</h2>
        <h3>{{ age }}</h3>
    </div>
</template>

<script>
import { computed, inject, onBeforeMount, onMounted, onBeforeUpdate, onUpdated, onBeforeUnmount, onUnmounted } from 'vue'
    export default {
        props: ['firstName', 'lastName'],
        setup(props, context) {
            const uName = computed(() => {
                return props.firstName + ' ' + props.lastName
            })
        const age = inject('userAge')
        onBeforeMount(function() {
            console.log('onbeforemount')
        })
        onMounted(function() {
            console.log('onmounted')
        })
        onBeforeUpdate(function() {
            console.log('onbeforeupdate')
        })
        onUpdated(function() {
            console.log('onupdated')
        })
        onBeforeUnmount(function() {
            console.log('onbeforeunmount')
        })
        onUnmounted(function() {
            console.log('onunmounted')
        })
        context.emit('save-data', 1) // this.$emit()
        return { userName: uName, age } 
        },

        // computed: {
        //     userName() {
        //         return this.firstName + ' ' + this.lastName
        //     }
        // }
    }
</script>