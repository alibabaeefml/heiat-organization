<template>
  <div class="d-flex flex-column">
    <h4>{{ pretitle }}</h4>
    <h2 :class="title_class" style="font-size: 2rem">{{ title }}</h2>
    <p :class="{ limited: limited, 'text-justify': justify }" v-if="!no_desc">
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
  justify: { default: true },
  no_desc: { default: false },
  title_class: { default: "text-primary" },
});
</script>
