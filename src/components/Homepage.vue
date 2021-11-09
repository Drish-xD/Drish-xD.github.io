<template lang="html">
  <section class="homepage" id="Homepage">
    <div class="header-main">
      <h1>Welcome to my Website</h1>
      <h1>^_^</h1>
    </div>
  </section>
</template>
<script>
export default {
  name: "Homepage",
  data() {
    return {
      message: "Welcome to my Website",
    };
  },
};
</script>
<style lang="css">
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
