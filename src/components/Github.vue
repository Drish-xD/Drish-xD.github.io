<template>
  <div>
    <div class="github-stats" id="Github-stats">
      <div class="header">
        <h2 data-aos="fade-up-right">Github Stats</h2>
      </div>

      <div class="stats-box">
        <img
          data-aos="fade-right"
          src="https://github-readme-stats.vercel.app/api?username=Drish-xD&count_private=true&show_icons=true&hide_border=true&title_color=7e57c2&icon_color=7e57c2&bg_color=25313999&text_color=ebebeb"
          alt=""
        />
        <img
          data-aos="fade-left"
          src="https://github-readme-streak-stats.herokuapp.com/?user=Drish-xD&hide_border=true&date_format=M%20j%5B%2C%20Y%5D&background=25313999&stroke=7E57C2&ring=7E57C2&currStreakNum=F8F8F8&dates=F8F8F8&sideLabels=A987E2&sideNums=F8F8F8&currStreakLabel=A987E2&fire=A987E2"
          alt=""
        />
      </div>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style scoped>
/* Github Stats  */
.stats-box {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}

.stats-box img {
  width: 80%;
  height: auto;
  margin: 30px;
  border-radius: 25px;
}
</style>
