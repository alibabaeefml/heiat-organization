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
          <Filter />
        </v-col>
        <v-col cols="12" md="9">
          <v-row>
            <v-col
              cols="12"
              md="6"
              v-for="item in use_news_store().get_special_news"
            >
              <HorizontalCard
                :data="{
                  img_width: useDisplay().xs.value ? '100%' : '200px',
                  title: item.title_fa,
                  text: item.lead_fa,
                  img: item.thummbnail,
                  link: { name: 'SpecialSingleNews', params: { id: item.id } },
                }"
              />
            </v-col>
          </v-row>
          <Pagination :pages_count="use_news_store().special_news_page_count" />
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
import { ref } from "vue";
import { useRouter } from "vue-router";
import { useDisplay } from "vuetify/lib/framework.mjs";
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
</script>
