<template>
  <div>
    <div id="icon-msg">
        <img :src="ShapeMsgIcon" />
    </div>
    <div id="event-notify">
      <div>
        <h2>Novo Evento Publicado</h2>
        <small>{{ time }}</small>
      </div>
      <div>
        <p class="second-div">{{ company }} publicou</p>
        <strong class="second-div">{{ event }}</strong>
      </div>
    </div>
  </div>
</template>

<script>

import ShapeMsgIcon from '../assets/images/Shape.svg'
export default {
  data() {
    return {
      ShapeMsgIcon,
      time: "20 min ago",
      company: "Tecnoplus",
      event: "Event Bootcamp!",
    };
  },
};
</script>

<style lang="css" scoped>
#icon-msg {
  background: linear-gradient(141.82deg, #FAD961 13.67%, #F76B1C 84.68%);
  border-radius: 50%;
  width: 7.3rem;
  height: 7.3rem;
  position: absolute;
  z-index: 1;
  margin: -3rem 48rem;
  display: flex;
  justify-content: center;
  align-items: center;
}


#event-notify {
  height: 25.5rem;
  width: 38.66rem;
  background: white;
  clip-path: polygon(0 0, 0 25.42rem, 38.66rem 22rem, 38.66rem 0);
  margin: 25rem 20rem;
  padding: 3.2rem 4rem;
}

#event-notify div:first-child {
  border-bottom: dashed 2px #8c97ac;
  padding-bottom: 2rem;
}

h2 {
  font-family: "Circular Std";
  font-style: normal;
  font-weight: 500;
  font-size: 2.4rem;
  line-height: 3.4rem;
  /* identical to box height, or 142% */

  color: #1d293f;
  margin-bottom: 0.4rem;
}

small {
  font-family: "Circular Std";
  font-style: normal;
  font-weight: normal;
  font-size: 1.4rem;
  line-height: 1.8rem;
  /* identical to box height */

  color: #8c97ac;
}

.second-div {
  font-family: "Circular Std";
  font-size: 1.8rem;
  line-height: 2.8rem;
  /* or 156% */
  color: #1d293f;
  margin-top: 1.8rem;
}

p.second-div {
  font-weight: 400;
}

strong.second-div {
  font-weight: 700;
}
</style>