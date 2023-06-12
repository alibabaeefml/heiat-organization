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
      <TextGroup title="لیست اخبار تشکل ها" />
      <v-row class="mt-5 pa-3">
        <v-col cols="12" md="3">
          <Filter
            class="mt-3"
            @search="search"
            @select_cat="select_cat"
            :categories="get_organizations"
            @reset_filter="
              use_news_store().index_organizations_news();
              filter_key = !filter_key;
            "
            :key="filter_key"
          />
        </v-col>
        <v-col cols="12" md="9">
          <v-row v-if="pages">
            <v-col cols="12" class="d-flex flex-column gap-1">
              <HorizontalCard
                v-for="item in get_organizations_news"
                :key="item.id"
                :data="{
                  img_width: useDisplay().smAndUp.value ? '200px' : null,
                  title: item.title,
                  text: item.lead,
                  img:item.thumbnail,
                  link: {
                    name: 'OrganizationsSingleNews',
                    params: { id: item.id },
                  },
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
import { use_organization_store } from "@/store/organization";
import { use_paginate_store } from "@/store/paginate";
const paginate_store = use_paginate_store();
const { pages } = storeToRefs(paginate_store);

const search = (search_term) =>
  use_news_store().index_organizations_news({ search: search_term });

const select_cat = async (organization_id) => {
  await use_news_store().index_organizations_news({ organization_id });
  
};

const { get_organizations_news } = storeToRefs(use_news_store());
const { get_organizations } = storeToRefs(use_organization_store());

const load_data = async () => {
  await use_news_store().index_organizations_news();
  await use_organization_store().index_organizations();
};
load_data();

const paginate = (page_number) => {
  use_news_store().index_provinces_news({ page: page_number.value });
};

const filter_key = ref(false);
</script>
