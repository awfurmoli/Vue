const app = Vue.createApp({
    data() {
        return {
            tasks: [],
            userInput: '',
            showTasks: true,
            buttonLabel: 'Hide List'
        }
    },
    methods: {
        addTask() {
            this.tasks.push(this.userInput);
            this.userInput = '';
        },
        removeTask(index) {
            this.tasks.splice(index, 1);
        },
        toggleTask() {
            this.showTasks = !this.showTasks;
            this.buttonLabel= this.showTasks ? 'Hide List' : 'Show List'; 
        }
    }
});

app.mount("#assignment");