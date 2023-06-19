<template>
  <swiper-container
    class="w-100"
    autoplay
    loop
    :slides-per-view="useDisplay().xs.value ? 1 : 4"
    :space-between="20"
    :navigation="navigation_options"
    @progress="onProgress"
    @slidechange="onSlideChange"
  >
    <swiper-slide v-for="item in slides" :key="item.id"
      ><VerticalCard
        :data="{
          title: item.title,
          text: item.lead,
          img: item.thumbnail,
          link: { name: route_name, params: { id: item.id } },
        }"
        center_link="true"
    /></swiper-slide>
  </swiper-container>
</template>

<script setup>
import { useDisplay } from "vuetify/lib/framework.mjs";
import VerticalCard from "../card/VerticalCard.vue";

import { register } from "swiper/element/bundle";

register();

const navigation_options = {
  nextEl: "#horizontal_swiper_next_slide",
  prevEl: "#horizontal_swiper_prev_slide",
};

const onProgress = (e) => {
  const [swiper, progress] = e.detail;
};

const onSlideChange = (e) => {};

const props = defineProps({
  slides: { default: [] },
  
});
</script>
