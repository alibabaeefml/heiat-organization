<template>
  <v-card
    title="دسته بندی نتایج"
    prepend-icon="mdi-sitemap"
    color="secondary-3"
    class="text-primary"
  >
    <v-list
      density="comfortable"
      class="bg-secondary-3"
      v-if="categories.length"
    >
      <v-list-item
        v-for="(item, i) in categories"
        :key="i"
        :value="item"
        active-color="primary"
        variant="text"
        @click="$emit('select_cat', item.id)"
      >
        <template v-slot:prepend>
          <v-icon icon="mdi-chevron-left"></v-icon>
        </template>
        <v-list-item-title v-text="item.title"></v-list-item-title>
      </v-list-item>
    </v-list>
    <div v-else>دسته بندی موجود نیست</div>
  </v-card>
</template>

<script setup>
import { use_news_store } from "@/store/news";

const props = defineProps({
  categories: { default: [] },
});
</script>
