<template>
  <div class="position-relative bg-secondary-3" style="min-height: 1000px">
    <div
      class="w-100 h-100 position-absolute pattern-div"
      style="pointer-events: none"
    ></div>
    <div
      style="
        padding-top: 10rem;
        position: relative;
        z-index: 11;
      "
    >
    
      <MultiMedia theme="secondary-2" />
    </div>
  </div>
</template>

<script setup>
import TextGroup from "@/components/Global/text/TextGroup.vue";
import MultiMedia from "@/components/Global/multimedia/MultiMedia.vue";
import { ref } from "vue";
const data = ref({});
</script>
