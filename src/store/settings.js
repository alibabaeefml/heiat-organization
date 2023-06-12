import { url } from "@/services/api";
import axios from "axios";
import { defineStore } from "pinia";
import { computed, ref } from "vue";

export const use_settings_store = defineStore("settings", () => {
  const settings = ref();
  const get_settings = computed(() => settings.value);
  const index_settings = async () => {
    const response = await axios.get(url("settings"));
    if ([200, 201].includes(response.status)) {
      settings.value = response.data.data;
    }
  };

  return {
    index_settings,
    get_settings,
  };
});
