<template>
  <baseBanner />
  <achievementService />
  <ProductInfo />
  <contactUs />
</template>

<style lang="scss" scoped></style>

<script>
import baseBanner from "../components/baseBanner.vue";
import achievementService from "../components/achievementService.vue";
import ProductInfo from "@/components/ProductInfo.vue";
import contactUs from "@/components/contactUs.vue";

export default {
  name: "ServicePage",
  components: {
    baseBanner,
    achievementService,
    ProductInfo,
    contactUs,
  },
};
</script>
