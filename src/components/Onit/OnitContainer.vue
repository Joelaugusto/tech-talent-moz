<template>
  <div id="plataforma">
    <div class="plataforma-div">
      <logo class="logo" />
      <button-option title="Home" :icon="icons.homeIcon" />
      <button-option title="Perfil" :icon="icons.profile" />
      <button-option title="Oportunidades" :icon="icons.discovery" />
      <button-option title="Updates Semanais" :icon="icons.calendar" />
      <button-option title="Sessão em grupo" :icon="icons.chat" />
      <button-option title="Currículo" :icon="icons.document" />
      <button-option title="Comunidades" :icon="icons.category" />
      <button-option title="Sair" @click="logout()" :icon="icons.logOut" id="logout" />
    </div>
    <div class="plataforma-div">
      <h1>Bem Vindo ao Onit!</h1>
      <Progress :percentage="25" />
      <slot></slot>
    </div>
    <div class="plataforma-div div-eventos">
      <h2>Eventos</h2>
      <evento v-for="event in events" :key="event.id"
        :local="event.local"
        :type="event.type"
        :title="event.title"
        :icon="event.icon"
        :sponsored="event.sponsored"
        :date="event.date"
        :company="event.company"
      />
    </div>
  </div>
</template>

<script>
import ButtonOption from "../ButtonOption.vue";
import Progress from "../Progress.vue";
import Evento from "../Evento";
import Logo from "..//Logo";

//icons
import homeIcon from "../../assets/images/Home.svg";
import chat from "../../assets/images/chat.svg";
import category from "../../assets/images/Category.svg";
import discovery from "../../assets/images/Discovery.svg";
import document from "../../assets/images/Document.svg";
import profile from "../../assets/images/Profile.svg";
import logOut from "../../assets/images/log-out.svg";
import calendar from "../../assets/images/Calendar.svg";

export default {
  components: {
    Evento,
    ButtonOption,
    Logo,
    Progress,
  },
  data() {
    return {
      icons: {
        homeIcon,
        chat,
        category,
        discovery,
        document,
        profile,
        logOut,
        calendar,},
        events: [
          {
            type: "Network",
            title: "Tic Tech Talk-Business",
            icon: "",
            sponsored: true,
            company: "Cravers Tech",
            local: "Maputo, Moz",
            date: "02 de Fevereiro de 2021"
          },
          {
            type: "Network",
            title: "Tic Tech Talk-Business",
            icon: "",
            sponsored: true,
            company: "Cravers Tech",
            local: "Maputo, Moz",
            date: "02 de Fevereiro de 2021"
          },
          {
            type: "Network",
            title: "Tic Tech Talk-Business",
            icon: "",
            sponsored: true,
            company: "Cravers Tech",
            local: "Maputo, Moz",
            date: "02 de Fevereiro de 2021"
          },
          {
            type: "Network",
            title: "Tic Tech Talk-Business",
            icon: "",
            sponsored: true,
            company: "Cravers Tech",
            local: "Maputo, Moz",
            date: "02 de Fevereiro de 2021"
          },
          {
            type: "Network",
            title: "Tic Tech Talk-Business",
            icon: "",
            sponsored: true,
            company: "Cravers Tech",
            local: "Maputo, Moz",
            date: "02 de Fevereiro de 2021"
          },
          {
            type: "Network",
            title: "Tic Tech Talk-Business",
            icon: "",
            sponsored: true,
            company: "Cravers Tech",
            local: "Maputo, Moz",
            date: "02 de Fevereiro de 2021"
          },
          {
            type: "Network",
            title: "Tic Tech Talk-Business",
            icon: "",
            sponsored: true,
            company: "Cravers Tech",
            local: "Maputo, Moz",
            date: "02 de Fevereiro de 2021"
          },
        ]
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
