<template>
  <div>
    <Navbar />
    <div id="onit-blog">
      <div id="blog-wellcome">
        <h1>Blog</h1>
        <p>
          Aqui encontras Noticias e Informações sobre a Area de IT e Tecnologia
          em Moçambique
        </p>
        <router-link to="/#">Uma Parceria com a technoplus.co.mz</router-link>
      </div>
      <img :src="croodsImg" />
    </div>

    <last-post
      :image="papersImg"
      title="Social media + AI: conta do sucesso"
      body="Pelo menos 3.5 biliões de pessoas estão neste momento a usar algum tipo de rede social. São aproximadamente 49% da população mundial, um número muito grande."
      date="1 de Abril de 2021"
      link="12443"
    />
    <post-container />
    <div id="last-section">
      <div id="last-section-contents">
        <h2>What is Lorem Ipsum? Titulo Aqui</h2>
        <p>
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution...
        </p>
        <foot date="2 de Abril de 2021" link="#" />
      </div>
      <img :src="blog7Img" />
    </div>
    <div class="btn-container">
      <div>
        <button class="ver-mais">
          Ver Mais<img id="arrow" :src="arrowDown" />
        </button>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import Footer from "../components/Blog/Footer";
import Navbar from "../components/Onit/Navbar";
import lastPost from "../components/Blog/LastPost";
import PostContainer from "./../components/Blog/PostContainer";
import Foot from "../components/Blog/Foot";

import croodsImg from "../assets/images/croods1.svg";
import papersImg from "../assets/images/papers1.svg";
import blog7Img from "../assets/images/image7-blog.svg";
import arrowDown from "../assets/images/arrowDown.svg";
export default {
  components: {
    Footer,
    Navbar,
    lastPost,
    PostContainer,
    Foot,
  },
  data() {
    return {
      croodsImg,
      papersImg,
      blog7Img,
      arrowDown,
    };
  },
};
</script>

<style lang="css" scoped>
#onit-blog {
  display: flex;
  justify-content: center;
}

#onit-blog img {
  width: 66.2rem;
  height: 44.7rem;
}

#blog-wellcome {
  width: 50rem;
  margin-right: 14.5rem;
}

#blog-wellcome h1 {
  font-family: "Inter";
  font-weight: bold;
  font-size: 6rem;
  line-height: 7.3rem;
  margin-bottom: 3rem;

  color: #000000;
}

#blog-wellcome p,
a {
  font-family: "Inter";
  font-style: normal;
  font-weight: normal;
  font-size: 3rem;
  line-height: 3.6rem;
  margin-bottom: 2rem;

  /* 700 */

  color: #4a5568;
}

#blog-wellcome a {
  font-size: 2.4rem;
  line-height: 2.9rem;
  color: #0f53fa;
}

#last-section {
  display: flex;
  justify-content: center;
  margin-top: 4rem;
}

#last-section img {
  width: 72.63rem;
  height: 69.2rem;
}

#last-section-contents {
  width: 60.87rem;
  height: 69.2rem;
  padding: 13.56rem 8.716rem;
  background: #f7fafc;
}

#last-section-contents h2 {
  font-family: "Inter";
  font-style: normal;
  font-weight: bold;
  font-size: 4rem;
  line-height: 4.8rem;

  color: #000000;
  margin-bottom: 3.4rem;
}

#last-section-contents p {
  font-family: "Inter";
  font-size: 1.6rem;
  line-height: 1.9rem;

  /* 600 */

  color: #718096;
  margin-bottom: 4.25rem;
}

.ver-mais {
  background: #6b46c1;
  border-radius: 0.5rem;
  color: white;
  width: 16.9rem;
  height: 5.1rem;
  display: flex;
  justify-content: space-around;
  align-items: center;
}

.btn-container {
  display: flex;
  justify-content: center;
  margin-top: 4.3rem;
  margin-bottom: 2.1rem;
}

.btn-container div {
  width: 1070px;
  display: flex;
  justify-content: flex-end;
}

#arrow {
  width: 2.309rem;
  height: 2.297rem;
}
</style>