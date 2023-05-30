<template>
  <Swiper
    :modules="modules"
    class="w-100"
    autoplay
    loop
    :slides-per-view="useDisplay().xs.value ? 1 : 4"
    :space-between="20"
    :navigation="navigation_options"
  >
    <SwiperSlide>
      <VerticalCard
        v-for="item in use_news_store().get_organs_news.slice(0, 4)"
        style="border: 2px solid var(--primary)"
        class="rounded-xl"
        :data="{
          title: item.title_fa,
          text: item.lead_fa,
          img: item.thumbnail,
          link: { name: 'OrganizationSingleNews', params: { id: item.id } },
        }"
      />

      <VerticalCard
        v-for="item in use_news_store().get_organs_news.slice(4)"
        style="border: 2px solid var(--primary)"
        class="rounded-xl"
        :data="{
          title: item.title_fa,
          text: item.lead_fa,
          img: item.thumbnail,
          link: { name: 'OrganizationSingleNews', params: { id: item.id } },
        }"
      />
    </SwiperSlide>
  </Swiper>
</template>

<script setup>
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from "swiper";

import { useDisplay } from "vuetify/lib/framework.mjs";
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import VerticalCard from "../Global/card/VerticalCard.vue";
import { use_news_store } from "@/store/news";

const modules = [Navigation, Pagination, Scrollbar, A11y, Autoplay];

const navigation_options = {
  nextEl: ".next-slide",
  prevEl: ".prev-slide",
};
</script>
