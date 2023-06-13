<template>
  <div class="intro-wrapper">
    <v-btn
      icon
      color="#aaca54"
      style="position: absolute; top: 1rem; left: 1rem"
      @click="searchbar_display_lg = !searchbar_display_lg"
    >
      <v-img
        src="../assets/images/intro-search-icon.png"
        width="20"
        cover
        v-if="!searchbar_display_lg"
      ></v-img>
      <v-icon v-if="searchbar_display_lg">mdi-close</v-icon>
      <v-overlay
        activator="parent"
        class="d-md-none d-flex align-center justify-center w-100"
        v-model="overlay"
      >
        <v-card class="" :width="useDisplay().xs.value ? '90vw' : 500">
          <v-btn
            size="xs"
            variant="plain"
            position="absolute"
            location="top left"
            class="ma-2"
            icon="mdi-close"
            color="black"
            @click="overlay = false"
          ></v-btn>
          <v-card-text class="pa-8">
            <SearchBar @onsearch="search" :items="get_news" item_link="News" />
          </v-card-text>
        </v-card>
      </v-overlay>
    </v-btn>
    <SearchBar
      @onsearch="search"
      style="position: absolute; top: 1rem; width: 50%; z-index: 10"
      bg_color="#8cca54"
      :items="get_news"
      item_link="News"
      class="d-md-block d-none"
      v-if="searchbar_display_lg"
    />
    <v-img
      src="../assets/images/besmellah.png"
      style="position: absolute; top: 1rem; right: 1rem"
      width="100"
    ></v-img>

    <IntroMenu />
    <TentMenu />
  </div>
  <IntroFooter
    :style="{ height: useDisplay().xs.value ? 'max-content' : '5%' }"
  />
</template>

<script setup>
import IntroFooter from "@/components/Intro/IntroFooter.vue";
import TentMenu from "@/components/Intro/TentMenu.vue";
import IntroMenu from "@/components/Intro/IntroMenu.vue";
import { ref } from "vue";
import { useDisplay } from "vuetify/lib/framework.mjs";
import SearchBar from "@/components/Global/search/SearchBar.vue";
import { use_news_store } from "@/store/news";
import { storeToRefs } from "pinia";

const overlay = ref(false);
const searchbar_display_lg = ref(false);
const { get_news } = storeToRefs(use_news_store());
const search = (search) => {
  use_news_store().index_news({ search });
};
</script>

<style scoped>
.intro-wrapper {
  background-image: url(../assets/images/intro-bg.jpg);
  background-size: cover;
  background-position: center;
  height: 95%;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
