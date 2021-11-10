<template lang="html">
  <div class="project-section" id="projects">
    <h2 data-aos="fade-up-right">Projects</h2>
    <div class="projects-list">
      <div class="project" data-aos="slide-right">
        <h3>Random Password Generator</h3>
        <p>
          It generates a random password of length between 8 to 128, written in
          python, and runs as a web application using the Flask framework.
        </p>
        <div class="btn">
          <a href="https://github.com/Drish-xD/Pass-gen" target="_blank"
            >Code</a
          >
          <a href="https://drish-xd.herokuapp.com/" target="_blank">Demo</a>
        </div>
      </div>

      <div class="project" data-aos="slide-left" data-aos-delay="250">
        <h3>Rock, Paper and Scissors</h3>
        <p>
          Rock, Paper, and Scissors is a game written in JavaScript. In which
          you can play with a Bot 🤖.
        </p>
        <div class="btn">
          <a href="https://github.com/Drish-xD/RPS-Game" target="_blank"
            >Code</a
          >
          <a href="https://drish-xd.is-a.dev/RPS-Game/" target="_blank">Demo</a>
        </div>
      </div>

      <div class="project" data-aos="slide-right" data-aos-delay="250">
        <h3>Text Spammer</h3>
        <p>
          Text Spammer witten in Python using a API Pyautogui. It can spam any
          word/line for n times or it can also spam a whole script. It can spam
          in any textbox. ( Whatsapp-Web, Instagram, Discord etc )
        </p>
        <div class="btn">
          <a href="https://github.com/Drish-xD/Spammer" target="_blank">Code</a>
        </div>
      </div>

      <div class="project" data-aos="slide-left" data-aos-delay="250">
        <h3>Random User Generator</h3>
        <p>
          It generates random user using a API 'Random user API' and written in
          Vue.js
        </p>
        <div class="btn">
          <a href="https://github.com/Drish-xD/Random-user" target="_blank"
            >Code</a
          >
          <a href="https://drish-xd.is-a.dev/Random-user/" target="_blank"
            >Demo</a
          >
        </div>
      </div>

      <div class="project" data-aos="slide-up" data-aos-delay="300">
        <h3>Front-End Projects</h3>
        <div class="frontend">
          <div>
            <p>Photographer-Website</p>
            <div class="btn">
              <a
                href="https://drish-xd.github.io/Photographer-Website"
                target="_blank"
                >Demo</a
              >
            </div>
          </div>
          <div>
            <p>Notes-website</p>
            <div class="btn">
              <a href="https://drish-xd.is-a.dev/Notes-website" target="_blank"
                >Demo</a
              >
            </div>
          </div>
          <div>
            <p>Code-Genesis Website</p>
            <div class="btn">
              <a
                href="https://drish-xd.is-a.dev/Code-Genesis-tempate"
                target="_blank"
                >Demo</a
              >
            </div>
          </div>
          <div>
            <p>CodeChef Chapter Website</p>
            <div class="btn">
              <a
                href="https://codechef-srm-ncr-chapter.github.io"
                target="_blank"
                >Demo</a
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="css" scoped>
.projects-list {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-gap: 2.5rem;
}

.project {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: #25313999;
  border-radius: 25px;
  padding: 25px;
}

.frontend {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.frontend > div {
  width: 300px;
  margin: 20px 10px;
}

.project:last-child {
  grid-column: 1 / 3;
}

@media screen and (max-width: 703px) {
  .project:last-child {
    grid-column: 1;
  }
}

.project h3 {
  display: block;
  font: 600 30px "Syne";
  color: #8a62cf;
  letter-spacing: 0.15rem;
  text-align: center;
  word-wrap: break-word;
}

.project p {
  font: 300 20px "FiraCode";
  text-align: justify;
  line-height: 9mm;
  padding: 10px 0;
}

.project:last-child p {
  text-align: center;
}

.project .btn {
  display: flex;
  bottom: 1px;
  justify-content: space-between;
}

.project:nth-child(3) .btn,
.project:last-child .btn {
  justify-content: center;
}

.project a {
  font: 600 18px "Syne";
  text-decoration: none;
  letter-spacing: 0.15rem;
  background-color: #243038b3;
  border-radius: 50px;
  border: 2px solid #7e57c2;
  color: #f1f1f1;
  padding: 5px 20px;
  cursor: pointer;
  transition: box-shadow 0.5s, color 0.55s;
}

.project a:hover {
  box-shadow: inset 0 0 10px 20px #7e56c2b3;
  color: #0c0c0c;
}

@media screen and (max-width: 768px) {
  .project h3 {
    font: 27px "Syne";
    letter-spacing: normal;
  }

  .project p {
    font-size: 20px;
  }

  .project a {
    font-size: 20px;
  }
}
</style>
