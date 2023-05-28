<template>
  <v-autocomplete
    variant="underlined"
    :color="theme == 'dark' ? '#fff' : '#000'"
    bg-color="rgba(255,255,255,.3)"
    class="pl-5"
    label="جستجو"
    @input="$emit('input')"
    :items="items"
    clearable
    item-value="id"
    item-title="title_fa"
    v-model="selected"
    no-data-text="خبری یافت نشد"
    @update:model-value="onselect"
  >
  </v-autocomplete>
</template>
<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";

const props = defineProps(["theme", "items"]);
const selected = ref();
const router = useRouter();
const onselect = () => {
  router.push({
    name: "ProvincesSingleNews",
    params: { id: selected.value },
  });
};
</script>
