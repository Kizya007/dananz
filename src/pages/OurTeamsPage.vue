<template>
  <baseBanner />
  <DesignerTeams />
  <aboutService />
</template>

<style lang="scss" scoped></style>

<script>
import baseBanner from "../components/baseBanner.vue";
import DesignerTeams from "../components/DesignerTeams.vue";
import aboutService from "../components/aboutService.vue";

export default {
  components: {
    baseBanner,
    DesignerTeams,
    aboutService,
  },
};
</script>
