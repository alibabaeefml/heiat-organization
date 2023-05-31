<template>
  <div class="d-flex flex-column">
    <TextGroup
      pretitle="اخبار مربوط به"
      :title="'استان ' + data.province?.name_fa"
      no_desc="true"
    />
    <ul
      v-if="data.province_news?.length"
      class="d-flex flex-md-row flex-column gap-1 align-center mt-5"
    >
      <VerticalCard
        v-for="news_item in data.province_news?.slice(0, 3)"
        :key="news_item.id"
        :data="{
          title: news_item.title_fa,
          text: news_item.lead_fa,
          img: news_item.img,
          link: { name: 'ProvincesSingleNews', params: { id: news_item.id } },
        }"
      />
    </ul>
    <h3 v-else class="w-100 h-100 d-flex align-center justify-center">
      خبری در این استان موجود نیست
    </h3>
    <div class="d-sm-flex justify-sm-end" v-if="data.province_news?.length">
      <v-btn
        color="primary"
        class="rounded-lg font-weight-bold"
        :width="useDisplay().xs.value ? '100%' : 'auto'"
        :to="{ name: 'Provinces', params: { province_id: data.province.id } }"
        >نمایش همه</v-btn
      >
    </div>
  </div>
</template>
<script setup>
import { useDisplay } from "vuetify/lib/framework.mjs";
import VerticalCard from "@/components/Global/card/VerticalCard.vue";
import TextGroup from "@/components/Global/text/TextGroup.vue";

const props = defineProps(["data"]);
</script>
