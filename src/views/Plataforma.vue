<template>
<OnitContainer :percent="completed/steps*100">
  <fillperfil-card
    v-if="completed/steps != 1"
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
import OnitContainer from '../components/Onit/OnitContainer/OnitContainer.vue';
import api from '../services/api'

export default {
  components: {
    FillperfilCard,
    OnitContainer,
  },
  data(){
    return {
      completed: 0,
      steps : 10,
    }
  },
  async created () {
    const user = this.$route.params.user;
    await api.get(`/api/techtalent/developers/${user.id}`).then((developer) => {
      if(developer){
        this.completed = this.mapAttributes(developer.data);
        this.steps = Object.keys(developer.data).length;
      }
      console.log(this.steps, this.completed)
    })
  },
  methods: {
    mapAttributes: (user) => {
      let counter = 0;
      Object.keys(user).map((key) => {

        if(user[key]){
          counter++;
        }
      });
      return counter;
    }
  },

};
</script>

<style lang="css" scoped>
</style>
