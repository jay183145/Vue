const app = Vue.createApp({
    // template: "<h2>I am the template</h2>"
    data() {
        return {
            showProp: true,
            name: 'Kyle',
            age: 27,
            score: 0,
        }
    },
    methods: {
        changeName() {
            this.name = "Bill"
        },
        toggleProp() {
            this.showProp = !this.showProp
        }
    }
})

app.mount('#app')