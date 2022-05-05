const app = Vue.createApp({
    // template: "<h2>I am the template</h2>"
    data() {
        return {
            showProp: true,
            name: 'Kyle',
            age: 27,
            score: 0,
            eventHappened: "Event Happened!",
            x: 0,
            y: 0,
        }
    },
    methods: {
        changeName() {
            this.name = "Bill"
        },
        toggleProp() {
            this.showProp = !this.showProp
        },
        handleEvent(event, data) {
            console.log(event,event.type)
            if (data) {
                console.log(data);
            }
        },
        handleMouseMove(e) {
            this.x = e.offsetX
            this.y = e.offsetY
        }
    }
})

app.mount('#app')