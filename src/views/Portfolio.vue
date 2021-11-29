<template>
  <div>
    <navbar />
    <homepage />
    <section class="container">
      <div class="container-box">
        <about />
        <skills />
        <project />
      </div>
    </section>
    <footerr />
  </div>
</template>

<script>
import AOS from "aos";
import "aos/dist/aos.css";
import Navbar from "../components/Navbar.vue";
import Homepage from "../components/Homepage.vue";
import about from "../components/About.vue";
import skills from "../components/Skills.vue";
import project from "../components/Projects.vue";
import footerr from "../components/Footer.vue";

AOS.init();
export default {
  components: {
    Navbar,
    Homepage,
    about,
    skills,
    project,
    footerr,
  },
  mounted() {
    // Animations AOS

    AOS.init({
      offset: 100,
      duration: 1200,
      once: false,
    });
  },
};
</script>

<style lang="css">
.container {
  display: flex;
  justify-content: center;
  z-index: 1;
  font-family: "Syne";
  color: #f1f1f1;
  overflow: hidden;
}

.container-box {
  width: 50em;
  height: auto;
}

h2 {
  padding: 80px 0 25px 0;
  text-align: left;
  color: #7e57c2;
  font-size: 70px;
  letter-spacing: 5mm;
}

@media screen and (max-width: 1150px) {
  .container-box {
    width: 45em;
  }

  h2 {
    text-align: center;
  }
}

@media screen and (max-width: 768px) {
  .container-box {
    width: 85%;
  }
}
</style>
