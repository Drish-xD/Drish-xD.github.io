<template>
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
</template>

<script>
import $ from "jquery";
export default {
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

    // Scrolling Effect nav-bar

    $(window).on("scroll", function () {
      if ($(window).scrollTop()) {
        $(".nav-bar").addClass("black");
      } else {
        $(".nav-bar").removeClass("black");
      }
    });

    $(document).ready(function () {
      $(".menu-icon").on("click", function () {
        $("nav ul").toggleClass("showing");
      });
    });

    // Drop down animation of menu bar (only for screen width < 786px)

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

<style scoped>
nav {
  position: fixed;
  width: 100%;
  z-index: 2;
  overflow: hidden;
  line-height: 50px;
}

nav ul {
  background: rgba(0, 0, 0, 0);
  text-align: center;
  transition: 0.5s;
}

nav.black ul {
  background: #000000e6;
}

nav ul li {
  display: inline-block;
  padding: 10px 4vw;
}

nav ul li a {
  text-decoration: none;
  color: #f1f1f1;
  font: 800 21px "Syne";
  letter-spacing: 0.15rem;
  cursor: pointer;
}

.spinner {
  top: 0;
  position: fixed;
  padding: 10px 15px;
}

.spinner > div {
  margin-left: 0.5vw;
  width: 10px;
  height: 10px;
  border-radius: 100%;
  display: inline-block;
  -webkit-animation: sk-bouncedelay 1.4s infinite ease-in-out both;
  animation: sk-bouncedelay 1.4s infinite ease-in-out both;
}

.spinner .bounce1 {
  background-color: #f51d1d;
  -webkit-animation-delay: -0.32s;
  animation-delay: -0.32s;
}

.spinner .bounce2 {
  background-color: #fc950b;
  -webkit-animation-delay: -0.16s;
  animation-delay: -0.16s;
}

.spinner .bounce3 {
  background-color: #36d524;
}

@-webkit-keyframes sk-bouncedelay {
  0%,
  80%,
  100% {
    -webkit-transform: scale(0);
  }

  40% {
    -webkit-transform: scale(1);
  }
}

@keyframes sk-bouncedelay {
  0%,
  80%,
  100% {
    -webkit-transform: scale(0);
    transform: scale(0);
  }

  40% {
    -webkit-transform: scale(1);
    transform: scale(1);
  }
}

.menu-icon {
  position: absolute;
  margin: 19px;
  right: 0;
  display: none;
}

.wrapper-menu {
  width: 22px;
  height: 21px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  cursor: pointer;
  transition: transform 330ms ease-out;
}

.wrapper-menu.open {
  transform: rotate(45deg);
}

.line-menu {
  background-color: #ffffff;
  border-radius: 25px;
  width: 100%;
  height: 3px;
}

.line-menu.half {
  width: 50%;
}

.line-menu.start {
  transition: transform 330ms cubic-bezier(0.54, -0.81, 0.57, 0.57);
  transform-origin: right;
}

.open .line-menu.start {
  transform: rotate(-90deg) translateX(1.8px);
}

.line-menu.end {
  align-self: flex-end;
  transition: transform 330ms cubic-bezier(0.54, -0.81, 0.57, 0.57);
  transform-origin: left;
}

.open .line-menu.end {
  transform: rotate(-90deg) translateX(-1.8px);
}

.menu-bar {
  height: 60px;
  width: 100%;
  background: rgba(0, 0, 0, 0.9);
  box-sizing: border-box;
  color: #f1f1f1;
  display: none;
}

@media screen and (max-width: 1150px) {
  nav ul li a {
    font-size: 20px;
  }
}

@media screen and (max-width: 768px) {
  nav ul {
    max-height: 0;
    background: rgba(0, 0, 0, 0.9);
  }

  nav ul li a {
    font-size: 22px;
  }

  nav ul li {
    box-sizing: border-box;
    width: 100%;
    padding: 18px;
    text-align: center;
  }

  .showing {
    max-height: 25em;
  }

  .menu-bar {
    display: block;
  }

  .menu-icon {
    display: block;
    font-size: 30px;
  }

  .spinner {
    top: 0;
    position: fixed;
    padding: 5px 15px;
  }

  .spinner > div {
    width: 8px;
    height: 8px;
  }
}
</style>
