<template>
  <div>
    <p id="progress-text">Perfil Completo: {{percent.toFixed(2)}}%</p>
    <div id="progress">
      <div :style= "`width:${percent}%`">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    percent: Number,
  },
};
</script>

<style lang="css" scoped>

#progress-text {
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 0px;
  /* identical to box height, or 0% */
  color: #78909C;

}
#progress {
  width: 136px;
  height: 7px;
  background: #e2e4e8;
  border-radius: 27px;
  margin: 15px 0 25px;
  box-shadow: 0 0 2px #95979c;
}

#progress div {
  background: #0fbc49;
  border-radius: 27px;
  height: 7px;
}
</style>