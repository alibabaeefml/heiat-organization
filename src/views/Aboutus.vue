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
        padding-inline: 2rem;
        position: relative;
        z-index: 11;
      "
    >
      <TextGroup title="تاریخچه" :limited="false" />
      <v-spacer class="my-5"></v-spacer>
      <TextGroup
        class="text-center"
        title="ماموریت های سازمان"
        :limited="false"
      />
      <v-row class="mt-5">
        <v-col cols="12" md="4">
          <TextGroup title="اساسنامه های سازمان" />
        </v-col>
        <v-col cols="12" md="8">
          <OrganizationStatutes />
        </v-col>
      </v-row>
      <v-spacer class="my-5"></v-spacer>
      <TextGroup class="text-center" title="رؤسای سازمان" />
      <v-row class="mt-5">
        <v-col v-for="item in 8" cols="12" sm="3">
          <v-img
            cover
            class="rounded-lg"
            aspect-ratio="1"
            :src="default_img"
          ></v-img>
        </v-col>
      </v-row>
      <v-spacer class="my-5"></v-spacer>
      <TextGroup title="معرفی بخش ها" />
      <v-row class="mt-5">
        <v-col v-for="item in 15" cols="12" md="4">
          <v-card color="secondary">
            <v-card-text class="d-flex justify-space-between align-center">
              <h3>عنوان بخش:</h3>
              <router-link to="/" class="text-decoration-none text-primary">https://youtube.com</router-link>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </div>
  </div>
</template>

<script setup>
import TextGroup from "@/components/Global/text/TextGroup.vue";
import OrganizationStatutes from "@/components/AboutUs/OrganizationStatutes.vue";
import { ref } from "vue";

const data = ref({});
</script>

<style scoped></style>
