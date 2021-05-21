<template>
  <div id="login-container">
    <img src="./../assets/images/Group4.png" id="img"  alt="onit"/>
    <div id="login-content">
      <div>
        <router-link to="/"
          ><FontAwesomeIcon class="fa-2x" icon="arrow-left"
        /></router-link>
       <logo />
      </div>

      <!--Formulario de Login-->
      <form class="form-login" v-if="login" @submit="loginForm">
        <h1>Login</h1>
        <label>Email ID</label>
        <input type="text" required class="login-input" v-model="email" :style="fail.email"/>

        <label>Palavra Passe</label>
        <input type="password" class="login-input" v-model="password" :style="fail.password" />

        <input type="submit" value="Entrar" class="login-input" />
        <a class="btn-form">Esqueceu Password?</a>
      </form>

      <!--Formulario de Registro-->
      <form class="form-login" @submit="register" v-else>
        <h1>Cadastrar-se</h1>
        <label>Email ID</label>
        <input type="text" required class="login-input" v-model="email" :style="fail.email" />
        <small v-if="fail.email" class="error" >Este usuario já foi resultado!</small>

        <label>Escolha uma Palavra Passe</label>
        <input  type="password" class="login-input" v-model="password" :style="fail.password"/>
        <small v-if="fail.password" class="error" >As senhas não conscidem!</small>

        <label>Confirmar Palavra Passe</label>
        <input type="password" class="login-input" v-model="passwordRep" :style="fail.password"/>
        <small v-if="fail.password" class="error" >As senhas não conscidem!</small>

        <input type="submit" value="Entrar" class="login-input" />
      </form>

      <button @click="switchForm" class="btn-form">{{ linkMsg }}</button>
    </div>
  </div>
</template>

<script>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import Logo from './../components/Logo';
import api from '../services/api';
export default {
  data() {
    return {
      login: true,
      linkMsg: "Não tem conta? Registe aqui.",
      email: null,
      password: null,
      passwordRep:  null,
      fail: {password: '', email: ''}
    };
  },
  components: { FontAwesomeIcon,Logo },
  methods: {
    switchForm: function () {
      this.reset();
      this.login = !this.login; //define qual formulario será carregado

      //define qual mensagem será colocada no botão de form
      this.linkMsg === "Não tem conta? Registe aqui."
        ? (this.linkMsg = "Já tem conta? Inicia uma sessão")
        : (this.linkMsg = "Não tem conta? Registe aqui.");
    },
    register(e){
      e.preventDefault();
      this.fail.email = '';
      this.fail.password = '';
      if(this.password === this.passwordRep && this.password){
        const email = this.email;
        const password = this.password;
        api.post('/auth', {email, password}).then((res) =>{
          console.log(res);
        }).catch(() => {
          this.fail.email = "border: solid 1px red;"

        });
      }else{
        this.fail.password = "border: solid 1px red;"
      }
    },
    loginForm(e){
      e.preventDefault();
      const email = this.email;
      const password = this.password;
      api.post('/auth/login', {email, password }).then((res) => {
        console.log(res)
        this.$router.push('/onit');
      }).catch((err) =>{console.log(err)});
    },
    reset(){
      this.fail.password = '';
      this.fail.email = '';
    }
  },

};
</script>

<style lang="css" scoped>

.form-login {
  margin: 0 10vw;
}

.form-login h1 {
  margin-bottom: 5.4rem;
  font-family: Roboto,serif;
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

  font-family: Roboto,serif;
  font-style: normal;
  font-weight: normal;
  font-size: 1.4rem;
  line-height: 1.4rem;
  /* identical to box height, or 100% */
  letter-spacing: 0.03rem;
  color: #448aff;
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
  margin-top: 2.5rem;
}

.login-input[type="submit"]:hover {
  filter: brightness(0.9);
}

.form-login {
  display: flex;
  flex-direction: column;
}

.form-login label {
  font-family: Roboto,serif;
  font-style: normal;
  font-weight: 500;
  font-size: 1.3rem;
  line-height: 1.3rem;
  /* identical to box height, or 100% */

  letter-spacing: 0.03rem;
  margin-bottom: 0.8rem;

  color: #78909c;
  margin-top: 2.5rem;
}

.btn-form {
  background: transparent;
  font-family: Roboto,serif;
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

.error{
  font-size: small;
  font-family: Roboto, sans-serif;
  color: darkred;

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