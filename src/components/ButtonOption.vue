<template>
  <button class="btn-container">
    <!--<FontAwesomeIcon :icon="icon" />-->
    <img :src="icon" />
    {{ title }}
  </button>
</template>

<script>
//import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
export default {
  props: {
    title: String,
    icon: Object,
  },
  components: {
    //FontAwesomeIcon,
  },
};
</script>

<style lang="css" scoped>
.logo {
  background-color: red;
  -webkit-mask: url({{icon}}) no-repeat center;
  mask: url({{icon}}) no-repeat center;
}

.btn-container {
  width: 30.2rem;
  height: 6.165rem;
  background: #ffffff;
  border-radius: 0.5rem;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 16px;
  display: flex;
  align-items: center;
  color: #546996;
  padding: 1.85rem 5.2rem;
  align-self: center;
  transition: 0.2s;
}

.btn-container img {
  margin-right: 1.3rem;
  width: 2.4rem;
  height: 2.4rem;
}

.btn-container:hover {
  background: #f5f8fe;
  color: #3464cd;
}
</style>