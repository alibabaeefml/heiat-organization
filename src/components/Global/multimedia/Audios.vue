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
            {{ selected_audio.title  }}
          </h3>
        </div>
        <audio-player
          :style="{ scale: useDisplay().xs.value ? 0.6 : 1 }"
          :theme="`var(--${theme})`"
          :file="selected_audio.file_url"
          dir="ltr"
          :key="selected_audio"
          :auto-play="autoplay"
        ></audio-player>
      </div>
    </v-card>
  </div>
</template>
<script setup>
import CaptionedAudio from "@/components/Global/card/CaptionedAudio.vue";
import AudioPlayer from "@/components/Global/multimedia/AudioPlayer.vue";
import { use_audio_store } from "@/store/audio";
import { storeToRefs } from "pinia";
import { ref } from "vue";
import { useDisplay } from "vuetify/lib/framework.mjs";

const selected_audio = ref({});
const autoplay = ref(false);
const select_audio = (audio) => {
  selected_audio.value = audio;
  autoplay.value = true;
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
