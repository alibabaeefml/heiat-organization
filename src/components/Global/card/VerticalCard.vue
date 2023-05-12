<template>
  <li
    :class="{
      'overflow-hidden': true,
      'bg-white rounded-sm': data.card_theme == 'primary',
    }"
    :style="{ width: data.width || '270px' }"
  >
    <div>
      <v-img
        class="rounded-lg"
        cover
        src="@/assets/images/news-item-sample-image.png"
      ></v-img>
    </div>
    <div class="pa-2">
      <h3>عنوان خبر</h3>
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
          :to="{ name: 'Home' }"
          class="text-decoration-none text-black"
          style="border-bottom: 3px solid var(--primary)"
          >مشاهده بیشتر</router-link
        >
      </div>
    </div>
  </li>
</template>

<script setup>
const props = defineProps(["data"]);
</script>
