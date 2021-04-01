<template>
  <navbar :onSearch="onSearch" />
  <div>
    <div id="home">
      <user-profile
        v-for="(user, index) in users"
        :key="index"
        :nome="user.nome"
        :skills="user.skills"
        :disponibilidade="user.disponibilidade"
        :titulos="user.titulos"
        :taxa="user.taxa"
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
    api.get("/").then((result) => {
      this.users = result.data; //acesso proibido por cors, rever depois
      console.log(this.users);
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