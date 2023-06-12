import { url } from "@/services/api";
import axios from "axios";
import { defineStore } from "pinia";
import { computed, ref } from "vue";

export const use_paginate_store = defineStore("paginate", () => {
  const state = ref(null);
  const pages = computed(() => state.value);
  const get_pages = async (table, filters) => {
    const response = await axios.get(url(table, filters));

    if ([200, 201].includes(response.status)) {
      state.value = response.data.pages;
    }
  };

  return {
    state,
    pages,
    get_pages,
  };
});
