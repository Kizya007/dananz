<template>
  <header class="header">
    <img class="header-logo" src="../assets/img/logo.png" alt="" />
    <nav class="navigation">
      <ul class="navigation-list">
        <li class="navigation-list__item">
          <router-link to="/">Home</router-link>
        </li>
        <li class="navigation-list__item">
          <router-link to="/about">About Us</router-link>
        </li>
        <li class="navigation-list__item">
          <router-link to="/service">Service</router-link>
        </li>
        <li class="navigation-list__item">
          <router-link to="/ourteams">Our teams</router-link>
        </li>
        <li class="navigation-list__item">
          <router-link to="/contactus">Contact Us</router-link>
        </li>
      </ul>
    </nav>
    <button class="header-btn">Menu</button>
  </header>
</template>

<style lang="scss" scoped>
@import "../assets/header.scss";
</style>

<script></script>
