<template>
  <section class="wrapper d-flex gap-1 justify-center flex-sm-row flex-column">
    <HomeSwiper
      :slides="slides"
      :style="{ width: display.xs.value ? '100%' : '40%' }"
    />
    <HomeSwiper
      :slides="slides"
      :style="{ width: display.xs.value ? '100%' : '20%' }"
      hide-title
      pagination
    />
    <HomeSwiper
      :slides="slides"
      :style="{ width: display.xs.value ? '100%' : '20%' }"
      hide-title
      pagination
    />
  </section>
</template>
<script setup>
import { useDisplay } from "vuetify/lib/framework.mjs";
import HomeSwiper from "./HomeSwiper.vue";
import { use_slider_store } from "@/store/slider";
import { ref } from "vue";

const slides = ref([]);
const display = useDisplay();
const load_data = async () => {
  slides.value = await use_slider_store().main_slider();
};
load_data();
</script>

<style scoped>
.wrapper {
  background-image: url(@/assets/images/index-section-one-default-background.jpg);
  box-shadow: inset 0 0 0 2000px rgba(1, 89, 51, 0.6);
  background-size: cover;
  background-position: center;
  position: relative;
  width: 100%;
  height: max-content;
  padding-bottom: 200px;
}
.wrapper::after {
  content: "";
  display: flex;
  background-image: url(@/assets/images/yellow_mask.png);
  background-position: bottom;
  background-size: contain;
  width: 100%;
  height: 200px;
  position: absolute;
  bottom: 0;
  left: 0;
}

</style>
