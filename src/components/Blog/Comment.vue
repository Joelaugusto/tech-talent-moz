<template>
  <div>
    <div class="comment-container">
      <div class="comment-container-first">
        <img class="user-avatar" :src="image" />
        <strong class="name-time">{{ nameTime }}</strong>
      </div>
      <div class="comment-container-last">
        <p class="paragraph" v-if="comentario">{{ comentario }}</p>
        <textarea
          v-else
          v-model="newComment"
          class="comment-text-area"
          placeholder="Comentário"
        />
        <button class="comment-btn" @click="sendComment">
          {{ comentario ? "Responder" : "Postar" }}
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import api from "../../services/api";
export default {
  props: {
    nameTime: String,
    comment: String,
    image: String,
    comentario: String,
    show: Function,
    postId: String,
    closeNewComment: Function,
    updateComment:Function
  },
  data() {
    return { newComment: "" };
  },
  methods: {
    sendComment: async function (e) {
      e.preventDefault();
      this.closeNewComment();
      const comment = this.newComment;
      const _id = this.postId;
      const email = "joelaugusto97@gmail.com ";
      await api.post("/comments", { comment, email, _id });
      this.updateComment();
    },
  },
};
</script>

<style lang="css" scoped>
.paragraph {
  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  font-size: 1.2rem;
  line-height: 2rem;
  /* identical to box height, or 167% */

  /* Midnight */

  color: #001b45;

  /* Inside Auto Layout */

  flex: none;
  order: 0;
  flex-grow: 0;
  margin: 10px 0px;
}

.name-time {
  font-family: "Inter";
  font-style: normal;
  font-weight: bold;
  font-size: 12px;
  line-height: 20px;
  /* identical to box height, or 167% */

  /* Midnight */

  color: #001b45;
}
.user-avatar {
  width: 2.4rem;
  height: 2.4rem;
  border-radius: 50%;
  margin: 0 1.7rem;
}

.comment-btn {
  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  font-size: 1.2rem;
  line-height: 2rem;
  /* identical to box height, or 167% */

  text-decoration-line: underline;

  background: transparent;
  /* Midnight */

  color: #001b45;

  opacity: 0.2;

  /* Inside Auto Layout */

  flex: none;
  order: 1;
  flex-grow: 0;
  margin: 1rem 0;
}
.comment-text-area {
  width: 100%;
}
.comment-container {
  width: 64.1rem;

  /* White */

  background: #ffffff;
  border-radius: 0.8rem;
  border: 1px solid #d8e1f3;
  display: flex;
  flex-direction: column;
  margin-bottom: 2.4rem;
}

.comment-container-first {
  width: 64.1rem;
  height: 5.7rem;
  display: flex;
  align-items: center;
  /*border-radius: 0.8rem 0.8rem 0 0;*/

  /* Inside Auto Layout */

  flex: none;
  order: 0;
  flex-grow: 0;
  margin: 0;
  border-bottom: 1px solid #d8e1f3;
}

.comment-container-last {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 1.6rem;
  box-sizing: border-box;
  /*border-radius: 0 0 0.8rem 0.8rem;*/
  flex: none;
  order: 1;
  flex-grow: 0;
}
</style>