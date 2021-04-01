<template>
  <div>
    <p>Perfil Completo: {{percentage}}%</p>
    <div id="progress">
      <div :style="'width:'+percentage+'%'">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    percentage: Number,
  },
};
</script>

<style lang="css" scoped>
#progress {
  width: 136px;
  height: 7px;
  background: #e2e4e8;
  border-radius: 27px;
}

#progress div {
  background: #0fbc49;
  border-radius: 27px;
  height: 7px;
}
</style>