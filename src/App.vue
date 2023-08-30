<template>
  <div>
    <mainHeader/>
    <router-view />
  </div>
</template>

<script>
import mainHeader from "./components/mainHeader.vue"

export default {
  name: "App",
  components: {
    mainHeader,
  },
};
</script>

<style>
@import "./assets/global.scss";
@import url("https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Poppins:wght@300;400;500;600;700&display=swap");
</style>
