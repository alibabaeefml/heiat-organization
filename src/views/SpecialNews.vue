<template>
  <div class="position-relative" style="min-height: 1000px">
    <div
      class="w-100 h-100 position-absolute pattern-div"
      style="pointer-events: none"
    ></div>
    <div style="padding-top: 7rem; position: relative; z-index: 11">
      <v-img cover height="700" :src="special.img || default_img"></v-img>
      <v-row class="pa-16">
        <v-col cols="12" md="3">
          <Filter
            class="mt-3"
            @search="search"
            @reset_filter="
              load_data();
              filter_key = !filter_key;
            "
            :key="filter_key"
          />
        </v-col>
        <v-col cols="12" md="9">
          <v-row v-if="pages">
            <v-col
              cols="12"
              class="d-flex flex-column gap-1"
              v-if="get_special_news.length"
            >
              <HorizontalCard
                v-for="item in get_special_news"
                :data="{
                  img_width: useDisplay().smAndUp.value ? '200px' : null,
                  title: item.title,
                  text: item.lead,
                  img: item.thumbnail,
                  link: { name: 'SpecialSingleNews', params: { id: item.id } },
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
import { use_news_store } from "@/store/news";
import { use_special_store } from "@/store/special";
import { storeToRefs } from "pinia";
import { ref } from "vue";
import { useRoute, useRouter } from "vue-router";
import { useDisplay } from "vuetify/lib/framework.mjs";
const { get_special_news } = storeToRefs(use_news_store());
import { use_paginate_store } from "@/store/paginate";
import { watch } from "vue";
const paginate_store = use_paginate_store();
const { pages } = storeToRefs(paginate_store);
const special = ref({});

const router = useRouter();
const load_data = async () => {
  const { id } = router.currentRoute.value.params;
  special.value = await use_special_store().show_special({ id: id });
  await use_news_store().index_special_news({
    specials_id: id,
    page: 1,
  });
};
load_data();
const search = async (search) => {
  await use_news_store().index_special_news({ search });
};
const route = useRoute();
watch(route, load_data);
const filter_key = ref(false);
const paginate = (page_number) => {
  use_news_store().index_provinces_news({ page: page_number.value });
};
</script>
