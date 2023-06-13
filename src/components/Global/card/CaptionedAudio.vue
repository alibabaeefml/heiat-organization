<template>
  <v-card
    :class="
      'text-' +
      data.theme +
      ' d-flex justify-space-between pa-2 rounded-lg gap-1'
    "
  >
    <v-avatar :image="audio.img || default_img" size="59"></v-avatar>
    <div class="d-flex flex-column gap-1 w-75">
      <h3 class="overflow-hidden" style="height: 25px">
        {{ audio.title || persian_lorem }}
      </h3>
      <span
        >{{ audio.speaker || "ناشناس" }} -
        <span>{{ duration || "00:00:00" }}</span></span
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
const props = defineProps(["data", "audio"]);
const emit = defineEmits(["select_audio"]);
const audio_control = () => {
  emit("select_audio", props.audio);
};

const duration = ref(null);
let audio_el = new Audio();
audio_el.src = props.audio.file_url;
audio_el.onloadedmetadata = () => {
  var date = new Date(0);
  date.setSeconds(audio_el.duration); // specify value for SECONDS here
  var timeString = date.toISOString().substring(11, 19);
  duration.value = timeString;
};
</script>
