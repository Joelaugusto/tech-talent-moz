<template>
  <div id="footer">
    <div class="link-container">
      <p class="titulo">Comunicação</p>
      <router-link to="#" class="links">Para Talentos</router-link>
      <router-link to="#" class="links">Para Empresas</router-link>
      <router-link to="#" class="links">Grupo do Whatsapp</router-link>
      <router-link to="#" class="links">FAQ</router-link>
    </div>
    <div class="link-container">
      <p class="titulo">Sobre Nós</p>
      <router-link to="#" class="links">Conheça a Equipe</router-link>
      <router-link to="#" class="links">Quem Somos</router-link>
      <router-link to="#" class="links">Technoplus</router-link>
    </div>
    <div class="link-container">
      <p class="titulo">Informação Útil</p>
      <router-link to="#" class="links">Candidaturas</router-link>
      <router-link to="#" class="links">Technoplus Blog</router-link>
    </div>
    <div class="link-container">
      <p class="titulo">Subscreve na Nossa Newsletter</p>
      <p class="links">
        Subscreve na nossa newsletter para estar mais actualizado com os nossos
        programas e serviços
      </p>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="css" scoped>
#footer {
  display: flex;
  justify-content: center;
  margin-bottom: 5rem;
}

.link-container {
  margin: 0 10rem;
  max-width: 35rem;
}

.links {
  display: block;
  font-family: "Circular Std";
  font-style: normal;
  font-weight: normal;
  font-size: 1.6rem;
  line-height: 4rem;
  /* or 250% */

  color: #7c8087;
  text-decoration: none;
}

.titulo {
  font-family: "Circular Std";
  font-style: normal;
  font-weight: 500;
  font-size: 1.8rem;
  line-height: 3.2rem;
  /* identical to box height, or 178% */

  color: #1d293f;
}
</style>