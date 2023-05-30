<template>
  <Swiper
    :modules="modules"
    class="w-100"
    autoplay
    loop
    :slides-per-view="useDisplay().xs.value ? 1 : slides_per_view"
    :space-between="20"
    :navigation="navigation_options"
  >
    <SwiperSlide v-for="item in slides">
      <VerticalCard
        :data="{
          title: item.title_fa,
          text: item.lead_fa,
          link: { name: 'ProvincesSingleNews', params: { id: item.id } },
          img: item.thumbnail
        }"
      />
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
import VerticalCard from "../card/VerticalCard.vue";

const modules = [Navigation, Pagination, Scrollbar, A11y, Autoplay];

const navigation_options = {
  nextEl: ".next-slide",
  prevEl: ".prev-slide",
};

const props = defineProps({
  slides: { default: 5 },
  slides_per_view: { default: 4 },
});
</script>
