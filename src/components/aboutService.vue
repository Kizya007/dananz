<template>
  <section class="service">
    <p class="service-name">SERVICE</p>
    <h2 class="service-title">Why Choose Us</h2>
    <p class="service-subtitle">
      Customize your interior design into a dream place with the best designers
      and quality furniture. We try our best to fulfill your expectations.
    </p>
    <ul class="cards">
      <li class="cards-item" v-for="card in cards" :key="card.title">
        <p class="cards-item__circle"></p>
        <h3 class="cards-item__title">{{ card.title }}</h3>
        <p class="cards-item__description">
          {{ card.subtitle }}
        </p>
      </li>
    </ul>
  </section>
</template>

<style lang="scss" scoped>
@import "../assets/aboutService.scss";
</style>

<script>
import ServiceCards from "@/mocks/ServiceCards.js";
export default {
  setup() {
    const cards = ServiceCards;
    return {
      cards,
    };
  },
};
</script>
