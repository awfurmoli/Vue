const app = Vue.createApp({
    data() {
        return {
            input: '',
            finalInput: ''
        }
    },
    methods: {
        say() {
            alert('BUtton is pressed!');
        },
        setInput(event) {
            this.input = event.target.value;
        },
        confirmInput() {
            this.finalInput = this.input;
        }
    }
});

app.mount("#assignment");