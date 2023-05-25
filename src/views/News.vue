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
      <TextGroup title="اخبار" />
      <v-row class="mt-5 pa-3">
        <v-col cols="12" md="3">
          <Filter />
        </v-col>
        <v-col cols="12" md="9">
          <div class="d-flex flex-column gap-1">
            <HorizontalCard
              v-for="item in 6"
              :data="{ img_width: useDisplay().smAndUp.value ? '200px' : null }"
            />
          </div>
          <Pagination />
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
import { useDisplay } from "vuetify/lib/framework.mjs";
</script>
