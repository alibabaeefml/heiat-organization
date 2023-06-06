import { defineStore } from "pinia";
import { ref, computed } from "vue";
import axios from "axios";
import { url } from "@/services/api.js";
export const use_article_store = defineStore("article", () => {

  const articles = ref([]);
  const get_articles = computed(() => articles.value);

  const index_articles = async (filters = {}) => {
    const response = await axios.get(url("articles", filters));
    if ([200, 201].includes(response.status)) {
      articles.value = response.data.data;
    }
  };
  const show_article = async (filters = {}) => {
    const response = await axios.get(url("articles", filters));
    if ([200, 201].includes(response.status)) {
      return response.data;
    }
  };
  return {
    index_articles,
    get_articles,
    show_article,
  };
});
