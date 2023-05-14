<template>
    <div class="d-flex gap-1 pa-5 justify-end" v-if="useDisplay().mdAndUp.value">
      <v-btn class="next-slide" icon="mdi-arrow-right" color="secondary"></v-btn>
      <v-btn class="prev-slide" icon="mdi-arrow-left" color="secondary"></v-btn>
    </div>
    <v-row height="500">
      <v-col cols="12" md="9" class="pa-8">
        <CaptionedVideo :data="{ card_style: { height: '100%' },img_style: { height: '100%' } }" />
      </v-col>
      <v-col cols="12" md="3">
        <div
          class="d-flex gap-1 justify- d-flex gap-1 pa-5 justify-center"
          v-if="useDisplay().mdAndDown.value"
        >
          <v-btn
            class="next-slide"
            icon="mdi-arrow-right"
            color="secondary"
          ></v-btn>
          <v-btn
            class="prev-slide"
            icon="mdi-arrow-left"
            color="secondary"
          ></v-btn>
        </div>
        <swiper
          :slides-per-view="1"
          :space-between="20"
          :class="{
            'pa-5': true,
          }"
          :modules="modules"
          :navigation="navigation_options"
          loop
          autoplay
        >
          <swiper-slide v-for="slide in 5" class="d-flex flex-column gap-1">
            <CaptionedVideo :data="{}" v-for="slide in 3" />
          </swiper-slide>
        </swiper>
      </v-col>
    </v-row>
  </template>
  <script setup>
  import CaptionedVideo from "../card/CaptionedVideo.vue";
  import { useDisplay } from "vuetify/lib/framework.mjs";
  import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from "swiper";
  
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
  