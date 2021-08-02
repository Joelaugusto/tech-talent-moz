<template>
    <div id="container">
    <img src="../../assets/images/Group4.png" id="img" />
    <div id="content">
      <div>
        <router-link to="/"
          ><FontAwesomeIcon class="fa-2x" icon="arrow-left"
        /></router-link>
       <logo />
      </div>
      <slot></slot>
    </div>
  </div>
</template>

<script>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import Logo from '../Logo.vue';
export default {
    components: { FontAwesomeIcon,Logo },
    setup () {
        

        return {}
    }
}
</script>

<style lang="css" scoped>

#container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 100vh;
}

#content {
  display: grid;
}

#content div:first-child {
  display: grid;
  grid-template-columns: 1fr 100fr;
  margin: 6.8rem 5vw 0 5vw;
}

#img {
  width: 55vw;
  height: 100vh;
}

@media (min-width: 1025px) and (max-width: 1200px) {
  #img {
    width: 50vw;
  }
}

@media (max-width: 1024px) {
  #img {
    display: none;
  }

  #login-container {
    display: grid;
    grid-template-columns: 1fr;
  }
}
</style>