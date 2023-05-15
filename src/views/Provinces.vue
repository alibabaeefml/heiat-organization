<template>
  <div class="position-relative">
    <div
      class="w-100 h-100 position-absolute pattern-div"
      style="pointer-events: none"
    ></div>
    <div style="padding-top: 10rem; position: relative; z-index: 11">
      <h1
        class="text-primary justify-center d-flex align-center gap-1 mx-auto"
        style="width: max-content; border-bottom: 3px solid var(--primary)"
      >
        <v-icon>mdi-map-marker</v-icon>
        <p>استان خراسان رضوی</p>
      </h1>
      <div
        class="d-flex flex-md-row flex-column align-center justify-space-between"
      ></div>
      <v-row class="pa-3">
        <v-col cols="12" md="6" :order="useDisplay().mdAndUp.value ? 1 : 2">
          <TextGroup title="استان خراسان رضوی" />
          <PrimaryOrganization />
        </v-col>
        <v-col cols="12" md="6" :order="useDisplay().mdAndUp.value ? 2 : 1">
          <Map />
        </v-col>
      </v-row>
      <div>
        <h2>خبر های استان</h2>
        <v-row class="pa-3">
            <v-col cols="12" md="3">
                <Filter/>
            </v-col>
            <v-col cols="12" md="9"></v-col>
        </v-row>
      </div>
    </div>
  </div>
</template>

<script setup>
import Filter from "@/components/Global/Filter/Filter.vue";
import Map from "@/components/Global/map/Map.vue";
import TextGroup from "@/components/Global/text/TextGroup.vue";
import PrimaryOrganization from "@/components/Provinces/PrimaryOrganizations.vue";
import { useDisplay } from "vuetify/lib/framework.mjs";
</script>
