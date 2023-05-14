<template>
  <section class="bg-secondary-3 pa-5" style="min-height: 1000px">
    <div class="position-relative" style="z-index: 11">
      <div
        class="d-flex gap-1 flex-md-row flex-column align-end justify-space-between"
      >
        <TextGroup title="اخبار" />
        <v-btn
          color="primary"
          class="rounded-lg font-weight-bold"
          :width="useDisplay().smAndDown.value ? '100%' : 'auto'"
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
            }"
          />
        </v-col>
        <v-col cols="12" md="7" class="d-flex flex-column gap-1">
          <HorizontalCard
            :data="{ img_width: useDisplay().smAndUp.value ? '200px' : '100%' }"
          />
          <HorizontalCard
            :data="{ img_width: useDisplay().smAndUp.value ? '200px' : '100%' }"
          />
          <HorizontalCard
            :data="{ img_width: useDisplay().smAndUp.value ? '200px' : '100%' }"
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
</script>
