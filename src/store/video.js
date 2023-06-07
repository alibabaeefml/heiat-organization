import { url } from "@/services/api";
import axios from "axios";
import { defineStore } from "pinia";
import { computed, ref } from "vue";

export const use_video_store = defineStore("video", () => {
  const videos = ref([]);
  const get_videos = computed(() => videos.value);

  const index_videos = async (filters = null) => {
    const response = await axios.get(url("videos", filters));
    if ([200, 201].includes(response.status)) {
      videos.value = response.data.data;
      return response.data.data;
    }
  };


  return {
    index_videos,
    get_videos,
  };
});
