<template>
  <section
    class="section-one d-flex flex-column"
  style="height: 100vh;"
  >
    <letter-news-swiper />
    <home-navigation
      v-if="useDisplay().mdAndUp.value"
      class="position-absolute"
      style="bottom: 30px; left: calc(50% - 350px);z-index: 20;"
    />
    <div
      class="w-100 position-absolute d-flex align-center justify-end"
      style="bottom: 0"
    >
      <v-img
        cover
        src="@/assets/images/yellow_mask.png"
        style="object-fit: cover"
      ></v-img>
    </div>
  </section>
</template>
<script setup>
import { useDisplay } from "vuetify/lib/framework.mjs";
import LetterNewsSwiper from "./LetterNewsSwiper.vue";
import HomeNavigation from "./HomeNavigation.vue";
</script>

<style scoped>
.section-one {
  background-image: url(@/assets/images/index-section-one-default-background.jpg);
  box-shadow: inset 0 0 0 2000px rgba(1, 89, 51, 0.6);
  background-size: cover;
  background-position: center;
  position: relative;
  width: 100%;
}
</style>
