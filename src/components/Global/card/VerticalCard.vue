<template>
  <li
    :class="{
      'overflow-hidden': true,
      'bg-white rounded-sm': data.card_theme == 'primary',
    }"
    :style="{ width: data.width || '100%' }"
  >
    <v-img
      class="rounded-xl"
      :width="data.img_width || '100%'"
      :height="data.img_height || 'auto'"
      cover
      :src="data.img || default_img"
    ></v-img>

    <div class="pa-2">
      <h3>{{ data.title || "عنوان کارت" }}</h3>
      <p class="limited">{{ persian_lorem }}</p>
      <div
        :class="{
          'd-flex': true,
          'justify-end': data.card_theme == 'primary',
          'justify-center': data.card_theme == 'secondary',
          'mt-3': true,
        }"
      >
        <router-link
          :to="{ name: data.link || 'Home' }"
          class="text-decoration-none text-black"
          style="border-bottom: 3px solid var(--primary)"
          >{{ data.link_text || "مشاهده بیشتر" }}</router-link
        >
      </div>
    </div>
  </li>
</template>

<script setup>
const props = defineProps(["data"]);
</script>
