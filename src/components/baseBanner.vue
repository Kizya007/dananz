<template>
  <section class="base-banner">
    <h1 class="base-banner__title">{{ title }}</h1>
    <p class="base-banner__subtitle">
      It is a long established fact that a reader will be distracted by the
      readable content of a page when looking at its layout.
    </p>
    <div class="base-banner__img" v-if="img" >
      <img :src="require(`../assets/img/${img}`)" /> 
    </div>
  </section>
</template>

<style lang="scss" scoped>
@import "../assets/baseBanner.scss";
</style>

<script>
export default {
  props: {
    title: String,
    subtitle: String,
    img: String,
  },
};
</script>
