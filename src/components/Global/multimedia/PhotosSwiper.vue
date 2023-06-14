<template>
  <Swiper
    :modules="modules"
    class="w-100 mt-5"
    autoplay
    loop
    :slides-per-view="useDisplay().xs.value ? 1 : 4"
    :space-between="20"
    :navigation="navigation_options"
  >
    <SwiperSlide v-for="item in slides">
      <v-img
        class="rounded-xl "
        :src="item.img || default_img"
        @click="
          overlay = true;
          overlay_img.src = item.img;
        "
        style="cursor: pointer;"
      ></v-img>
    </SwiperSlide>
  </Swiper>
  <v-overlay v-model="overlay" width="100%" height="100%">
    <v-btn
      @click="overlay = false"
      icon="mdi-close"
      color="black"
      location="top left"
      position="absolute"
      style="z-index: 10;"
      class="ma-3"
      title="خروج از تمام صفحه"
    ></v-btn>
    <v-img cover class="w-100 h-100" :src="overlay_img.src"> </v-img>
    <p>{{ overlay_img.title }}</p>
  </v-overlay>
</template>

<script setup>
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from "swiper";

import { useDisplay } from "vuetify/lib/framework.mjs";
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import { ref } from "vue";

const modules = [Navigation, Pagination, Scrollbar, A11y, Autoplay];

const navigation_options = {
  nextEl: ".next-slide",
  prevEl: ".prev-slide",
};

const props = defineProps({
  slides: { default: 5 },
});

const overlay = ref(false);
const overlay_img = ref({
  title: "لورم ایپسوم",
  src: "",
});
</script>
