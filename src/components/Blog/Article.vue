<template>
  <div class="article-container">
    <div class="all">
      <h2 class="title">{{ title }}</h2>
      <div class="escrito">
        <div>
          <p class="written">
            Escrito Por {{ author }}
            <span class="read">- Leitura de 2 minutos</span>
          </p>
          <p class="date">{{ date }}</p>
          <p></p>
        </div>
        <div>
          <router-link to="#" class="footer-link"
            ><img class="icon" :src="instagramIcon"
          /></router-link>
          <router-link to="#" class="footer-link"
            ><img class="icon" :src="twitterIcon"
          /></router-link>
          <router-link to="#" class="footer-link"
            ><img class="icon" :src="linkedinIcon"
          /></router-link>
        </div>
      </div>
    </div>

    <div class="body-container">
      <p class="body">{{ body }}</p>
      <p class="body obrigado">Originalmente publicado na Onit</p>
    </div>
  </div>
</template>

<script>
import linkedinIcon from "../../assets/images/linkedin.svg";
import twitterIcon from "../../assets/images/twitter.svg";
import instagramIcon from "../../assets/images/instagram.svg";
export default {
  props: {
    title: String,
    author: String,
    date: String,
    body: String,
  },
  data() {
    return { linkedinIcon, twitterIcon, instagramIcon };
  },
};
</script>

<style lang="css" scoped>
.body {
  font-family: "Inter";
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 27px;

  /* 800 */

  color: #2d3748;
  text-align: justify;
}

.body-container {
  display: flex;
  align-items: center;
  width: 147.5rem;
  height: 86.3rem;
  flex-direction: column;
}

.title {
  font-family: "Inter";
  font-style: normal;
  font-weight: bold;
  font-size: 4.5rem;
  line-height: 5.4rem;
  margin-bottom: 4.1rem;
  margin-top: 3rem;

  /* 800 */

  color: #2d3748;
}

.written {
  font-family: "Inter";
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: 22px;

  /* 800 */

  color: #2d3748;
}

.read {
  font-weight: 400;
}

.date {
  font-family: "Inter";
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 22px;

  /* 600 */

  color: #718096;
}

.escrito {
  display: flex;
  justify-content: space-between;
  margin-bottom: 6rem;
}

.article-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.all {
  width: 147.5rem;
}

.footer-link + .footer-link {
  margin-left: 5rem;
}

.obrigado {
  margin-top: 3rem;
}
</style>