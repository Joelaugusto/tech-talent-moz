<template>
  <div>
    <Comment
      :image="avatar"
      :nameTime="comentario.date"
      :comentario="comentario.comment"
      :show="showComment"
    />
    <div class="comments">
      <Comment :image="avatar" nameTime="11Horas" v-if="show" />
    <!--  <Comment
        :image="avatar"
        nameTime="11Horas"
      :comentario="comentario.comment"
      />-->
    </div>
  </div>
</template>

<script>
import avatar from "./../../assets/images/avatar.svg";
import Comment from "./Comment";
export default {
  components: { Comment },
  data() {
    return { avatar, show: false };
  },
  methods:{
      showComment: function(){
          this.show = true;
      }
  },
  props:{
    comentario: Object,
  }
};
</script>

<style lang="css" scoped>
.comments {
  padding-left: 10rem;
  border-left: solid 1px #d8e1f3;
}
</style>