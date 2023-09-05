<template>
  <section class="products">
    <div class="products-choose">
      <p class="products-choose__name">PRODUCT</p>
      <div class="products-choose__text">
        <h2 class="title">Choose your product themes.</h2>
        <span class="subtitle"
          >Find the theme you want. If our choice of theme is not what you want,
          you can customize it as you want.</span
        >
      </div>
    </div>
    <ul class="products-list">
      <li class="product">
        <div class="product__text">
          <p class="number">01</p>
          <div class="description">
            <p class="description-title">Vintage</p>
            <p class="description-subtitle">
              the use of simple and limited elements to get the best effect or
              impression.
            </p>
          </div>
        </div>
        <a class="product__link" href=""><arrowRight /></a>
      </li>
      <li class="product">
        <div class="product__text">
          <p class="number">02</p>
          <div class="description">
            <p class="description-title">Minimalist</p>
            <p class="description-subtitle">
              the use of simple and limited elements to get the best effect or
              impression.
            </p>
          </div>
        </div>
        <a class="product__link" href=""><arrowRight /></a>
      </li>
      <li class="product">
        <div class="product__text">
          <p class="number">03</p>
          <div class="description">
            <p class="description-title">Modern</p>
            <p class="description-subtitle">
              the use of simple and limited elements to get the best effect or
              impression.
            </p>
          </div>
        </div>
        <a class="product__link" href=""><arrowRight /></a>
      </li>
      <li class="product">
        <div class="product__text">
          <p class="number">04</p>
          <div class="description">
            <p class="description-title">Transitional</p>
            <p class="description-subtitle">
              the use of simple and limited elements to get the best effect or
              impression.
            </p>
          </div>
        </div>
        <a class="product__link" href=""><arrowRight /></a>
      </li>
    </ul>
  </section>
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
