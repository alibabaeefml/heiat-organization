<template>
  <Swiper
    :modules="modules"
    class="w-100 mt-5"
    autoplay
    loop
    :slides-per-view="useDisplay().smAndDown.value ? 1 : 4"
    :space-between="20"
    :navigation="navigation_options"
  >
    <SwiperSlide
      v-for="(item, i) in use_news_store().get_organizations_news.slice(0, 5)"
    >
      <VerticalCard
        style="border: 2px solid var(--primary)"
        class="rounded-xl"
        :data="{
          title: item.title,
          text: item.lead,
          img: item.thumbnail,
          link: { name: 'OrganizationSingleNews', params: { id: item.id } },
        }"
      />
    </SwiperSlide>
  </Swiper>
  <Swiper
    :modules="modules"
    class="w-100 mt-5"
    autoplay
    loop
    :slides-per-view="useDisplay().smAndDown.value ? 1 : 4"
    :space-between="20"
    :navigation="navigation_options"
  >
    <SwiperSlide v-for="(item, i) in use_news_store().get_organizations_news.slice(4)">
      <VerticalCard
        style="border: 2px solid var(--primary)"
        class="rounded-xl"
        :data="{
          title: item.title,
          text: item.lead,
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
