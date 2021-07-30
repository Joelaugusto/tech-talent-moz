<template>
  <div>
    <AuthContainer>
      <form class="form-login" @submit="sendPasswordRequest">
        <h1>Recuperação de Conta</h1>
        <label>Email ID</label>
        <input type="email" required class="login-input"  v-model="form.email"/>
        <input type="submit" value="Entrar" class="login-input" />
        <router-link to="/auth/login" class="btn-form">Retornar a tela de Login.</router-link>
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
      form: {
        email:null,
      },
      method: {push: (path)=>{this.$router.push({path: path})}}
    };
  },
  components: { AuthContainer},
  methods: {
    sendPasswordRequest:async function(e) {
      e.preventDefault();
      const {email} = this.form;
      await api.post('api/users/password/reset',{email}).then(()=>{
          alert(`Foi enviado um email para ${email}`)
          this.method.push('/')
        }).catch(()=>{alert(`Erro ao recuperar Senha`)});
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