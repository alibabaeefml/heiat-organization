<template>
  <div
    class="d-none d-md-flex gap-1 pa-5 justify-end"
    v-if="useDisplay().mdAndUp.value"
  >
    <v-btn class="next-slide" icon="mdi-arrow-right" color="secondary"></v-btn>
    <v-btn class="prev-slide" icon="mdi-arrow-left" color="secondary"></v-btn>
  </div>
  <v-row height="500">
    <v-col cols="12" md="9" class="pa-8">
      <CaptionedVideo
        v-if="selected_video"
        :data="{
          poster: selected_video.img,
          video: selected_video.file_url,
          caption: selected_video.title,
        }"
        height="500"
        controls
      />
    </v-col>
    <v-col cols="12" md="3">
      <div
        class="d-flex d-md-none gap-1 pa-5 justify-center"
       
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
        <swiper-slide
          v-for="video in get_videos.slice(0, 3)"
          class="d-flex flex-column gap-1"
        >
          <CaptionedVideo
            :data="{
              poster: video.img,
              caption: video.title,
            }"
            height="150"
            @click="selected_video = video"
          />
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
import { use_video_store } from "@/store/video";
import { storeToRefs } from "pinia";
import { ref } from "vue";

const modules = [Navigation, Pagination, Scrollbar, A11y, Autoplay];
const navigation_options = {
  nextEl: ".next-slide",
  prevEl: ".prev-slide",
};


const { get_videos } = storeToRefs(use_video_store());

const selected_video = ref(null);

use_video_store()
  .index_videos()
  .then(() => (selected_video.value = get_videos.value[0]));

  
</script>
