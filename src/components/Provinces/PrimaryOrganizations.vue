<template>
  <div>
    <div
      class="d-flex flex-sm-row flex-column justify-space-between align-center"
    >
      <h2 class="text-primary">تشکل های برتر استان</h2>
      <div class="d-flex gap-1 pa-5 justify-end">
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
    </div>
    <swiper
      :slides-per-view="useDisplay().smAndUp.value ? 3 : 1"
      :space-between="20"
      :class="{
        'pa-5': true,
      }"
      :modules="modules"
      :navigation="navigation_options"
      loop
      autoplay
      v-if="slides.length"
    >
      <swiper-slide v-for="item in slides" class="d-flex flex-column gap-1">
        <VerticalCard
          :data="{
            card_theme: 'primary',
            title: item.title,
            text: item.text,
            img: item.img,
          }"
          :is_cover="false"
        />
      </swiper-slide>
    </swiper>
    <div
      class="d-flex align-center justify-center"
      style="height: 300px"
      v-else
    >
      <h3>تشکلی در این استان وجود ندارد</h3>
    </div>
  </div>
</template>

<script setup>
import VerticalCard from "@/components/Global/card/VerticalCard.vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

import { useDisplay } from "vuetify/lib/framework.mjs";

const modules = [Navigation, Pagination, Scrollbar, A11y, Autoplay];

const navigation_options = {
  nextEl: ".next-slide",
  prevEl: ".prev-slide",
};
const props = defineProps({
  slides: { default: [] },
});
</script>
