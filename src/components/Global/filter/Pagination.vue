<template>
  <div class="d-flex flex-wrap align-center justify-center gap-1 my-10" dir="ltr">
      <v-btn prepend-icon="mdi-chevron-left" color="primary">قبل</v-btn>
      <v-btn min-width="10" width="10" :variant="active_page == i ? 'elevated' : 'outlined'" color="primary" v-for="(i,page) in 5">{{ i }}</v-btn>
      <v-btn append-icon="mdi-chevron-right" color="primary">بعد</v-btn>
  </div>
</template>

<script setup>
import { ref } from 'vue';

 
const active_page = ref(1)
</script>
