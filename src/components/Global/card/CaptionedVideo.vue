<template>
  <v-card class="rounded-xl overflow-hidden" :height="height">
    <video
      :style="{
        'object-fit': 'cover',
        width: '100%',
        height: 'calc(100% - 50px)',
      }"
      :poster="data.poster || default_img"
      :src="data.video"
      :controls="controls"
    ></video>
    <v-card-title
      class="text-center"
      style="background-color: rgba(255, 255, 255, 0.8); height: 70px"
    >
      <h5>{{ data.caption || persian_lorem }}</h5>
    </v-card-title>
  </v-card>
</template>
<script setup>
const props = defineProps(["data", "height", "controls"]);
</script>
