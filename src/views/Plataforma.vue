<template>
  <div id="plataforma">
    <div class="plataforma-div">
      <logo class="logo" />
      <button-option titulo="Home" :icon="HomeIcon" />
      <button-option titulo="Perfil" :icon="Profile" />
      <button-option titulo="Oportunidades" :icon="Discovery" />
      <button-option titulo="Updates Semanais" :icon="Calendar" />
      <button-option titulo="Sessão em grupo" :icon="Chat" />
      <button-option titulo="Currículo" :icon="Document" />
      <button-option titulo="Comunidades" :icon="Category" />
      <button-option titulo="Sair" @click="logout()" :icon="LogOut" id="logout" />
    </div>
    <div class="plataforma-div">
      <h1>Bem Vindo ao Onit!</h1>
      <Progress :percentage="25" />
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
    </div>
    <div class="plataforma-div div-eventos">
      <h2>Eventos</h2>
      <evento
        local="Maputo, Moz"
        tipo="Network"
        titulo="Tic Tech Talk-Business"
        icon=""
        :patrocinado="true"
        data="02 de Fevereiro de 2021"
        company="Cravers Tech"
      /><evento
        local="Maputo, Moz"
        tipo="Coding"
        titulo="Tic Tech Talk-Business"
        icon=""
        :patrocinado="true"
        data="02 de Fevereiro de 2021"
        company="Cravers Tech"
      /><evento
        local="Maputo, Moz"
        tipo="Design"
        titulo="Tic Tech Talk-Business"
        icon=""
        :patrocinado="true"
        data="02 de Fevereiro de 2021"
        company="Cravers Tech"
      /><evento
        local="Maputo, Moz"
        tipo="Learning"
        titulo="Tic Tech Talk-Business"
        icon=""
        :patrocinado="true"
        data="02 de Fevereiro de 2021"
        company="Cravers Tech"
      /><evento
        local="Maputo, Moz"
        tipo="Network"
        titulo="Tic Tech Talk-Business"
        icon=""
        :patrocinado="true"
        data="02 de Fevereiro de 2021"
        company="Cravers Tech"
      /><evento
        local="Maputo, Moz"
        tipo="Network"
        titulo="Tic Tech Talk-Business"
        icon=""
        :patrocinado="true"
        data="02 de Fevereiro de 2021"
        company="Cravers Tech"
      /><evento
        local="Maputo, Moz"
        tipo="Network"
        titulo="Tic Tech Talk-Business"
        icon=""
        :patrocinado="true"
        data="02 de Fevereiro de 2021"
        company="Cravers Tech"
      /><evento
        local="Maputo, Moz"
        tipo="Network"
        titulo="Tic Tech Talk-Business"
        icon=""
        :patrocinado="true"
        data="02 de Fevereiro de 2021"
        company="Cravers Tech"
      /><evento
        local="Maputo, Moz"
        tipo="Network"
        titulo="Tic Tech Talk-Business"
        icon=""
        :patrocinado="true"
        data="02 de Fevereiro de 2021"
        company="Cravers Tech"
      /><evento
        local="Maputo, Moz"
        tipo="Network"
        titulo="Tic Tech Talk-Business"
        icon=""
        :patrocinado="true"
        data="02 de Fevereiro de 2021"
        company="Cravers Tech"
      /><evento
        local="Maputo, Moz"
        tipo="Network"
        titulo="Tic Tech Talk-Business"
        icon=""
        :patrocinado="true"
        data="02 de Fevereiro de 2021"
        company="Cravers Tech"
      /><evento
        local="Maputo, Moz"
        tipo="Network"
        titulo="Tic Tech Talk-Business"
        icon=""
        :patrocinado="true"
        data="02 de Fevereiro de 2021"
        company="Cravers Tech"
      /><evento
        local="Maputo, Moz"
        tipo="Network"
        titulo="Tic Tech Talk-Business"
        icon=""
        :patrocinado="true"
        data="02 de Fevereiro de 2021"
        company="Cravers Tech"
      /><evento
        local="Maputo, Moz"
        tipo="Network"
        titulo="Tic Tech Talk-Business"
        icon=""
        :patrocinado="true"
        data="02 de Fevereiro de 2021"
        company="Cravers Tech"
      /><evento
        local="Maputo, Moz"
        tipo="Network"
        titulo="Tic Tech Talk-Business"
        icon=""
        :patrocinado="true"
        data="02 de Fevereiro de 2021"
        company="Cravers Tech"
      /><evento
        local="Maputo, Moz"
        tipo="Network"
        titulo="Tic Tech Talk-Business"
        icon=""
        :patrocinado="true"
        data="02 de Fevereiro de 2021"
        company="Cravers Tech"
      /><evento
        local="Maputo, Moz"
        tipo="Network"
        titulo="Tic Tech Talk-Business"
        icon=""
        :patrocinado="true"
        data="02 de Fevereiro de 2021"
        company="Cravers Tech"
      /><evento
        local="Maputo, Moz"
        tipo="Network"
        titulo="Tic Tech Talk-Business"
        icon=""
        :patrocinado="true"
        data="02 de Fevereiro de 2021"
        company="Cravers Tech"
      /><evento
        local="Maputo, Moz"
        tipo="Network"
        titulo="Tic Tech Talk-Business"
        icon=""
        :patrocinado="true"
        data="02 de Fevereiro de 2021"
        company="Cravers Tech"
      /><evento
        local="Maputo, Moz"
        tipo="Network"
        titulo="Tic Tech Talk-Business"
        icon=""
        :patrocinado="true"
        data="02 de Fevereiro de 2021"
        company="Cravers Tech"
      />
    </div>
  </div>
</template>

<script>
import FillperfilCard from "../components/Onit/FillperfilCard.vue";
import ButtonOption from "../components/ButtonOption.vue";
import Progress from "../components/Progress.vue";
import Evento from "./../components/Evento";
import Logo from "./../components/Logo";

//icons
import HomeIcon from "./../assets/images/Home.svg";
import Chat from "./../assets/images/chat.svg";
import Category from "./../assets/images/Category.svg";
import Discovery from "./../assets/images/Discovery.svg";
import Document from "./../assets/images/Document.svg";
import Profile from "./../assets/images/Profile.svg";
import LogOut from "./../assets/images/log-out.svg";
import Calendar from "./../assets/images/Calendar.svg";

export default {
  components: {
    Evento,
    ButtonOption,
    Logo,
    Progress,
    FillperfilCard,
  },
  data() {
    return {
      HomeIcon,
      Chat,
      Category,
      Discovery,
      Document,
      Profile,
      LogOut,
      Calendar,
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
