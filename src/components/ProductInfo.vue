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
      <li
        class="product"
        v-for="(theme, index) in localThemes"
        :key="theme.name"
      >
        <div class="product__text">
          <p class="number">
            {{ index + 1 }}
          </p>
          <div class="description">
            <p class="description-title">{{ theme.name }}</p>
            <p class="description-subtitle">
              {{ theme.description }}
            </p>
          </div>
        </div>
        <router-link to="/portfolio"><arrowRight /></router-link>
      </li>
    </ul>
  </section>
</template>

<style lang="scss" scoped>
@import "../assets/Product.scss";
</style>

<script>
import arrowRight from "../assets/icon/arrowRight.vue";
import themes from "../mocks/Themes.js";
export default {
  setup() {
    const localThemes = themes;
    return {
      localThemes,
    };
  },
  components: {
    arrowRight,
  },
};
</script>
