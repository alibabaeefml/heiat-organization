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
      <TextGroup title="لیست اخبار استان ها" />
      <v-row class="mt-5 pa-3">
        <v-col cols="12" md="3">
          <Filter
            class="mt-3"
            @search="search"
            @reset_filter="
              use_news_store().index_provinces_news();
              province = null;
              filter_key = !filter_key;
            "
            province_filter
            @select_province="select_province"
            :province="province"
            :key="filter_key"
          />
        </v-col>
        <v-col cols="12" md="9">
          <v-row v-if="pages">
            <v-col
              cols="12"
              class="d-flex flex-column gap-1"
              v-if="get_provinces_news.length"
            >
              <HorizontalCard
                v-for="item in get_provinces_news"
                :data="{
                  img_width: useDisplay().smAndUp.value ? '200px' : null,
                  title: item.title,
                  text: item.lead,
                  img: item.thumbnail,
                  link: { name: 'SingleNews', params: { id: item.id } },
                }"
              />
            </v-col>
            <v-col cols="12">
              <Pagination :pages_count="pages" @callback="paginate" />
            </v-col>
          </v-row>
          <div
            v-else
            class="d-flex align-center justify-center"
            style="height: 300px"
          >
            <h3>خبری موجود نیست</h3>
          </div>
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
import { use_paginate_store } from "@/store/paginate";
import { use_province_store } from "@/store/province";
const paginate_store = use_paginate_store();
const { pages } = storeToRefs(paginate_store);

const search = (search_term) =>
  use_news_store().index_provinces_news({ search: search_term });

const { get_provinces_news } = storeToRefs(use_news_store());
const { get_all_provinces } = storeToRefs(use_province_store());

const load_data = async () => {
  await use_news_store().index_provinces_news();
  await paginate_store.get_pages("provincesnews");
};
load_data();

const filter_key = ref(false);
const province = ref(null);

const select_province = async (provinceid) => {
  province.value = get_all_provinces.value.find((v) => v.id == provinceid);
  await use_news_store().index_provinces_news({ provinceid });
};

const paginate = (page_number) => {
  use_news_store().index_provinces_news({ page: page_number.value });
};
</script>
