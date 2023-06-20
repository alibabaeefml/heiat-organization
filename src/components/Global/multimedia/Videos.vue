<template>
  <div
    class="d-none d-md-flex gap-1 pa-5 justify-end"
    v-if="useDisplay().mdAndUp.value"
  >
    <v-btn
      class="next-slide"
      id="video_swiper_next_slide"
      icon="mdi-arrow-right"
      color="secondary"
    ></v-btn>
    <v-btn
      class="prev-slide"
      id="video_swiper_prev_slide"
      icon="mdi-arrow-left"
      color="secondary"
    ></v-btn>
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
      <swiper-container
        :slides-per-view="1"
        :space-between="20"
        :class="{
          'pa-5': true,
        }"
        :navigation="navigation_options"
        loop="true"
        autoplay
      >
        <swiper-slide
          v-for="video in get_videos"
          :key="video.id"
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
      </swiper-container>
    </v-col>
  </v-row>
</template>
<script setup>
import { register } from "swiper/element/bundle";
import CaptionedVideo from "../card/CaptionedVideo.vue";
import { useDisplay } from "vuetify/lib/framework.mjs";
import { use_video_store } from "@/store/video";
import { storeToRefs } from "pinia";
import { ref } from "vue";

register();

let navigation_options = ref({
  prevEl: "#video_swiper_prev_slide",
  nextEl: "#video_swiper_next_slide",
});

const { get_videos } = storeToRefs(use_video_store());

const selected_video = ref(null);

use_video_store()
  .index_videos()
  .then(() => (selected_video.value = get_videos.value[0]));
</script>
