<template>
  <div class="position-relative overflow-hidden bg-secondary pa-3 rounded-lg">
    <div class=" mx-auto overflow-hidden" style="width: 99%;">
      <p class="subtitle-anim text-primary" >{{ latest_news.lead || persian_lorem }}</p>

    </div>
  </div>
</template>
<script setup>
import { use_news_store } from "@/store/news";
import { ref } from "vue";

const latest_news = ref({});

const get_latest_news = async () => {
  latest_news.value = await use_news_store().show_news({
    limit: 1,
    page: 1,
  });
};
get_latest_news();
</script>

<style scoped>
@keyframes animation {
  from {
    transform: translate(-500px, 0);
  }
  to {
    transform: translate(500px, 0);
  }
}
.subtitle-anim {
  animation: animation 15s infinite;
  animation-timing-function: linear;
  white-space: pre;
}
</style>
