<template>
<OnitContainer>
  <fillperfil-card
    buttonText="Completar Perfil"
    mainText="complete seu perfil para que possa aparecer na Tech Talent Moz Platform.
					A Tech Talent Moz dá te mais abragencia a oportunidades, parcerias e projectos com empresas que procuram por desenvolvedores Moçambicanos."
    title="Completar Perfil"
  />
  <fillperfil-card
    buttonText="Escolha um Track"
    mainText=" Escolha um track de desenvolvimento, a ONIT capacita jovens para se tornarem desenvolvidores profissionais, um track permite que haja foco, temos tracks para varios topicos como Frontend, Backend, UI/UX, DevOps, Project Manager, Cyber Segurança..."
    title="Escolha um Track"
  />
</OnitContainer>
</template>

<script>
import FillperfilCard from "../components/Onit/FillperfilCard.vue";
import OnitContainer from '../components/Onit/OnitContainer.vue';

export default {
  components: {
    FillperfilCard,
    OnitContainer,
  },
  data() {
    return {

    };
  },
  methods: {
    logout(){
      localStorage.removeItem('access-token');
      this.$router.push({path: '/'})
    }
  }
};
</script>

<style lang="css" scoped>
#logout {
  margin-top: 11.6rem;
}
#plataforma {
  display: grid;
  grid-template-columns: 31.5rem 1fr 37.8rem;
  background: #e5e5e5;
}

.plataforma-div {
  overflow: auto;
  height: 100vh;
  display: flex;
  flex-direction: column;
}

.plataforma-div:first-child,
.plataforma-div:last-child {
  background: white;
}

.plataforma-div .logo {
  margin-top: 5.5rem;
  margin-bottom: 4.3rem;
}

.plataforma-div h2 {
  font-family: "Circular Std";
  font-style: normal;
  font-weight: bold;
  font-size: 3.6rem;
  line-height: 5.6rem;
  /* identical to box height, or 156% */

  display: flex;
  align-items: center;
  letter-spacing: -0.827586px;

  color: #1d293f;
  margin-top: 4.6rem;
  margin-left: 5.5rem;
}

.div-eventos div {
  margin-bottom: 3.2rem;
}
</style>
