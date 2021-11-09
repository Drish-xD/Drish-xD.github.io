<template lang="html">
  <div class="skill" id="Skills">
    <h2 data-aos="fade-up-right">Skills</h2>
    <div class="skill-bars">
      <div class="bar">
        <div class="info">
          <span>HTML & CSS</span>
        </div>
        <div class="progress-line Html-css">
          <span data-text="Advanced"></span>
        </div>
      </div>
      <div class="bar">
        <div class="info">
          <span>Bootstrap</span>
        </div>
        <div class="progress-line bootstrap">
          <span data-text="Advanced"></span>
        </div>
      </div>
      <div class="bar">
        <div class="info">
          <span>MySQL</span>
        </div>
        <div class="progress-line mysql">
          <span data-text="Advanced"></span>
        </div>
      </div>
      <div class="bar">
        <div class="info">
          <span>Python</span>
        </div>
        <div class="progress-line Python">
          <span data-text="Intermediate"></span>
        </div>
      </div>
      <div class="bar">
        <div class="info">
          <span>JavaScript</span>
        </div>
        <div class="progress-line JS">
          <span data-text="Intermediate"></span>
        </div>
      </div>
      <div class="bar">
        <div class="info">
          <span>C/C++</span>
        </div>
        <div class="progress-line C">
          <span data-text="Beginner"></span>
        </div>
      </div>
      <div class="bar">
        <div class="info">
          <span>Vue.js</span>
        </div>
        <div class="progress-line vue">
          <span data-text="Beginner"></span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ScrollOut from "scroll-out";

export default {
  mounted() {
    ScrollOut({
      targets: ".bar,skill-bars,.progress-line,.skill span",
    });
  },
};
</script>

<style lang="css"></style>
