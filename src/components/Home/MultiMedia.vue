<template>
  <section class="bg-white">
    <div class="position-relative" style="z-index: 11">
      <TextGroup title="چند رسانه ای" class="text-center" />
      <v-tabs color="secondary-2 " grow v-model="media_tab">
        <v-tab value="photos">آلبوم تصاویر</v-tab>
        <v-tab value="videos">فیلم</v-tab>
        <v-tab value="audios">صوت</v-tab>
        <v-tab value="docs">مقالات</v-tab>
      </v-tabs>
      <v-window v-model="media_tab">
        <v-window-item value="photos">
          <Photos />
        </v-window-item>
        <v-window-item value="videos">
          <Videos />
        </v-window-item>
        <v-window-item value="audios">
          <Audios />
        </v-window-item>
        <v-window-item value="docs">
          <Docs />
        </v-window-item>
      </v-window>
    </div>
  </section>
</template>
<script setup>
import Audios from "../Global/gallery/Audios.vue";
import Docs from "../Global/gallery/Docs.vue";
import Photos from "../Global/gallery/Photos.vue";
import Videos from "@/components/Global/gallery/Videos.vue";
import TextGroup from "../Global/text/TextGroup.vue";
import { ref } from "vue";

const media_tab = ref("videos");
</script>