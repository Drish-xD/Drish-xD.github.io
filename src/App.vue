<template>
  <router-view />
</template>

<style lang="css">
@font-face {
  font-family: "FiraCode";
  src: url(assets/Fonts/firacode-webfont.woff2) format("woff2"),
    url(assets/Fonts/firacode-webfont.woff) format("woff");
}

@font-face {
  font-family: "Syne";
  src: url(assets/Fonts/syne-webfont.woff2) format("woff2"),
    url(assets/Fonts/syne-webfont.woff) format("woff");
}

@font-face {
  font-family: "Truculenta";
  src: url(assets/Fonts/truculenta-webfont.woff2) format("woff2"),
    url(assets/Fonts/truculenta-webfont.woff) format("woff");
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  width: 100%;
  height: 100vh;
  background-color: #0c0c0c;
  background-image: url(assets/img/topography.svg);
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}
</style>
