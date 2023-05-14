<template>
  <router-link
    :to="{ Name: data.link || 'Home' }"
    class="d-block rounded-xl position-relative overflow-hidden bg-primary"
    style="height: 280px"
  >
    <v-img cover :src="data.img || default_img"></v-img>
    <span
      class="position-absolute pa-3"
      style="
        right: 0;
        bottom: 0;
        background-color: rgba(255, 255, 255, 0.4);
        border-radius: 1.5rem 0 0 0;
      "
      >{{ data.caption || "لورم ایپسوم" }}</span
    >
  </router-link>
</template>

<script setup>
const props = defineProps(["data"]);
</script>
