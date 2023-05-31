<template>
  <div class="intro-wrapper">
    <v-btn
      icon
      color="#aaca54"
      style="position: absolute; top: 1rem; left: 1rem"
    >
      <v-img
        src="../assets/images/intro-search-icon.png"
        width="20"
        cover
      ></v-img>
      <v-overlay
        activator="parent"
        class="d-flex align-center justify-center w-100"
        v-model="overlay"
      >
        <v-card width="500">
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
            <v-text-field autofocus label="جستجو کنید"> </v-text-field>
          </v-card-text>
        </v-card>
      </v-overlay>
    </v-btn>

    <v-img
      src="../assets/images/besmellah.png"
      style="position: absolute; top: 1rem; right: 1rem"
      width="100"
    ></v-img>

    <IntroMenu />
    <TentMenu />
  </div>
  <IntroFooter />
</template>

<script setup>
import IntroFooter from "@/components/Intro/IntroFooter.vue";
import TentMenu from "@/components/Intro/TentMenu.vue";
import IntroMenu from "@/components/Intro/IntroMenu.vue";
import { ref } from "vue";

const overlay = ref(false);
</script>

<style scoped>
.intro-wrapper {
  background-image: url(../assets/images/intro-bg.png);
  background-size: cover;
  background-position: center;
  height: 100%;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
