<template>
  <div>
    <Navbar />
    <div id="image-container">
      <img class="imagem" src="../assets/images/papers2.svg" />
    </div>
    <Article
      title="Social media + AI: conta do sucesso"
      date="1 de Abril de 2021"
      author="John Doe"
      body=" Pelo menos 3.5 biliões de pessoas estão neste momento a usar algum tipo
        de rede social. São aproximadamente 49% da população mundial, um número
        muito grande. O Facebook é o rei das redes sociais, principalmente por
        ter aliado a componente social ao marketing. Com o surgimento de
        ferramentas que utilizam inteligência artificial (AI), esta plataforma
        que acoplou uma app de chat e de partilha de imagens, domina o mercado
        das redes sociais. Do ponto de vista do usuário, estas redes sociais são
        cada vez mais viciantes e é fascinante ver como elas trazem até nós
        exatamente aquilo que gostamos, sejam pessoas, conteúdos ou produtos,
        alguns até diriam que estas redes sociais lêem a nossa mente. Arthur C.
        Clarke, escritor e inventor inglês, dizia que qualquer tecnologia
        suficientemente avançada pode-se confundir com magia É o caso da AI nas
        redes sociais. Nada é por acaso, todos os feeds, todas as publicidades e
        pop-ups, todas as sugestões de amizade são metricamente calculadas e
        dirigidas por algoritmos intrincados. Através destas longas linhas de
        códigos, estes bots conseguem perceber os nossos padrões de pesquisa, de
        escrita, os nossos gostos, o nosso rosto, os nossos padrões de uso das
        redes sociais e adequar o volume de informação disponível a cada um de
        nós. Quem não gosta de se sentir especial e de ter tudo feito à sua
        medida de forma instantânea? Em uma palavra - personalização - é a
        vantagem competitiva que estes gigantes ganham através da AI. As redes
        sociais dão-nos esta experiência gratuitamente. Do ponto de vista do
        vendedor, as redes sociais são uma candyland. A possibilidade de filtrar
        até ao mínimo detalhe o seu público alvo, de ter acesso a uma análise
        minuciosa da influência da sua marca ou produto nas redes sociais, em
        troca de alguns dólares, é valiosa para muitas empresas e
        empreendedores. Os preços acessíveis e razoável facilidade de uso destas
        ferramentas na gestão e e-commerce, tornam as redes sociais cada vez
        mais prioritárias tanto pela parte do vendedor, uma vez que diminui
        custos e aumenta as receitas de forma expressiva. Ao mesmo tempo, a
        possibilidade de termos aquilo que queremos em apenas alguns cliques,
        sem sairmos do nosso lugar é apetecível por muitos potenciais clientes.
        Mas toda a moeda tem o seu revés e o efeito AI não demorou a fazer-se
        sentir nas redes sociais. Umas das controvérsias do uso de conteúdo
        altamente personalizado é o risco de desinformação. cenário mundial, é
        crescente a polarização de opiniões sobre a actualidade e parte disso se
        deve a campanhas altamente personalizadas que, compreendendo os nossos
        padrões de pesquisa alimentam-nos mais do mesmo. O resultado é não
        termos acesso à visão global dos acontecimentos e facilmente adquirirmos
        posicionamentos (às vezes radicais) por termos acesso a uma parte da
        história. Ao mesmo tempo, a incapacidade de avaliar a veracidade ou
        fonte dos conteúdos distribuídos nas redes sociais por parte destes
        bots, torna-nos a todos alvos fáceis a este e outros tipos de golpe,
        portanto o bom-senso é necessário em todas as circunstâncias. Bom, esse
        é o cenário mundial! E aqui no nosso país? Será que já fazemos o uso
        dessas novas tecnologias em sua plenitude? As pequenas e médias empresas
        já sabem se relacionar com esse novo mundo? Como será que podemos
        otimizar a presença das Inteligências Artificiais no dia-a-dia do
        Moçambicano? Estamos ansiosos para ouvir sua opinião, deixe-a ficar aqui nos
        comentários."
    />
    <Footer/>
  </div>
</template>

<script>
import Footer from "../components/Blog/Footer";
import Navbar from "../components/Onit/Navbar";
import Article from "../components/Blog/Article";

export default {
  components: {
    Footer,
    Navbar,
    Article,
  },
  created(){
    const id = this.$route.params.id;
    console.log(id);
  }
};
</script>

<style lang="css" scoped>
#image-container {
  display: flex;
  justify-content: center;
}
.imagem {
  width: 147.5rem;
  height: 59.9rem;
}
</style>