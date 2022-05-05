const app = Vue.createApp({
    // template: "<h2>I am the template</h2>"
    data() {
        return {
            name: 'Kyle',
            age: 27,
            score: 0,
        }
    },
    methods: {
        changeName() {
            this.name = "Bill"
        }
    }
})

app.mount('#app')