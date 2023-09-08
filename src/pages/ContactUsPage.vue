<template>
  <baseBanner title="Contact Us"  />
  <RegistrationForm />
  <LocationInformation />
</template>

<script>
import RegistrationForm from "@/components/RegistrationForm.vue";
import LocationInformation from "@/components/LocationInformation.vue";
import baseBanner from "@/components/baseBanner.vue";

export default {
  name: "ContactUsPage",
  components: {
    RegistrationForm,
    LocationInformation,
    baseBanner,
  },
};
</script>
<style lang="scss" scoped></style>
