<template>
  <v-btn
    v-for="action in actions"
    variant="plain"
    color="primary"
    :icon="action.icon"
  ></v-btn>
</template>
<script setup>
import { ref } from "vue";
const actions = ref([

  {
    link: "/",
    icon: "mdi-thumb-up",
  },
  {
    link: "/",
    icon: "mdi-facebook",
  },
  {
    link: "/",
    icon: "mdi-youtube",
  },
  {
    link: "/",
    icon: "mdi-twitter",
  },
]);
</script>
