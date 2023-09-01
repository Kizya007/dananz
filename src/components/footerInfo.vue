<template>
  <footer class="footer">
    <div class="left-block">
      <div class="left-block__img">
        <img src="../assets/img/logo.png" alt="" />
      </div>
      <h2 class="left-block__title">One of the best furniture agency.</h2>
    </div>
    <div class="right-block">
      <p class="right-block__text">
        <circleIcon />Enter your email to get the laterst news
      </p>
      <input
        class="right-block__input"
        type="text"
        placeholder="Email Addres"
      /><rightLinkIcon />
      <div class="right-block__line"></div>
      <div class="right-block__follow">
        <p class="follow-text">Follow us On</p>
        <ul class="social-list">
          <li class="social-list__item"><faceBookIcon /></li>
          <li class="social-list__item"><instagramIcon /></li>
          <li class="social-list__item"><tiktokIcon /></li>
          <li class="social-list__item"><youTubeIcon /></li>
        </ul>
      </div>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
@import "../assets/footer.scss";
</style>

<script>
import circleIcon from "../assets/icon/circleIcon.vue";
import faceBookIcon from "../assets/icon/faceBookIcon.vue";
import instagramIcon from "../assets/icon/instagramIcon.vue";
import rightLinkIcon from "../assets/icon/rightLinkIcon.vue";
import tiktokIcon from "../assets/icon/tiktokIcon.vue";
import youTubeIcon from "../assets/icon/youTubeIcon.vue";

export default {
  name: "footerInfo",
  components: {
    circleIcon,
    faceBookIcon,
    instagramIcon,
    rightLinkIcon,
    tiktokIcon,
    youTubeIcon,
  },
};
</script>
