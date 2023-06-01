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
  const organizations_news = ref([]);
  const get_organizations_news = computed(() => organizations_news.value);
  const organizations_news_page_count = ref();
  const special_news = ref([]);
  const special_news_page_count = ref([]);
  const get_special_news = computed(() => get_special_news.value);

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

  const index_organizations_news = async (filters = {}) => {
    const response = await axios.get(url("organizationnews", filters));
    if ([200, 201].includes(response.status)) {
      organizations_news.value = response.data.data;
      organizations_news_page_count.value = response.data.meta.total_page;
      return response.data.data;
    }
  };

  const show_organizations_news = async (filters = {}) => {
    const response = await axios.get(url("organizationnews", filters));
    if ([200, 201].includes(response.status)) {
      return response.data.data[0];
    }
  };

  const index_news_categories = async () => {
    const response = await axios.get(url("newscategory"));
    if ([200, 201].includes(response.status)) {
      return response.data.data;
    }
  };

  const index_special_news = async (filters = {}) => {
    const response = await axios.get(url("specialsnews", filters));
    if ([200, 201].includes(response.status)) {
      special_news_page_count.value = response.data.meta.total_page;
      special_news.value = response.data.data;
    }
  };
  const show_special_news = async (filters = {}) => {
    const response = await axios.get(url("specialsnews", filters));
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
    index_organizations_news,
    organizations_news_page_count,
    get_organizations_news,
    show_organizations_news,
    index_news_categories,
    index_special_news,
    show_special_news,
    get_special_news,
    special_news_page_count,
  };
});
