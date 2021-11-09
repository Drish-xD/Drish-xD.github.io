<template>
  <div data-aos="fade-in">
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
