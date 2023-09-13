<template>
  <div class="position-relative">
    <swiper-container
      :slides-per-view="1"
      :space-between="50"
      :class="{
        'w-75': useDisplay().mdAndUp.value,
        'w-100': useDisplay().mdAndDown.value,
        'pa-5': true,
      }"
      style="margin-top: 100px"
      :navigation="navigation_options"
      autoplay
    >
      <swiper-slide v-for="slide in slides" :key="slide">
        <v-img
          class="rounded-xl"
          :src="slide.img || default_img"
          cover
          height="300px"
        ></v-img>
        <div
          :class="
            (useDisplay().smAndUp.value ? 'w-75 ' : '') +
            'mx-auto d-flex flex-column align-center gap-1 mt-5'
          "
        >
          <h2 class="text-secondary next">
            {{ slide.title || "عنوان اسلاید" }}
          </h2>
          <p class="text-white limited">
            {{ slide.lead  }}
          </p>
          <v-btn
            :to="{ path: slide.btn_link }"
            class="font-weight-bold"
            variant="outlined"
            color="secondary"
            text="ادامه مطلب"
          >
          </v-btn>
        </div>
      </swiper-slide>
    </swiper-container>
    <div
      class="position-absolute d-flex justify-space-between"
      id="home-swiper-navigation"
      :style="
        (useDisplay().smAndUp.value ? 'top: 80%' : 'bottom:0') +
        ';left: 15%; width: 70%;  z-index: 10;'
      "
    >
      <v-btn
        class="next-slide"
        id="home_swiper_next_slide"
        icon="mdi-arrow-right"
        color="secondary"
      ></v-btn>
      <v-btn
        class="prev-slide"
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

import { useDisplay } from "vuetify/lib/framework.mjs";
// import function to register Swiper custom elements

const navigation_options = {
  nextEl: "#home_swiper_next_slide",
  prevEl: "#home_swiper_prev_slide",
};

const props = defineProps({
  slides: { default: [], type: Array },
});
</script>

<style scooped></style>
