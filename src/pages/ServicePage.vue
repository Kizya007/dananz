<template>
  <baseBanner title="Service" img="serviceImg.png" />
  <achievementService />
  <ProductInfo />
</template>

<style lang="scss" scoped></style>

<script>
import achievementService from "../components/achievementService.vue";
import ProductInfo from "@/components/ProductInfo.vue";
import baseBanner from "@/components/baseBanner.vue";

export default {
  name: "ServicePage",
  components: {
    achievementService,
    ProductInfo,
    baseBanner,
  },
};
</script>
