<template>
　<div>
  <section class="section-padding">
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <h1 class="inner-title">work</h1>
        </div>
        <div class="col-md-12">
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
        </div>
      </div>
    </div>
  </section>
    <section class="section-padding bg-gray">
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <h1 class="inner-title">How I can help</h1>
        </div>
        <div class="col-md-12">
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
        </div>
      </div>
    </div>
  </section>
  </div>
</template>

<script>
import Logo from "~/components/Logo.vue";

export default {
  components: {
    Logo
  }
};
</script>

<style lang="scss">
 .section-padding {
    work-list {
      margin: 0;
    }
    &.bg-gray {
    background: #f3f5f8;
  }
 }

</style>
