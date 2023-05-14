<template>
  <section class="bg-white">
    <div class="position-relative" style="z-index: 11">
      <Photos />
      <Videos/>
      <Audios/>
      <Docs/>
    </div>
  </section>
</template>
<script setup>
import Audios from "../Global/gallery/Audios.vue";
import Docs from "../Global/gallery/Docs.vue";
import Photos from "../Global/gallery/Photos.vue";
import Videos from "@/components/Global/gallery/Videos.vue";
</script>