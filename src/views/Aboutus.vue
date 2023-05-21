<template>
  <div class="position-relative">
    <div
      class="w-100 h-100 position-absolute pattern-div"
      style="pointer-events: none"
    ></div>
    <div
      style="
        padding-top: 10rem;
        padding-bottom: 5rem;
        padding-inline: 2rem;
        position: relative;
        z-index: 11;
      "
    >
     <TextGroup title="تاریخچه"/>
    </div>
  </div>
</template>

<script setup>
import TextGroup from "@/components/Global/text/TextGroup.vue";
import { ref } from "vue";

const data = ref({});
</script>

<style scoped></style>
