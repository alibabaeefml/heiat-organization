<template>
  <v-row height="500" class="mt-3">
    <v-col cols="12" md="3" class="d-flex flex-column gap-1">
      <router-link to="">
        <v-img
          cover
          class="rounded-xl"
          style="height: 200px"
          :src="get_albums[0]?.thumbnail"
        >
          <v-tooltip activator="parent">{{ get_albums[0]?.title }}</v-tooltip>
        </v-img>
      </router-link>
      <router-link to="">
        <v-img
          cover
          class="rounded-xl"
          style="height: 200px"
          :src="get_albums[1]?.thumbnail"
        >
          <v-tooltip activator="parent">{{ get_albums[1]?.title }}</v-tooltip>
        </v-img>
      </router-link>
      <router-link to="">
        <v-img
          cover
          class="rounded-xl"
          style="height: 200px"
          :src="get_albums[2]?.thumbnail"
        >
          <v-tooltip activator="parent">{{ get_albums[2]?.title }}</v-tooltip>
        </v-img>
      </router-link>
    </v-col>
    <v-col cols="12" md="6">
      <router-link to="" class="position-relative">
        <v-img
          cover
          class="rounded-xl"
          style="height: 100%"
          :src="get_albums[3]?.thumbnail"
        >
        </v-img>
        <h3
            class="position-absolute ma-5 text-secondary"
            style="right: 0; bottom: 0; z-index: 2"
          >
            {{ get_albums[3]?.title }}
          </h3>
        <div
          class="position-absolute w-100 h-100 rounded-xl"
          style="
            top: 0;
            z-index: 1;
            box-shadow: rgba(16, 16, 16, 0.6) 0px -20px 20px 20px inset;
          "
        ></div>
      </router-link>
    </v-col>
    <v-col cols="12" md="3" class="d-flex flex-column gap-1">
      <router-link to="">
        <v-img
          cover
          class="rounded-xl"
          style="height: 200px"
          :src="get_albums[4]?.thumbnail"
        >
          <v-tooltip activator="parent">{{ get_albums[4]?.title }}</v-tooltip>
        </v-img>
      </router-link>
      <router-link to="">
        <v-img
          cover
          class="rounded-xl"
          style="height: 200px"
          :src="get_albums[5]?.thumbnail"
        >
          <v-tooltip activator="parent">{{ get_albums[5]?.title }}</v-tooltip>
        </v-img>
      </router-link>
      <router-link to="">
        <v-img
          cover
          class="rounded-xl"
          style="height: 200px"
          :src="get_albums[5]?.thumbnail"
        >
          <v-tooltip activator="parent">{{ get_albums[5]?.title }}</v-tooltip>
        </v-img>
      </router-link>
    </v-col>
  </v-row>
</template>
<script setup>
import { use_photo_store } from "@/store/photo";
import { storeToRefs } from "pinia";

const { get_albums } = storeToRefs(use_photo_store());
use_photo_store().index_albums();
</script>
