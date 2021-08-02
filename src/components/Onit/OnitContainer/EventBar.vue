<template>
    <div id="events">
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
</template>

<script>
    import Evento from '../../Evento.vue'
    export default {

    components: {
        Evento,
    },
    data() {
        return {
            events: [
            {
                id: 1,
                type: "Network",
                title: "Tic Tech Talk-Business",
                icon: "",
                sponsored: true,
                company: "Cravers Tech",
                local: "Maputo, Moz",
                date: "02 de Fevereiro de 2021"
            },
            {
                id: 2,
                type: "Network",
                title: "Tic Tech Talk-Business",
                icon: "",
                sponsored: true,
                company: "Cravers Tech",
                local: "Maputo, Moz",
                date: "02 de Fevereiro de 2021"
            },
            {
                id: 3,
                type: "Network",
                title: "Tic Tech Talk-Business",
                icon: "",
                sponsored: true,
                company: "Cravers Tech",
                local: "Maputo, Moz",
                date: "02 de Fevereiro de 2021"
            },
            {
                id: 4,
                type: "Network",
                title: "Tic Tech Talk-Business",
                icon: "",
                sponsored: true,
                company: "Cravers Tech",
                local: "Maputo, Moz",
                date: "02 de Fevereiro de 2021"
            },
            {
                id: 5,
                type: "Network",
                title: "Tic Tech Talk-Business",
                icon: "",
                sponsored: true,
                company: "Cravers Tech",
                local: "Maputo, Moz",
                date: "02 de Fevereiro de 2021"
            },
            {
                id: 6,
                type: "Network",
                title: "Tic Tech Talk-Business",
                icon: "",
                sponsored: true,
                company: "Cravers Tech",
                local: "Maputo, Moz",
                date: "02 de Fevereiro de 2021"
            },
            {
                id: 7,
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
    }
    }
</script>

<style lang="css" scoped>
    #events{
      height: 100vh;
      display: flex;
      background-color: white;
      flex-direction: column;
      overflow:auto;
    }

    #events h2{
      font-family: Circular Std;
      font-style: normal;
      font-weight: bold;
      font-size: 36px;
      line-height: 56px;
      /* identical to box height, or 156% */
      display: flex;
      align-items: center;
      letter-spacing: -0.827586px;
      color: #1D293F;
      margin-top: 45px;
      margin-left: 4rem;
    }
</style>