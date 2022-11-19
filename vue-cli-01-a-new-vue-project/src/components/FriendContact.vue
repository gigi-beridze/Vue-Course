<template>
    <li>
        <h2>{{ friend.name }}</h2>
        <button @click="toggleDetails">{{ detailsAreVisable ? 'Hide' : 'Show'}} Details</button>        
        <ul v-if="detailsAreVisable">
            <li><strong>Phone:</strong>{{ friend.phone }}</li>
            <li><strong>Email</strong>{{ friend.email }}</li>
        </ul>
    </li>
</template>
<script>
    export default {
        data() {
            return {
                detailsAreVisable:false,
                friend:{
                    id: 'manuel',
                    name: 'Manuel Lorenz',
                    phone: '555-43-43-43',
                    email: 'ggigi@mail.ru'
                }
            }
        },
        methods: {
            toggleDetails() {
                this.detailsAreVisable = !this.detailsAreVisable
            }
        }
    }
</script>