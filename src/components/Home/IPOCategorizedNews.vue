<template>
  <section class="bg-white" >
    <div class="position-relative" style="z-index: 11">
      <v-row class="pa-16">
        <v-col md="4" cols="12">
          <TextGroup title="تشکل های میان تخصصی" :limited="false" />
        </v-col>
        <v-col md="8" cols="12">
          <div class="d-flex flex-wrap justify-center gap-1">
            <VerticalCard
              :data="{
                card_theme: 'primary',
                width: useDisplay().smAndUp.value ? '270px' : null,
              }"
              v-for="organ in 5"
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
import { ref } from "vue";
import { useDisplay } from "vuetify/lib/framework.mjs";
</script>

