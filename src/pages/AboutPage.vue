<template>
  <achievementAbout />
  <aboutService />
</template>

<style lang="scss" scoped>
@import "../assets/aboutPage.scss";
</style>

<script>
import achievementAbout from "../components/achievementAbout.vue";
import aboutService from "../components/aboutService.vue";

export default {
  components: {
    achievementAbout,
    aboutService,
  },
};
</script>
