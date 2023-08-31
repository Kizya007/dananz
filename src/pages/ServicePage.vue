<template>
  <baseBanner />
  <achievementService />
  <ProductInfo />
  <contactUs />
  <footerInfo />
</template>

<style lang="scss" scoped></style>

<script>
import baseBanner from "../components/baseBanner.vue";
import achievementService from "../components/achievementService.vue";
import ProductInfo from "@/components/ProductInfo.vue";
import contactUs from "@/components/contactUs.vue";
import footerInfo from "@/components/footerInfo.vue";

export default {
  name: "ServicePage",
  components: {
    baseBanner,
    achievementService,
    ProductInfo,
    contactUs,
    footerInfo,
  },
};
</script>
