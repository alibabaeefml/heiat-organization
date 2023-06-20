<template>
  <swiper-container
    class="w-100"
    autoplay
    loop
    :slides-per-view="1"
    :space-between="20"
    :navigation="navigation_options"
  >
    <swiper-slide v-for="slide in slides" :key="slides.id">
      <HorizontalCard
        :data="{
          img_width: '200px',
          title: slide.title,
          text: slide.lead,
          img: slide.thumbnail,
          link: { name: 'SingleNews', params: { id: slide.id } },
        }"
      />
    </swiper-slide>
  </swiper-container>
</template>

<script setup>
import { register } from "swiper/element/bundle";

register();
import HorizontalCard from "@/components/Global/card/HorizontalCard.vue";

import { useDisplay } from "vuetify/lib/framework.mjs";
// import function to register Swiper custom elements

const navigation_options = {
  nextEl: "#primary_news_next_slide",
  prevEl: "#primary_news_prev_slide",
};

const props = defineProps({
  slides: { default: [], type: Array },
});
</script>
