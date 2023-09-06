<template>
  <baseBanner />
  <RegistrationForm />
  <LocationInformation />
</template>

<script>
import baseBanner from "@/components/baseBanner.vue";
import RegistrationForm from "@/components/RegistrationForm.vue";
import LocationInformation from "@/components/LocationInformation.vue";

export default {
  name: "ContactUsPage",
  components: {
    baseBanner,
    RegistrationForm,
    LocationInformation,
  },
};
</script>
<style lang="scss" scoped></style>
