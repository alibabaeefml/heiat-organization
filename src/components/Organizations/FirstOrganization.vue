<template>
  <div class="d-flex flex-column justify-center" v-if="data">
    <v-img
      :src="data.img || 'src/assets/images/cultural_centers_logo.png'"
      width="160"
      class="mx-auto"
    ></v-img>
    <TextGroup
      :title="data.title || 'مجمع کانون های فرهنگی'"
      title_class="text-secondary-4"
      pretitle="تشکل"
      class="mt-5 text-center w-75 mx-auto"
      no_desc="true"
    />
    <div class="mt-5 d-flex flex-column align-center gap-1 w-100">
      <div class="d-flex align-center justify-space-between w-100 gap-1">
        <v-btn
          class="next-slide"
          icon="mdi-arrow-right"
          color="secondary"
        ></v-btn>
        <v-btn
          color="primary"
          class="rounded-lg font-weight-bold"
          :to="{ name: 'OrganizationsNews' }"
          >نمایش همه</v-btn
        >
        <v-btn
          class="prev-slide"
          icon="mdi-arrow-left"
          color="secondary"
        ></v-btn>
      </div>
      <p class="limited mt-5 w-75 mx-auto">{{ data.lead || persian_lorem }}</p>
      <HorizontalSwiper :slides="news" class="mt-5" />
    </div>
  </div>
</template>

<script setup>
import { ref, watch } from "vue";
import TextGroup from "../Global/text/TextGroup.vue";
import HorizontalSwiper from "../Global/swiper/HorizontalSwiper.vue";
import { use_news_store } from "@/store/news";
const props = defineProps(["data"]);

const news = ref([]);

watch(
  props,
  async () =>
    (news.value = await use_news_store().index_organizations_news({
      organization_id: props.data.id,
    }))
);
</script>
