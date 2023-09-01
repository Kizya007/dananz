<template>
  <baseBanner />
  <achievementAbout />
  <aboutService />
  <contactUs />
</template>

<style lang="scss" scoped>
@import "../assets/aboutPage.scss";
</style>

<script>
import achievementAbout from "../components/achievementAbout.vue";
import baseBanner from "../components/baseBanner.vue";
import aboutService from "../components/aboutService.vue";
import contactUs from "../components/contactUs.vue";


export default {
  components: {
    achievementAbout,
    baseBanner,
    aboutService,
    contactUs,
  },
};
</script>
