<template>
  <section
    class="province-news-section bg-secondary-3"
  >
    <div class="position-relative d-flex flex-md-row justify-space-between flex-column pa-5" style="z-index: 11">
      <SelectedProvinceNews
        :data="data"
        :style="{ width: useDisplay().mdAndUp.value ? '50%' : '100%' }"
        class="order-sm-1 order-2"
      />

      <Map
        class="order-sm-2 order-1"
        :style="{ width: useDisplay().mdAndUp.value ? '50%' : '100%' }"
      />
    </div>
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
  </section>
</template>
<script setup>
import SelectedProvinceNews from "@/components/Home/SelectedProvinceNews.vue";
import { ref } from "vue";
import { useDisplay } from "vuetify/lib/framework.mjs";
import Map from "../Global/map/Map.vue";

const data = ref({});
</script>

<style scoped>
.province-news-section {
  background-size: cover;
  background-position: center;
  position: relative;
  width: 100%;
  height: 100%;
  min-height: 1000px;
}
</style>
