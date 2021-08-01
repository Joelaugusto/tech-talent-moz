<template>
    <form id="form-container" @submit="registrar">
    <h1 class="h1">Cadastro para Tech Talent Moz</h1>
    <div class="input-container">
      <label class="label"> Nome e Apelido </label>
      <input class="input" type="text" placeholder="Ex: Jhon Doe" required v-model="formData.name" />
    </div>
    <div class="input-container">
      <label class="label">Titulo</label>
      <input
        class="input"
        type="text"
        placeholder="Ex:backend, frontend, UX/UI..."
        required
        autocomplete="on" v-model="formData.titles"
      />
    </div>
    <div class="input-container">
        <label class="label"> Skills </label>
        <input
          class="input"
          type="text"
          placeholder="Ex: UX Designer, PHP, HTML, CSS, etc..."
          v-model="formData.skills"
        />
    </div>
      <div class="input-container">
        <label class="label"> Taxa por Hora</label>
        <input
          class="input"
          type="number"
          min="0"
          placeholder="Ex: 250 por hora"
          require
          v-model="formData.tax"
        />
      </div>
      <div class="input-container">
        <label class="label"> Link do Portifolio</label>
        <input class="input" type="url" placeholder="Link do Portifolio" v-model="formData.portifolio"/>
      </div>
      <div class="input-container">
        <label class="label"> Disponibilidade </label>
        <select class="input" v-model="formData.availability">
          <option value="Disponibilidade">Disponibilidade</option>
          <option value="Full Time">Full Time</option>
          <option value="Part-Time">Part Time</option>
        </select>
      </div>
      <div class="input-container">
      <label class="label"> Link do Linkedin </label>
      <input class="input" type="url" placeholder="Link do linkedin" v-model="formData.linkedin"/>
    </div>
    <div class="input-container">
      <label class="label">Link do Github</label>
      <input class="input" type="url" placeholder="Link do Github" v-model="formData.github" />
    </div>
    
    <!-- input para carregar foto-->
    <div class="inputfile-box input-container">
      <input
        type="file"
        class="inputfile input"
        @change="selectFile"
      />
      <label class="label" for="file" placeholder="Adicionar Foto">
        Adicionar Foto
        <div id="anexar">
          <span class="file-box input"> {{ formData.selectedFile.name }}</span>
          <span class="file-button">Anexar</span
          >
        </div>
      </label>
    </div>
    <div class="input-container">
      <button class="btn input" type="Submit">Registar</button>
    </div>
  </form>
</template>

<script>
    import api from '../../services/api';
export default {
  data() {
    return {
      formData: {
        selectedFile: '',
        name: null,
        titles: null,
        skills: null,
        tax: null,
        portifolio: null,
        linkedin: null,
        github: null,}
    };
  },
  methods: {
    selectFile: function (e) {
      this.formData.selectedFile = e.target.files[0];
    },
    registrar: async function (e){
      e.preventDefault();

      const {name, tax,portifolio, linkedin, github, selectedFile} = this.formData;
      const titles = this.formData.titles.toLowerCase().split(',');
      const skills = this.formData.skills.toLowerCase().split(',');

      const availability = this.formData.availability === 'Full Time';

      const image = new FormData();
      image.append('image',selectedFile);
      

      await api.post("/api/techtalent/developers",{name,titles,skills,tax,portifolio,linkedin, github, availability})
      .then(async()=>{
        await api.post("/api/techtalent/developers/image",image)
        .then(() => {
          alert('Registro Complecto com sucesso!')
        })
        .catch(()=>{alert('Erro ao fazer upload da imagem!')})
        this.$router.push('/onit');
      }).catch(()=>{
        alert('falha ao completar o registro')
      });
    }
  },
};
</script>

<style lang="css" scoped>

#form-container {
  background: #FFFFFF;
  box-shadow: 0px 2px 20px 9px rgba(31, 31, 31, 0.04);
  border-radius: 4px;
  padding: 50px;
  width: 648px;
}

.input-container {
  display: grid;
}

.file-box,.input-container .input{width: 100%;}

.input {
  height: 6.1rem;
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
  display: flex;
  height: 4.6rem;
  background: linear-gradient(135deg, #79beff 0%, #448aff 100%);
  border-radius: 0.6rem;
  margin-top: 3rem;
  border: none;
  align-items: center;
  justify-content: center;
  color: white;
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
  position: absolute;
  opacity: 0;
}

.container {
  display: flex;
  width: 66.6rem;
}

.file-box {
  width: 100%;
  border: 0.01rem solid rgba(207, 216, 220, 0.5);
  background: #ffffff;
  border-radius: 0.6rem;
  cursor: pointer;
  margin-bottom: 1rem;
  border-radius: 0.6rem 0 0 0.6rem;
  align-items: center;
}

.file-button {
  background: linear-gradient(135deg, #79beff 0%, #448aff 100%);
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  cursor: pointer;
  width: 135.24px;
  height: 48.8px;
  align-self: center;
  border-radius: 0 0.6rem 0.6rem 0;
}

#anexar {
  display: flex;
  border-radius: 0.6rem;
}

</style>