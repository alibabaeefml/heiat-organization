<template>
  <div class="mt-5">
    <Swiper
      :modules="modules"
      class="w-100"
      autoplay
      loop
      :slides-per-view="useDisplay().xs.value ? 1 : 2"
      :space-between="20"
      :navigation="navigation_options"
    >
      <SwiperSlide v-for="item in slides.slice(0, 3)" :key="item.id">
        <HorizontalCard
          :data="{
            img_width: useDisplay().xs.value ? '100%' : '200px',
            title_class: 'text-secondary-4',
            title: item.title,
            text: item.lead,
            img: item.thumbnail,
            link: { name: 'OrganizationsSingleNews', params: { id: item.id } },
          }"
        />
      </SwiperSlide>
    </Swiper>
    <Swiper
      :modules="modules"
      class="w-100"
      autoplay
      loop
      :slides-per-view="useDisplay().xs.value && slides.length < 2 ? 1 : 2"
      :space-between="20"
      :navigation="navigation_options"
    >
      <SwiperSlide v-for="item in slides.slice(3, 6)" :key="item.id">
        <HorizontalCard
          :data="{
            img_width: useDisplay().xs.value ? '100%' : '200px',
            title_class: 'text-secondary-4',
          }"
        />
      </SwiperSlide>
    </Swiper>

    <Swiper
      :modules="modules"
      class="w-100"
      autoplay
      loop
      :slides-per-view="useDisplay().xs.value ? 1 : 2"
      :space-between="20"
      :navigation="navigation_options"
    >
      <SwiperSlide v-for="item in slides.slice(6)" :key="item.id">
        <HorizontalCard
          :data="{
            img_width: useDisplay().xs.value ? '100%' : '200px',
            title_class: 'text-secondary-4',
          }"
        />
      </SwiperSlide>
    </Swiper>
  </div>
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
