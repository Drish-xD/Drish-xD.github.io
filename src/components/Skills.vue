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

<style lang="css">
.skill-bars .bar {
  margin-bottom: 40px;
}

.skill-bars .bar .info {
  margin-bottom: 20px;
}

.skill-bars .bar .info span {
  font-weight: 600;
  font-size: 20px;
  letter-spacing: 0.6mm;
  opacity: 0;
  animation: showText 0.5s 1s linear forwards;
}

@keyframes showText {
  100% {
    opacity: 1;
  }
}

.skill-bars .bar .progress-line {
  height: 10px;
  width: 100%;
  background: #253139;
  position: relative;
  transform: scaleX(0);
  transform-origin: center;
  border-radius: 10px;
  animation: animate 1s cubic-bezier(1, 0, 0.5, 1) forwards;
}

.skill-bars .bar .progress-line[data-scroll="in"] {
  animation: animate 1s cubic-bezier(1, 0, 0.5, 1) forwards;
}

@keyframes animate {
  100% {
    transform: scaleX(1);
  }
}

.bar .progress-line span {
  height: 100%;
  position: absolute;
  border-radius: 10px;
  transform: scaleX(0);
  transform-origin: center;
  background: linear-gradient(25deg, #7e57c2, #a987e2);
}

.bar .progress-line span[data-scroll="in"] {
  animation: animate 1s cubic-bezier(1, 0, 0.5, 1) forwards;
}

.bar .progress-line.Html-css span {
  width: 95%;
}

.bar .progress-line.bootstrap span {
  width: 95%;
}

.bar .progress-line.JS span {
  width: 60%;
}

.bar .progress-line.Python span {
  width: 75%;
}

.bar .progress-line.C span {
  width: 45%;
}

.bar .progress-line.vue span {
  width: 25%;
}

.bar .progress-line.mysql span {
  width: 85%;
}

.progress-line span::before {
  position: absolute;
  content: "";
  top: -12px;
  right: 0;
  border: 7px solid transparent;
  border-right-width: 0px;
  border-top-color: #f1f1f1;
  opacity: 0;
  animation: showText2 0.5s 1.5s linear forwards;
}

.progress-line span::after {
  content: attr(data-text);
  position: absolute;
  top: -27px;
  right: 0;
  background: #f1f1f1;
  color: #111;
  padding: 2px 10px;
  letter-spacing: 0.5px;
  font-size: 15px;
  border-radius: 3px;
  opacity: 0;
  animation: showText2 0.5s 1.5s linear forwards;
}

@keyframes showText2 {
  100% {
    opacity: 1;
  }
}

@media screen and (max-width: 768px) {
  .skill-bars .bar .info span {
    font-size: 17px;
  }

  .progress-line span::after {
    font-size: 12px;
  }
}

[data-scroll] {
  transition: opacity 0.6s;
}

[data-scroll="in"] {
  opacity: 1;
}

[data-scroll="out"] {
  opacity: 0;
}
</style>
