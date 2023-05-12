<template>
  <LetterNews />
  <div class="position-relative ">
    <div
      class="w-100 h-100 position-absolute pattern-div"
      style="pointer-events: none"
    ></div>
    <ProvincesNews />
    <InterprofessionalOrganizations />
    <News/>
  </div>
</template>

<script setup>
import InterprofessionalOrganizations from "@/components/Home/InterprofessionalOrganizations.vue";
import LetterNews from "@/components/Home/LetterNews.vue";
import News from "@/components/Home/News.vue";
import ProvincesNews from "@/components/Home/ProvincesNews.vue";
</script>

<style scoped>
.pattern-div {
  background-image: url(@/assets/images/pattern.png);
  background-repeat: repeat;
  top: 0;
  left: 0;
  z-index: 10;
}
</style>
