import { defineStore } from "pinia";
import { ref, computed } from "vue";
import axios from "axios";
import { url } from "@/services/api.js";
import pagination from "./pagination";
export const use_news_store = defineStore("news", () => {
  const all_news = ref([]);
  const get_all_news = computed(() => all_news.value);

  const provinces_news = ref([]);
  const get_provinces_news = computed(() => provinces_news.value);

  const index_all_news = async (filters = {}) => {
    const response = await axios.get(url("get_table/news", filters));
    if ([200, 201].includes(response.status)) {
      all_news.value = response.data.data;
      return response.data;
    }
  };

  const paginate_all_news = async (paginate = pagination) => {
    const response = await axios.get(url("list/news", null, paginate));
    if ([200, 201].includes(response.status)) {
      provinces_news.value = response.data.data;
    }
  };
  const index_provinces_news = async (filters = {}) => {
    const response = await axios.get(url("get_table/provincesnews", filters));
    if ([200, 201].includes(response.status)) {
      provinces_news.value = response.data.data;
    }
  };

  const paginate_province_news = async (paginate = pagination) => {
    const response = await axios.get(
      url("list/provincessnews", null, paginate)
    );
    if ([200, 201].includes(response.status)) {
      provinces_news.value = response.data.data;
    }
  };

  return {
    index_all_news,
    index_provinces_news,
    paginate_province_news,
    paginate_all_news,
    get_all_news,
    get_provinces_news,
  };
});
