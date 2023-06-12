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
    <SwiperSlide v-for="item in slides">
      <v-img
        style="border: 2px solid var(--primary); cursor: pointer"
        class="rounded-lg mx-auto"
        :src="item.thumbnail"
        width="220"
        height="280"
        cover
        @click="
          overlay = true;
          overlay_img.src = item.img;
        "
      >
        <v-tooltip activator="parent" location="bottom">{{
          item.title || "اساسنامه"
        }}</v-tooltip>
      </v-img>
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
  <v-overlay v-model="overlay" width="100%" height="100%">
    <v-btn
      @click="overlay = false"
      icon="mdi-close"
      color="black"
      location="top left"
      position="absolute"
      style="z-index: 10"
      class="ma-3"
      title="خروج از تمام صفحه"
    ></v-btn>
    <v-img class="w-100 h-100" :src="overlay_img.src"> </v-img>
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
  slides: { default: [] },
});

const overlay = ref(null);
const overlay_img = ref({
  title: "لورم ایپسوم",
  src: "",
});
</script>
