<template>
  <div class="product">
    <div class="product-choose">
      <p class="product-choose__name">PRODUCT</p>
      <div class="product-choose__text">
        <h2 class="title">Choose your product themes.</h2>
        <span class="subtitle"
          >Find the theme you want. If our choice of theme is not what you want,
          you can customize it as you want.</span
        >
      </div>
    </div>
    <div class="product-information">
      <div class="product-information__text">
        <p class="number">01</p>
        <div class="description">
          <p class="description-title">Vintage</p>
          <p class="description-subtitle">
            the use of simple and limited elements to get the best effect or
            impression.
          </p>
        </div>
      </div>
      <a class="product-information__link" href=""><arrowRight /></a>
    </div>
    <div class="product-information">
      <div class="product-information__text">
        <p class="number">02</p>
        <div class="description">
          <p class="description-title">Minimalist</p>
          <p class="description-subtitle">
            the use of simple and limited elements to get the best effect or
            impression.
          </p>
        </div>
      </div>
      <a class="product-information__link" href=""><arrowRight /></a>
    </div>
    <div class="product-information">
      <div class="product-information__text">
        <p class="number">03</p>
        <div class="description">
          <p class="description-title">Modern</p>
          <p class="description-subtitle">
            the use of simple and limited elements to get the best effect or
            impression.
          </p>
        </div>
      </div>
      <a class="product-information__link" href=""><arrowRight /></a>
    </div>
    <div class="product-information">
      <div class="product-information__text">
        <p class="number">04</p>
        <div class="description">
          <p class="description-title">Transitional</p>
          <p class="description-subtitle">
            the use of simple and limited elements to get the best effect or
            impression.
          </p>
        </div>
      </div>
      <a class="product-information__link" href=""><arrowRight /></a>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "../assets/Product.scss";
</style>

<script>
import arrowRight from "../assets/icon/arrowRight.vue";
export default {
  components: {
    arrowRight,
  },
};
</script>
