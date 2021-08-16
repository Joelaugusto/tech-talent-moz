<template>
  <div class="conteiner">
    <h2 class="title">{{ title }}</h2>
    <p class="content">{{ mainText }}</p>
    <router-link to="/users/complete-registration" class="btn">{{ buttonText }}</router-link>
  </div>
</template>

<script>
export default {
  props: {
    mainText: {
      type: String,
      default: null,
    },
    buttonText: {
      type: String,
      default: null,
    },
    title: {
      type: String,
      default: null,
    },
  },
};
</script>

<style scoped>
.conteiner {
  display: flex;
  flex-direction: column;
  background: #fff;
  margin-bottom: 20px;
  padding: 40px 60px;
  border-radius: 6px;
}

.Track-perfil {
  width: 847px;
  height: 267px;
  border: 1px solid rgba(207, 216, 220, 0.5);
  box-sizing: border-box;
  border-radius: 6px;
}
.title {
  height: 24px;
  margin-bottom: 2%;
  font-family: Roboto;
  font-weight: bold;
  font-size: 18px;
  line-height: 24px;
  /* identical to box height, or 133% */
  letter-spacing: -0.464211px;
  color: #000000;
}
.content {
  font-family: Roboto;
  font-size: 14px;
  line-height: 24px;
  letter-spacing: -0.15px;
  color: #78909c;
}

a.btn {
  display:flex;
  align-items:center;
  justify-content: center;
  }
.btn {
  width: 148px;
  height: 48px;
  background: linear-gradient(135deg, #79beff 0%, #448aff 100%);
  border-radius: 4px;
  font-family: Roboto;
  font-size: 14px;
  line-height: 14px;
  align-items: center;
  text-align: center;
  letter-spacing: 0.3px;
  color: #ffffff;
  align-self: flex-end;
}
</style>
