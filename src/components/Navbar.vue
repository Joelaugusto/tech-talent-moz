<template>
  <nav id="navbar">
    <div class="navbar">
      <div class="logo">
        <img :src="images.onitLogoColorFull" alt="logo"/>
        <img :src="images.onitLogo" alt="logo"/>
      </div>
      <div class="input">
        <img :src="images.searchIcon" alt=""/>
        <input type="text" placeholder="Procurar" @keyup="onSearch(pesquisa)" v-model="pesquisa.search" />
      </div>
      <button class="btn" @click="autoHide">Filtrar</button>
    </div>
    <div class="filtros" :style="''">
      <div class="onit">
        <router-link to="/" id="onit">ONIT</router-link>
        <div id="triangulo"></div>
        <p id="ttm">Tech Talent Moz</p>
      </div>
      <div class="dropbox-container" :style="hide">
        <select class="dropbox" @change="onSearch(pesquisa)" v-model="pesquisa.disponiblidade">
          <option value="Disponibilidade">Disponibilidade</option>
          <option value="full-time">Full-time</option>
          <option value="part-time">Part-Time</option>
        </select>
        <input class="dropbox" type="number" placeholder="Taxa Mínima por Hora" min="0" @change="onSearch(pesquisa)" v-model="pesquisa.taxaMin"/>
        <input class="dropbox" type="number" placeholder="Taxa Maxima por Hora" min="0" @change="onSearch(pesquisa)" v-model="pesquisa.taxaMax"/>
      </div>
    </div>
    <div></div>
  </nav>
</template>

<script>
import onitLogoColorFull from '../assets/images/OnIt-Logo-Colorful.svg';
import onitLogo from '../assets/images/OnIt-Logo2.svg';
import searchIcon from '../assets/images/Search.svg';
export default {
  props: {
    onSearch: Function,
  },
  data() {
    return {
      images:{
        onitLogoColorFull, onitLogo,searchIcon,
      },
      hide: "display: none",
      pesquisa: {
        search : '',
        disponiblidade:'',
        taxaMin:'',
        taxaMax:'',
      }
    };
  },
  methods: {
    autoHide: function () {
      if (this.hide === "display: none") {
        this.hide = "";
      } else {
        this.hide = "display: none";
      }
    },

  },
};
</script>

<style lang="css" scoped>
.navbar {
  display: grid;
  grid-template-columns: 1fr 5fr 1fr;
  justify-content: space-between;
  height: 80px;
  align-items: center;
}

.logo {
  display: flex;
  align-items: center;
  justify-content: center;
}

.logo img:first-child{
  margin-right: 10px;
}
.input {
  border: 1px solid rgba(207, 216, 220, 0.5);
  border-radius: 6px;
  height: 48px;
  margin-right: 2vw;
  margin-left: 2vw;
  display:grid;
  grid-template-columns: 20px 1fr;
  align-items: center;
  padding: 0 22px;
}

.input img{
  width: 15px;
  height: 15px;
}

.input input {
  margin: 0 1vw;
  border: none;
}

.btn {
  height: 48px;
  background: linear-gradient(135deg, #79beff 0%, #448aff 100%);
  border-radius: 6px;
  border: none;
  margin-right: 39px;
}

.filtros {
  background: #ebeff0;
  height: 57px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.dropbox {
  width: 162px;
  height: 40px;
  margin-right: 12px;
  border: 1px solid rgba(207, 216, 220, 0.5);
  border-radius: 6px;
  font-size: 14px;
  line-height: 14px;
  letter-spacing: 0.3px;
  color: #78909c;
  background: white;
  padding: 0 15px;
}

.dropbox-container {
  margin-right: 11vw;
}

.onit {
  display: flex;
}

#ttm {
  font-weight: bold;
  font-size: 18px;
  line-height: 32px;
  color: #2e384d;
  margin-top: 12px;
  margin-bottom: 13px;
}

#onit {
  font-weight: 300;
  font-size: 18px;
  line-height: 32px;
  color: #2e384d;
  margin-top: 12px;
  margin-bottom: 13px;
  margin-left: 7vw;
}

#triangulo {
  border-bottom: 1px solid #2e384d;
  border-right: 1px solid #2e384d;
  width: 5px;
  height: 5px;
  margin: 24px 17px;
  transform: rotate(-40deg);
}
</style>