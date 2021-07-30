<template>
    <form id="form-container" @submit="registrar">
    <h1 class="h1">Cadastro para Tech Talent Moz</h1>
    <div class="equal-div">
      <div>
      <label class="label"> Nome e Apelido </label>
      <input class="input" type="text" placeholder="Ex: Jhon Doe" required v-model="nome" />
    </div>
    <div>
      <label class="label">E-mail</label>
      <input
        class="input"
        type="email"
        placeholder="Ex:jhon@email.com"
        required
        autocomplete="on" v-model="email"
      />
    </div>
    </div>
    <div>
      <label class="label">Titulo</label>
      <input
        class="input"
        type="text"
        placeholder="Ex:backend, frontend, UX/UI..."
        required
        autocomplete="on" v-model="titulos"
      />
    </div>
    <div class="double-input">
      <div>
        <label class="label"> Skills </label>
        <input
          class="input"
          type="text"
          placeholder="Ex: UX Designer, PHP, HTML, CSS, etc..."
          v-model="skills"
        />
      </div>
      <div>
        <label class="label"> Taxa por Hora</label>
        <input
          class="input"
          type="number"
          min="0"
          placeholder="Ex: 250 por hora"
          require
          v-model="taxa"
        />
      </div>
    </div>
    <div class="double-input">
      <div>
        <label class="label"> Link do Portifolio</label>
        <input class="input" type="url" placeholder="Link do Portifolio" />
      </div>
      <div>
        <label class="label"> Disponibilidade </label>
        <select class="input" id="disponibilidade" v-model="disponibilidade">
          <option value="Disponibilidade">Disponibilidade</option>
          <option value="Full Time">Full time</option>
          <option value="Part-Time">Part Time</option>
        </select>
      </div>
    </div>
    <div class="equal-div">
      <div >
      <label class="label"> Link do Linkedin </label>
      <input class="input" type="url" placeholder="Link do linkedin" v-model="linkedin"/>
    </div>
    <div>
      <label class="label">Link do Github</label>
      <input class="input" type="url" placeholder="Link do Github" v-model="github" />
    </div>
    </div>
    
    <!-- input para carregar foto-->
    <div class="inputfile-box">
      <input
        type="file"
        id="file"
        class="inputfile"
        @change="uploadFile"
        required
      />
      <label id="alabel" for="file" placeholder="Adicionar Foto">
        Adicionar Foto
        <div id="anexar">
          <span id="file-name" class="file-box"> {{ inputFileText }}</span>
          <span class="file-button"
            ><i class="fa fa-upload" aria-hidden="true"></i>Anexar</span
          >
        </div>
      </label>
    </div>
    <div>
      <button class="btn" input type="Submit">Registar</button>
    </div>
  </form>
</template>

<script>
    import api from '../../services/api';
export default {
  data() {
    return {
      inputFileText: "",
      nome: "",
      email: "",
      titulos: "",
      skills: "",
      taxa: "",
      portifolio: "",
      linkedin: "",
      github: "",
      foto: ""
    };
  },
  methods: {
    uploadFile: function (e) {
      console.log(e.target.value);
      this.inputFileText = e.target.value;
    },
    registrar: async function (e){
      e.preventDefault();

      const nome = this.nome;
      const email = this.email;
      const skills = this.skills;
      const taxa = this.taxa;
      const portifolio = this.portifolio;
      const linkedin = this.linkedin;
      const github = this.github;
      const titulos = this.titulos.toLowerCase().split(',');
      await api.post("/",{nome,email,titulos,skills,taxa,portifolio,linkedin, github});

      console.log({nome,email,titulos,skills,taxa,portifolio,linkedin, github});

      //o que fazer depois de registrar???
      this.$router.push('/talentmoz');
    }
  },
};
</script>

<style lang="css" scoped>
    .double-input {
  display: flex;
  flex-direction: row;
}

.double-input div:first-child input {
  width: 20em;
  margin-right: 1em;
}

.double-input div:last-child input,
select {
  width: 10em;
}

.equal-div{
  display: flex;
}

.equal-div div input{
  width: 15em;
}
.equal-div div:first-child input{
  margin-right: 1em;
}

#form-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  background: white;
  box-shadow: 0.02rem 0.02rem 0.9rem #1f1f1f66;
  border-radius: 3.8rem;
  padding: 5rem;
}

#disponibilidade {
  width: 11em;
}

.input {
  width: 32em;
  height: 3.6rem;
  margin-top: 1rem;
  background: #ffffff;
  border: 0.01rem solid rgba(207, 216, 220, 0.5);
  border-radius: 0.6rem;
  margin-bottom: 2rem;
  padding-left: 1.2rem;
  text-align: left;
  font-family: "Circular Std";
  font-style: normal;
  font-size: 1.6rem;
  line-height: 1.4rem;
  color: #78909c;
  display: flex;
}

.h1 {
  font-family: "circular std";
  font-style: normal;
  font-weight: bold;
  font-size: 2.8rem;
  margin-bottom: 3.3rem;
}

.btn {
  width: 53rem;
  height: 4.6rem;
  background: linear-gradient(135deg, #79beff 0%, #448aff 100%);
  border-radius: 0.6rem;
  margin-top: 3rem;
  border: none;
}

.label {
  font-family: "Circular Std";
  font-weight: normal;
  font-size: 1.6rem;
  line-height: 1.3rem;
}
.inputfile-box {
  position: relative;
}

.inputfile {
  display: none;
}

.container {
  display: flex;
  width: 66.6rem;
}

.file-box {
  width: 42rem;
  height: 3.6rem;
  border: 0.01rem solid rgba(207, 216, 220, 0.5);
  background: #ffffff;
  border-radius: 0.6rem;
  cursor: pointer
}

.file-button {
  width: 10.4rem;
  height: 3.6rem;
  background: linear-gradient(135deg, #79beff 0%, #448aff 100%);
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  cursor: pointer;
}

#anexar {
  display: flex;
  border-radius: 0.6rem;
}

#alabel {
  font-family: "Circular Std";
  font-weight: normal;
  font-size: 1.6rem;
  line-height: 1.3rem;
}
</style>