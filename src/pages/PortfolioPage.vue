<template>
  <baseBanner title="Portfolio" img="PortfolioBannerImg.png" />
  <PortfolioInfoLeft />
  <PortfolioInfoRight />
  <PortfolioInfoLeft />
  <PortfolioInfoRight />
</template>

<script>
import PortfolioInfoLeft from "../components/PortfolioInfoLeft.vue";
import PortfolioInfoRight from "../components/PortfolioInfoRight.vue";
import baseBanner from "@/components/baseBanner.vue";

export default {
  components: {
    PortfolioInfoLeft,
    PortfolioInfoRight,
    baseBanner,
  },
};
</script>

<style></style>
