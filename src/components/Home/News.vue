<template>
  <section class="section-one d-flex flex-column">
    <swiper
      :slides-per-view="1"
      :space-between="50"
      :class="{
        'w-75': useDisplay().mdAndUp.value,
        'w-100': useDisplay().mdAndDown.value,
        'pa-5': true,
      }"
      style="margin-top: 200px"
    >
      <swiper-slide v-for="slide in 5" :key="slide">
        <v-img cover src="@/assets/images/68942_842.png"></v-img>
        <h2>خبرنامه سازمان هیئت های و تشکل های مذهبی</h2>
        <p>{{ persian_lorem }}</p>
      </swiper-slide>
    </swiper>
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
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/css";
import { useDisplay } from "vuetify/lib/framework.mjs";
</script>

<style scoped>
.section-one {
  background-image: url(@/assets/images/index-section-one-default-background.jpg);
  box-shadow: inset 0 0 0 2000px rgba(1, 89, 51, 0.6);
  background-size: cover;
  background-position: center;
  position: relative;
  width: 100%;
  height: 100%;
  min-height: 800px;
}
</style>
