<template>
  <v-card
    title="جستجو"
    prepend-icon="mdi-magnify"
    color="secondary-3"
    class="text-primary"
  >
    <v-card-text class="d-flex align-center gap-1 pa-3">
      <v-text-field
        placeholder="متنی وارد نمایید"
        variant="underlined"
        v-model="search_term"
      >
      </v-text-field>
      <v-btn color="primary" @click="$emit('search', search_term)">بگرد</v-btn>
    </v-card-text>
  </v-card>
</template>
<script setup>
import { ref } from "vue";

const search_term = ref();
</script>
