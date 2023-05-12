<template>
  <section class="bg-white">
    <v-row class="pa-5">
      <v-col md="4" cols="12">
        <TextGroup title="تشکل های میان تخصصی" :limited="false" />
      </v-col>
      <v-col md="8" cols="12">
        <div class="d-flex flex-wrap justify-center gap-1">
          <VerticalCard :data="data" v-for="organ in 5" />
        </div>
      </v-col>
    </v-row>
  </section>
</template>
<script setup>
import VerticalCard from "@/components/Global/card/VerticalCard.vue";
import TextGroup from "@/components/Global/text/TextGroup.vue";

const data = {
  card_theme: "primary",
};
</script>
