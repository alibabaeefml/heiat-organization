import { url } from "@/services/api";
import axios from "axios";
import { defineStore } from "pinia";
import { computed, ref } from "vue";
import { use_paginate_store } from "./paginate";

export const use_audio_store = defineStore("audio", () => {
  const audios = ref([]);
  const get_audios = computed(() => audios.value);

  const index_audios = async (filters = null) => {
    const response = await axios.get(url("sounds", filters));
    if ([200, 201].includes(response.status)) {
      audios.value = response.data.data;
      use_paginate_store().state = response.data.pages;
      return response.data.data;
    }
  };

  return {
    index_audios,
    get_audios,
  };
});
