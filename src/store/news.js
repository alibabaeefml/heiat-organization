import { defineStore } from "pinia";
import { ref, computed } from "vue";
import axios from "axios";
import { url } from "@/services/api.js";
export const use_news_store = defineStore("news", () => {
  const all_news = ref([]);
  const get_all_news = computed(() => all_news.value);
  const all_news_page_count = ref();
  const provinces_news = ref([]);
  const get_provinces_news = computed(() => provinces_news.value);
  const provinces_news_page_count = ref();
  const organs_news = ref([]);
  const get_organs_news = computed(() => organs_news.value);
  const organs_news_page_count = ref();

  const index_all_news = async (filters = {}) => {
    const response = await axios.get(url("news", filters));
    if ([200, 201].includes(response.status)) {
      all_news.value = response.data.data;
      all_news_page_count.value = response.data.meta.total_page;
      return response.data.data;
    }
  };

  const show_news = async (filters = {}) => {
    const response = await axios.get(url("news", filters));
    if ([200, 201].includes(response.status)) {
      return response.data.data[0];
    }
  };

  const index_provinces_news = async (filters = {}) => {
    const response = await axios.get(url("provincesnews", filters));
    if ([200, 201].includes(response.status)) {
      provinces_news.value = response.data.data;
      provinces_news_page_count.value = response.data.meta.total_page;
      return response.data.data;
    }
  };

  const show_provinces_news = async (filters = {}) => {
    const response = await axios.get(url("provincesnews", filters));
    if ([200, 201].includes(response.status)) {
      return response.data.data[0];
    }
  };

  const index_organs_news = async (filters = {}) => {
    const response = await axios.get(url("organizationnews", filters));
    if ([200, 201].includes(response.status)) {
      organs_news.value = response.data.data;
      organs_news_page_count.value = response.data.meta.total_page;
      return response.data.data;
    }
  };

  const show_organs_news = async (filters = {}) => {
    const response = await axios.get(url("organizationnews", filters));
    if ([200, 201].includes(response.status)) {
      return response.data.data[0];
    }
  };

  return {
    index_all_news,
    index_provinces_news,
    get_all_news,
    get_provinces_news,
    show_provinces_news,
    show_news,
    all_news_page_count,
    index_organs_news,
    organs_news_page_count,
    get_organs_news,
    show_organs_news
  };
});
