<template>
  <v-card
    title="دسته بندی نتایج"
    prepend-icon="mdi-sitemap"
    color="secondary-3"
    class="text-primary"
  >
    <v-list density="comfortable" class="bg-secondary-3">
      <v-list-item
        v-for="(item, i) in categories"
        :key="i"
        :value="item"
        active-color="primary"
        variant="plain"
      >
        <template v-slot:prepend>
          <v-icon icon="mdi-chevron-left"></v-icon>
        </template>
        <v-list-item-title v-text="item.title_fa"></v-list-item-title>
      </v-list-item>
    </v-list>
  </v-card>
</template>

<script setup>

import { use_news_store } from "@/store/news";
import { ref } from "vue";

const categories = ref([]);

const load_data = async () => {
 categories.value = await use_news_store().index_news_categories()
}
load_data()
</script>
