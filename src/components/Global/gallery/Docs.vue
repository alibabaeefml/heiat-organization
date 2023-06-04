<template>
  <v-row class="pa-3">
    <v-col
      class="d-flex flex-column gap-1"
      cols="12"
      md="6"
      v-for="doc in get_articles"
    >
      <HorizontalCard
        :data="{
          img_width: useDisplay().smAndUp.value ? '200px' : null,
          link_text: 'مشاهده بیشتر',
          title: doc.title,
          lead:doc.lead,
          link:{name:'SingleArticle',params:{id:doc.id}}
        }"
      />
    </v-col>
  </v-row>
</template>
<script setup>
import HorizontalCard from "@/components/Global/card/HorizontalCard.vue";
import { use_article_store } from "@/store/article";
import { storeToRefs } from "pinia";
import { useDisplay } from "vuetify/lib/framework.mjs";

const { get_articles } = storeToRefs(use_article_store());
use_article_store().index_articles();
</script>
