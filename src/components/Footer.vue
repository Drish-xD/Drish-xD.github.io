<template>
  <div>
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

          <!-- Github -->

          <div class="icon-soc">
            <a href="https://github.com/Drish-xD" target="_blank"
              ><span data-text="Drish_xD" class="tooltip"
                ><Icon icon="entypo-social:github" /></span
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
import { Icon } from "@iconify/vue2";

export default {
  name: "Footer",
  components: {
    Icon,
  },
};
</script>

<style scoped>
.contacts {
  display: flex;
  margin: 60px 0;
  color: #f1f1f1;
  justify-content: center;
  text-decoration: none;
}

.contacts ul {
  display: flex;
  list-style: none;
  text-align: center;
  justify-content: center;
}

.contacts ul li:last-child {
  display: inline-flex;
}

.contacts .icon-soc {
  display: block;
  padding: 5px 20px;
  align-self: center;
}

.contacts .iconify {
  display: block;
  font-size: 40px;
  color: #f1f1f1;
  cursor: pointer;
}

.contacts h5 {
  font: 600 40px "FiraCode";
  letter-spacing: normal;
  padding-right: 20px;
}

/* tooltip for contacts */

.tooltip {
  position: relative;
}

.tooltip:before {
  content: attr(data-text);
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -130%);
  font-family: "Syne";
  letter-spacing: 0.3mm;
  padding: 10px 25px;
  border-radius: 20px;
  background: #fafafa;
  color: #0c0c0c;
  opacity: 0;
  transition: all 0.5s ease-in-out;
  visibility: hidden;
}

.tooltip:hover:before {
  opacity: 1;
  visibility: visible;
}

.tooltip:after {
  content: "";
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -57%);
  border: 10px solid #fafafa;
  border-color: #fafafa transparent transparent transparent;
  opacity: 0;
  transition: all 0.5s ease-in-out;
  visibility: hidden;
}

.tooltip:hover:before,
.tooltip:hover:after {
  opacity: 1;
  visibility: visible;
  cursor: pointer;
}

/*Footer*/

footer {
  display: block;
  text-align: center;
  font-family: "FiraCode";
  width: 100%;
  padding: 20px;
  background-color: #111111;
  color: #f1f1f1;
}

@media screen and (max-width: 1150px) {
  .contacts ul {
    display: block;
  }

  .contacts ul li:last-child {
    margin-top: 25px;
  }
}

@media screen and (max-width: 768px) {
  .contacts {
    margin: 50px 0;
  }

  .contacts ul {
    display: block;
  }

  .contacts h5 {
    font-size: 5.5vw;
    padding-right: 0;
  }

  .contacts .iconify {
    font-size: 30px;
  }

  footer {
    font-size: 10px;
    padding: 15px;
  }
}
</style>
