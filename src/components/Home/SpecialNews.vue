<template>
  <section class="bg-secondary-3 " >
    <div class="position-relative" style="z-index: 11">
      <TextGroup title="ویژه نامه ها" />
    <v-row class="pa-3">
      <v-col cols="12" md="6" v-for="item in 4" :key="item">
        <SpecialNewsItem :data="{}" />
      </v-col>
    </v-row>
    </div>
   
  </section>
</template>
<script setup>
import TextGroup from "../Global/text/TextGroup.vue";
import SpecialNewsItem from "@/components/Home/SpecialNewsItem.vue";
</script>
