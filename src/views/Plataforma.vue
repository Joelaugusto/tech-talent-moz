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
  }
};
</script>

<style lang="css" scoped>
</style>
