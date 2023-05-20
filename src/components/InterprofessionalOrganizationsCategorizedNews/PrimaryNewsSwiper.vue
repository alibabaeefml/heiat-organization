<template>
  <Swiper
    :modules="modules"
    class="w-100"
    autoplay
    loop
    :slides-per-view="useDisplay().xs.value ? 1 : 2"
    :space-between="20"
    :navigation="navigation_options"
  >
    <SwiperSlide v-for="item in 3">
      <HorizontalCard
        :data="{
          img_width: useDisplay().xs.value ? '100%' : '200px',
          title_class:'text-secondary-4'
        }"
        v-for="item in 3"
      />
    </SwiperSlide>
  </Swiper>
</template>

<script setup>
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from "swiper";
import HorizontalCard from "@/components/Global/card/HorizontalCard.vue";

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
