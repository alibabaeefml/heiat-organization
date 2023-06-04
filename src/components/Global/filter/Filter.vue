<template>
  <div class="d-flex flex-column gap-1">
    <FilterSearchBar @search="search" />
    <FilterCategories :categories="categories" />
    <FilterProvince
      v-if="province_filter"
      @select_province="select_province"
      :province="province"
    />
  </div>
</template>
<script setup>
import FilterSearchBar from "@/components/Global/filter/FilterSearchBar.vue";
import FilterCategories from "@/components/Global/filter/FilterCategories.vue";
import FilterProvince from "./FilterProvince.vue";

const emit = defineEmits(["search", "select_province"]);
const search = (e) => {
  emit("search", e);
};

const select_province = (e) => {
  emit("select_province", e);
};
const props = defineProps({
  province_filter: { default: false },
  categories: { default: [] },
  province: {},
});
</script>
