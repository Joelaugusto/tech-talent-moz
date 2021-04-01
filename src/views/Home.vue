<template>
  <div id="registro-model" class="closed-modal">
    <button @click="closeModel" id="closeModel">
      <FontAwesomeIcon icon="window-close" />
    </button>
    <cadastro />
  </div>
  <div id="home-page">
    <Navbar />
    <div id="wellcome">
      <div>
        <h1>Bem Vindo ao ONIT</h1>
        <div class="well-div">
          <div class="img-container">
            <img src="../assets/images/explore.png" />
          </div>
          <div>
            <p class="subtitulo">Talks e Eventos</p>
            <p>Tenha acesso a varios eventos e Talks organizados pela ONIT</p>
          </div>
        </div>
        <div class="well-div">
          <div class="img-container">
            <img src="../assets/images/interview.png" />
          </div>
          <div>
            <p class="subtitulo">Junta te a nossa Comunidade</p>
            <p class="well-body">
              Acede a nosssa Comunidade de talentos e Inovadores
            </p>
          </div>
        </div>
        <div class="well-div">
          <div class="img-container">
            <img src="../assets/images/card-favorite.png" />
          </div>
          <div>
            <p class="subtitulo">Tenha acesso a Projectos Interessantes</p>
            <p>
              Trabalhe com Projectos Interessantes para melhorar as suas
              Capacidades
            </p>
          </div>
        </div>
      </div>

      <img src="../assets/images/wellcome.png" id="img" />
    </div>
    <div id="icc">
      <p>Inovação</p>
      <div class="slash"></div>
      <p>Colaboração</p>
      <div class="slash"></div>
      <p>Crescimento</p>
    </div>
    <div id="about-onit">
      <p>A ONIT é um projecto com o objectivo de:</p>
      <p>
        Criar a maior Comunidade Africana de Inovadores, Startups e
        empreendedores digitais.
      </p>
    </div>

    <div id="cards">
      <card
        title="Mentoria"
        body="Acede a Mentoria de experts que vão guiar e fazer o acompanhamento constante"
        :icon="MentoriaIcon"
      />
      <card
        title="Cursos Pagos"
        body="Cursos pagos de programação, Front End, DevOps, Mobile, UX Design e muito Mais"
        :icon="CursosPagosIcon"
      />
      <card
        title="Projectos"
        body="Uma lista de projectos interessantes para a melhoria das capacidades individuais"
        :icon="ProjectosIcon"
      />
    </div>

    <div id="eventos">
      <div id="ec">
        <h2>Eventos e Conferencias</h2>
        <button>Veja todos 15 Eventos</button>
      </div>
      <div id="evento-card">
        <evento
          local="Maputo, Moz"
          tipo="Network"
          titulo="Tic Tech Talk-Business"
          icon=""
          :patrocinado="true"
          data="02 de Fevereiro de 2021"
          company="Cravers Tech"
        />
        <evento
          local="Maputo, Moz"
          tipo="Network"
          titulo="Tic Tech Talk-Business"
          icon=""
          :patrocinado="true"
          data="02 de Fevereiro de 2021"
          company="Cravers Tech"
        />
        <evento
          local="Maputo, Moz"
          tipo="Network"
          titulo="Tic Tech Talk-Business"
          icon=""
          :patrocinado="true"
          data="02 de Fevereiro de 2021"
          company="Cravers Tech"
        />
        <evento
          local="Maputo, Moz"
          tipo="Network"
          titulo="Tic Tech Talk-Business"
          icon=""
          :patrocinado="true"
          data="02 de Fevereiro de 2021"
          company="Cravers Tech"
        />
        <evento
          local="Maputo, Moz"
          tipo="Network"
          titulo="Tic Tech Talk-Business"
          icon=""
          :patrocinado="true"
          data="02 de Fevereiro de 2021"
          company="Cravers Tech"
        />
        <evento
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

    <div id="subscriber">
      <div id="event-notify-container">
        <event-notify/>
      </div>
      <div>
        <p>Junta-te a nossa comunidade</p>
        <h2>Receba alerta instatâneo no seu Email</h2>
        <p>
          Assine o nosso boletim informativo e receba um alerta instantâneo de
          eventos e mais oportunidades na sua caixa de entrada para se inscrever
        </p>
        <div id="subscribe-input">
          <FontAwesomeIcon icon="envelope" class="fa-2x" />
          <input type="text" placeholder="Escreve o seu Email" />
          <button>Subscrever</button>
        </div>
      </div>
    </div>

    <Footer />
  </div>
</template>

<script>
import Evento from "../components/Evento";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import Footer from "../components/Footer";
import Card from "../components/Card";
import Cadastro from "../components/Cadastro";
import Navbar from '../components/Onit/Navbar';

//icons
import MentoriaIcon from "./../assets/images/msg.svg";
import CursosPagosIcon from "../assets/images/node.svg";
import ProjectosIcon from "./../assets/images/chat-45.svg";

//images
import SubscriberIMG from "./../assets/images/Group4.svg";
import EventNotify from '../components/EventNotify.vue';
export default {
  components: {
    Evento,
    FontAwesomeIcon,
    Footer,
    Card,
    Cadastro,
    EventNotify,
    Navbar
  },
  data() {
    return {
      MentoriaIcon,
      CursosPagosIcon,
      ProjectosIcon,
      SubscriberIMG,
    };
  },
  methods: {
    openModal: function () {
      document.getElementById("home-page").classList.add("open-modal");
      document.getElementById("registro-model").classList.add("model");
      document
        .getElementById("registro-model")
        .classList.remove("closed-modal");
    },
    closeModel: function () {
      document.getElementById("home-page").classList.remove("open-modal");
      document.getElementById("registro-model").classList.remove("model");
      document.getElementById("registro-model").classList.add("closed-modal");
    },
  },
};
</script>

<style lang="css" scoped>


#closeModel {
  position: absolute;
  top: 20px;
  right: 40px;
}
.closed-modal {
  display: none;
}

.open-modal {
  filter: blur(10px);
}
.model {
  position: fixed;
  z-index: 1;
  left: calc(50vw - 34rem);
  top: calc(8vh - 6.2rem);
}


#wellcome {
  display: flex;
  justify-content: center;
}

#wellcome div {
  margin-right: 5.5rem;
}

#wellcome div h1 {
  font-family: "Circular Std";
  margin-bottom: 5.5rem;
  font-weight: bold;
  font-size: 5.8rem;
  line-height: 6.4rem;
  letter-spacing: -0.1rem;
  color: #1d293f;
}

/*propriedades da imagens*/
#img {
  width: 54.6rem;
  height: 63.3rem;
}
.img-container {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 8.3rem;
  height: 8.3rem;
  box-sizing: border-box;
  border: 0.1rem solid #e2e4e8;
  box-sizing: border-box;
  border-radius: 1rem;
  margin-right: 3.1rem;
}

.subtitulo {
  font-family: "Circular Std";
  font-weight: 700;
  font-size: 2.1rem;
  line-height: 3.4rem;
  color: #1d293f;
}

.well-div {
  display: flex;
  margin-bottom: 4rem;
}

.well-div {
  font-family: "Circular Std";
  font-weight: 400;
  font-size: 1.6rem;
  line-height: 2.8rem;
  color: #7c8087;
}

#icc {
  display: flex;
  justify-content: center;
  margin-top: 21.7rem;
}

#icc p {
  font-family: "Circular Std";
  font-weight: bold;
  font-size: 4.8rem;
  line-height: 5.6rem;
  text-align: center;
  letter-spacing: -0.827586px;
  color: #1d293f;
}

#about-onit {
  display: flex;
  text-align: center;
  flex-direction: column;
  margin-top: 1.4rem;
  font-family: "Circular Std";
  font-weight: normal;
  font-size: 1.8rem;
  line-height: 3.2rem;
  /* or 178% */

  text-align: center;

  color: #7c8087;
}

.slash {
  border: solid 2px#1d293f;
  margin: 0 1rem;
  height: 2.5rem;
  margin-top: 1.5rem;
}

#ec {
  display: flex;
  justify-content: space-between;
  margin-bottom: 7.3rem;
}

#ec h2 {
  font-family: "Circular Std";
  font-weight: 500;
  font-size: 5.8rem;
  line-height: 6.4rem;
  /* or 110% */

  letter-spacing: -0.1rem;

  color: #1d293f;
}

#ec button {
  font-family: "Circular Std";
  width: 19.3rem;
  height: 6.5rem;
  font-size: 1.6rem;
  line-height: 2rem;
  text-align: center;
  background: #22b0fc;
  color: white;
  border: none;
}

#eventos {
  background: #f7f8fa;
  margin-top: 10.7rem;
  padding: 12.5rem;
}

#evento-card {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

#evento-card div {
  margin: 1.5rem;
}

#subscriber {
  display: flex;
  justify-content: center;
  padding: 10vw;
}

#subscriber img {
  width: 63.9rem;
  height: 68.8rem;
}

#event-notify-container {
  background: url("./../assets/images/Group4.svg");
  background-repeat: no-repeat;
  background-size: contain;
  height: 60rem;
}

#subscriber div {
  width: 68rem;
}

#subscriber div p:first-child {
  font-family: "Circular Std";
  font-size: 1.6rem;
  line-height: 2rem;
  color: #f77321;
  margin-bottom: 4rem;
}

#subscriber div h2 {
  font-family: "Circular Std";
  font-style: normal;
  font-weight: 500;
  font-size: 5.8rem;
  line-height: 6.4rem;
  margin-bottom: 4rem;
  /* or 110% */

  letter-spacing: -0.1rem;
  color: #1d293f;
}

#subscriber div h2 + p {
  font-family: "Circular Std";
  font-style: normal;
  font-weight: normal;
  font-size: 1.8rem;
  line-height: 3.2rem;
  /* or 178% */

  color: #7c8087;
}

#subscribe-input {
  height: 10.7rem;
}

#subscribe-input input {
  height: 10.7rem;
  border: none;
  width: 25rem;
  margin-left: 1rem;
  font-family: "Circular Std";
  font-style: normal;
  font-weight: normal;
  font-size: 1.6rem;
  line-height: 2rem;

  color: #8c97ac;
}

#subscribe-input button {
  width: 16rem;
  height: 10.7rem;
  color: white;
  border: none;
  background: #22b0fc;
  margin-top: 6.3rem;
}

#subscribe-input svg {
  color: #7c8087;
  margin-right: 0.5rem;
}

#cards {
  display: flex;
  justify-content: center;
}
</style>