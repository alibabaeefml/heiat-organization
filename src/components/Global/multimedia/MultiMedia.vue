<template>
  <section>
    <div class="position-relative px-16 mb-5" style="z-index: 11">
      <TextGroup
        :pretitle="language.value.index_sec5_gallery_subtitle"
        :title="language.value.index_sec5_gallery_title"
        :desc="language.value.index_sec5_gallery_desc"
        :class="center ? 'text-center mx-auto w-75' : ''"
        :title_class="'text-' + theme"
      />
      <v-tabs :color="theme" grow v-model="media_tab" class="mt-3">
        <v-tab value="Albums"
          ><div>
            <v-icon>mdi-image</v-icon>
            <p>عکس</p>
          </div></v-tab
        >
        <v-tab value="Videos" color="black"
          ><div>
            <v-icon>mdi-movie</v-icon>
            <p>فیلم</p>
          </div></v-tab
        >
        <v-tab value="Audios"
          ><div>
            <v-icon>mdi-music</v-icon>
            <p>صوت</p>
          </div></v-tab
        >
        <v-tab value="Books"
          ><div>
            <v-icon>mdi-book</v-icon>
            <p>کتاب</p>
          </div></v-tab
        >
        <v-tab value="Graphic"
          ><div>
            <v-icon>mdi-draw</v-icon>
            <p>گرافیک</p>
          </div></v-tab
        >
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
        <v-window-item value="Books">
          <Books />
        </v-window-item>
        <v-window-item value="Graphic">
          <Graphic />
        </v-window-item>
      </v-window>
    </div>
    
  </section>
</template>
<script setup>
import Audios from "@/components/Global/multimedia/Audios.vue";
import Books from "@/components/Global/multimedia/Books.vue";
import Photos from "@/components/Global/multimedia/Photos.vue";
import Videos from "@/components/Global/multimedia/Videos.vue";
import Graphic from "@/components/Global/multimedia/Graphic.vue";
import TextGroup from "@/components/Global/text/TextGroup.vue";
import { ref } from "vue";

const media_tab = ref("Photos");

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
.v-tab__slider{
  bottom: -8px!important;
}
</style>
