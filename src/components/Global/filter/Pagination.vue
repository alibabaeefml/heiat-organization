<template>
  <div
    class="d-flex flex-wrap align-center justify-center gap-1 my-10"
    dir="ltr"
  >
    <v-btn
      prepend-icon="mdi-chevron-left"
      color="primary"
      :variant="active_page !== 1 ? 'elevated' : 'outlined'"
      @click="active_page > 1 ? active_page-- : null"
      >قبل</v-btn
    >
    <template v-for="(i, page) in pages_count" :key="page">
      <v-btn
        min-width="10"
        style="border-radius: 10px"
        width="10"
        :variant="active_page == i ? 'elevated' : 'outlined'"
        color="primary"
        @click="active_page = i"
        v-if=" i < active_page + 3 && i > active_page - 3 "
        >{{ i }}</v-btn
      >
    </template>
    <v-btn
      append-icon="mdi-chevron-right"
      color="primary"
      @click="active_page < pages_count ? active_page++ : null"
      :variant="active_page + 1 > pages_count ? 'outlined' : 'elevated'"
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
});
</script>
