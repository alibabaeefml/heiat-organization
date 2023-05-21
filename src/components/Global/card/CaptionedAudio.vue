<template>
  <v-card
    :class="
      'text-' + data.theme + ' d-flex justify-space-between pa-2 rounded-lg'
    "
  >
    <v-avatar :image="data.avatar || default_img" size="59"></v-avatar>
    <div class="d-flex flex-column gap-1 w-75">
      <h3 class="overflow-hidden" style="height: 25px">
        {{ data.title || persian_lorem }}
      </h3>
      <span
        >{{ data.name || "راوی" }} -
        <span>{{ data.duration || "00:00:00" }}</span></span
      >
    </div>
    <v-btn
      :icon="'mdi-' + (paused ? 'play' : 'pause')"
      @click="audio_control"
      :color="data.theme"
      variant="outlined"
    ></v-btn>
  </v-card>
</template>

<script setup>
import { ref } from "vue";
const paused = ref(true);
const props = defineProps(["data"]);
const audio_control = () => {
  paused.value = !paused.value;
};
</script>
