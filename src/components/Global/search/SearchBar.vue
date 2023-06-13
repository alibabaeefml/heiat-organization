<template>
  <v-autocomplete
    :color="theme == 'dark' ? '#fff' : '#000'"
    :bg-color="bg_color || 'rgba(255,255,255,.3)'"
    class="searchbar "
    rounded="lg"
    :class="{ 'w-100': useDisplay().xs.value ? true : false }"
    label="جستجو"
    :items="items"
    clearable
    item-value="id"
    item-title="title"
    item-props
    v-model="selected"
    no-data-text="خبری یافت نشد"
    @keydown="search"
    @update:model-value="onselect"
  >
  </v-autocomplete>
</template>
<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import { useDisplay } from "vuetify/lib/framework.mjs";

const props = defineProps(["theme", "items", "item_link", "bg_color"]);
const selected = ref();
const router = useRouter();

const emit = defineEmits(["onsearch"]);

let timeout = null;
const search = (event) => {
  clearTimeout(timeout);
  timeout = setTimeout(() => {
    if (event.target.value.length) {
      emit("onsearch", event.target.value);
    }
  }, 500);
};

const onselect = () => {
  router.push({
    name: props.item_link,
    params: { id: selected.value },
  });
};
</script>

<style>
.searchbar .v-input__details {
  display: none;
}
</style>
