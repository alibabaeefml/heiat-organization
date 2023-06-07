<template>
  <v-card
    class="pa-3 text-primary"
    color="secondary-3"
    prepend-icon="mdi-city"
    title="انتخاب استان"
  >
    <v-select
      color="primary"
      label="انتخاب استان"
      :items="get_all_provinces"
      variant="underlined"
      item-value="id"
      item-title="name_fa"
      v-model="selected"
      no-data-text="انتخاب کنید"
    ></v-select>
  </v-card>
</template>
<script setup>
import { use_province_store } from "@/store/province";
import { storeToRefs } from "pinia";
import { computed } from "vue";
const { get_all_provinces } = storeToRefs(use_province_store());



const props = defineProps(["province"]);

const emit = defineEmits(["select_province"]);
const selected = computed({
  get() {
    return props.province;
  },
  set(value) {
    emit("select_province", value);
  },
});
</script>
