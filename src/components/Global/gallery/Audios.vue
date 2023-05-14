<template>
  <div>
    <v-row class="pa-3">
      <v-col class="d-flex flex-column gap-1" cols="12" md="6">
        <CaptionedAudio :data="{}" v-for="audio in 4" :key="audio" />
      </v-col>
      <v-col class="d-flex flex-column gap-1" cols="12" md="6">
        <CaptionedAudio v-for="audio in 4" :key="audio" />
      </v-col>
    </v-row>
    <v-card color="secondary text-secondary-2">
      <div id="audio" class="player-wrapper d-flex align-center flex-md-row flex-column">
        <div class="d-flex gap-1 align-center">
          <v-avatar
            :image="selected_audio.avatar || default_img"
            size="59"
          ></v-avatar>
          <h3 class="overflow-hidden" style="height: 25px">
            {{ selected_audio.title || persian_lorem }}
          </h3>
        </div>
        <audio-player file="src/assets/Boresh.mp3" dir="ltr"></audio-player>
      </div>
    </v-card>
  </div>
</template>
<script setup>
import CaptionedAudio from "@/components/Global/card/CaptionedAudio.vue";
import AudioPlayer from "@/components/Global/gallery/AudioPlayer.vue";
import { ref } from "vue";

const selected_audio = ref({});
</script>

<style scoped>
.player-wrapper {
  align-items: center;
  display: flex;
  justify-content: space-between;
  padding: 1rem;
}
</style>
