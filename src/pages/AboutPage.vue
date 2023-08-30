<template>
  <baseBanner />
  <achievementAbout />
</template>

<style lang="scss" scoped>
@import "../assets/aboutPage.scss";
</style>

<script>
import achievementAbout from "../components/achievementAbout.vue";
import baseBanner from "../components/baseBanner.vue";

export default {
  components: {
    achievementAbout,
    baseBanner,
  },
};
</script>
