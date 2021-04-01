<template>
  <div id="login-container">
    <img src="./../assets/images/Group4.png" id="img" />
    <div id="login-content">
      <div>
        <router-link to="/"
          ><FontAwesomeIcon class="fa-2x" icon="arrow-left"
        /></router-link>
       <logo />
      </div>

      <!--Formulario de Login-->
      <form class="form-login" v-if="login">
        <h1>Login</h1>
        <label>Email ID</label>
        <input type="text" required class="login-input" />

        <label>Palavra Passe</label>
        <input type="password" class="login-input" />

        <input type="submit" value="Entrar" class="login-input" />
        <a class="btn-form">Esqueceu Password?</a>
      </form>

      <!--Formulario de Registro-->
      <form class="form-login" v-else>
        <h1>Cadastrar-se</h1>
        <label>Email ID</label>
        <input type="text" required class="login-input" />

        <label>Escolha uma Palavra Passe</label>
        <input type="password" class="login-input" />

        <label>Confirmar Palavra Passe</label>
        <input type="password" class="login-input" />

        <input type="submit" value="Entrar" class="login-input" />
      </form>

      <button @click="switchForm" class="btn-form">{{ linkMsg }}</button>
    </div>
  </div>
</template>

<script>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import Logo from './../components/Logo';
export default {
  data() {
    return {
      login: true,
      linkMsg: "Não tem conta? Registe aqui.",
    };
  },
  components: { FontAwesomeIcon,Logo },
  methods: {
    switchForm: function () {
      this.login = !this.login; //define qual formulario será carregado

      //define qual mensagem será colocada no botão de form
      this.linkMsg === "Não tem conta? Registe aqui."
        ? (this.linkMsg = "Já tem conta? Inicia uma sessão")
        : (this.linkMsg = "Não tem conta? Registe aqui.");
    },
  },
};
</script>

<style lang="css" scoped>

.form-login {
  margin: 0 10vw;
}

.form-login h1 {
  margin-bottom: 5.4rem;
  font-family: Roboto;
  font-style: normal;
  font-weight: 900;
  font-size: 4.8rem;
  line-height: 2rem;
  /* identical to box height, or 42% */
  letter-spacing: 0.03rem;
  color: #000000;
}
#login-container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 100vh;
}

#login-content {
  display: flex;
  flex-direction: column;
  /*margin: 0 15rem;*/
  justify-content: space-between;
}

#login-content div:first-child {
  display: grid;
  grid-template-columns: 1fr 100fr;
  margin: 6.8rem 5vw 0 5vw;
}

.login-input {
  background: #ebeff0;
  border-radius: 0.3rem;

  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 1.4rem;
  line-height: 1.4rem;
  /* identical to box height, or 100% */
  letter-spacing: 0.03rem;
  color: #448aff;
  margin-bottom: 2.5rem;
  padding: 1.8rem 2.5rem;
}

.login-input:focus {
  background: #4489ff1a;
  mix-blend-mode: normal;
  /*opacity: 0.1; deixava o input transparent*/
  border-radius: 0.3rem;
}

.login-input[type="submit"] {
  color: white;
  cursor: pointer;
  transition: 0.5s;
  background: linear-gradient(135deg, #79beff 0%, #448aff 100%);
  border-radius: 0.4rem;
}

.login-input[type="submit"]:hover {
  filter: brightness(0.9);
}

.form-login {
  display: flex;
  flex-direction: column;
}

.form-login label {
  font-family: Roboto;
  font-style: normal;
  font-weight: 500;
  font-size: 1.3rem;
  line-height: 1.3rem;
  /* identical to box height, or 100% */

  letter-spacing: 0.03rem;
  margin-bottom: 0.8rem;

  color: #78909c;
}

.btn-form {
  background: transparent;
  font-family: Roboto;
  font-style: normal;
  font-weight: 500;
  font-size: 1.3rem;
  line-height: 1.3rem;
  /* identical to box height, or 100% */

  display: flex;
  align-items: center;
  text-align: center;
  letter-spacing: 0.03rem;
  text-decoration-line: underline;

  color: #78909c;
  align-self: center;
}

.btn-form:last-child {
  margin-bottom: 5rem;
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