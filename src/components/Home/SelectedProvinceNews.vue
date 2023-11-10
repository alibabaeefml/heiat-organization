<template>
  <div class="d-flex flex-column">
    <div class="d-flex justify-space-between">
      <TextGroup
        :pretitle="language.value.index_sec2_provinces_title"
        :title="'استان ' + data.province?.name_fa"
      />
      <div class="d-flex align-center gap-1">
        <select
          style="
            all: revert;
            font-family: iran;
            border: var(--primary) 2px solid;
          "
          class="pa-1 font-weight-bold text-primary bg-white rounded-xl"
          @change="(e) => $emit('select_province', e.target.value)"
        >
          <option
            :value="p.id"
            v-for="p in get_all_provinces"
            :selected="province.id == p.id"
          >
            {{ p.name_fa }}
          </option>
        </select>
        <v-btn class="rounded-xl" color="primary" :to="{ name: 'Provinces' }"
          >صفحه استان</v-btn
        >
      </div>
    </div>
    <ul v-if="data.province_news?.length" class="d-flex flex-column gap-1 mt-5">
      <HorizontalCard
        v-for="news_item in data.province_news?.slice(0, 3)"
        :key="news_item.id"
        :data="{
          img_width: '200px',
          title: news_item.title,
          text: news_item.lead,
          img: news_item.img,
          link: { name: 'ProvincesSingleNews', params: { id: news_item.id } },
        }"
      />
      
    </ul>
    <h3 v-else class="w-100 h-100 d-flex align-center justify-center">
      خبری در این استان موجود نیست
    </h3>
   
  </div>
</template>
<script setup>
import { useDisplay } from "vuetify/lib/framework.mjs";
import HorizontalCard from "@/components/Global/card/HorizontalCard.vue";
import TextGroup from "@/components/Global/text/TextGroup.vue";
import { use_province_store } from "@/store/province";
import { storeToRefs } from "pinia";

const props = defineProps(["data", "province"]);
const { get_all_provinces } = use_province_store();
</script>
