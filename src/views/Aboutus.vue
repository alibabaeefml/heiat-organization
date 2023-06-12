<template>
  <div class="position-relative">
    <div
      class="w-100 h-100 position-absolute pattern-div"
      style="pointer-events: none"
    ></div>
    <div
      style="
        padding-top: 10rem;
        padding-bottom: 5rem;
        position: relative;
        z-index: 11;
      "
      class="px-16"
    >
      <TextGroup
        :pretitle="language.value.aboutus_sec1_subtitle"
        :title="language.value.aboutus_sec1_title"
        :desc="language.value.aboutus_sec1_desc"
        :limited="false"
      />
      <v-spacer class="my-5"></v-spacer>
      <TextGroup
        class="text-center"
        :pretitle="language.value.aboutus_sec2_subtitle"
        :title="language.value.aboutus_sec2_title"
        :desc="language.value.aboutus_sec2_desc"
        :limited="false"
      />
      <v-row class="mt-5">
        <v-col cols="12" md="4">
          <TextGroup
            :pretitle="language.value.aboutus_sec3_subtitle"
            :title="language.value.aboutus_sec3_title"
            :desc="language.value.aboutus_sec3_desc"
          />
        </v-col>
        <v-col cols="12" md="8">
          <OrganizationDocuments :slides="documents" />
        </v-col>
      </v-row>
      <v-spacer class="my-5"></v-spacer>
      <TextGroup
        class="text-center"
        :title="language.value.aboutus_sec4_title"
        :pretitle="language.value.aboutus_sec4_subtitle"
        :desc="language.value.aboutus_sec4_desc"
      />
      <v-row class="mt-5">
        <v-col v-for="item in team" cols="12" sm="3">
          <v-hover v-slot="{ isHovering, props }">
            <v-img
              cover
              class="rounded-lg"
              aspect-ratio="1"
              :src="item.img || default_img"
              v-bind="props"
            >
              <v-overlay
                contained
                :model-value="isHovering"
                class="mt-auto h-25 d-flex align-center justify-center"
              >
                <h3 class="text-white">{{ item.title || "نام کاربر" }}</h3>
                <h4 class="text-white">{{ item.job || "سمت" }}</h4>
              </v-overlay>
            </v-img>
          </v-hover>
        </v-col>
      </v-row>
      <v-spacer class="my-5"></v-spacer>
      <TextGroup title="معرفی بخش ها" />
      <v-row class="mt-5">
        <v-col v-for="item in 15" cols="12" md="4">
          <v-card color="secondary">
            <v-card-text class="d-flex justify-space-between align-center">
              <h3>عنوان بخش:</h3>
              <router-link to="/" class="text-decoration-none text-primary"
                >https://youtube.com</router-link
              >
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </div>
  </div>
</template>

<script setup>
import TextGroup from "@/components/Global/text/TextGroup.vue";
import OrganizationDocuments from "@/components/AboutUs/OrganizationDocuments.vue";
import { ref } from "vue";

import { use_document_store } from "@/store/document.js";
import { use_team_store } from "@/store/team";
const documents = ref([]);
const team = ref([]);
const load_data = async () => {
  documents.value = await use_document_store().index_documents();
  team.value = await use_team_store().index_team();
};
load_data();
</script>

<style scoped></style>
