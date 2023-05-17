<template>
  <v-card
    title="دسته بندی نتایج"
    prepend-icon="mdi-sitemap"
    color="secondary-3"
    class="text-primary"
  >
    <v-list density="comfortable" class="bg-secondary-3">
      <v-list-item
        v-for="(item, i) in items"
        :key="i"
        :value="item"
        active-color="primary"
        variant="plain"
      >
        <template v-slot:prepend>
          <v-icon icon="mdi-chevron-left"></v-icon>
        </template>
        <v-list-item-title v-text="item.text"></v-list-item-title>
      </v-list-item>
    </v-list>
  </v-card>
</template>

<script setup>
import { ref } from "vue";

const items = ref([
  { text: "دسته بندی مادر" },
  { text: "دسته بندی مادر" },
  { text: "دسته بندی مادر" },
  { text: "دسته بندی مادر" },
]);
</script>
