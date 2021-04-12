<template>
  <div id="lastPost">
    <div id="left-div" class="aux">
      <div>
        <h3>{{ title }}</h3>
        <p>{{ body }}</p>
      </div>
      <foot :link="'/post/'+link" :date="date"/>
    </div>
    <img :src="image" class="image"/>
  </div>
</template>

<script>
import Foot from './Foot';
export default {
  props: {
    image: String,
    title: String,
    body: String,
    date: String,
    link: String,
  },components:{
    Foot,
  }
};
</script>

<style lang="css" scoped>
.image{
width:60rem;
height:33.6rem;}

#lastPost {
  display: flex;
  justify-content: center;
  height: 33.6rem;
  margin-top: 15.7rem;
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
  font-style: normal;
  font-weight: bold;
  font-size: 30px;
  line-height: 36px;

  /* 800 */

  color: #2d3748;
  margin-bottom: 3.78rem;
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
  width: 73.3rem;
  flex-direction: column;
  justify-content: space-between;
  align-content: space-between;
  height: 33.6rem;
  padding: 6rem;
}

#lastPost:last-child {
  width: 60rem;
}

</style>