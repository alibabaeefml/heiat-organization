<template>
  <div class="position-relative" style="min-height: 1000px">
    <div
      class="w-100 h-100 position-absolute pattern-div"
      style="pointer-events: none"
    ></div>
    <div style="padding-top: 10rem; position: relative; z-index: 11">
      <v-img cover height="700" :src="data.img || default_img"></v-img>
      <v-row class="pa-3">
        <v-col cols="12" md="3">
          <Filter />
        </v-col>
        <v-col cols="12" md="9">
          <v-row>
            <v-col cols="12" md="6" v-for="item in 12">
              <HorizontalCard
                :data="{ img_width: useDisplay().xs.value ? '100%' : '200px' }"
              />
            </v-col>
          </v-row>
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
import { ref } from "vue";
import { useDisplay } from "vuetify/lib/framework.mjs";
const data = ref({});
</script>
