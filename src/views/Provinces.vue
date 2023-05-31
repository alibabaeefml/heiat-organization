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
          <Map
            @on_province_selected="set_province_data"
            :default_province_id="province_id || 17"
          />
        </v-col>
      </v-row>
      <div class="pa-2">
        <h2>خبر های استان</h2>
        <v-row class="pa-3">
          <v-col cols="12" md="3">
            <Filter />
          </v-col>
          <v-col cols="12" md="9">
            <v-row>
              <v-col
                cols="12"
                md="3"
                sm="6"
                v-for="news_item in use_news_store().get_provinces_news"
              >
                <VerticalCard
                  :data="{
                    card_theme: 'primary',
                    link: 'ProvincesSingleNews',
                    title: news_item.title_fa,
                    text: news_item.lead_fa,
                  }"
                />
              </v-col>
              <v-col cols="12">
                <Pagination
                  :pages_count="use_news_store().all_news_page_count"
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

const province = ref({});

const set_province_data = async (id) => {
  province.value = use_province_store().get_all_provinces.find(
    (v) => v.id == id
  );
  await use_news_store().index_provinces_news({
    provinceid: id,
    page: 1,
  });
};

const paginate = (page_number) => {
  use_news_store().index_provinces_news({ page: page_number.value });
};

const router = useRouter();
const province_id = router.currentRoute.value.params.province_id;
</script>
