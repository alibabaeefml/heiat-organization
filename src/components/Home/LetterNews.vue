<template>
  <section class="wrapper d-flex flex-column">
    <LetterNewsSwiper />
    <home-navigation
      v-if="useDisplay().mdAndUp.value"
      class="position-absolute"
      style="bottom: 30px; left: calc(50% - 350px); z-index: 20"
    />
  </section>
</template>
<script setup>
import { useDisplay } from "vuetify/lib/framework.mjs";
import LetterNewsSwiper from "./LetterNewsSwiper.vue";
import HomeNavigation from "./HomeNavigation.vue";
</script>

<style scoped>
.wrapper {
  background-image: url(@/assets/images/index-section-one-default-background.jpg);
  box-shadow: inset 0 0 0 2000px rgba(1, 89, 51, 0.6);
  background-size: cover;
  background-position: center;
  position: relative;
  width: 100%;
  height: max-content;
  padding-bottom: 200px;
}
.wrapper::after {
  content: "";
  display: flex;
  background-image: url(@/assets/images/yellow_mask.png);
  background-position: bottom;
  background-size: contain;
  width: 100%;
  height: 200px;
  position: absolute;
  bottom: 0;
  left: 0;
}
</style>
