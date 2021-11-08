<template>
  <div data-aos="fade-in">
    <nav class="nav-bar">
      <div class="menu-bar">
        <div class="menu-icon">
          <div class="wrapper-menu">
            <div class="line-menu half start"></div>
            <div class="line-menu"></div>
            <div class="line-menu half end"></div>
          </div>
        </div>
      </div>

      <div class="spinner">
        <div class="bounce1"></div>
        <div class="bounce2"></div>
        <div class="bounce3"></div>
      </div>

      <div class="menu">
        <ul>
          <li><a href="#Homepage">Home</a></li>
          <li><a href="#About-me">About</a></li>
          <li><a href="#Skills">Skill</a></li>
          <li><a href="#Contacts">Contact</a></li>
        </ul>
      </div>
    </nav>

    <!-- Welcome Page -->

    <section class="homepage" id="Homepage">
      <div class="header-main">
        <h1>Welcome to my Website</h1>
        <h1>^_^</h1>
      </div>
    </section>

    <!-- main container -->

    <section class="container">
      <div class="container-box">
        <!-- About me Section -->

        <div class="about-me" id="About-me">
          <div class="header">
            <h2 data-aos="fade-up-right">About Me</h2>
          </div>

          <div data-aos="fade-up" class="about-img">
            <img
              :src="require('../assets/img/Code typing.png')"
              alt="Code Typing"
            />
          </div>
          <div class="about-txt">
            <h3 data-aos="zoom-in-up">Hey, I'm Drish</h3>
            <p data-aos="zoom-in">
              I am a 2nd-year student at SRM Institute of Science and Technology
              in India, pursuing B.Tech in Computer Science Engineering. I have
              a keen interest in coding and have learned Python, MYSQL, C++,
              Front-End. Currently, I am learning the fundamentals of Full Stack
              Development. So far in the past six months, I have learned
              Front-End Development and Open-Source coding. I'm a quick learner
              who can rise to any challenge with ingenuity and perseverance. I'm
              always interested in hearing about other people's experiences, so
              I'd be happy to talk about your experiences.
            </p>
          </div>
        </div>

        <!-- Skills Section -->

        <div class="skill" id="Skills">
          <h2 data-aos="fade-up-right">Skills</h2>

          <div class="skill-bars">
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
                <span>HTML & CSS</span>
              </div>
              <div class="progress-line Html-css">
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
          </div>
        </div>

        <!-- Projects Section -->

        <div class="project-section" id="projects">
          <h2 data-aos="fade-up-right">Projects</h2>
          <div class="projects-list">
            <div class="project" data-aos="slide-right">
              <h3>Random Password Generator</h3>
              <p>
                It generates a random password of length between 8 to 128,
                written in python, and runs as a web application using the Flask
                framework.
              </p>
              <div class="btn">
                <a href="https://github.com/Drish-xD/Pass-gen" target="_blank"
                  >Code</a
                >
                <a href="https://drish-xd.herokuapp.com/" target="_blank"
                  >Demo</a
                >
              </div>
            </div>

            <div class="project" data-aos="slide-left" data-aos-delay="250">
              <h3>Rock, Paper and Scissors</h3>
              <p>
                Rock, Paper, and Scissors is a game written in JavaScript. In
                which you can play with a Bot 🤖.
              </p>
              <div class="btn">
                <a href="https://github.com/Drish-xD/RPS-Game" target="_blank"
                  >Code</a
                >
                <a href="https://drish-xd.is-a.dev/RPS-Game/" target="_blank"
                  >Demo</a
                >
              </div>
            </div>

            <div class="project" data-aos="slide-right" data-aos-delay="250">
              <h3>Text Spammer</h3>
              <p>
                Text Spammer witten in Python using a API Pyautogui. It can spam
                any word/line for n times or it can also spam a whole script. It
                can spam in any textbox. ( Whatsapp-Web, Instagram, Discord etc
                )
              </p>
              <div class="btn">
                <a href="https://github.com/Drish-xD/Spammer" target="_blank"
                  >Code</a
                >
              </div>
            </div>

            <div class="project" data-aos="slide-left" data-aos-delay="250">
              <h3>Random User Generator</h3>
              <p>
                It generates random user using a API 'Random user API' and
                written in Vue.js
              </p>
              <div class="btn">
                <a
                  href="https://github.com/Drish-xD/Random-user"
                  target="_blank"
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
                    <a
                      href="https://drish-xd.is-a.dev/Notes-website"
                      target="_blank"
                      >Demo</a
                    >
                  </div>
                </div>
                <div>
                  <p>Code-Genesis</p>
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
      </div>
    </section>

    <!-- Contact me Section -->

    <section data-aos="fade-up" class="contacts" id="Contacts">
      <ul>
        <li>
          <h5>Interested? Connect with me!</h5>
        </li>
        <li>
          <!-- gmail -->

          <div class="icon-soc">
            <a href="mailto: drish262@gmail.com" target="_blank"
              ><span data-text="drish262@gmail.com" class="tooltip"
                ><Icon icon="simple-icons:gmail" /></span
            ></a>
          </div>

          <!-- linkedin -->

          <div class="icon-soc">
            <a href="https://www.linkedin.com/in/drish-xd/" target="_blank"
              ><span data-text="Drish_xD" class="tooltip"
                ><Icon icon="ri:linkedin-fill" /></span
            ></a>
          </div>

          <!-- twitter -->

          <div class="icon-soc">
            <a href="https://twitter.com/Drish_xD" target="_blank"
              ><span data-text="Drish_xD" class="tooltip"
                ><Icon icon="akar-icons:twitter-fill" /></span
            ></a>
          </div>
        </li>
      </ul>
    </section>

    <footer class="foot">
      &copy; Copyrights 2021 by Drish. All Rights Reserved.
    </footer>
  </div>
</template>

<script>
import $ from "jquery";
import AOS from "aos";
import "aos/dist/aos.css";
import ScrollOut from "scroll-out";
import { Icon } from "@iconify/vue";

AOS.init();
export default {
  components: {
    Icon,
  },
  mounted() {
    $(".nav-bar a").on("click", function (e) {
      if (this.hash !== "") {
        e.preventDefault();

        const hash = this.hash;

        $("html, body").animate(
          {
            scrollTop: $(hash).offset().top,
          },
          800
        );
      }
    });

    // Animations AOS

    AOS.init({
      offset: 100,
      duration: 1200,
      once: false,
      // anchorPlacement: 'center-bottom',
    });

    // Scrolling Effect nav-bar

    $(window).on("scroll", function () {
      if ($(window).scrollTop()) {
        $(".nav-bar").addClass("black");
      } else {
        $(".nav-bar").removeClass("black");
      }
    });

    // scroll effect of skill bars

    ScrollOut({
      targets: ".bar,skill-bars,.progress-line,.skill span",
    });

    // Drop down animatio of menu bar (only for screen width < 786px)

    $(document).ready(function () {
      $(".menu-icon").on("click", function () {
        $("nav ul").toggleClass("showing");
      });
    });

    $(document).ready(function () {
      $(".menu a").on("click", function () {
        $("nav ul").removeClass("showing");
      });
    });

    // Hamburger animation (only for screen width < 786px)

    $(document).ready(function () {
      $(".wrapper-menu").click(function () {
        $(this).toggleClass("open");
      });
    });

    $(document).ready(function () {
      $(".menu a").click(function () {
        $(".wrapper-menu").removeClass("open");
      });
    });
  },
};
</script>
