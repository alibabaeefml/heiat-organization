import { defineStore } from "pinia";
import { ref, computed } from "vue";
import axios from "axios";
import { url } from "@/services/api.js";
export const use_news_store = defineStore("news", () => {
  const all_news = ref([]);
  const get_all_news = computed(() => all_news.value);

  const provinces_news = ref([]);
  const get_provinces_news = computed(() => provinces_news.value);

  const index_all_news = async () => {
    const response = await axios.get(url("news"));
    if ([200, 201].includes(response.status)) {
      all_news.value = response.data;
      return response.data;
    }
  };

  const index_provinces_news = async (filters = {}) => {
    const response = await axios.get(url("provincesnews"));
    if ([200, 201].includes(response.status)) {
      provinces_news.value = response.data;
      return response.data;
    }
  };

  return {
    get_all_news,
    index_all_news,
    index_provinces_news,
    get_provinces_news,
  };
});
