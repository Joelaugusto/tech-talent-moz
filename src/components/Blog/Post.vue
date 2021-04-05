<template>
  <div id="post">
    <div id="left-div" class="aux">
      <div>
        <h3>{{ title }}</h3>
        <p>{{ body }}</p>
      </div>
      <foot :link="'/post/' + link" :date="date" />
    </div>
    <img :src="image" />
  </div>
</template>

<script>
import Foot from "./Foot";
export default {
  props: {
    image: String,
    title: String,
    body: String,
    date: String,
    link: String,
  },
  components: {
    Foot,
  },
};
</script>

<style lang="css" scoped>
#post {
  display: flex;
  justify-content: center;
  height: 52.9rem;
  width: 41.5rem;
  flex-direction: column-reverse;
  margin-top: 6rem;
}

.aux {
  background: #ffffff;
  border: 1px solid #e2e2e2;
  /*box-sizing: border-box;*/
  box-shadow: 0px 5px 4px rgba(221, 221, 221, 0.25);
  /*border-radius: 5px;*/
}

h3 {
  font-family: "Inter";
  font-size: 20px;
  line-height: 24px;

  /* 800 */

  color: #2d3748;
  margin-bottom: 2.07rem;
}

p {
  font-family: "Inter";
  font-size: 1.4rem;
  line-height: 1.7rem;

  /* 600 */

  color: #718096;
}

#left-div {
  display: flex;
  box-sizing: border-box;
  flex-direction: column;
  justify-content: space-between;
  align-content: space-between;
  padding: 2.21rem;
  height: 27rem;
}

small:first-child {
  font-family: "Inter";
  font-size: 1.2rem;
  line-height: 1.5rem;

  /* 600 */

  color: #718096;
}

#post + #post {
  margin-left: 4.6rem;
}
</style>