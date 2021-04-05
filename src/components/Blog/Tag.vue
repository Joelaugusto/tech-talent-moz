<template>
  <p class="tag">{{ tag }}</p>
</template>

<script>
export default {
  props: {
    tag: String,
  },
};
</script>

<style lang="css" scoped>
.tag {

    display: flex;
    align-items: center;

  height: 3rem;
  background: #f2f2f2;
  border-radius: 0.4rem;
  padding: 1rem;
  font-family: "Roboto";
  font-style: normal;
  font-weight: normal;
  font-size: 1.3rem;
  line-height: 150.6%;
  /* identical to box height, or 20px */

  /* medium / description */

  color: #777777;

  /* Inside Auto Layout */

  flex: none;
  order: 0;
  flex-grow: 0;


}
.tag + .tag {
  margin-left: 1rem;
}
</style>