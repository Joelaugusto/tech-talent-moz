<template>
  <div>
    <Comment
      :image="avatar"
      nameTime="11Horas"
      comentario="Comentario ahdjahdka aksdhasjdhasa adhjaksdhkajsda adada"
    />
    <div class="comments">
      <Comment
        :image="avatar"
        nameTime="11Horas"
        comentario="Comentario ahdjahdka aksdhasjdhasa adhjaksdhkajsda adada"
      />
      <Comment
        :image="avatar"
        nameTime="11Horas"
        comentario="Comentario ahdjahdka aksdhasjdhasa adhjaksdhkajsda adada"
      />
      <Comment
        :image="avatar"
        nameTime="11Horas"
        comentario="Comentario ahdjahdka aksdhasjdhasa adhjaksdhkajsda adada"
      />
      <Comment
        :image="avatar"
        nameTime="11Horas"
        comentario="Comentario ahdjahdka aksdhasjdhasa adhjaksdhkajsda adada"
      />
    </div>
  </div>
</template>

<script>
import avatar from "./../../assets/images/avatar.svg";
import Comment from "./Comment";
export default {
  components: { Comment },
  data() {
    return { avatar };
  },
};
</script>

<style lang="css" scoped>
.comments {
  padding-left: 10rem;
  border-left: solid 1px #d8e1f3;
}
</style>