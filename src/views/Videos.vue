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
      <TextGroup title="لیست ویدیو ها" />
      <v-row class="mt-5 pa-3">
        <v-col cols="12" md="3">
          <Filter
            class="mt-3"
            @search="search"
            @select_cat="select_cat"
            :categories="categories"
            @reset_filter="
              search('');
              filter_key = !filter_key;
            "
            :key="filter_key"
          />
        </v-col>
        <v-col cols="12" md="9">
          <v-row v-if="pages">
            <v-col cols="12" style="height: 500px">
              <div class="w-100 h-100">
                <video
                  class="w-100 h-100"
                  style="object-fit: cover"
                  :src="selected_video.file_url"
                  :poster="selected_video.thumbnail"
                  controls
                ></video>
              </div>
            </v-col>
            <v-col>
              <h2>{{ selected_video.title || "عنوان ویدیو انتخاب شده" }}</h2>
              <p class="text-justify">
                {{ selected_video.desc || persian_lorem }}
              </p>
            </v-col>
            <v-col cols="12" class="d-flex flex-column gap-1">
              <v-row>
                <v-col
                  cols="12"
                  md="6"
                  v-for="item in get_videos"
                  :key="item.id"
                >
                  <VerticalCard
                    :data="{
                      img: item.thumbnail,
                      title: item.title,
                      text: item.lead,
                      card_theme:'primary'
                    }"
                    :show_link="false"
                    play_icon="true"
                    @click="selected_video = item"
                  />
                </v-col>
              </v-row>
            </v-col>
            <v-col cols="12">
              <Pagination :pages_count="pages" @click="paginate" />
            </v-col>
          </v-row>
          <div
            v-else
            class="d-flex align-center justify-center"
            style="height: 300px"
          >
            <h3>ویدیو ای موجود نیست</h3>
          </div>
        </v-col>
      </v-row>
    </div>
  </div>
</template>
<script setup>
import Filter from "@/components/Global/filter/Filter.vue";
import Pagination from "@/components/Global/filter/Pagination.vue";
import TextGroup from "@/components/Global/text/TextGroup.vue";
import { storeToRefs } from "pinia";
import { ref } from "vue";
import { useDisplay } from "vuetify/lib/framework.mjs";
import { use_paginate_store } from "@/store/paginate";
import { use_video_store } from "@/store/video";
import VerticalCard from "@/components/Global/card/VerticalCard.vue";
const paginate_store = use_paginate_store();
const { pages } = storeToRefs(paginate_store);

const selected_video = ref({});
const store = use_video_store();
const categories = ref([]);

const search = (search_term) => store.index_videos({ search: search_term });

const select_cat = (catid) => {
  store.index_videos({ catid });
};

const { get_videos } = storeToRefs(use_video_store());

const load_data = async () => {
  await store.index_videos();
  // categories.value = await store.index_videos_categories();
};
load_data().then(() => (selected_video.value = get_videos.value[0]));

const filter_key = ref(false);

const paginate = (page_number) => {
  store.index_videos({ page: page_number.value });
};
</script>
