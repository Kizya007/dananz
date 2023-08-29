<template>
  <headerDananz />
  <bannerInfo />
  <aboutInfo />
</template>

<script>
import aboutInfo from "./components/aboutInfo.vue";
import headerDananz from "./components/headerDananz.vue";
import bannerInfo from "./components/bannerInfo.vue";

export default {
  name: "App",
  components: {
    headerDananz,
    bannerInfo,
    aboutInfo,
  },
};
</script>

<style>
@import "./assets/global.scss";
@import url("https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Poppins:wght@300;400;500;600;700&display=swap");
</style>
