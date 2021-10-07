const app = Vue.createApp({
    data() {
        return {

            friends: [{
                id: 'wali',
                name: 'AHmad Wali',
                phone: '1234445677',
                email: 'wali@gmail.com'
            },
            {
                id: 'Nabil',
                name: 'AHmad Nabil',
                phone: '1234445677',
                email: 'Nabil@gmail.com'
            },
            {
                id: 'Nabil',
                name: 'AHmad Nabil',
                phone: '1234445677',
                email: 'Nabil@gmail.com'
            }

            ]
        }
    }

});

app.component('friend-contact', {
    template:
        `
    <li :key="friend.id">
    <h2>{{friend.name}}</h2>
    <button @click="toggleDetails">{{detailsVisible ? 'Hide' : 'Show'}}</button>
    <ul v-if="detailsVisible">
      <li><strong>Phone:</strong> {{friend.phone}}</li>
      <li><strong>Email:</strong> {{friend.email}}</li>
    </ul>
  </li>
    
    `
    , data() {
        return {
            detailsVisible: false,
            friend: {
                id: 'Nabil',
                name: 'AHmad Nabil',
                phone: '1234445677',
                email: 'Nabil@gmail.com'
            }
        }
    },
    methods: {
        toggleDetails() {
            this.detailsVisible = !this.detailsVisible;
        }
    }

});

app.mount("#app");