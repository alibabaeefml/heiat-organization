<template>
  <div class="position-relative bg-secondary-3" style="min-height: 1000px">
    <div
      class="w-100 h-100 position-absolute pattern-div"
      style="pointer-events: none"
    ></div>
    <div
      style="
        padding-top: 10rem;
        padding-inline: 2rem;
        position: relative;
        z-index: 11;
      "
    >
      <v-img cover :src="data.img || default_img"></v-img>
    </div>
  </div>
</template>
<script setup>
import ref from "vue";
const data = ref({})
</script>
