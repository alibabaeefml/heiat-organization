import { url } from "@/services/api";
import axios from "axios";
import { defineStore } from "pinia";

export const use_special_store = defineStore("special", () => {
  const index_specials = async (filters = {}) => {
    const response = await axios.get(url("specials", filters));
    if ([200, 201].includes(response.status)) {
      return response.data.data;
    }
  };

  const show_special = async (filters = {}) => {
    const response = await axios.get(url("specials", filters));
    if ([200, 201].includes(response.status)) {
      return response.data.data[0];
    }
  };

  return {
    index_specials,
    show_special,
  };
});
