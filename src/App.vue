<template>
  <headerDananz />
  <bannerInfo />
</template>

<script>
import headerDananz from "./components/headerDananz.vue";
import bannerInfo from "./components/bannerInfo.vue";

export default {
  name: "App",
  components: {
    headerDananz,
    bannerInfo,
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Poppins:wght@300;400;500;600;700&display=swap");
</style>
