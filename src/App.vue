<template>
  <div>
    <mainHeader />
    <baseBanner />
    <router-view />
    <footerInfo />
  </div>
</template>

<script>
import mainHeader from "./components/mainHeader.vue";
import footerInfo from "./components/footerInfo.vue";
import baseBanner from "./components/baseBanner.vue";

export default {
  name: "App",
  components: {
    mainHeader,
    footerInfo,
    baseBanner,
  },
};
</script>

<style>
@import "./assets/global.scss";
@import url("https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Poppins:wght@300;400;500;600;700&display=swap");
</style>
