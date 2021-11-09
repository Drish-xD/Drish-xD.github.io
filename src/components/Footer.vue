<template lang="html">
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
</template>

<script>
import { Icon } from "@iconify/vue";

export default {
  name: "Footer",
  components: {
    Icon,
  },
};
</script>

<style lang="css"></style>
