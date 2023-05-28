<template>
  <div class="position-relative">
    <img
      src="@/assets/images/subtitle-bg.png"
      style="object-fit: cover; width: 100%; height: 100%"
      alt=""
    />
    <div
      class="position-absolute h-100 flex-center overflow-hidden"
      style="top: 0; width: 90%; right: 5%"
    >
      <p class="subtitle-anim" >{{ latest_news.lead_fa || persian_lorem }}</p>
      
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
get_latest_news()
</script>

<style scoped>
@keyframes anim {
  from {
    transform: translate(-500px, 0);
  }
  to {
    transform: translate(500px, 0);
  }
}
.subtitle-anim {
  animation: anim 15s infinite;
  animation-timing-function: linear;
  white-space: pre;
}
</style>
