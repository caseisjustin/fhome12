const app = Vue.createApp({
    // data, functions
    // template: '<h2>Hello world</h2>'
    data(){
        return {
            title: "intro vue home",
            author: "anonym",
            age: 0,
        }
    }
})

app.mount('#app')