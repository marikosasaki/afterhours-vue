<template>
  <footer>
    <div class="container">
      <nav>
        <div class="row">
          <div class="col-md-12">
            <ul class="footer-list">
              <li v-on:click="menu" class="">
                <nuxt-link to="/" class="hover1">top</nuxt-link>
              </li>
              <li v-on:click="menu">
                  <nuxt-link to="about" class="hover1">about</nuxt-link>
              </li>
              <li v-on:click="menu">
                  <nuxt-link to="work" class="hover1">work</nuxt-link>
              </li>
              <li v-on:click="menu">
                  <a href="http://maru-site.boy.jp/" class="hover1">blog</a>
              </li>
            </ul>
            <p class="copy">© 2019 · Mariko Sasaki · All Rights Reserved</p>
          </div>
        </div>
      </nav>
    </div>
  </footer>
</template>
<script>

export default {
  data () {
    return {
      isActive: false,
      count: 0,
    }
  },
  methods: {
    menu: function() {
      if (this.isActive === true ) {
        this.isActive = false
      } else {
        this.isActive = true
      }
      console.log(this.isActive);
    }
  },
  mounted: function() {

          // 1
  },
};

</script>

