<template>
  <section class="bg-white">
    <div class="position-relative" style="z-index: 11">
      <TextGroup
        :pretitle="language.value.index_sec3_orgs_subtitle"
        :title="language.value.index_sec3_orgs_title"
        :limited="false"
        class="text-center"
      />
      <v-row class="pa-16">
        <v-col md="4" cols="12" v-for="organ in get_organizations" class="mt-3">
          <router-link
            :to="{ name: 'Organizations', params: { id: organ.id } }"
            class="text-decoration-none"
          >
            <v-img :src="organ.img" cover class="rounded-xl h-100" />
            <h3 class="text-black text-center mt-2">
              {{ organ.title }}
            </h3>
          </router-link>
        </v-col>
        <v-col md="4" cols="12" v-for="organ in get_organizations" class="mt-3">
          <router-link
            :to="{ name: 'Organizations', params: { id: organ.id } }"
            class="text-decoration-none"
          >
            <v-img :src="organ.img" cover class="rounded-xl h-100" />
            <h3 class="text-black text-center mt-2">
              {{ organ.title }}
            </h3>
          </router-link>
        </v-col>
        <v-col md="4" cols="12" v-for="organ in get_organizations" class="mt-3">
          <router-link
            :to="{ name: 'Organizations', params: { id: organ.id } }"
            class="text-decoration-none"
          >
            <v-img :src="organ.img" cover class="rounded-xl h-100" />
            <h3 class="text-black text-center mt-2">
              {{ organ.title }}
            </h3>
          </router-link>
        </v-col>
        <v-col md="4" cols="12" v-for="organ in get_organizations" class="mt-3">
          <router-link
            :to="{ name: 'Organizations', params: { id: organ.id } }"
            class="text-decoration-none"
          >
            <v-img :src="organ.img" cover class="rounded-xl h-100" />
            <h3 class="text-black text-center mt-2">
              {{ organ.title }}
            </h3>
          </router-link>
        </v-col>
        <v-col md="4" cols="12" v-for="organ in get_organizations" class="mt-3">
          <router-link
            :to="{ name: 'Organizations', params: { id: organ.id } }"
            class="text-decoration-none"
          >
            <v-img :src="organ.img" cover class="rounded-xl h-100" />
            <h3 class="text-black text-center mt-2">
              {{ organ.title }}
            </h3>
          </router-link>
        </v-col>
      </v-row>
    </div>
  </section>
</template>
<script setup>
import TextGroup from "@/components/Global/text/TextGroup.vue";
import { use_organization_store } from "@/store/organization";
import { storeToRefs } from "pinia";
import { useDisplay } from "vuetify/lib/framework.mjs";

const { get_organizations } = storeToRefs(use_organization_store());
use_organization_store().index_organizations();
</script>
