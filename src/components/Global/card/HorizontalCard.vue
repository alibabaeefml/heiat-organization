<template>
  <li class="d-flex flex-sm-row flex-column gap-1 align-center">
    <v-img
      class="rounded-xl"
      cover
      :width="data.img_width || 'auto'"
      :height="data.img_height || 'auto'"
      src="@/assets/images/news-item-sample-image.png"
    ></v-img>

    <div class="w-100 pa-2">
      <h3>{{ data.title || "عنوان کارت" }}</h3>
      <p class="limited">{{ data.text || persian_lorem }}</p>
      <div
        :class="{
          'd-flex': true,
          'mt-3': true,
          'justify-end': true,
        }"
      >
        <router-link
          :to="{ name: data.link || 'Home' }"
          class="text-decoration-none text-black"
          style="border-bottom: 3px solid var(--primary)"
          >{{ data.link_text || 'مشاهده بیشتر' }}</router-link
        >
      </div>
    </div>
  </li>
</template>

<script setup>

const props = defineProps(["data"]);
</script>
