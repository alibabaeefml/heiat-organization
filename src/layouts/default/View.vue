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
  --secondary-4: #4e8c43;
  font-family: Iran;
  overflow: hidden;
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
::-webkit-scrollbar {
  width: 0.5rem;
  background-color: rgba(0, 0, 0, 0.1);
}
::-webkit-scrollbar-thumb {
  background-color: var(--primary);
  width: 0.5rem;
  border-radius: 1rem;
}
p.limited {
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 3; /* number of lines to show */
  line-clamp: 3;
  -webkit-box-orient: vertical;
  text-align: justify;
}
.jvectormap-container {
  height: 100%;
  pointer-events: none;
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
.jvectormap-container path {
  pointer-events: fill;
}
.jvectormap-region.jvectormap-element.active {
  fill: var(--primary);
}
circle.active {
  fill: var(--secondary) !important;
  pointer-events: none;
}
circle.active + text {
  fill: var(--primary) !important;
  pointer-events: none;
}
.pattern-div {
  background-image: url(@/assets/images/pattern.png);
  background-repeat: repeat;
  top: 0;
  left: 0;
  z-index: 10;
}

@media (max-width: 500px) {
  .px-16 {
    padding-inline: 1rem !important;
  }
}

.v-btn {
  border-radius: 1rem;
}

button[class*=-slide] {
  color: var(--primary) !important;
  width: 40px !important;
  height: 40px !important;
}
button[class*=-slide]:disabled,
button[class*=-slide][aria-disabled=true]
 {
  color: var(--primary) !important;
  background-color: transparent !important;
  background: unset !important;
  border: var(--primary) 2px solid;
}
#home-swiper-navigation [class*=-slide]:disabled,
#home-swiper-navigation [class*=-slide][aria-disabled=true] {
  color: var(--secondary) !important;
  background-color: transparent !important;
  background: unset !important;
  border: var(--secondary) 2px solid;
}

</style>
