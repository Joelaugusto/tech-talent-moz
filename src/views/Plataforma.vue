<template>
  <div id="plataforma">
    <div class="plataforma-div">
      <logo class="logo" />
      <button-option titulo="Home" icon="Home.svg" />
      <button-option titulo="Perfil" icon="user" />
      <button-option titulo="Oportunidades" icon="home" />
    </div>
    <div class="plataforma-div"></div>
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
import ButtonOption from "../components/ButtonOption.vue";
import Evento from "./../components/Evento";
import Logo from "./../components/Logo";
export default {
  components: {
    Evento,
    ButtonOption,
    Logo,
  },
};
</script>

<style lang="css" scoped>
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