<template>
  <li class="d-flex flex-sm-row flex-column gap-1 align-center">
    <v-img
      class="rounded-xl"
      cover
      :width="data.img_width || 'auto'"
      :height="data.img_height || '120px'"
      :src="data.img || default_img"
    ></v-img>

    <div class="w-100 pa-2">
      <h3 :class="data.title_class || ''">{{ data.title || "عنوان کارت" }}</h3>
      <p class="limited">{{ data.text || persian_lorem }}</p>

      <div class="mt-3" style="font-weight: 900;color: var(--primary);" v-if="data.name && data.lastname">
        <v-icon>mdi-account</v-icon>
        <span>نویسنده: {{ data.name + " " + data.lastname }}</span>
      </div>
      <div
        :class="{
          'd-flex': true,
          'mt-3': true,
          'justify-end': true,
        }"
      >
        <router-link
          :to="data.link || { name: 'Home' }"
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
