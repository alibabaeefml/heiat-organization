<template>
  <v-card
    :class="{
      'overflow-hidden': true,
    }"
    rounded="xl"
    :style="{
      width: data.width || '100%',
      boxShadow: 'unset',
      position: 'relative',
      'background-color': background || 'transparent',
    }"
  >
    <v-img
      class="rounded-xl"
      :width="data.img_width || '100%'"
      :height="data.img_height || '200px'"
      :cover="is_cover"
      :src="data.img || default_img"
    ></v-img>

    <div class="pa-2">
      <h3>{{ data.title || "عنوان کارت" }}</h3>
      <p class="limited">{{ data.text  }}</p>
      <div
        :class="{
          'd-flex': true,
          'justify-center': center_link,
          'justify-end': !center_link,
          'mt-3': true,
        }"
      >
        <router-link
          v-if="show_link"
          :to="data.link || { name: 'Home' }"
          class="text-decoration-none text-black"
          style="border-bottom: 3px solid var(--primary)"
          >{{ data.link_text || "مشاهده بیشتر" }}</router-link
        >
      </div>
    </div>

    <div
      style="
        position: absolute;
        width: 100%;
        height: 100%;
        z-index: 9999;
        top: 0;
        left: 0;
      "
      class="d-flex align-center justify-center"
      v-if="play_icon"
    >
      <v-icon color="#000" size="50">mdi-play</v-icon>
    </div>
  </v-card>
</template>

<script setup>
const props = defineProps({
  data: {},
  background: { default: null },
  center_link: null,
  is_cover: { default: true },
  show_link: { default: true },
  play_icon: null,
});
</script>
