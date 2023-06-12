import { url } from "@/services/api";
import axios from "axios";
import { defineStore } from "pinia";

export const use_team_store = defineStore("team", () => {
  const index_team = async () => {
    const response = await axios.get(url("team"));
    if ([200, 201].includes(response.status)) {
      return response.data.data;
    }
  };

  return {
    index_team,
  };
});
