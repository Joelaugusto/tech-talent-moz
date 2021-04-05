<template>
  <div class="article-container">
    <div class="all">
      <h2 class="title" id="title">{{ title }}</h2>
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
      <a id="arrow-top" href="#navbar"><img :src="arrowTop" /></a>
      <p class="body obrigado">Originalmente publicado na Onit</p>
    </div>

    <tag-container />
    <blog-author-container
      author="Ferdi sdsdsfdfs"
      info="Digital Product Design"
      :image="userImage"
    />
    <button v-if="!comentario" @click="comment" id="write-comment-btn">
      Escrever seu primeiro Comentario
    </button>
    <form v-else id="comment-form" @submit="sendComment">
      <textarea id="comment" />
      <input type="submit" value="Enviar Comentário" />
    </form>
  </div>
</template>

<script>
import linkedinIcon from "../../assets/images/linkedin.svg";
import twitterIcon from "../../assets/images/twitter.svg";
import instagramIcon from "../../assets/images/instagram.svg";
import userImage from "../../assets/images/avatar.svg";

import TagContainer from "./TagContainer";
import BlogAuthorContainer from "./BlogAuthorContainer";
import arrowTop from "../../assets/images/arrow-top.svg";
export default {
  props: {
    title: String,
    author: String,
    date: String,
    body: String,
  },
  components: {
    TagContainer,
    BlogAuthorContainer,
  },
  data() {
    return {
      linkedinIcon,
      twitterIcon,
      instagramIcon,
      arrowTop,
      userImage,
      commentario: false,
    };
  },
  methods: {
    comment: function () {
      this.commentario = !this.commentario;
    },
    sendComment: function (e) {
      e.preventDefault();
      this.commentario = false;
    },
  },
};
</script>

<style lang="css" scoped>
.body {
  font-family: "Inter";
  font-style: normal;
  font-weight: normal;
  font-size: 1.8rem;
  line-height: 2.7rem;

  /* 800 */

  color: #2d3748;
  text-align: justify;
}

.body-container {
  display: flex;
  align-items: center;
  width: 125rem;
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
  font-size: 1.8rem;
  line-height: 2.2rem;

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
  font-size: 1.8rem;
  line-height: 2.2rem;

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
  width: 125rem;
}

.footer-link + .footer-link {
  margin-left: 5rem;
}

.obrigado {
  margin: 5rem 0;
  display: flex;
  align-self: baseline;
  font-family: "Georgia";
  font-style: italic;
  font-weight: normal;
  font-size: 2rem;
  line-height: 150.6%;
  /* or 30px */

  /* medium / text */

  color: #292929;
}

#arrow-top {
  width: 4.167rem;
  height: 4.167rem;
  display: flex;
  align-self: flex-end;
  border-radius: 50%;
  box-sizing: border-box;
  background: #662bc5;
  transform: matrix(1, 0, 0, -1, 0, 0);
}

#arrow-top img {
  background: white;
  transform: rotate(180deg);
}

#write-comment-btn {
  width: 67rem;
  height: 5.3rem;
  /* medium / main color */

  background: #00ab6c;

  font-family: "Lucida Grande";
  font-style: normal;
  font-weight: bold;
  font-size: 1.4rem;
  line-height: 1.6rem;
  align-items: center;
  text-align: center;

  color: #ffffff;

  margin: 9.8rem 0;
}

#comment {
  background: #f2f2f2;
  border-radius: 0.4rem;
  padding: 1rem;
  font-family: "Roboto";
  font-size: 1.8rem;
  line-height: 150.6%;
  color: #777777;
  min-height: 18rem;
  width: 75rem;
  overflow: overlay;
}

#comment-form {
  margin: 9.8rem 0;
  display: flex;
  flex-direction: column;
}
#comment-form input {
  display: flex;
  align-self: flex-end;
  margin-top: 2rem;

  background: #00ab6c;
  font-family: "Lucida Grande";
  font-style: normal;
  font-weight: bold;
  font-size: 1.4rem;
  line-height: 1.6rem;
  align-items: center;
  text-align: center;
  color: #ffffff;

  width: 15rem;
  height: 4rem;
  border-radius: 0.5rem;
  justify-content: center;
}
</style>