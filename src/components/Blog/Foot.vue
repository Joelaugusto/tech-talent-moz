<template>
  <div class="foot">
    <small>{{ date }}</small>
    <router-link
      @click="location.reload()"
      :key="link"
      :to="link"
      class="ler-mais"
      >Ler Mais</router-link
    >
  </div>
</template>

<script>
export default {
  props: {
    date: String,
    link: String,
  },
};
</script>

<style lang="css" scoped>
.foot {
  display: flex;
  justify-content: space-between;
  margin-top: 3rem;
}

small:first-child {
  font-family: "Inter";
  font-size: 1.2rem;
  line-height: 1.5rem;

  /* 600 */

  color: #718096;
}

.ler-mais {
  font-family: "Inter";
  font-style: normal;
  font-weight: bold;
  font-size: 1.2rem;
  line-height: 1.5rem;
  text-decoration: none;

  /* 800 */

  color: #2d3748;
}
</style>