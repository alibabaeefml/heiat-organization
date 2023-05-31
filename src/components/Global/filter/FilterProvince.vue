<template>
  <v-card
    class="pa-3 text-primary"
    color="secondary-3"
    prepend-icon="mdi-city"
    title="انتخاب استان"
  >
    <v-select
      color="primary"
      label="انتخاب استان"
      :items="use_province_store().get_all_provinces"
      variant="underlined"
      item-value="id"
      item-title="name_fa"
      v-model="province_id"
      @update:model-value="
        use_news_store().index_all_news({ provinceid: item.raw.value })
      "
    ></v-select>
  </v-card>
</template>
<script setup>
import { use_news_store } from "@/store/news";
import { use_province_store } from "@/store/province";
import { ref } from "vue";
const province_id = ref();
</script>
