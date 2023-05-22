import { defineStore } from "pinia";
import { ref, computed } from "vue";
import axios from "axios";
import { url } from "@/services/api.js";
export const use_news_store = defineStore("news", () => {
  const all_news = ref([]);
  const get_all_news = computed(() => all_news.value);
  
  const index_news = async () => {
    const response = await axios.get(url("news"));
    if ([200, 201].includes(response.status)) {
      all_news.value = response.data;
    }
  };

  return {
    get_all_news,
    index_news,
  };
});
