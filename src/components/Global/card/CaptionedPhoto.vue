<template>
  <v-card class="rounded-xl overflow-hidden" :height="height" :to="data.link">
    <v-img cover width="100%" height="100%" :src="data.img || default_img"> </v-img>
    <v-card-title
      class="position-absolute text-center"
      style="bottom: 0; background-color: rgba(255, 255, 255, 0.8)"
    >
      <h5>{{ data.caption || persian_lorem }}</h5>
    </v-card-title>
  </v-card>
</template>
<script setup>
const props = defineProps(["data", "height"]);
</script>
