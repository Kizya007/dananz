<template>
  <RegistrationForm />
  <LocationInformation />
</template>

<script>
import RegistrationForm from "@/components/RegistrationForm.vue";
import LocationInformation from "@/components/LocationInformation.vue";

export default {
  name: "ContactUsPage",
  components: {
    RegistrationForm,
    LocationInformation,
  },
};
</script>
<style lang="scss" scoped></style>
