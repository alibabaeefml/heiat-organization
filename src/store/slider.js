import { url } from "@/services/api";
import axios from "axios";
import { defineStore } from "pinia";

export const use_slider_store = defineStore("slider", () => {
  const main_slider = async () => {
    const response = await axios.get(url("slider"));
    if ([200, 201].includes(response.status)) {
      return response.data.data;
    }
  };
  return {
    main_slider,
  };
});
