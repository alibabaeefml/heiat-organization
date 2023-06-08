import { url } from "@/services/api";
import axios from "axios";
import { defineStore } from "pinia";
import { computed, ref } from "vue";

export const use_audio_store = defineStore("audio", () => {
  const audios = ref([]);
  const get_audios = computed(() => audios.value);

  const index_audios = async (filters = null) => {
    const response = await axios.get(url("sounds", filters));
    if ([200, 201].includes(response.status)) {
      audios.value = response.data.data;
      return response.data.data;
    }
  };


  return {
    index_audios,
    get_audios,
  };
});
