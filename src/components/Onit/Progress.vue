<template>
  <div class="progress">
    <p>Perfil Completo: {{percentage}}%</p>
    <div id="progress-div">
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

.progress{
  display: flex;
  flex-direction: column;
}
.progress p {
  font-family: Roboto,serif;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 0;
  /* identical to box height, or 0% */

  color: #78909C;
}
#progress-div {
  width: 136px;
  height: 7px;
  border-radius: 27px;
  margin-top: 15px;
  background: #E2E4E8;
}

#progress-div div {
  background: #0fbc49;
  border-radius: 27px;
  height: 7px;
}
</style>