<template>
  <div id="post-container">
    <post
      v-for="(post, index) in posts"
      :key="index"
      :image="post.image"
      :title="post.title.slice(0,50)"
      :body="post.post.slice(0,150)+'...'"
      date="1 de Abril de 2021"
      :link="post._id"
    />
  </div>
</template>

<script>
import Post from "./Post";
import papersImg from "./../../assets/images/papers1.svg";
export default {
  props: {
    posts: [Object],
  },
  components: {
    Post,
  },
  data() {
    return { papersImg };
  },
};
</script>

<style lang="css" scoped>
#post-container {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}
</style>