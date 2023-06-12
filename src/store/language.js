import { url } from "@/services/api";
import axios from "axios";
import { defineStore } from "pinia";
import { computed, ref } from "vue";

export const use_language_store = defineStore("language", () => {
  const data = ref([]);
  const get_data = computed(() => data.value);
  const index_data = async () => {
    const response = await axios.get(url("language"));
    if ([200, 201].includes(response.status)) {
      data.value = response.data.data;
    }
  };

  return {
    index_data,
    get_data,
  };
});
