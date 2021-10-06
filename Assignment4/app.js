const app= Vue.createApp({
    data(){
        return {
            userInput:'',
            finalInput:'',
            isHidden:false,
            userColor:''

        }
    },
    methods: {
        conf(){
            this.finalInput=this.userInput;
        },
        toggle(){
            this.isHidden=!this.isHidden;
        },setText(){
            //refs is used to grab the input once it is fully entered, rather than on each keystroke.
            this.userInput= this.$refs.input1.value;
        }
    },
    computed:{
       
    }
});

app.mount("#assignment")