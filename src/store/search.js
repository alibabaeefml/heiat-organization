import { defineStore } from "pinia";
import { ref, computed } from "vue";
import axios from "axios";
import { url } from "@/services/api.js";
export const use_search_store = defineStore("search", () => {
  const results = ref([]);
  const get_results = computed(() => results.value);
  const search = async (search, table) => {
    const response = await axios.get(url(table, { search }));
    if ([200, 201].includes(response.status)) {
      results.value = response.data.data;
    }
  };
  return {
    search,
    get_results,
  };
});
