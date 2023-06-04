<template>
  <div class="position-relative">
    <div
      class="w-100 h-100 position-absolute pattern-div"
      style="pointer-events: none"
    ></div>
    <div style="padding-top: 10rem; position: relative; z-index: 11">
      <h1
        class="text-primary justify-center d-flex align-center gap-1 mx-auto"
        style="width: max-content; border-bottom: 3px solid var(--primary)"
      >
        <v-icon>mdi-map-marker</v-icon>
        <p>استان {{ province.name_fa }}</p>
      </h1>
      <div
        class="d-flex flex-md-row flex-column align-center justify-space-between"
      ></div>
      <v-row class="pa-3">
        <v-col cols="12" md="6" :order="useDisplay().mdAndUp.value ? 1 : 2">
          <TextGroup pretitle="استان" :title="province.name_fa" />
          <PrimaryOrganization />
        </v-col>
        <v-col cols="12" md="6" :order="useDisplay().mdAndUp.value ? 2 : 1">
          <Map @select_province="set_province_data" :province="province" />
        </v-col>
      </v-row>
      <div class="pa-2">
        <h2>خبر های استان</h2>
        <v-row class="pa-3">
          <v-col cols="12" md="3">
            <Filter
              province_filter="true"
              @search="search"
              @select_province="set_province_data"
              :province="province"
            />
          </v-col>
          <v-col cols="12" md="9">
            <v-row>
              <v-col cols="12" md="3" sm="6" v-for="item in get_provinces_news">
                <VerticalCard
                  :data="{
                    card_theme: 'primary',
                    link: {
                      name: 'ProvincesSingleNews',
                      params: { id: item.id },
                    },
                    title: item.title,
                    text: item.lead,
                  }"
                />
              </v-col>
              <v-col cols="12">
                <Pagination
                  :pages_count="pages(get_provinces_news.length)"
                  @callback="paginate"
                />
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </div>
    </div>
  </div>
</template>

<script setup>
import VerticalCard from "@/components/Global/card/VerticalCard.vue";
import Filter from "@/components/Global/filter/Filter.vue";
import Pagination from "@/components/Global/filter/Pagination.vue";
import Map from "@/components/Global/map/Map.vue";
import TextGroup from "@/components/Global/text/TextGroup.vue";
import PrimaryOrganization from "@/components/Provinces/PrimaryOrganizations.vue";

import { useDisplay } from "vuetify/lib/framework.mjs";
import { use_province_store } from "@/store/province";
import { use_news_store } from "@/store/news";
import { ref } from "vue";
import { useRouter } from "vue-router";
import pages from "@/store/paginate";
const province = ref({});
const router = useRouter();

const set_province_data = async (id) => {
  province.value = use_province_store().get_all_provinces.find(
    (v) => v.id == id
  );
  await use_news_store().index_provinces_news({
    provinceid: id,
    page: 1,
  });
};

set_province_data(router.currentRoute.value.params.province_id);

const { get_provinces_news } = storeToRefs(use_news_store());

const paginate = (page_number) => {
  use_news_store().index_provinces_news({ page: page_number.value });
};

import { storeToRefs } from "pinia";

const categories = ref([]);

const search = (search_term) =>
  use_news_store().index_provinces_news({
    search: search_term,
    provinceid: province.value.id,
  });
</script>
