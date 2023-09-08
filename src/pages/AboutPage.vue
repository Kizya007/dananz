<template>
  <baseBanner title="About" img="aboutPageimg.png" />
  <achievementAbout />
  <aboutService />
</template>

<style lang="scss" scoped>
@import "../assets/aboutPage.scss";
</style>

<script>
import achievementAbout from "../components/achievementAbout.vue";
import aboutService from "../components/aboutService.vue";
import baseBanner from "@/components/baseBanner.vue";

export default {
  components: {
    achievementAbout,
    aboutService,
    baseBanner,
  },
};
</script>
