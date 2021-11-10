<template lang="html">
  <div class="about-me" id="About-me">
    <div class="header">
      <h2 data-aos="fade-up-right">About Me</h2>
    </div>

    <div data-aos="fade-up" class="about-img">
      <img :src="require('../assets/img/Code typing.png')" alt="Code Typing" />
    </div>
    <div class="about-txt">
      <h3 data-aos="zoom-in-up">Hey, I'm Drish</h3>
      <p data-aos="zoom-in">
        I am a 2nd-year student at SRM Institute of Science and Technology in
        India, pursuing B.Tech in Computer Science Engineering. I have a keen
        interest in coding and have learned Python, MYSQL, C++, Front-End.
        Currently, I am learning the fundamentals of Full Stack Development. So
        far in the past six months, I have learned Front-End Development and
        Open-Source coding. I'm a quick learner who can rise to any challenge
        with ingenuity and perseverance. I'm always interested in hearing about
        other people's experiences, so I'd be happy to talk about your
        experiences.
      </p>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="css" scoped>
.about-img {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  overflow: hidden;
}

.about-img img {
  width: 65%;
}

.about-txt {
  text-align: justify;
}

.about-txt h3 {
  font-size: 30px;
  letter-spacing: 1mm;
  margin-bottom: 15px;
}

.about-txt p {
  font-size: 25px;
  letter-spacing: 0.5mm;
  line-height: 13mm;
}

@media screen and (max-width: 1150px) {
  .about-img {
    justify-content: center;
  }
}

@media screen and (max-width: 768px) {
  .about-img img {
    width: 70%;
  }

  .about-txt h3 {
    font-size: 24px;
    letter-spacing: 1mm;
  }

  .about-txt p {
    font-size: 20px;
    line-height: 11mm;
  }
}
</style>
