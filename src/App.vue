<template>
  <MainHeader />
  <BannerInfo />
  <AboutInfo />
  <ServiceInfo />
  <ProductInfo />
  <MaterialInfo />
  <ContactUs />
  <FooterInfo />
</template>

<script>
import FooterInfo from "./components/FooterInfo.vue";
import ContactUs from "./components/ContactUs.vue";
import MaterialInfo from "./components/MaterialInfo.vue";
import ProductInfo from "./components/ProductInfo.vue";
import ServiceInfo from "./components/ServiceInfo.vue";
import AboutInfo from "./components/AboutInfo.vue";
import MainHeader from "./components/MainHeader.vue";
import BannerInfo from "./components/BannerInfo.vue";

export default {
  name: "App",
  components: {
    MainHeader,
    BannerInfo,
    AboutInfo,
    ServiceInfo,
    ProductInfo,
    MaterialInfo,
    ContactUs,
    FooterInfo,
  },
};
</script>

<style>
@import "./assets/global.scss";
@import url("https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Poppins:wght@300;400;500;600;700&display=swap");
</style>
