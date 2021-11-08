<template>
  <section class="mainpage">
    <div class="welcome-section content-hidden">
      <div class="content-wrap">
        <ul class="fly-in-hello">
          <li class="hello-h">H</li>
          <li>E</li>
          <li>L</li>
          <li>L</li>
          <li>O</li>
          <li class="extraspace">&nbsp;</li>
        </ul>
        <ul class="fly-in-there">
          <li>T</li>
          <li>H</li>
          <li>E</li>
          <li>R</li>
          <li>E</li>
          <li>!</li>
        </ul>
      </div>
      <router-link class="enter-button" to="/Portfolio">ENTER</router-link>
    </div>
  </section>
</template>

<script>
import $ from "jquery";

export default {
  name: "Welcome",
  props: {
    msg: String,
  },
  mounted() {
    $(function () {
      var welcomeSection = $(".welcome-section");

      setTimeout(function () {
        welcomeSection.removeClass("content-hidden");
      }, 800);
    });
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
