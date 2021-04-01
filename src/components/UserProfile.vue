<template>
  <div class="user-profile">
    <img :src="imagem" class="pic" />
    <div class="user-details">
      <div class="prof-time">
        <p class="user-prof">{{getTitulos(titulos)}}</p>
        <div class="dot"></div>
        <p class="user-time">{{disponibilidade}}</p>
      </div>
      <p class="user-name">{{nome}}</p>
      <div class="divs">
        <div>
          <p class="skill">
            Skills:<span class="skill-at">{{getSkills(skills)}}</span>
          </p>
        </div>
        <p class="skill">Taxa por Hora:<span class="skill-at">MZN {{taxa}}</span></p>
      </div>
      <div class="div-link">
        <a :href="portifolio">Portifolio</a>
        <div class="slash"></div>
        <a :href="linkedin">Linkedin</a>
        <div class="slash"></div>
        <a :href="github">Github</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props:{
    nome: String,
    titulos: [Object],
    skills : [Object],
    disponibilidade: String,
    portifolio: String,
    linkedin: String,
    github: String,
    taxa: Number,
    imagem: String,
  },
  methods:{
    getSkills: function(arrayOfSkills){
      let aux = [];
      arrayOfSkills.map((skill)=>{
        aux.push(skill.skill);
      });
      const titulos = aux.toString();
      return titulos.length<=30?titulos:titulos.slice(0,30)+"...";
    },
    getTitulos: function(arrayOfTitulos){
      let aux = [];
      arrayOfTitulos.map((titulo)=>{
        aux.push(titulo.titulo);
      });
      const titulos = aux.toString();
      return titulos.length<=30?titulos:titulos.slice(0,30)+"...";
    }
  }
};
</script>

<style lang="css" scoped>
.user-profile {
  display: flex;
  flex-direction: row;
  width: 327px;
  max-width: 500px;
  height: 145px;
  border: 1px solid rgba(207, 216, 220, 0.5);
  margin: 10px;
  border-radius: 6px;
  flex-grow: 5;
}

.pic {
  width: 62px;
  height: 62px;
  margin-top: 22px;
  margin-left: 29px;
  border-radius: 50%;
  border: none;
  /*background: url("./../assets/bg_user.png");*/
}

.div-link {
  display: flex;
}

.div-link a {
  color: #1d71ff;
  font-size: 12px;
  font-weight: 400px;
  line-height: 16px;
}

.user-details {
  /*width: 169px;*/
  height: 102px;
  margin-top: 23px;
  margin-left: 21px;
}

.user-details div,
strong,
p {
  margin-bottom: 5px;
}

.prof-time {
  display: flex;
}

.user-prof {
  font-size: 12px;
  line-height: 16px;
  color: #b8c4cb;
  width: 28ch;
}

.user-time {
  color: #448aff;
  font-weight: 700;
  font-size: 12px;
  line-height: 16px;
}

.user-name {
  color: #12121f;
  font-weight: 700;
  font-size: 15px;
  line-height: 18px;
}

.skill {
  font-weight: 700;
  font-size: 12px;
  line-height: 16px;
  color: #b8c4cb;
}

.skill-at {
  font-weight: 400;
  margin-left: 5px;
}

.dot {
  height: 2px;
  width: 2px;
  border-radius: 2px;
  background: #afafbd;
  margin: 6px 12px;
}

.slash {
  height: 12px;
  width: 1px;
  background: #afafbd;
  margin: 6px 12px;
      margin-top: 3px;
}


</style>