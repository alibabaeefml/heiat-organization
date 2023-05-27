<template>
  <div
    class="d-flex flex-wrap align-center justify-center gap-1 my-10"
    dir="ltr"
  >
    <v-btn
      prepend-icon="mdi-chevron-left"
      color="primary"
      @click="active_page > 1 ? active_page-- : null"
      >قبل</v-btn
    >
    <v-btn
      min-width="10"
      width="10"
      :variant="active_page == i ? 'elevated' : 'outlined'"
      color="primary"
      @click="active_page = i"
      v-for="(i, page) in pages_count"
      >{{ i }}</v-btn
    >
    <v-btn
      append-icon="mdi-chevron-right"
      color="primary"
      @click="active_page < pages_count ? active_page++ : null"
      >بعد</v-btn
    >
  </div>
</template>

<script setup>
import { watch } from "vue";
import { ref } from "vue";

const active_page = ref(1);
const emit = defineEmits(["callback"]);

watch(active_page, () => {
  emit("callback", active_page);
});

const props = defineProps({
  pages_count: { default: 1, type: Number },
  per_page: { default: 12, type: Number },
});
</script>
