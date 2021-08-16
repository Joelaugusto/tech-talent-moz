<template>
  <div id="plataforma">
    <LinkBar />
    <div class="plataforma-div">
      <Header :percent="percent"/>
      <slot class="slot"></slot>
    </div>
    <EventBar />
  </div>
</template>

<script>
import Header from "./Header.vue";
import LinkBar from './LinkBar/LinkBar.vue'
import EventBar from './EventBar.vue'

export default {
  props: {
    percent: Number
  },
  components: {
    Header,
    LinkBar,
    EventBar,
  }

};
</script>

<style lang="css" scoped>
#logout {
  margin-top: 11.6rem;
}
#plataforma {
  display: grid;
  grid-template-columns: 31.5rem 1fr 36.5rem;
  background: #e5e5e5;
}

.plataforma-div {
  overflow: auto;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 3vw;
}
.plataforma-div h2 {
  font-family: "Circular Std";
  font-style: normal;
  font-weight: bold;
  font-size: 3.6rem;
  line-height: 5.6rem;
  /* identical to box height, or 156% */

  display: flex;
  align-items: center;
  letter-spacing: -0.827586px;

  color: #1d293f;
  margin-top: 4.6rem;
  margin-left: 5.5rem;
}

.slot{
  display: flex;
  justify-content: center;
}
</style>
