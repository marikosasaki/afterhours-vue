<template>
  <section class="section-padding">
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <h1 class="inner-title">about me</h1>
        </div>
        <div class="col-md-4 left-colum">
          <img src="~assets/image/about.png" alt="about" width="100%">
        </div>
        <div class="col-md-8 right-colum">
          <p>
            コーダーとして働いて6年目になります。<br>
            趣味はヨガ。とweb周りの諸々の勉強 。<br>
            nuxt.jsの勉強のため、このサイトを作成。<br>
            ワークライフバランスを整えるべく、時短家事を日々研究中、
            効率を考えることで、家事で仕事も生活も楽しくしたい！！ と、思っている。。。<br>
            研究の成果として、日々の食事の支度のストレス軽減を謳って、
            痩せる作り置きにはまって色々作るも。なぜか痩せない日々。<br>
            夫とふらり暮し。<br>
            北海道函館市出身<br>
          </p>
          <p>
            今後の目標、フロントエンドの知識と経験のUPと、体力づくり。
          </p>
          <p>
            最近、ゼルダから恐怖に打ち勝ち目標を達成する喜びを学ぶ。（但し、まだクリアはできてない）
          </p>

        </div>
      </div>
    </div>
  </section>

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
  .right-colum {
    padding-left: 20px;
    padding-right: 80px;

    p {
      color: #8c9398;
      word-spacing: 1px;
      line-height: 25px;
      font-size: 14px;
    }
  }
  .left-colum {
    max-height: 60vh;
    overflow: hidden;
  }
</style>
