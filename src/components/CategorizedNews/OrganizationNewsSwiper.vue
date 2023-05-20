<template>
  <Swiper
    :modules="modules"
    class="w-100"
    autoplay
    loop
    :slides-per-view="useDisplay().xs.value ? 1 : 4" 
    :space-between="20"
    :navigation="navigation_options"
  >
    <SwiperSlide v-for="item in 10">
      <VerticalCard style="border: 2px solid var(--primary) ;" class="rounded-xl" :data="{link:'OrganizationSingleNews'}" />
      <VerticalCard style="border: 2px solid var(--primary) ;" class="rounded-xl mt-2" :data="{link:'OrganizationSingleNews'}" />
    </SwiperSlide>
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
import VerticalCard from "../Global/card/VerticalCard.vue";

const modules = [Navigation, Pagination, Scrollbar, A11y, Autoplay];

const navigation_options = {
  nextEl: ".next-slide",
  prevEl: ".prev-slide",
};
</script>
