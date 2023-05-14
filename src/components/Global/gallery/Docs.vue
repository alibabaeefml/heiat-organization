<template>
  <v-row class="pa-3">
    <v-col class="d-flex flex-column gap-1" cols="12" md="6">
      <HorizontalCard
        :data="{ img_width: useDisplay().smAndUp.value ? '200px' : null, link_text:'دانلود مقاله' }"
        v-for="doc in 3"
      />
    </v-col>
    <v-col class="d-flex flex-column gap-1" cols="12" md="6">
      <HorizontalCard
        :data="{ img_width: useDisplay().smAndUp.value ? '200px' : null, link_text:'دانلود مقاله' }"
        v-for="doc in 3"
      />
    </v-col>
  </v-row>
</template>
<script setup>
import HorizontalCard from "@/components/Global/card/HorizontalCard.vue";
import { useDisplay } from "vuetify/lib/framework.mjs";
</script>
