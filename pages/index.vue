<template>
  <div class="top">
    <div class="top-view">
        <section class="hero">
          <h1 class="title fede-in--deley1">MARIKO SASAKI</h1>
          <p class="fede-in--deley2">about my work</p>
          <ul class="work-list row">
            <li class="col-lg-4 fade-in-item">
              <img src="~assets/image/portfolio-1.jpg">
            </li>
            <li class="col-lg-4 fade-in-item">
              <img src="~assets/image/portfolio-1.jpg">
            </li>
            <li class="col-lg-4 fade-in-item">
              <img src="~assets/image/portfolio-1.jpg">
            </li>
          </ul>
        </section>
    </div>
  </div>
</template>

<script>
//import Logo from "~/components/Logo.vue";

export default {
  // components: {
  //   Logo
  // }

};
</script>

<style lang="scss">
  .top {
    background: url("~assets/image/bg1.jpg");
    background-size: cover;
    padding: 40px 0 0px 0;
    background-repeat: no-repeat;
    text-align: center;
    max-height: 50vh;
    margin: 0px 0 100px;
  }
  .top-view {
    margin-top: 200px;
  }
  .hero {

  }
  .title {
    opacity: 0;
  }


</style>
