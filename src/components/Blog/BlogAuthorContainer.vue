<template>
  <div id="author-container">
    <img id="author-pic" :src="image" />
    <div id="container">
      <small>Escrito por</small>
      <strong>{{ author }}</strong>
      <p>{{ info }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    author: String,
    info: String,
    image:String
  },
};
</script>

<style lang="css" scoped>
#author-container {
  display: flex;
  width: 125rem;
  border-top: 1px solid #fce3e3;
  padding-top: 2.8rem;
}
#author-pic {
  width: 8.5rem;
  width: 8.5rem;
}

#container {
  display: flex;
  flex-direction: column;
  margin-left: 2rem;
}

#container small {
  font-family: "Roboto";
  font-size: 1.4rem;
  line-height: 150.6%;
  /* identical to box height, or 21px */

  /* medium / date */

  color: #757575;
}

#container strong {
  font-family: "Roboto";
  font-size: 2.5rem;
  line-height: 150.6%;
  /* identical to box height, or 38px */

  /* medium / text */

  color: #292929;
}

#container p {
  font-family: "Roboto";
  font-size: 1.6rem;
  line-height: 150.6%;
  /* identical to box height, or 24px */

  /* medium / date */

  color: #757575;
}
</style>