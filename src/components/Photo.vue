<template>
  <img class="event-user" :src="photo" />
</template>

<script>
export default {
  props: {
    photo: Object,
  },
};
</script>

<style lang="css" scoped>
.event-user {
  border-radius: 50%;
  padding: 1px;
  height: 3.8rem;
  width: 4rem;
}

.event-user + .event-user {
  border-left: solid 2px white;
  margin-left: -10px;
  background: white;
}
</style>