<template>
  <li class="d-flex flex-sm-row flex-column gap-1 align-center">
    <div :style="{ width: useDisplay().smAndUp.value ?  data.img_width || '200px' : '100%' }">
      <v-img
        class="rounded-lg"
        cover
        src="@/assets/images/news-item-sample-image.png"
      ></v-img>
    </div>
    <div class="w-100 pa-2">
      <h3>{{ data.title || "عنوان خبر" }}</h3>
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
          >مشاهده بیشتر</router-link
        >
      </div>
    </div>
  </li>
</template>

<script setup>
import { useDisplay } from 'vuetify/lib/framework.mjs';

const props = defineProps(["data"]);

</script>
