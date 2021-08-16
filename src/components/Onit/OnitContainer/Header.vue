<template>
    <div id="header">
      <h1>Bem Vindo a Plataforma Onit!</h1>
      <Progress :percent="percent" />
    </div>
</template>

<script>
    import Progress from '../Progress.vue'
    export default {
        components: {Progress},
        props: {
            percent: {
                type: Number,
                default: 0,
            }
        },
    }
</script>

<style lang="css" scoped>
    #header {
        display: flex;
        flex-direction: column;
        align-self: flex-start;
        margin-top: 46px;
    }

    #header h1 {

      font-family: Circular Std;
      font-weight: bold;
      font-size: 36px;
      line-height: 56px;
      /* identical to box height, or 156% */
      letter-spacing: -0.827586px;
      color: #1D293F;

    }
</style>