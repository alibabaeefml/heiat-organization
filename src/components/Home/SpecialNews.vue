<template>
  <section class="bg-secondary-3">
    <div class="position-relative pa-16 justify-center" style="z-index: 11">
      <TextGroup
        :pretitle="language.value.index_sec6_spc_subtitle"
        :title="language.value.index_sec6_spc_title"
        :desc="language.value.index_sec6_spc_desc"
      />
      <v-row class="pa-3">
        <v-col cols="12" md="6" v-for="item in specials" :key="item">
          <SpecialNewsItem
            :data="{
              caption: item.title,
              img: item.img,
              // link: { name: 'SpecialNews', params: { id: item.id } },
              link: { name: 'Home'},
            }"
          />
        </v-col>
      </v-row>
    </div>
  </section>
</template>

<script setup>
import { use_special_store } from "@/store/special";
import TextGroup from "../Global/text/TextGroup.vue";
import SpecialNewsItem from "@/components/Home/SpecialNewsItem.vue";
import { ref } from "vue";

const specials = ref([]);

const load_date = async () => {
  specials.value = await use_special_store().index_specials();
};
load_date();
</script>
