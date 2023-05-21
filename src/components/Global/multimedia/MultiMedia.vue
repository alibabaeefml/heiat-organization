<template>
  <section>
    <div class="position-relative" style="z-index: 11">
      <TextGroup
        title="چند رسانه ای"
        :class="center ? 'text-center mx-auto w-75' : ''"
        :title_class="'text-' + theme"
      />
      <v-tabs :color="theme" grow v-model="media_tab">
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
          <Audios :theme="theme" />
        </v-window-item>
        <v-window-item value="docs">
          <Docs />
        </v-window-item>
      </v-window>
    </div>
  </section>
</template>
<script setup>
import Audios from "@/components/Global/gallery/Audios.vue";
import Docs from "@/components/Global/gallery/Docs.vue";
import Photos from "@/components/Global/gallery/Photos.vue";
import Videos from "@/components/Global/gallery/Videos.vue";
import TextGroup from "@/components/Global/text/TextGroup.vue";
import { ref } from "vue";

const media_tab = ref("audios");

const props = defineProps({
  theme: { default: "primary" },
  center: {},
});
</script>
