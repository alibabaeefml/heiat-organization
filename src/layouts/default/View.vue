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
  --secondary-2: #abca53;
  --secondary-3: #fdfbe3;
  font-family: Iran;
}

li {
  list-style: none;
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
/* ::-webkit-scrollbar {
  display: none;
} */
p.limited {
  height: 60px;
  overflow: hidden;
  text-align: justify;
  @media (max-width: 640px) {
    height: 190px;
  }
}
.jvectormap-container {
  height: 100%;
}
.jvectormap-container > svg {
  filter: drop-shadow(-4px 9px 0px #eaeaea);
}
.jvectormap-zoomin,
.jvectormap-zoomout {
  display: none;
}
.jvectormap-tip {
  background-color: var(--secondary);
  color: var(--primary);
  border: none;
  font-family: iran;
  padding: 0.5rem;
  border-radius: 0.5rem 0.5rem 0.5rem 0rem;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}
.jvectormap-region.jvectormap-element.active {
  fill: var(--primary);
}
.pattern-div {
  background-image: url(@/assets/images/pattern.png);
  background-repeat: repeat;
  top: 0;
  left: 0;
  z-index: 10;
}
</style>
