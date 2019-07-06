<template>
  <ul class="work-list row">
    <li class="col-lg-4 fade-in-item">
      <img src="~assets/image/portforio1.png">
    </li>
    <li class="col-lg-4 fade-in-item">
      <img src="~assets/image/portforio2.png">
    </li>
    <li class="col-lg-4 fade-in-item">
      <img src="~assets/image/portforio3.png">
    </li>
    <li class="col-lg-4 fade-in-item" v-if="$nuxt.$route.name != 'index'">
      <img src="~assets/image/portforio4.png">
    </li>
      <li class="col-lg-4 fade-in-item" v-if="$nuxt.$route.name != 'index'">
      <img src="~assets/image/portforio5.png">
    </li>
    <li class="col-lg-4 fade-in-item" v-if="$nuxt.$route.name != 'index'">
      <img src="~assets/image/portforio6.png">
    </li>
  </ul>
</template>
<script>

export default {

};

</script>

