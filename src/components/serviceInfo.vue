<template>
  <section class="service">
    <div class="service-information">
      <span class="service-information__name">SERVICE</span>
      <h2 class="service-information__title">
        attractive furniture with the best quality.
      </h2>
      <p class="service-information__subtitle">
        Customize your interior design into a dream place with the best
        designers and quality furniture. We try our best to fulfill your
        expectations.
      </p>
      <div class="service-navigation">
        <div class="service-navigation__text">
          <p class="number">01</p>
          <p class="text">Interior Design</p>
        </div>
        <a class="service-navigation__link" href=""><arrowRight /></a>
      </div>
      <div class="service-navigation">
        <div class="service-navigation__text">
          <p class="number">02</p>
          <p class="text">Consultant</p>
        </div>
        <a class="service-navigation__link" href=""><arrowRight /></a>
      </div>
      <div class="service-navigation">
        <div class="service-navigation__text">
          <p class="number">03</p>
          <p class="text">Construction Consultant</p>
        </div>
        <a class="service-navigation__link" href=""><arrowRight /></a>
      </div>
    </div>
    <div class="service-img">
      <img src="../assets/img/serviceImg.png" alt="" />
    </div>
  </section>
</template>

<style lang="scss" scoped>
@import "../assets/service.scss";
</style>

<script>
import arrowRight from "../assets/icon/arrowRight.vue";

export default {
  components: {
    arrowRight,
  },
};
</script>
