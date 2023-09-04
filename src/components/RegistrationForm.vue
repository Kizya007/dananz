<template>
  <section class="registration">
    <div class="registration-block">
      <div class="name">
        <p class="name-title">First Name</p>
        <input class="name-input" placeholder="First Name" type="text" />
      </div>
      <div class="name">
        <p class="name-title">Last Name</p>
        <input class="name-input" placeholder="Last Name" type="text" />
      </div>
    </div>
    <div class="email">
      <p class="email-title">Email</p>
      <input class="email-input" placeholder="Email" type="text" />
    </div>
    <div class="phone">
      <p class="phone-title">Phone number</p>
      <input class="phone-input" placeholder="Phone number" type="text" />
      <div class="phone-block">
        <span class="phone-block__country">US</span>
        <arrowDownIcon />
      </div>
    </div>
    <div class="message">
      <p class="message-title">Message</p>
      <input class="message-input" placeholder="Your Message" type="text" />
    </div>
    <button class="registration-btn">Send message</button>
  </section>
</template>

<script>
import arrowDownIcon from "@/assets/icon/arrowDownIcon.vue";

export default {
  components: {
    arrowDownIcon,
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/registration.scss";
</style>
