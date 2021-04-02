<template>
  <nav id="navbar">
    <img src="../../assets/images/onit-logo.png" />
    <div>
      <router-link to="/" class="links">Home</router-link>
      <router-link to="/blog" class="links">Blog</router-link>
      <router-link to="/talentmoz" class="links">Tech Talent Moz</router-link>
      <router-link to="/login" class="links">Entrar na plataforma</router-link>
      <!--<button @click="openModal" class="links">
          Cadastrar-se para o TIM
        </button>-->
    </div>
  </nav>
</template>

<script>
export default {};
</script>

<style lang="css" scoped>
#navbar {
  display: flex;
  justify-content: space-between;
  margin: 1rem 5vw;
  height: 8rem;
  margin-top: 5rem;
}

.links {
  font-family: "Circular Std";
  margin-right: 4.7rem;
  margin-top: 4.6rem;
  text-decoration: none;
  font-size: 1.6rem;
  line-height: 2.8rem;
  text-align: right;
  color: #1d293f;
}

.links:first-child {
  font-family: "Circular Std";
  font-weight: bold;
}

.links:last-child {
  font-family: "Circular Std";
  margin-top: 3.6rem;
  font-weight: 500;
  font-size: 1.3rem;
  line-height: 2rem;
  /* identical to box height, or 154% */

  text-align: center;

  color: #e9f7fe;
  background: #0f53fa;
  border-radius: 0.5rem;
  height: 4.5rem;
  width: 18.9rem;
  border: none;
  padding: 1.5rem;
}
</style>