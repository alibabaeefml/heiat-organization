<template>
 <div class="d-flex flex-column pa-3">
  <h4>{{ pretitle }}</h4>
  <h2 class="text-primary" style="font-size: 2rem">{{ title }}</h2>
  <p :class="{ limited: limited }">
    {{ desc || persian_lorem }}
  </p>
 </div>
</template>
<script setup>
const props = defineProps({
  title: { default: "تیتر" },
  pretitle: { default: "رو تیتر" },
  desc: { default: null },
  limited: { default: true },
});
</script>
