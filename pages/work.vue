<template>
　<div>
  <section class="section-padding">
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <h1 class="inner-title">work</h1>
        </div>
        <div class="col-md-12">
           <work-list />
        </div>
      </div>
    </div>
  </section>
  <section class="section-padding bg-gray">
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <h1 class="inner-title">Usage experience</h1>
        </div>
        <div class="col-md-12">

          <ul class="nomal-list row">
            <li class="col-lg-3 fade-in-item">
              <div class="list-inner">
                <div class="icon">
                  <i class="fas fa-laptop-code"></i>
                </div>
                <h3 class="title-3">WEB DESIGN</h3>
                <p>photoshop illustrator</p>
              </div>
            </li>
            <li class="col-lg-3 fade-in-item">
              <div class="list-inner">
                <div class="icon">
                  <i class="fas fa-code"></i>
                </div>
                <h2 class="title-3">WEB CODING</h2>
                <p>HTML CSS・SASS <br> Wordpress</p>
              </div>
            </li>
            <li class="col-lg-3 fade-in-item">
              <div class="list-inner">
                <div class="icon">
                  <i class="fab fa-node-js"></i>
                </div>
                <h2 class="title-3">Java script</h2>
                <p>jquery gulp webpack <br> Vue.js anguler.js</p>
              </div>
            </li>
            <li class="col-lg-3 fade-in-item">
              <div class="list-inner">
                <div class="icon">
                  <i class="fas fa-users"></i>
                </div>
                <h2 class="title-3">other</h2>
                <p>github slack jira Backlog</p>
              </div>
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
import WorkList from "~/components/WorkList.vue";

export default {
  components: {
    Logo,
    WorkList
  }
};
</script>

<style lang="scss">
 .section-padding {
    .nomal-list {
      margin: 50px 0 0 0;
      background-color: transparent;

      .list-inner {
        color: #a1a9b0;
        padding: 10px;


        .title-3 {
          text-align: center;
          font-size: 15px;
          //color: #353535;
          text-transform: uppercase;
          margin: 0.83em 0;
          letter-spacing: 3px;
        }


        p {
          margin: 10px 0 0 0;
          height: 40px;
          text-align: center;
        }

        .icon {
          text-align: center;
          margin-bottom: 10px;

          i {
            font-size: 50px;
          }

        }
      }
    }
    &.bg-gray {
    background: #f3f5f8;
  }
 }

</style>
