<template>
  <bannerInfo />
  <aboutInfo />
  <serviceInfo />
  <ProductInfo />
  <materialInfo />
  <contactUs />
  <footerInfo />
</template>

<script>
import footerInfo from "../components/footerInfo.vue";
import contactUs from "../components/contactUs.vue";
import materialInfo from "../components/materialInfo.vue";
import ProductInfo from "../components/ProductInfo.vue";
import serviceInfo from "../components/serviceInfo.vue";
import aboutInfo from "../components/aboutInfo.vue";
import bannerInfo from "../components/bannerInfo.vue";

export default {
  name: "HomePage",
  components: {
    bannerInfo,
    aboutInfo,
    serviceInfo,
    ProductInfo,
    materialInfo,
    contactUs,
    footerInfo,
  },
};
</script>

<style>
@import "../assets/global.scss";
@import url("https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Poppins:wght@300;400;500;600;700&display=swap");
</style>
