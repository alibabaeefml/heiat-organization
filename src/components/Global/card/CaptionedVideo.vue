<template>
  <v-card class="rounded-xl overflow-hidden" :style="data.card_style || {}">
    <video
      :style="data.video_style || {}"
      cover
      :poster="data.poster || default_img"
      :src="data.vdieo"
    ></video>
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