<template>
  <LetterNews />
  <div class="position-relative">
    <div
      class="w-100 h-100 position-absolute pattern-div"
      style="pointer-events: none"
    ></div>
    <ProvincesNews />
    <IPOCategorizedNews />
    <News />
    <MultiMedia color="primary" :center="true" />
    <SpecialNews />
  </div>
</template>

<script setup>
import IPOCategorizedNews from "@/components/Home/IPOCategorizedNews.vue";
import LetterNews from "@/components/Home/LetterNews.vue";
import News from "@/components/Home/News.vue";
import ProvincesNews from "@/components/Home/ProvincesNews.vue";
import MultiMedia from "@/components/Global/multimedia/MultiMedia.vue";
import SpecialNews from "@/components/Home/SpecialNews.vue";
</script>
