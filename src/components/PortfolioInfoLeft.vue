<template>
  <section class="portfolio">
    <div class="up-block">
      <span class="up-block__title">Portfolio</span>
    </div>
    <div class="bottom-block">
      <img class="bottom-block__img" src="../assets/img/portfolioImgOne.png" alt="" />
      <div class="description-block">
        <div class="description-block__img">
          <img src="../assets/img/aboutReviews.png" alt="" />
        </div>
        <div class="description-block__text">
          <p class="name">Arga Danaan</p>
          <p class="position">CEO of Dananz</p>
        </div>
      </div>
      <div class="left-block">
        <p class="left-block__title">Minimalist Room</p>
        <p class="left-block__text">
          Online learning with us does not interfere with your daily life.
          because learning can be done anytime and anywhere.
        </p>
        <button class="left-block__btn"><router-link to="/detailsportfolio">Learn more</router-link></button>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@import "../assets/PortfolioInfoLeft.scss";
</style>

<script></script>
