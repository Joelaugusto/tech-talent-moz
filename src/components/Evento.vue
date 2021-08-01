<template>
  <div class="evento-container">
    <div class="tipo-local">
      <div class="local">
        <img :src="Pin" />
        <p>{{ local }}</p>
      </div>
      <p :class="'tipo '+tipo ">{{ tipo }}</p>
    </div>
    <p class="titulo">{{ titulo }}</p>
    <div class="company">
      <img src="../assets/images/Cravers.png" />
      <div>
        <p>{{ company }}</p>
        <small>{{ data }}</small>
      </div>
    </div>
    <div class="participantes">
      <photo :photo="IMG" />
      <photo :photo="IMG" />
      <photo :photo="IMG" />
      <photo :photo="IMG" />

    </div>
    <a class="adicionar-calendar"><FontAwesomeIcon icon="plus" ref="icone"/> Adicionar no Google Calendar</a>
  </div>
</template>

<script>
//import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import Pin from '../assets/images/pin-3.svg'
import Photo from './Photo.vue';
import IMG from '../assets/images/Cravers.png'
export default {
  components: { Photo },
 // components: { FontAwesomeIcon },
  props: {
    local: String,
    titulo: String,
    tipo: String,
    company: String,
    data: String,
  },
  data(){
    return {Pin,IMG}
  }
};
</script>

<style lang="css" scoped>

 .Coding{
   color:#258AFF;
   background: #258AFF26;
 }
 .Network{
   color: #F5A623;
   background: #F5A62326;
 }

 .Design{
   color:#1d42fd;
   background: #1d42fd26;
 }

 .Learning{
   color:#0FBC49;
   background: #0FBC4919;
  
 }

 .participantes{
   margin-top: 2.8rem;
   height: 3.8rem;
 }

.evento-container {
  display: flex;
  flex-direction: column;
  width: 35rem;
  height: 35rem;
  background: white;
  padding: 4rem;
  box-sizing: border-box;
}

.local {
  display: flex;
}

.local p {
  /*font-family: Circular Std;*/
  font-size: 1.6rem;
  line-height: 2rem;
  color: #8c97ac;
  width: 19rem;
}
.local img {
  color: #8c97ac;
  margin-right: 0.5rem;
}

.titulo {
  font-family: Circular Std;
  font-style: normal;
  font-weight: 500;
  font-size: 2.4rem;
  line-height: 3.4rem;
  /* or 142% */

  color: #1d293f;
  margin-top: 2.2rem;
  margin-bottom: 2.4rem;
}

.tipo-local {
  display: flex;
  justify-content: space-between;
}

.company {
  display: flex;
}

.company img {
  margin-right: 0.5rem;
}

.company div p {
  font-weight: 500;
  font-size: 1.8rem;
  line-height: 2.3rem;
  /* identical to box height */

  color: #1d293f;
}

.company div small {
  font-size: 1.3rem;
  line-height: 1.6rem;
  color: #8c97ac;
}

.tipo {
  padding: 0.4rem;
  font-size: 1.3rem;
  line-height: 1.6rem;
  border-radius: 0.5rem;
}

.adicionar-calendar {
  font-family: "Circular Std";
  font-size: 1.3rem;
  line-height: 1.6rem;

  /* Blue 1 */

  color: #2f80ed;
  margin-top: 2.7rem;
}

.adicionar-calendar svg{
  margin-right: 1rem;
}
</style>