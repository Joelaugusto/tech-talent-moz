<template>
  <div id="post-container">
    <post
      :image="papersImg"
      title="Social media + AI: conta do sucesso"
      body="Pelo menos 3.5 biliões de pessoas estão neste momento a usar algum tipo de rede social. São aproximadamente 49% da população mundial, um número muito grande."
      date="1 de Abril de 2021"
      link="1231234143"
    />
    <post
      :image="papersImg"
      title="Social media + AI: conta do sucesso"
      body="Pelo menos 3.5 biliões de pessoas estão neste momento a usar algum tipo de rede social. São aproximadamente 49% da população mundial, um número muito grande."
      date="1 de Abril de 2021"
      link="123123"
    />
    <post
      :image="papersImg"
      title="Social media + AI: conta do sucesso"
      body="Pelo menos 3.5 biliões de pessoas estão neste momento a usar algum tipo de rede social. São aproximadamente 49% da população mundial, um número muito grande."
      date="1 de Abril de 2021"
      link="12323"
    />
  </div>
</template>

<script>
import Post from "./Post";
import papersImg from "./../../assets/images/papers1.svg";
export default {
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
}

</style>