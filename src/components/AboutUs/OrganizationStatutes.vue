<template>
  <Swiper
    :modules="modules"
    class="w-100"
    autoplay
    loop
    :slides-per-view="useDisplay().xs.value ? 1 : 3"
    :space-between="20"
    :navigation="navigation_options"
  >
    <SwiperSlide v-for="item in 10">
      <v-img
        style="border: 2px solid var(--primary)"
        class="rounded-lg mx-auto"
        :src="default_img"
        width="220"
        height="280"
        cover
      ></v-img>
    </SwiperSlide>
    <div class="d-flex gap-1 pa-5 justify-center">
      <v-btn
        class="next-slide"
        icon="mdi-arrow-right"
        color="secondary"
      ></v-btn>
      <v-btn class="prev-slide" icon="mdi-arrow-left" color="secondary"></v-btn>
    </div>
  </Swiper>
</template>

<script setup>
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from "swiper";

import { useDisplay } from "vuetify/lib/framework.mjs";
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

const modules = [Navigation, Pagination, Scrollbar, A11y, Autoplay];

const navigation_options = {
  nextEl: ".next-slide",
  prevEl: ".prev-slide",
};
</script>
