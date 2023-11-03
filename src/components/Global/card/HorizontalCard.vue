<template>
  <router-link style=";text-decoration:none" :to="data.link">
    <li class="d-flex flex-sm-row flex-column gap-1 align-center">
      <v-img
        class="rounded-xl"
        cover
        :width="data.img_width || 'auto'"
        :height="data.img_height || '120px'"
        :src="data.img || default_img"
      ></v-img>

      <div class="w-100 pa-2">
        <h3 :class="data.title_class || 'text-primary'">
          {{ data.title || "عنوان کارت" }}
        </h3>
        <p class="limited text-black">{{ data.text }}</p>

        <div
          class="mt-3"
          style="font-weight: 900; color: var(--primary)"
          v-if="data.name && data.lastname"
        >
          <v-icon>mdi-account</v-icon>
          <span>نویسنده: {{ data.name + " " + data.lastname }}</span>
        </div>
        <div
          :class="{
            'd-flex': true,
            'mt-3': true,
            'justify-end': true,
          }"
        ></div>
      </div></li
  ></router-link>
  <hr style="border:var(--secondary-2) 1px solid">
</template>

<script setup>
const props = defineProps(["data"]);
</script>
