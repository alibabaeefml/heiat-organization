<template>
  <div class="position-relative">
    <div
      class="w-100 h-100 position-absolute pattern-div"
      style="pointer-events: none"
    ></div>
    <div
      style="
        padding-top: 10rem;
        padding-inline: 2rem;
        position: relative;
        z-index: 11;
      "
    >
      <TextGroup title="لیست صوت ها" />
      <v-row class="mt-5 pa-3">
        <v-col cols="12" md="3">
          <Filter
            class="mt-3"
            @search="search"
            @select_cat="select_cat"
            :categories="categories"
            @reset_filter="
              search('');
              filter_key = !filter_key;
            "
            :key="filter_key"
          />
        </v-col>
        <v-col cols="12" md="9">
          <v-row v-if="pages">
            <v-col
              cols="12"
              class="d-flex flex-column gap-1"
              style="max-height: 300px; overflow: auto"
            >
              <v-row>
                <v-col
                  cols="12"
                  md="6"
                  v-for="item in get_audios"
                  :key="item.id"
                >
                  <CaptionedAudio
                    :data="{ theme: theme }"
                    :audio="item"
                    @select_audio="select_audio"
                  />
                </v-col>
              </v-row>
            </v-col>
            <v-col cols="12">
              <Pagination :pages_count="pages" @callback="paginate" />
            </v-col>
            <v-col cols="12">
              <div
                id="audio"
                class="player-wrapper d-flex align-center flex-md-row flex-column"
              >
                <audio-player
                  theme="var(--primary)"
                  :file="selected_audio.file_url"
                  dir="ltr"
                  :key="selected_audio"
                  :auto-play="autoplay"
                  class="w-100"
                  controls_custom_class="justify-space-between"
                ></audio-player>
              </div>
            </v-col>
            <v-col>
              <h2>{{ selected_audio.title || "عنوان صوت انتخاب شده" }}</h2>
              <p class="text-justify mt-3">
                {{ selected_audio.desc || persian_lorem }}
              </p>
            </v-col>
          </v-row>
          <div
            v-else
            class="d-flex align-center justify-center"
            style="height: 300px"
          >
            <h3>صوتی موجود نیست</h3>
          </div>
        </v-col>
      </v-row>
    </div>
  </div>
</template>
<script setup>
import AudioPlayer from "@/components/Global/multimedia/AudioPlayer.vue";
import Filter from "@/components/Global/filter/Filter.vue";
import Pagination from "@/components/Global/filter/Pagination.vue";
import TextGroup from "@/components/Global/text/TextGroup.vue";
import { storeToRefs } from "pinia";
import { ref } from "vue";
import { useDisplay } from "vuetify/lib/framework.mjs";
import { use_paginate_store } from "@/store/paginate";
import { use_audio_store } from "@/store/audio";
import CaptionedAudio from "@/components/Global/card/CaptionedAudio.vue";
const paginate_store = use_paginate_store();
const { pages } = storeToRefs(paginate_store);

const selected_audio = ref({});
const store = use_audio_store();
const categories = ref([]);
const search = (search_term) => store.index_audios({ search: search_term });

const select_cat = (catid) => {
  store.index_audios({ catid });
};

const { get_audios } = storeToRefs(use_audio_store());

const load_data = async () => {
  await store.index_audios();
  // categories.value = await store.index_audios_categories();
};
load_data().then(() => (selected_audio.value = get_audios.value[0]));

const filter_key = ref(false);

const paginate = (page_number) => {
  store.index_audios({ page: page_number.value });
};

const autoplay = ref(false);
const select_audio = (audio) => {
  selected_audio.value = audio;
  autoplay.value = true;
};
</script>
