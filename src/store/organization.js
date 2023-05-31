import { url } from "@/services/api";
import axios from "axios";
import { defineStore } from "pinia";
import { ref, computed } from "vue";

export const use_organization_store = defineStore("organization", () => {
  const organizations = ref([]);
  const get_organizations = computed(() => organizations.value);

  const index_organizations = async (filters = {}) => {
    const response = await axios.get(url("organization", filters));
    if ([200, 201].includes(response.status)) {
      organizations.value = response.data.data;
    }
  };

  const show_organization = async (filters = {}) => {
    const response = await axios.get(url("organization", filters));
    if ([200, 201].includes(response.status)) {
      return response.data.data[0];
    }
  };
  return {
    get_organizations,
    index_organizations,
    show_organization,
  };
});
