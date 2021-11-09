<template lang="hmtl">
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

<style lang="css"></style>
