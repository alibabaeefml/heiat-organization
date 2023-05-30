<template>
  <div class="position-relative bg-secondary-3" style="min-height: 1000px">
    <div
      class="w-100 h-100 position-absolute pattern-div"
      style="pointer-events: none"
    ></div>
    <div
      style="
        padding-top: 10rem;
        padding-inline: 2rem;
        position: relative;
        z-index: 11;
      "
    >
      <div
        class="d-flex flex-sm-row flex-column align-center justify-space-between"
      >
        <TextGroup title="اخبار برگزیده" no_desc="true" />

        <div
          class="d-flex flex-sm-row flex-column align-center gap-1"
          :style="{ width: useDisplay().xs.value ? '100%' : 'auto' }"
        >
          <div class="d-flex align-center justify-space-between w-100 gap-1">
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
          <v-btn
            color="primary"
            class="rounded-lg font-weight-bold"
            :width="useDisplay().xs.value ? '100%' : 'max-content'"
            >نمایش همه</v-btn
          >
        </div>
      </div>
      <v-row class="mt-5">
        <v-col cols="12" md="5" v-if="useDisplay().smAndUp.value">
          <VerticalCard
            :data="{
              width: '100%',
              img_height: '310px',
              card_theme: 'secondary',
            }"
          />
        </v-col>
        <v-col cols="12" md="7" class="d-flex flex-column gap-1">
          <PrimaryNewsSwiper />
        </v-col>
      </v-row>
    </div>
    <v-spacer class="py-10"></v-spacer>
    <!-- lower mask -->
    <div
      class="w-100 position-absolute d-flex align-center justify-end"
      style="bottom: 0"
    >
      <v-img
        cover
        src="@/assets/images/white_mask.png"
        style="object-fit: cover"
      ></v-img>
    </div>
  </div>
  <div class="position-relative pb-5">
    <div
      class="w-100 h-100 position-absolute pattern-div"
      style="pointer-events: none"
    ></div>
    <div style="padding-inline: 2rem; position: relative; z-index: 11">
      <div class="d-flex flex-column align-center justify-space-between">
        <TextGroup class="text-center" title="اخبار استان ها" no_desc="true" />

        <div class="d-flex flex-column align-center gap-1 w-100">
          <div class="d-flex align-center justify-space-between w-100 gap-1">
            <v-btn
              class="next-slide"
              icon="mdi-arrow-right"
              color="secondary"
            ></v-btn>
            <v-btn
              color="primary"
              class="rounded-lg font-weight-bold"
              :to="{ name: 'News' }"
              >نمایش همه</v-btn
            >
            <v-btn
              class="prev-slide"
              icon="mdi-arrow-left"
              color="secondary"
            ></v-btn>
          </div>
        </div>
        <HorizontalSwiper class="mt-5" :slides="get_provinces_news" />
      </div>
      <div
        class="mt-5 d-flex flex-sm-row flex-column align-center justify-space-between"
      >
        <TextGroup title="اخبار سازمان ها" no_desc="true" />

        <div
          class="d-flex flex-sm-row flex-column align-center gap-1"
          :style="{ width: useDisplay().xs.value ? '100%' : 'auto' }"
        >
          <div class="d-flex align-center justify-space-between w-100 gap-1">
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
      </div>
      <div class="d-flex justify-end w-100 mt-5">
        <v-btn
          color="primary"
          class="rounded-lg font-weight-bold"
          :to="{ name: 'News' }"
          :block="useDisplay().xs.value"
          >نمایش همه</v-btn
        >
      </div>
      <OrganizationNewsSwiper class="mt-5"  />
      <div class="d-flex justify-end mt-5"></div>
    </div>
  </div>
</template>

<script setup>
import TextGroup from "@/components/Global/text/TextGroup.vue";

import PrimaryNewsSwiper from "@/components/CategorizedNews/PrimaryNewsSwiper.vue";
import VerticalCard from "@/components/Global/card/VerticalCard.vue";
import { useDisplay } from "vuetify/lib/framework.mjs";
import OrganizationNewsSwiper from "@/components/CategorizedNews/OrganizationNewsSwiper.vue";
import HorizontalSwiper from "@/components/Global/swiper/HorizontalSwiper.vue";
import { storeToRefs } from "pinia";
import { use_news_store } from "@/store/news";

const { get_provinces_news } = storeToRefs(use_news_store());

use_news_store().index_provinces_news();
use_news_store().index_organs_news();
</script>
