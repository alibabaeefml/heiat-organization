import { url } from "@/services/api";
import axios from "axios";
import { defineStore } from "pinia";
import { computed, ref } from "vue";
import { use_paginate_store } from "./paginate";

export const use_photo_store = defineStore("photo", () => {
  const albums = ref([]);
  const get_albums = computed(() => albums.value);

  const index_albums = async (filters = null) => {
    const response = await axios.get(url("gallery", filters));
    if ([200, 201].includes(response.status)) {
      albums.value = response.data.data;
      use_paginate_store().state = response.data.pages;
      return response.data.data;
    }
  };

  const show_album = async (filters = null) => {
    const response = await axios.get(url("gallery", filters));
    if ([200, 201].includes(response.status)) {
      return response.data.data[0];
    }
  };

  const index_albums_categories = async (filters = null) => {
    const response = await axios.get(url("gallerycategory", filters));
    if ([200, 201].includes(response.status)) {
      return response.data.data;
    }
  };

  
  
  const index_photos = async (filters = null) => {
    const response = await axios.get(url("galleryimages", filters));
    if ([200, 201].includes(response.status)) {
      return response.data.data;
    }
  };

  return {
    index_albums,
    get_albums,
    show_album,
    index_albums_categories,
    index_photos,
  };
});
