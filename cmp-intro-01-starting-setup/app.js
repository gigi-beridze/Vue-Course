const app = Vue.createApp({
    data() {
        return {
            friends: [
                { 
                    id: 'julie',
                    name: 'Julie Loranez', 
                    phone: '222 33 93 14', 
                    email: 'gfdgfd.gfdgdfberidze.2018@gmail.com'
                }
            ]
        }
    },
})

app.component('friend-contact', {
    template: `
        <li>
            <h2>{{ friend.name }}</h2>
            <button @click="toggleDetails(friend.id)">
                {{ detailAreVisable ? 'Hide' : 'Show' }}
            </button>
            <ul v-if="detailAreVisable">
                <li><strong>Phone:</strong>{{ friend.phone }}</li>
                <li><strong>Email:</strong>{{ friend.email }}</li>
            </ul>
        </li>
    `,
    data() {
        return {
            detailAreVisable:false,
            friend: { 
                id: 'manuel',
                name: 'Manuel Loranez', 
                phone: '555 55 43 34', 
                email: 'gigi.beridze.2018@gmail.com'
            },
        }
    },
    methods: {
        toggleDetails() {
            this.detailAreVisable = !this.detailAreVisable
        }
    },
})
app.mount('#app')