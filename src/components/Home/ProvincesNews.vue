<template>
  <section class="wrapper bg-secondary-3">
    <div
      class="position-relative d-flex flex-md-row justify-space-between flex-column pa-5"
      style="z-index: 11"
    >
      <SelectedProvinceNews
        :data="data"
        :style="{ width: useDisplay().mdAndUp.value ? '50%' : '100%' }"
        class="order-md-1 order-2"
      />

      <Map
        class="order-md-2 order-1"
        :style="{ width: useDisplay().mdAndUp.value ? '50%' : '100%' }"
      />
    </div>
    <v-spacer style="my-10"></v-spacer>
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
.wrapper {
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
  background-image: url(@/assets/images/white_mask.png);
  background-position: bottom;
  background-size: contain;
  width: 100%;
  height: 200px;
  position: absolute;
  bottom: 0;
  left: 0;
}
</style>
