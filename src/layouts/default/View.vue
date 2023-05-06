<template>
  <v-locale-provider locale="fa">
    <TheLayout />
  </v-locale-provider>
</template>

<script setup>
import TheLayout from "@/components/Global/TheLayout.vue";
</script>

<style>
@font-face {
  font-family: Iran;
  src: url(@/assets/font/IRAN.ttf);
}
@font-face {
  font-family: IranBold;
  src: url(@/assets/font/IRAN.ttf);
}
:root {
  --primary: #015933;
  --secondary: #f3efcc;
  font-family: Iran;
}
.gap-1 {
  gap: 1rem;
}
.gap-2 {
  gap: 2rem;
}
</style>
