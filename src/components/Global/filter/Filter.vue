<template>
  <div class="d-flex flex-column gap-1">
    <FilterSearchBar />
    <FilterCategories />
  </div>
</template>
<script setup>
import FilterSearchBar from "@/components/Global/filter/FilterSearchBar.vue";
import FilterCategories from "@/components/Global/filter/FilterCategories.vue"
</script>
