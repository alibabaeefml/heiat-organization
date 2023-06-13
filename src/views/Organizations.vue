<template>
  <div class="wrapper position-relative bg-secondary-3">
    <div
      class="w-100 h-100 position-absolute pattern-div"
      style="pointer-events: none"
    ></div>
    <div
      class="px-16"
      style="padding-top: 10rem; position: relative; z-index: 11"
    >
      <div
        class="d-flex flex-sm-row flex-column align-center justify-space-between"
      >
        <TextGroup
          :pretitle="language.value.orgnews_sec1_subtitle"
          :title="language.value.orgnews_sec1_title"
          :desc="language.value.orgnews_sec1_desc"
          title_class="text-secondary-4"
          no_desc="true"
        />

        <div
          class="d-flex flex-sm-row flex-column align-center gap-1"
          :style="{ width: useDisplay().xs.value ? '100%' : 'auto' }"
        >
          <div class="d-flex align-center justify-space-between w-100 gap-1">
            <v-btn
              class="next-slide"
              icon="mdi-arrow-right"
              color="secondary"
            ></v-btn>
            <v-btn
              class="prev-slide"
              icon="mdi-arrow-left"
              color="secondary"
            ></v-btn>
          </div>
          <v-btn
            color="secondary-4"
            class="rounded-lg font-weight-bold"
            :width="useDisplay().xs.value ? '100%' : 'max-content'"
            :to="{ name: 'OrganizationsNews' }"
            >نمایش همه</v-btn
          >
        </div>
      </div>
      <p class="limited">
        {{ persian_lorem }}
      </p>
      <PrimaryNewsSwiper class="mt-5" :slides="organizations_primary_news" />
    </div>
  </div>
  <div class="position-relative" style="min-height: 1200px">
    <div
      class="w-100 h-100 position-absolute pattern-div"
      style="pointer-events: none"
    ></div>
    <div style="position: relative; z-index: 11" class="px-16">
      <FirstOrganization
        :id="'organ' + get_organizations[0]?.id"
        :data="get_organizations[0]"
      />
      <OrganizationCategoryItem
        :data="item"
        class="my-10"
        :id="'organ' + item.id"
        v-for="item in get_organizations.slice(1)"
        :key="item.id"
      />
    </div>
  </div>
</template>
<script setup>
import TextGroup from "@/components/Global/text/TextGroup.vue";
import PrimaryNewsSwiper from "@/components/Organizations/PrimaryNewsSwiper.vue";
import FirstOrganization from "@/components/Organizations/FirstOrganization.vue";
import { ref } from "vue";
import { useDisplay } from "vuetify/lib/framework.mjs";
import OrganizationCategoryItem from "@/components/Organizations/OrganizationCategoryItem.vue";
import { use_news_store } from "@/store/news";
import { use_organization_store } from "@/store/organization";
import { storeToRefs } from "pinia";
import { useRoute, useRouter } from "vue-router";
import { onMounted } from "vue";

const organizations_primary_news = ref([]);
const { get_organizations } = storeToRefs(use_organization_store());

const load_date = async () => {
  organizations_primary_news.value =
    await use_news_store().index_organizations_news({
      special: 1,
    });
  await use_organization_store().index_organizations();
};
load_date();
const scroll_id = useRoute().params.scroll_to;

onMounted(() => {
  setTimeout(() => {
    document.querySelector("main").scrollTop = document.getElementById(
      `organ${scroll_id}`
    ).offsetTop;
  }, 300);
});
</script>

<style scoped>
.wrapper {
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
