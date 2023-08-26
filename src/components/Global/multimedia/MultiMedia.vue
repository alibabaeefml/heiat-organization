<template>
  <section>
    <div class="position-relative px-16" style="z-index: 11">
      <TextGroup
        :pretitle="language.value.index_sec5_gallery_subtitle"
        :title="language.value.index_sec5_gallery_title"
        :desc="language.value.index_sec5_gallery_desc"
        :class="center ? 'text-center mx-auto w-75' : ''"
        :title_class="'text-' + theme"
      />
      <v-tabs :color="theme" grow v-model="media_tab">
        <v-tab value="Albums">آلبوم تصاویر</v-tab>
        <v-tab value="Videos">فیلم</v-tab>
        <v-tab value="Audios">صوت</v-tab>
        <v-tab value="Articles">مقالات</v-tab>
      </v-tabs>
      <v-window v-model="media_tab">
        <v-window-item value="Albums">
          <Photos />
        
        </v-window-item>
        <v-window-item value="Videos">
          <Videos />
        </v-window-item>
        <v-window-item value="Audios">
          <Audios :theme="theme" />
        </v-window-item>
        <v-window-item value="Articles">
          <Docs />
        </v-window-item>
      </v-window>
    </div>
    <div class="w-100 d-flex justify-center py-5">
      <v-btn disabled color="primary" :to="{ name: media_tab }">نمایش همه</v-btn>
    </div>
  </section>
</template>
<script setup>
import Audios from "@/components/Global/multimedia/Audios.vue";
import Docs from "@/components/Global/multimedia/Articles.vue";
import Photos from "@/components/Global/multimedia/Photos.vue";
import Videos from "@/components/Global/multimedia/Videos.vue";
import TextGroup from "@/components/Global/text/TextGroup.vue";
import { ref } from "vue";

const media_tab = ref("Videos");

const props = defineProps({
  theme: { default: "primary" },
  center: {},
});
</script>

<style>
.v-tab {
  font-weight: 900;
  font-size: 15px;
  color: var(--primary);
  flex: unset !important;
}
.v-slide-group__content {
  justify-content: center !important;
}
</style>
