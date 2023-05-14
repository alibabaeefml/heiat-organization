<template>
  <v-card class="rounded-xl overflow-hidden" :style="data.card_style || {}">
    <v-img
      :style="data.img_style || {}"
      cover
      :src="data.img || 'src/assets/images/news-item-sample-image.png'"
    >
    </v-img>
    <v-card-title
      class="position-absolute text-center"
      style="bottom: 0; background-color: rgba(255, 255, 255, 0.8)"
    >
      <h5>{{ data.caption || persian_lorem }}</h5>
    </v-card-title>
  </v-card>
</template>
<script setup>
const props = defineProps(["data"]);
</script>
