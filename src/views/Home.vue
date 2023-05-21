<template>
  <LetterNews />
  <div class="position-relative">
    <div
      class="w-100 h-100 position-absolute pattern-div"
      style="pointer-events: none"
    ></div>
    <ProvincesNews />
    <InterprofessionalOrganizations />
    <News />
    <MultiMedia color="primary" :center="true" />
    <SpecialNews />
  </div>
</template>

<script setup>
import InterprofessionalOrganizations from "@/components/Home/InterprofessionalOrganizations.vue";
import LetterNews from "@/components/Home/LetterNews.vue";
import News from "@/components/Home/News.vue";
import ProvincesNews from "@/components/Home/ProvincesNews.vue";
import MultiMedia from "@/components/Global/multimedia/MultiMedia.vue";
import SpecialNews from "@/components/Home/SpecialNews.vue";
</script>
