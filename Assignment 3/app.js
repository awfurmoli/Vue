const app = Vue.createApp({
    data() {
        return {
            result: 0
        }
    },

    methods: {
        add5() {
            this.result += 5;
        },
        add1() {
            this.result += 1;
        }
    },

    computed: {
        getResult() {
            if (this.result > 37) {
                return "Too much!"
            } else if (this.result < 37) {
                return "Not there yet"
            } else {
                return this.result;
            }
        }
    },

    watch: {
        result() {
            setTimeout(() => this.result = 0, 5000);
        }
    }
});

app.mount("#assignment");