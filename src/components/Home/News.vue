<template>
  <section class="wrapper bg-secondary-3 position-relative">
    <div class="position-relative pa-16" style="z-index: 11">
      <div
        class="d-flex align-center gap-1 flex-md-row flex-column justify-space-between"
      >
        <TextGroup
          :title="language.value.index_sec4_news_title"
          :pretitle="language.value.index_sec4_news_subtitle"
          :desc="language.value.index_sec4_news_desc"
        />
        <v-btn
          color="primary"
          class="rounded-lg font-weight-bold"
          :width="useDisplay().xs.value ? '100%' : 'auto'"
          :to="{ name: 'News' }"
          >نمایش همه</v-btn
        >
      </div>
      <v-row class="mt-5">
        <v-col cols="12" md="5">
          <VerticalCard
            :data="{
              width: '100%',
              img_height: '310px',
              card_theme: 'secondary',
              title: get_news[0]?.title,
              text: get_news[0]?.lead,
              img: get_news[0]?.thumbnail,
              link: {
                name: 'SingleNews',
                params: { id: get_news[0]?.id || 1 },
              },
            }"
          />
        </v-col>
        <v-col cols="12" md="7" class="d-flex flex-column gap-1">
          <HorizontalCard
            v-for="news in get_news.slice(1, 4)"
            :data="{
              img_width: useDisplay().smAndUp.value ? '200px' : '100%',
              title: news.title,
              text: news.lead,
              img: news.thumbnail,
              link: { name: 'SingleNews', params: { id: news.id } },
            }"
          />
        </v-col>
      </v-row>
    </div>
  </section>
</template>
<script setup>
import TextGroup from "@/components/Global/text/TextGroup.vue";
import { useDisplay } from "vuetify/lib/framework.mjs";
import VerticalCard from "../Global/card/VerticalCard.vue";
import HorizontalCard from "../Global/card/HorizontalCard.vue";
import { use_news_store } from "@/store/news";
import { storeToRefs } from "pinia";
import { ref } from "vue";

use_news_store().index_news();
const { get_news } = storeToRefs(use_news_store());


</script>

<style scoped>
.wrapper {
  background-size: cover;
  background-position: center;
  position: relative;
  width: 100%;
  height: max-content;
  padding-bottom: 200px;
}

.wrapper::after {
  content: "";
  display: flex;
  background-image: url(@/assets/images/white_mask.png);
  background-position: bottom;
  background-size: contain;
  width: 100%;
  height: 200px;
  position: absolute;
  bottom: 0;
  left: 0;
}
</style>
