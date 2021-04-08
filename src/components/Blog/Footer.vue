<template>
  <div id="footer">
    <p><span>TECHNOPLUS - BLOG</span>,Todos direito reservados</p>
    <div>
      <router-link to="#" class="footer-link"><img class="icon" :src="instagramIcon" /></router-link>
      <router-link to="#" class="footer-link"><img class="icon" :src="twitterIcon" /></router-link>
      <router-link to="#" class="footer-link"><img class="icon" :src="linkedinIcon" /></router-link>
    </div>
  </div>
</template>

<script>
import linkedinIcon from "../../assets/images/linkedin.svg";
import twitterIcon from "../../assets/images/twitter.svg";
import instagramIcon from "../../assets/images/instagram.svg";
export default {
  components: {},
  data() {
    return { linkedinIcon, twitterIcon, instagramIcon };
  },
};
</script>

<style lang="css" scoped>
#footer {
  display: flex;
  justify-content: space-between;
  /*background: #e5e5e5;*/
  background: white;
  border-top: 1px solid #fce3e3;
  height: 11rem;
  align-items: center;
  padding: 0 10vw;
}

#footer p{
  font-family: "Inter";
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;

  color: #000000;
}

#footer p span{
    font-weight: 700;
}

.footer-link+.footer-link{
    margin-left: 5rem;
}
</style>