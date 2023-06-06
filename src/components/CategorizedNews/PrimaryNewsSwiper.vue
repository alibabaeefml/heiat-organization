<template>
  <Swiper
    :modules="modules"
    class="w-100"
    autoplay
    loop
    :space-between="20"
    :navigation="navigation_options"
  >
    <SwiperSlide v-for="item in slides.slice(0, 3)">
      <HorizontalCard
        :data="{
          img_width: useDisplay().smAndUp.value ? '200px' : '100%',
          title: item.title,
          text: item.lead,
          img: item.thumbnail,
          link: { name: 'News', params: { id: item.id } },
        }"
      />
    </SwiperSlide>
  </Swiper>
  <Swiper
    :modules="modules"
    class="w-100"
    autoplay
    loop
    :space-between="20"
    :navigation="navigation_options"
    v-if="slides.length >= 6"
  >
    <SwiperSlide v-for="item in slides.slice(3, 6)">
      <HorizontalCard
        :data="{
          img_width: useDisplay().smAndUp.value ? '200px' : '100%',
          title: item.title,
          text: item.lead,
          img: item.thumbnail,
          link: { name: 'News', params: { id: item.id } },
        }"
      />
    </SwiperSlide>
  </Swiper>
  <Swiper
    :modules="modules"
    class="w-100"
    autoplay
    loop
    :space-between="20"
    :navigation="navigation_options"
    v-if="slides.length > 6"
  >
    <SwiperSlide v-for="item in slides.slice(6)">
      <HorizontalCard
        :data="{
          img_width: useDisplay().smAndUp.value ? '200px' : '100%',
          title: item.title,
          text: item.lead,
          img: item.thumbnail,
          link: { name: 'News', params: { id: item.id } },
        }"
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

const props = defineProps({
  slides: { default: [], type: Array },
});
</script>
