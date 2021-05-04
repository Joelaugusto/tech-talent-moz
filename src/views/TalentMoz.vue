<template>
  <navbar :onSearch="onSearch" />
  <div>
    <div id="home">
      <user-profile
        v-for="(user, index) in users"
        :key="index"
        :nome="user.name"
        :skills="user.skills"
        :disponibilidade="user.availability"
        :titulos="user.titles"
        :taxa="user.taxe"
        :github="user.github"
        :linkedin="user.linkedin"
        :portifolio="user.portifolio"
        imagem="https://via.placeholder.com/100"
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
      console.log(e);
    },
  },
  created: function () {
    api.get("/user").then((result) => {
      const data = result.data; //acesso proibido por cors, rever depois
      this.users = data.content;
      console.log(this.users);
      console.log(data);
    });

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