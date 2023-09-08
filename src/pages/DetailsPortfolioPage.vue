<template>
  <section class="details">
    <baseBanner title="Minimalist Room" img="portfolioImgOne.png" />
    <div class="text">
      <div class="text-left">
        <p class="text-left__title">Project Overview</p>
        <p class="text-left__subtitle">
          Online learning with us does not interfere with your daily life.
          because learning can be done anytime and anywhere. Online learning
          with us does not interfere with your daily life. because learning can
          be done anytime and anywhere. Online learning with us does not
          interfere with your daily life. because learning can be done anytime
          and anywhere.
        </p>
        <span class="text-left__date"> July 22 - 2022 </span>
        <span class="text-left__position">Interior Design - Furnitur </span>
      </div>
      <div class="text-right">
        <p class="text-right__title">Design Process</p>
        <p class="text-right__subtitle">
          Online learning with us does not interfere with your daily life.
          because learning can be done anytime and anywhere. Online learning
          with us does not interfere with your daily life. because learning can
          be done anytime and anywhere.
        </p>
        <p class="text-right__subtitle">
          Online learning with us does not interfere with your daily life.
          because learning can be done anytime and anywhere. Online learning
          with us does not interfere with your daily life. because learning can
          be done anytime and anywhere.
        </p>
      </div>
    </div>
    <div class="content">
      <div class="content-up">
        <div class="content-up__left">
          <img src="../assets/img/detailsTwoImg.png" alt="" />
        </div>
        <div class="content-up__right">
          <img src="../assets/img/detailsThreeImg.png" alt="" />
        </div>
      </div>
      <div class="content-middle">
        <img src="../assets/img/detailsFourImg.png" alt="" />
      </div>
      <div class="content-bottom">
        <div class="content-bottom__left">
          <img src="../assets/img/detailsFiveImg.png" alt="" />
        </div>
        <div class="content-bottom__right">
          <img src="../assets/img/detailsSixImg.png" alt="" />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import baseBanner from "@/components/baseBanner.vue";

export default {
  components: {
    baseBanner,
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/DetailsportfolioPage.scss";
</style>
