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
      <TextGroup title="لیست آلبوم ها" />
      <v-row class="mt-5 pa-3">
        <v-col cols="12" md="3">
          <Filter
            class="mt-3"
            @search="search"
            @select_cat="select_cat"
            :categories="categories"
            @reset_filter="
              use_photo_store().index_albums();
              filter_key = !filter_key;
            "
            :key="filter_key"
          />
        </v-col>
        <v-col cols="12" md="9">
          <div class="d-flex flex-column gap-1">
            <HorizontalCard
              v-for="item in get_albums"
              :data="{
                img_width: useDisplay().smAndUp.value ? '200px' : null,
                title: item.title,
                text: item.lead,
                img: item.thumbnail,
                link: { name: 'SingleAlbum', params: { id: item.id } },
              }"
            />
          </div>
          <Pagination :pages_count="paginate(get_albums.length)" />
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
import { storeToRefs } from "pinia";
import { ref } from "vue";
import { useDisplay } from "vuetify/lib/framework.mjs";
import paginate from "@/store/paginate";
import { use_photo_store } from "@/store/photo";

const categories = ref([]);
const search = (search_term) =>
  use_photo_store().index_albums({ search: search_term });

const select_cat = (catid) => {
  use_photo_store().index_albums({ catid });
};

const { get_albums } = storeToRefs(use_photo_store());

const load_data = async () => {
  use_photo_store().index_albums();
  categories.value = await use_photo_store().index_albums_categories();
};
load_data();

const filter_key = ref(false);
</script>
