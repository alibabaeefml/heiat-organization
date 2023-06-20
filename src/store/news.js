import { defineStore } from "pinia";
import { ref, computed } from "vue";
import axios from "axios";
import { url } from "@/services/api.js";
import { use_paginate_store } from "./paginate";
export const use_news_store = defineStore("news", () => {
  // Main News
  const news = ref([]);
  const get_news = computed(() => news.value);

  const index_news = async (filters = null) => {
    const response = await axios.get(url("news", filters));
    if ([200, 201].includes(response.status)) {
      news.value = response.data.data;
      use_paginate_store().state = response.data.pages;
     
      return response.data.data;
    }
  };

  const show_news = async (filters = null) => {
    const response = await axios.get(url("news", filters));
    if ([200, 201].includes(response.status)) {
      return response.data;
    }
  };
  const index_news_categories = async () => {
    const response = await axios.get(url("newscategory"));
    if ([200, 201].includes(response.status)) {
      return response.data.data;
    }
  };

  // Provinces News
  const provinces_news = ref([]);
  const get_provinces_news = computed(() => provinces_news.value);
  const index_provinces_news = async (filters = null) => {
    const response = await axios.get(url("provincesnews", filters));
    if ([200, 201].includes(response.status)) {
      use_paginate_store().state = response.data.pages;
      provinces_news.value = response.data.data;
  
      return response.data.data;
    }
  };

  const show_provinces_news = async (filters = null) => {
    const response = await axios.get(url("provincesnews", filters));
    if ([200, 201].includes(response.status)) {
      return response.data;
    }
  };

  // Organizations News
  const organizations_news = ref([]);
  const get_organizations_news = computed(() => organizations_news.value);

  const index_organizations_news = async (filters = null) => {
    const response = await axios.get(url("organizationnews", filters));
    if ([200, 201].includes(response.status)) {
      organizations_news.value = response.data.data;
      use_paginate_store().state = response.data.pages;
      return response.data.data;
    }
  };

  const show_organizations_news = async (filters = null) => {
    const response = await axios.get(url("organizationnews", filters));
    if ([200, 201].includes(response.status)) {
      return response.data;
    }
  };

  // Special News
  const special_news = ref([]);
  const get_special_news = computed(() => special_news.value);
  const index_special_news = async (filters = null) => {
    const response = await axios.get(url("specialsnews", filters));
    if ([200, 201].includes(response.status)) {
      use_paginate_store().state = response.data.pages;
      special_news.value = response.data.data;
    }
  };
  const show_special_news = async (filters = null) => {
    const response = await axios.get(url("specialsnews", filters));
    if ([200, 201].includes(response.status)) {
      return response.data;
    }
  };

  return {
    index_news,
    index_provinces_news,
    get_news,
    get_provinces_news,
    show_provinces_news,
    show_news,
    index_organizations_news,
    get_organizations_news,
    show_organizations_news,
    index_news_categories,
    index_special_news,
    show_special_news,
    get_special_news,
  };
});
