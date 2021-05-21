<template>
  <div class="onit-header">
    <Wellcome/>
    <Progress :percentage="percent"/>
  </div>
</template>

<script>
import Wellcome from "./Wellcome";
import Progress from "./Progress";
export default {
  name: "OnitHeader",
  components: {
    Wellcome, Progress
  },
  props: {
    percent: Number,
  }
}
</script>

<style scoped>
.onit-header{
  display: flex;
  flex-direction: column;
}
</style>