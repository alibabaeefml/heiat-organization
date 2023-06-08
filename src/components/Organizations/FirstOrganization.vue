<template>
  <div class="d-flex flex-column justify-center">
    <v-img
      :src="data.logo || 'src/assets/images/cultural_centers_logo.png'"
      width="160"
      class="mx-auto"
    ></v-img>
    <TextGroup
      :title="data.title || 'مجمع کانون های فرهنگی'"
      title_class="text-secondary-4"
      class="text-center w-75 mx-auto"
      no_desc="true"
    />
    <div class="mt-5 d-flex flex-column align-center gap-1 w-100">
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
      <p class="limited mt-5 w-75 mx-auto">{{ data.desc || persian_lorem }}</p>
      <HorizontalSwiper class="mt-5" />
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import TextGroup from "../Global/text/TextGroup.vue";
import HorizontalSwiper from "../Global/swiper/HorizontalSwiper.vue";
const data = ref({});
</script>
