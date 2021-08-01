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
    <Footer/>
  </div>
</template>

<script>
//components
import UserProfile from "./../components/UserProfile";
import Navbar from "./../components/Navbar";
import Footer from '../components/talent/Footer.vue';

//services
import api from "../services/api";
export default {
  components: { UserProfile, Navbar, Footer },
  data() {
    return {
      users: [],
    };
  },

  methods: {
    onSearch:async function (e) {
      let skills = "" + e.search;
      e.search = skills.split(",");
      await api.get("/api/techtalent/developers",{skills}).then((result) => {
      this.users = result.data.content;
    }).catch(error=>{console.log(error)});
    },
  },
  created:async function () {
    await api.get("/api/techtalent/developers").then((result) => {
      this.users = result.data.content;
      console.log(result.data.content)
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