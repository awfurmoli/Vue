const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: ''
    };
  },
  methods: {
    outputFullname() {

    },
    add(num) {
      this.counter = this.counter + num;
    },
    reduce(num) {
      this.counter = this.counter - num;
      // this.counter--;
    },
    reset() {
      this.name = '';
    }
  },

  computed: {
    fullName() {
      if (this.name) {
        return this.name + ' Furmoli';
      }

    }
  }
});

app.mount('#events');
