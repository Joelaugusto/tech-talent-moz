<template>
  <div>
    <full-comment
      v-for="(comment, index) in comments"
      :key="index"
      :comentario="comment"
    />
  </div>
</template>

<script>
import FullComment from "./FullComment.vue";
export default {
  components: {
    FullComment,
  },
  props: {
    comments: [Object],
  },
};
</script>

<style lang="css" scoped>
</style>