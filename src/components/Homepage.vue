<template>
  <section class="homepage" id="Homepage">
    <vue-canvas-nest
      :config="{ color: '255,255,255', count: 200, opacity: 1, zindex: 0 }"
    ></vue-canvas-nest>

    <div class="header-main">
      <h1>Welcome to my Website</h1>
      <h1>^_^</h1>
    </div>
  </section>
</template>
<script>
import vueCanvasNest from "vue-canvas-nest";
export default {
  components: { vueCanvasNest },
};
</script>
<style scoped>
.header-main {
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-family: "Syne";
  font-size: 50px;
  letter-spacing: 0.25em;
  color: #f1f1f1;
}

.header-main h1:last-child {
  font-family: "Truculenta";
  padding-top: 20px;
}

@media screen and (max-width: 768px) {
  .header-main {
    font-size: 2rem;
  }
}
</style>
