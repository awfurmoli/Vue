const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: '',
      confirmedName: ''
    };
  },
  methods: {
    confirmName(){
      this.confirmedName=this.name;
    },
    submit(event) {
    
    },
    setName(event) {
      this.name = event.target.value;
    },
    add(num) {
      this.counter += num;
    },
    remove(num) {
      this.counter -= num;
    }
  }
});

app.mount('#events');
