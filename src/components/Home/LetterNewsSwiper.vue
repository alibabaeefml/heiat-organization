<template>
  <swiper
    :slides-per-view="1"
    :space-between="50"
    :class="{
      'w-50': useDisplay().mdAndUp.value,
      'w-100': useDisplay().mdAndDown.value,
      'pa-5': true,
    }"
    style="margin-top: 100px"
    :modules="modules"
    :navigation="navigation_options"
    loop
    autoplay
  >
    <swiper-slide v-for="slide in slides" :key="slide">
      <v-img
        class="rounded-xl"
        cover
        :src="slide.img || default_img"
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
          {{ slide.lead || persian_lorem }}
        </p>
        <v-btn
          :to="{ path: slide.btn_link }"
          variant="outlined"
          color="secondary"
          text="ادامه مطلب"
        >
        </v-btn>
      </div>
    </swiper-slide>
    <div
      class="position-absolute d-flex justify-space-between"
      :style="
        (useDisplay().smAndUp.value ? 'top: 60%' : 'bottom:0') +
        ';left: 5%; width: 90%;  z-index: 10;'
      "
    >
      <v-btn
        class="next-slide"
        icon="mdi-arrow-right"
        color="secondary"
      ></v-btn>
      <v-btn class="prev-slide" icon="mdi-arrow-left" color="secondary"></v-btn>
    </div>
  </swiper>
</template>

<script setup>
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

const props = defineProps(["slides"]);
</script>
