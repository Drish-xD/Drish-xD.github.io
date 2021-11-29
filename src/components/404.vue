<template>
  <section>
    <h2>Page Not Found</h2>
    <img src="../assets/img/Error.svg" alt="404" />
    <a href="/Portfolio">Go Home</a>
  </section>
</template>
<script>
export default {};
</script>
<style src="../views/Portfolio.vue"></style>
<style scoped>
section {
  width: 100%;
  min-height: 100vh;
  display: grid;
  place-items: center center;
  place-content: center center;
}

img {
  width: 80%;
  height: auto;
}

h2 {
  padding: 25px 0 0 0;
  font-family: "Syne";
}

a {
  font: 600 18px "Syne";
  text-decoration: none;
  letter-spacing: 0.15rem;
  background-color: #243038b3;
  border-radius: 50px;
  border: 2px solid #7e57c2;
  color: #f1f1f1;
  padding: 5px 20px;
  cursor: pointer;
  margin-bottom: 25px;
  transition: box-shadow 0.5s, color 0.55s;
}

a:hover {
  box-shadow: inset 0 0 10px 20px #7e56c2b3;
  color: #0c0c0c;
}
</style>
