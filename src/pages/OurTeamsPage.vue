<template>
  <baseBanner title="Ourteams" img="OurTeamsImg.png" />
  <DesignerTeams />
  <aboutService />
</template>

<style lang="scss" scoped></style>

<script>
import DesignerTeams from "../components/DesignerTeams.vue";
import aboutService from "../components/aboutService.vue";
import baseBanner from "@/components/baseBanner.vue";

export default {
  components: {
    DesignerTeams,
    aboutService,
    baseBanner,
  },
};
</script>
