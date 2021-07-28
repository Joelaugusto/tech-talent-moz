<template>
  <navbar :onSearch="onSearch" />
  <div>
    <div id="home">
      <user-profile
        v-for="(user, index) in users"
        :key="index"
        :name="user.name"
        :skills="user.skills"
        :availability="user.availability"
        :titles="user.titles"
        :tax="user.tax"
        :github="user.github"
        :linkedin="user.linkedin"
        :portifolio="user.portifolio"
        :image="user.image || 'https://via.placeholder.com/100'"
      />
    </div>
  </div>
</template>

<script>
import UserProfile from "./../components/UserProfile";
import Navbar from "./../components/Navbar";
import api from "../services/api";
export default {
  components: { UserProfile, Navbar },
  data() {
    return {
      users: [],
    };
  },

  methods: {
    onSearch: function (e) {
      //e.onSearch = e.splint(',');
      let skills = "" + e.search;
      e.search = skills.split(",");
      console.log(api.arguments)
      api.get("/api/techtalent/developers").then((result) => {
      this.users = result.data; //acesso proibido por cors, rever depois
      console.log(this.users);
    }).catch(error=>{console.log(error)});
    },
  },
  created: function () {
    api.get("/api/techtalent/developers").then((result) => {
      this.users = result.data.content; //acesso proibido por cors, rever depois
      console.log(this.users);
    }).catch(error=>{console.log(error)});

  },
};
</script>

<style lang="css" scoped>
#home {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin: 50px;
}
</style>