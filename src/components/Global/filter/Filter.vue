<template>
  <div class="d-flex flex-column gap-1">
    <FilterSearchBar @search="search" />
    <FilterCategories
      v-if="categories.length"
      :categories="categories"
      @select_cat="select_cat"
    />
    <FilterProvince
      v-if="province_filter"
      @select_province="select_province"
      :province="province"
    />
    <v-btn
      color="primary"
      prepend-icon="mdi-close"
      block
      @click="$emit('reset_filter')"
      >لغو فیلتر ها</v-btn
    >
  </div>
</template>
<script setup>
import FilterSearchBar from "@/components/Global/filter/FilterSearchBar.vue";
import FilterCategories from "@/components/Global/filter/FilterCategories.vue";
import FilterProvince from "./FilterProvince.vue";

const emit = defineEmits(["search", "select_province", "select_cat"]);
const search = (e) => {
  emit("search", e);
};

const select_province = (e) => {
  emit("select_province", e);
};
const select_cat = (e) => {
  emit("select_cat", e);
};
const props = defineProps({
  province_filter: { type: Boolean },
  categories: { default: [] },
  province: { default: null},
});
</script>
