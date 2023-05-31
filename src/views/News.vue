<template>
  <div class="position-relative">
    <div
      class="w-100 h-100 position-absolute pattern-div"
      style="pointer-events: none"
    ></div>
    <div
      style="
        padding-top: 10rem;
        padding-inline: 2rem;
        position: relative;
        z-index: 11;
      "
    >
      <TextGroup title="اخبار" />
      <v-row class="mt-5 pa-3">
        <v-col cols="12" md="3">
          <Filter @search="search" />
        </v-col>
        <v-col cols="12" md="9">
          <div class="d-flex flex-column gap-1">
            <HorizontalCard
              v-for="item in get_all_news"
              :data="{
                img_width: useDisplay().smAndUp.value ? '200px' : null,
                title: item.title_fa,
                text: item.lead_fa,
                link: { name: 'SingleNews', params: { id: item.id } },
              }"
            />
          </div>
          <Pagination :pages_count="5" />
        </v-col>
      </v-row>
    </div>
  </div>
</template>
<script setup>
import HorizontalCard from "@/components/Global/card/HorizontalCard.vue";
import Filter from "@/components/Global/filter/Filter.vue";
import Pagination from "@/components/Global/filter/Pagination.vue";
import TextGroup from "@/components/Global/text/TextGroup.vue";
import { use_news_store } from "@/store/news";
import { storeToRefs } from "pinia";
import { ref } from "vue";
import { useDisplay } from "vuetify/lib/framework.mjs";

const news = ref([]);

const search = (search_term) =>
  use_news_store().index_all_news({ search: search_term });
const { get_all_news } = storeToRefs(use_news_store());
const load_data = async () => {
  news.value = await use_news_store().index_all_news();
};
load_data();
</script>
