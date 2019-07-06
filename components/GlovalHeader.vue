<template>
  <div class="container" v-bind:class="{ 'page-header': $nuxt.$route.name != 'index' }">
    <header class="wrapper clearfix">
     <my-logo v-if="$nuxt.$route.name != 'index'" />
      <div class="menu-toggle" v-on:click="menu" v-bind:class="{ 'menu-active': isActive }">
        <div class="menu-hamburger"></div>
      </div>
      <div class="global-menu" v-bind:class="{ 'global-menu--active': isActive }">
        <div class="global-menu__container fade-in-item">
          <div class="global-menu__ttl">MENU</div>
          <nav>
            <ul class="menu-list">
              <li v-on:click="menu" class="bounce-in1">
                <nuxt-link to="/">top</nuxt-link>
              </li>
              <li v-on:click="menu" class="bounce-in2">
                 <nuxt-link to="about" >about</nuxt-link>
              </li>
              <li v-on:click="menu" class="bounce-in3">
                 <nuxt-link to="work" >work</nuxt-link>
              </li>
              <li v-on:click="menu" class="bounce-in4">
                 <nuxt-link to="blog">blog</nuxt-link>
              </li>
            </ul>
          </nav>
        </div>
        <!-- /.global-menu__container -->
        <div id="menu-bg" class="menu-bg"></div>
      </div>
    </header>
  </div>
</template>
<script>
import MyLogo from "~/components/MyLogo.vue";
export default {
  components: {
  MyLogo
  },
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

