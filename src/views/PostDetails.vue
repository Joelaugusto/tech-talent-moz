<template>
  <div>
    <Navbar />
    <div id="image-container">
      <img class="imagem" :src="post.post.image" />
    </div>
    <Article
      :title="post.post.title"
      :date="post.post.date"
      :author="post.nome"
      :body="post.post.post"
      :info="post.info"
      :comments="comments.reverse()"
      :tags="post.post.tags"
      :postId="id"
      :updateComment="updateComment"
      :userImage="post.image"
    />
    <Footer />
  </div>
</template>

<script>
import Footer from "../components/Blog/Footer";
import Navbar from "../components/Onit/Navbar";
import Article from "../components/Blog/Article";

import api from "./../services/api.js";

export default {
  components: {
    Footer,
    Navbar,
    Article,
  },
  data() {
    return { post: null, id: null, comments: [] };
  },
  async created() {
    const _id = this.$route.params.id;
    this.id = _id;
    //bug
    this.post = (await api.post("/post", { _id })).data;
    this.comments = this.post.post.comments;
  },
  methods: {
    updateComment: async function () {
      const _id = this.$route.params.id;
      this.comments = (await api.post("/post", { _id })).data.post.comments;
    },
  },
};
</script>

<style lang="css" scoped>
#image-container {
  display: flex;
  justify-content: center;
}
.imagem {
  width: 147.5rem;
  height: 59.9rem;
}
</style>