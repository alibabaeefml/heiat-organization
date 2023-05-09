<template>
  <v-locale-provider locale="fa">
    <TheLayout />
  </v-locale-provider>
</template>

<script setup>
import TheLayout from "@/components/Global/layout/TheLayout.vue";
</script>

<style>
@font-face {
  font-family: Iran;
  src: url(@/assets/font/IRAN.ttf);
}
@font-face {
  font-family: IranBold;
  src: url(@/assets/font/IRAN_Bold.ttf);
}
:root {
  --primary: #015933;
  --secondary: #f3efcc;
  --secondary-2:#ABCA53;
  font-family: Iran;
}
.gap-1 {
  gap: 1rem;
}
.gap-2 {
  gap: 2rem;
}
.flex-center {
  display: flex;
  align-items: center;
  justify-content: center;
}
::-webkit-scrollbar{
  display: none;
}
</style>
