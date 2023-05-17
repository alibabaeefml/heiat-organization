<template>
  <div class="position-relative bg-secondary-3">
    <div
      class="w-100 h-100 position-absolute pattern-div"
      style="pointer-events: none"
    ></div>
    <div style="padding-top: 10rem; position: relative; z-index: 11">
      <TextGroup title="اخبار برگزیده" no_desc="true" />
      <v-row class="mt-5">
        <v-col cols="12" md="5">
          <VerticalCard
            :data="{
              width: '100%',
              img_height: '310px',
              card_theme: 'secondary',
            }"
          />
        </v-col>
        <v-col cols="12" md="7" class="d-flex flex-column gap-1">
          <Swiper :modules="modules" :navigation="navigation_options">
            <SwiperSlide v-for="item in 3">
              <HorizontalCard
                :data="{
                  img_width: useDisplay().smAndUp.value ? '200px' : '100%',
                }"
              />
            </SwiperSlide>
          </Swiper>
        </v-col>
      </v-row>
    </div>
  </div>
</template>
<script setup>
import TextGroup from "@/components/Global/text/TextGroup.vue";
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from "swiper";
import { useDisplay } from "vuetify/lib/framework.mjs";
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
