<template>
  <router-view />
</template>

<script>
</script>

<style lang="css">
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700;900&display=swap");
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');

@font-face {
  font-family: "Circular Std";
  src: url("../src/assets/fonts/CircularStd-Black.woff2") format("woff2"),
    url("../src/assets/fonts/CircularStd-Black.woff") format("woff");
}

::-webkit-scrollbar {
  width: 8px;
}


/*mudar scrolbar*/
/* Track */
::-webkit-scrollbar-track {
  box-shadow: inset 0 0 5px gainsboro;
  border-radius: 10px;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: #b1b1b1;
  border-radius: 10px;
  transition: 0.2s;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: gray;
}


button,
a {
  cursor: pointer;
  transition: filter 0.2s;
}

button:hover,
a:hover {
  filter: brightness(0.9); /*escurece 10%*/
}

:root {
  font-size: 8px;
  /*font-size: 0.5vw;*/
}
p,
a,
h1 {
  font-family: "Roboto", sans-serif;
}

* {
  margin: 0;
  padding: 0;
  outline-style: none;
  box-shadow: none;
  border-color: transparent;
  box-sizing: border-box;
  text-decoration: none;
}
</style>