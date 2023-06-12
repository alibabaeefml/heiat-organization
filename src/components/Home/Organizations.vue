<template>
  <section class="bg-white">
    <div class="position-relative" style="z-index: 11">
      <v-row class="pa-16">
        <v-col md="4" cols="12">
          <TextGroup
            :pretitle="language.value.index_sec3_orgs_subtitle"
            :title="language.value.index_sec3_orgs_title"
            :desc="language.value.index_sec3_orgs_desc"
            :limited="false"
          />
        </v-col>
        <v-col md="8" cols="12">
          <div class="d-flex flex-wrap justify-center gap-1">
            <VerticalCard
              :data="{
                card_theme: 'primary',
                width: useDisplay().smAndUp.value ? '270px' : null,
                title: organ.title,
                text: organ.text,
                lead: organ.lead,
                img: organ.img,
              }"
              :is_cover="false"
              v-for="organ in get_organizations"
            />
          </div>
        </v-col>
      </v-row>
    </div>
  </section>
</template>
<script setup>
import VerticalCard from "@/components/Global/card/VerticalCard.vue";
import TextGroup from "@/components/Global/text/TextGroup.vue";
import { use_news_store } from "@/store/news";
import { use_organization_store } from "@/store/organization";
import { storeToRefs } from "pinia";
import { ref } from "vue";
import { useDisplay } from "vuetify/lib/framework.mjs";

const { get_organizations } = storeToRefs(use_organization_store());
use_organization_store().index_organizations();
</script>
