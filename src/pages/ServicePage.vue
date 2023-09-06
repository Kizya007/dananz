<template>
  <achievementService />
  <ProductInfo />
</template>

<style lang="scss" scoped></style>

<script>
import achievementService from "../components/achievementService.vue";
import ProductInfo from "@/components/ProductInfo.vue";

export default {
  name: "ServicePage",
  components: {
    achievementService,
    ProductInfo,
  },
};
</script>
