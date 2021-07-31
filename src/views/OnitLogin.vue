<template>
  <div>
    <AuthContainer>
      <form class="form-login" @submit="login">
        <h1>Login</h1>
        <label>Email ID</label>
        <input type="email" required class="login-input" v-model="form.email"/>

        <label>Palavra Passe</label>
        <input type="password" class="login-input" v-model="form.password"/>

        <input type="submit" value="Entrar" class="login-input" />
        <router-link to="/auth/password/request" class="btn-form">Esqueceu Password?</router-link>
        <router-link to="/users/create" class="btn-form">Não tem conta? Registe aqui.</router-link>
      </form>
    </AuthContainer>
  </div>
</template>

<script>
import api from '../services/api';
import AuthContainer from '../components/Onit/AuthContainer.vue';
export default {
  data() {
    return {
      page:{
        login: true,
        recuperacao: false,
        linkMsg: "Não tem conta? Registe aqui.",
      },
      form: {
        email:null,password:null, passwordConfirm:null,
      },
      method: {push: (path)=>{this.$router.push({path: path})}}
    };
  },
  components: { AuthContainer},
  methods: {
    login: async function (event) {
      event.preventDefault();
      const {email, password} = this.form;
      await api.post('api/auth',{email,password}).then((token)=>{
              localStorage.setItem('access-token',`${token.data.type} ${token.data.accessToken}`)
              this.afterLogin();
            }).catch((err)=>{
              alert('O email ou senha está incorreto');
              console.log(err)
            })
    },
    afterLogin () {
        this.method.push('/onit')
    }
  },
  beforeMount(){
        this.afterLogin();
  }
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
  margin-bottom: 15px;
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


@media (max-width: 1024px) {
  #login-container {
    display: grid;
    grid-template-columns: 1fr;
  }
}
</style>