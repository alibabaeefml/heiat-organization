<template>
  <div class="d-none d-md-flex gap-1 pa-5 justify-end">
    <v-btn class="next-slide" icon="mdi-arrow-right" color="secondary"></v-btn>
    <v-btn class="prev-slide" icon="mdi-arrow-left" color="secondary"></v-btn>
  </div>
  <v-row height="500">
    <v-col cols="12" md="5" class="pa-8">
      <CaptionedPhoto
      v-if="get_albums.length"
        :data="{
          caption: get_albums[0].title,
          img: get_albums[0].thumbnail,
          link: { name: 'SingleAlbum', params: { id: get_albums[0].id } },
        }"
        height="400"
      />
    </v-col>
    <v-col cols="12" md="7">
      <div class="d-flex d-md-none gap-1 pa-5 justify-center">
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
        :slides-per-view="useDisplay().smAndUp.value ? 2 : 1"
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
          v-for="album in get_albums.slice(0, 3)"
          class="d-flex flex-column gap-1"
        >
          <CaptionedPhoto
            height="200"
            :data="{
              caption: album.title,
              img: album.thumbnail,
              link: { name: 'SingleAlbum', params: { id: album.id } },
            }"
          />
        </swiper-slide>
      </swiper>
      <swiper
        :slides-per-view="useDisplay().smAndUp.value ? 2 : 1"
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
          v-for="album in get_albums.slice(3, 6)"
          class="d-flex flex-column gap-1"
        >
          <CaptionedPhoto
            :data="{ id: album.id, caption: album.title, img: album.thumbnail }"
          />
        </swiper-slide>
      </swiper>
      <swiper
        :slides-per-view="useDisplay().smAndUp.value ? 2 : 1"
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
          v-for="album in get_albums.slice(6)"
          class="d-flex flex-column gap-1"
        >
          <CaptionedPhoto
            :data="{ id: album.id, caption: album.title, img: album.thumbnail }"
          />
        </swiper-slide>
      </swiper>
    </v-col>
  </v-row>
</template>
<script setup>
import CaptionedPhoto from "../card/CaptionedPhoto.vue";
import { useDisplay } from "vuetify/lib/framework.mjs";
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from "swiper";

// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import { use_photo_store } from "@/store/photo";
import { storeToRefs } from "pinia";

const modules = [Navigation, Pagination, Scrollbar, A11y, Autoplay];

const navigation_options = {
  nextEl: ".next-slide",
  prevEl: ".prev-slide",
};

const { get_albums } = storeToRefs(use_photo_store());
use_photo_store().index_albums();

</script>
