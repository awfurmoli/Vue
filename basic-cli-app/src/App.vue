<template>
  <section>
    <header>
      <h1>My Friends List</h1>
      <button @click="getDataFromAPI">Get Data From API</button>
    </header>

    <new-friend @add-contact="addFriend"></new-friend>
    <ul>
      <friend-contact
        v-for="friend in friends"
        :key="friend.id"
        :id="friend.id"
        :name="friend.name"
        :phone-number="friend.phone"
        :email-address="friend.email"
        :isFavorite="friend.isFavorite"
        @toggle-favorite="toggleFavoriteStatus"
        @delete-friend="deleteRecord"
      ></friend-contact>
    </ul>
  </section>
</template>


<script>
import axios from "axios";
import FriendContact from "./components/FriendContact.vue";
import NewFriend from "./components/NewFriend.vue";
const BASE_URL = "https://fakestoreapi.com/products";
export default {
  components: { FriendContact, NewFriend },
  data() {
    return {
      friends: [
        {
          id: "001",
          name: "AHmad Wali",
          phone: "1234445677",
          email: "wali@gmail.com",
          isFavorite: true,
        },
        {
          id: "002",
          name: "AHmad Nabil",
          phone: "1234445677",
          email: "Nabil@gmail.com",
          isFavorite: false,
        },
      ],
    };
  },
  methods: {
    toggleFavoriteStatus(freindId) {
      const foundFriend = this.friends.find((friend) => friend.id === freindId);

      foundFriend.isFavorite = !foundFriend.isFavorite;
    },
    addFriend(name, phone, email) {
      this.friends.push({
        id: new Date().toISOString(),
        name: name,
        phone: phone,
        email: email,
        isFavorite: false,
      });
    },
    deleteRecord(id) {
      this.friends = this.friends.filter((friend) => friend.id !== id);
    },
    getDataFromAPI() {
      alert("clicked");
      const res = axios.get(BASE_URL);
      console.log(res);
    },
  },
};
</script>

<style>
* {
  box-sizing: border-box;
}

html {
  font-family: "Jost", sans-serif;
}

body {
  margin: 0;
}

header {
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  margin: 3rem auto;
  border-radius: 10px;
  padding: 1rem;
  background-color: #58004d;
  color: white;
  text-align: center;
  width: 90%;
  max-width: 45rem;
}

#app ul {
  margin: 0;
  padding: 0;
  list-style: none;
}

#app li,
#app form {
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  margin: 1rem auto;
  border-radius: 10px;
  padding: 1rem;
  text-align: center;
  width: 90%;
  max-width: 40rem;
}

#app h2 {
  font-size: 2rem;
  border-bottom: 4px solid #ccc;
  color: #58004d;
  margin: 0 0 1rem 0;
}

#app button {
  font: inherit;
  cursor: pointer;
  border: 1px solid #ff0077;
  background-color: #ff0077;
  color: white;
  padding: 0.05rem 1rem;
  box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.26);
}

#app button:hover,
#app button:active {
  background-color: #ec3169;
  border-color: #ec3169;
  box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.26);
}
</style>