<template>
  <div class="d-flex flex-column">
    <TextGroup title="استان خراسان رضوی" />
    <ul class="d-flex flex-md-row flex-column gap-1 align-center mt-5">
      <VerticalCard v-for="news_item in 3" :key="news_item" :data="data" />
    </ul>
    <div class="d-sm-flex justify-sm-end">
      <v-btn
        color="primary"
        class="rounded-lg font-weight-bold"
        :width="useDisplay().xs.value ? '100%' : 'auto'"
        >نمایش همه</v-btn
      >
    </div>
  </div>
</template>
<script setup>
import { useDisplay } from "vuetify/lib/framework.mjs";
import VerticalCard from "@/components/Global/card/VerticalCard.vue";
import TextGroup from "@/components/Global/text/TextGroup.vue";
const data = {
  card_theme: "secondary",
};
const props = defineProps(["data"]);
</script>
