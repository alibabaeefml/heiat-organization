<template>
  <div class="position-relative">
    <swiper-container
      :slides-per-view="1"
      :space-between="50"
      style="margin-block: 120px"
      :navigation="navigation_options"
      autoplay
      :pagination="pagination"
    >
      <swiper-slide v-for="slide in slides" :key="slide">
        <v-img
          class="rounded-xl"
          :src="slide.img || default_img"
          cover
          height="300px"
        ></v-img>
        <h2
          class="font-weight-regular position-absolute text-secondary next"
          style="bottom: 1.5rem; right: 1rem; z-index: 2"
          v-if="!hideTitle"
        >
          {{ slide.title || "عنوان اسلاید" }}
        </h2>
        <div
          class="position-absolute w-100 h-100 rounded-xl"
          style="
            top: 0;
            z-index: 1;
            box-shadow: rgba(16, 16, 16, 0.6) 0px -20px 20px 20px inset;
          "
        ></div>
      </swiper-slide>
    </swiper-container>

    <div
      class="w-100 position-absolute d-flex justify-space-between"
      id="home-swiper-navigation"
      style="top: 50%; z-index: 10; pointer-events: none"
    >
      <v-btn
        class="next-slide"
        style="
          border-radius: 3rem;
          border-top-right-radius: 0;
          border-bottom-right-radius: 0;
          pointer-events: all;
        "
        id="home_swiper_next_slide"
        icon="mdi-arrow-right"
        color="secondary"
      ></v-btn>
      <v-btn
        class="prev-slide"
        style="
          border-radius: 3rem;
          border-top-left-radius: 0;
          border-bottom-left-radius: 0;
          pointer-events: all;
        "
        id="home_swiper_prev_slide"
        icon="mdi-arrow-left"
        color="secondary"
      ></v-btn>
    </div>
  </div>
</template>

<script setup>
import { register } from "swiper/element/bundle";
register();

// import function to register Swiper custom elements

const navigation_options = {
  nextEl: "#home_swiper_next_slide",
  prevEl: "#home_swiper_prev_slide",
};

const props = defineProps({
  slides: { default: [], type: Array },
  hideTitle: { type: Boolean },
  pagination: { type: Boolean },
});
</script>

<style>
:root {
  --swiper-pagination-bullet-inactive-color: #fff !important;
  --swiper-theme-color: var(--secondary) !important;
}
</style>
