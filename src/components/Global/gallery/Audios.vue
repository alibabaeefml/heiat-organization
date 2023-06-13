<template>
  <div>
    <v-row class="pa-3">
      <v-col
        class="d-flex flex-column gap-1"
        cols="12"
        md="6"
        v-for="audio in get_audios"
        :key="audio.id"
      >
        <CaptionedAudio
          :data="{ theme: theme }"
          :audio="audio"
          @select_audio="select_audio"
        />
      </v-col>
    </v-row>
    <v-card>
      <div
        id="audio"
        class="player-wrapper d-flex align-center flex-md-row flex-column"
      >
        <div class="d-flex gap-1 align-center">
          <v-avatar
            :image="selected_audio.img || default_img"
            size="59"
          ></v-avatar>
          <h3 class="overflow-hidden" style="height: 25px">
            {{ selected_audio.title || persian_lorem }}
          </h3>
        </div>
        <audio-player
          :theme="`var(--${theme})`"
          :file="selected_audio.file_url"
          dir="ltr"
          auto-play
          :key="selected_audio"
        ></audio-player>
      </div>
    </v-card>
  </div>
</template>
<script setup>
import CaptionedAudio from "@/components/Global/card/CaptionedAudio.vue";
import AudioPlayer from "@/components/Global/gallery/AudioPlayer.vue";
import { use_audio_store } from "@/store/audio";
import { storeToRefs } from "pinia";
import { ref } from "vue";

const selected_audio = ref({});

const select_audio = (audio) => {
  selected_audio.value = audio;
};
const props = defineProps(["theme"]);

const { get_audios } = storeToRefs(use_audio_store());
use_audio_store()
  .index_audios()
  .then(() => (selected_audio.value = get_audios.value[0]));
</script>

<style scoped>
.player-wrapper {
  align-items: center;
  display: flex;
  justify-content: space-between;
  padding: 1rem;
}
</style>
