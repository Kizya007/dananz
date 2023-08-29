<template>
  <headerDananz />
  <bannerInfo />
  <aboutInfo />
  <serviceInfo />
  <ProductInfo />
</template>

<script>
import ProductInfo from "./components/ProductInfo.vue";
import serviceInfo from "./components/serviceInfo.vue";
import aboutInfo from "./components/aboutInfo.vue";
import headerDananz from "./components/headerDananz.vue";
import bannerInfo from "./components/bannerInfo.vue";

export default {
  name: "App",
  components: {
    headerDananz,
    bannerInfo,
    aboutInfo,
    serviceInfo,
    ProductInfo,
  },
};
</script>

<style>
@import "./assets/global.scss";
@import url("https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Poppins:wght@300;400;500;600;700&display=swap");
</style>
