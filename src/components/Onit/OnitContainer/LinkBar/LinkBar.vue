<template>
    <div id="linkbar">
      <logo id="logo"/>
      <button-option title="Home" :icon="icons.homeIcon" />
      <button-option title="Perfil" :icon="icons.profile" />
      <button-option title="Oportunidades" :icon="icons.discovery" />
      <button-option title="Updates Semanais" :icon="icons.calendar" />
      <button-option title="Sessão em grupo" :icon="icons.chat" />
      <button-option title="Currículo" :icon="icons.document" />
      <button-option title="Comunidades" :icon="icons.category" />
      <button-option title="Sair" @click="logout()" :icon="icons.logOut" id="logout" />
    </div>
</template>

<script>
    import ButtonOption from './ButtonOption';
    import Logo from './../../../Logo.vue';


    //icons
    import homeIcon from "../../../../assets/images/Home.svg";
    import chat from "../../../../assets/images/chat.svg";
    import category from "../../../../assets/images/Category.svg";
    import discovery from "../../../../assets/images/Discovery.svg";
    import document from "../../../../assets/images/Document.svg";
    import profile from "../../../../assets/images/Profile.svg";
    import logOut from "../../../../assets/images/log-out.svg";
    import calendar from "../../../../assets/images/Calendar.svg";
    export default {
        components: {
          ButtonOption, 
          Logo
          },
        data(){
          return{
            icons: {
              homeIcon,
              chat,
              category,
              discovery,
              document,
              profile,
              logOut,
              calendar,},
          }
        },
        methods: {
          logout(){
          localStorage.removeItem('access-token');
          this.$router.push({path: '/'})
        }
  }
    }
</script>

<style lang="css" scoped>

  #linkbar{
    height: 100vh;
    background: #fff;
  }

  #logo{
    margin: 50px 0;
  }

</style>