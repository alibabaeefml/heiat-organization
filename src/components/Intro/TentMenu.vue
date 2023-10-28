<template>
  <div
    :style="{
      'min-width': '600px',
      position: 'relative',
      scale: useDisplay().xs.value ? 0.5 : 1,
    }"
    class="text-center text-primary"
  >
    <img
      style="object-fit: cover; width: 100%; height: 100%"
      src="@/assets/images/tent.png"
      alt=""
    />
    <v-btn
      icon
      color="#8cca54"
      size="small"
      class="menu-item"
      style="position: absolute; left: 30px; bottom: 120px"
      :to="{ name: 'Provinces' }"
      disabled
    >
      <v-img
        src="@/assets/images/provinces-white-icon.png"
        width="20"
        cover
      ></v-img>
      <v-tooltip activator="parent"> استان ها </v-tooltip>
    </v-btn>
    <v-btn
      icon
      color="#8cca54"
      size="small"
      class="menu-item"
      style="position: absolute; left: 95px; bottom: 100px"
      :to="{ name: 'Organizations' }"
      disabled
    >
      <v-img src="@/assets/images/ipo-white-icon.png" width="20" cover></v-img>
      <v-tooltip activator="parent"> مجامع میان تخصصی </v-tooltip>
    </v-btn>
    <v-btn
      icon
      color="#8cca54"
      size="small"
      class="menu-item"
      style="position: absolute; left: 155px; bottom: 80px"
      disabled
    >
      <v-img
        src="@/assets/images/e-services-white-icon.png"
        width="20"
        cover
      ></v-img>
      <v-tooltip activator="parent"> خدمات الکترونیک </v-tooltip>
    </v-btn>

    <v-btn
      icon
      color="#8cca54"
      size="small"
      class="menu-item"
      style="position: absolute; right: 30px; bottom: 120px"
      :to="{ name: 'News' }"
    >
      <v-img src="@/assets/images/news-white-icon.png" width="20" cover></v-img>
      <v-tooltip activator="parent" location="right"> اخبار </v-tooltip>
    </v-btn>
    <v-btn
      icon
      color="#8cca54"
      size="small"
      class="menu-item"
      style="position: absolute; right: 95px; bottom: 100px"
      :to="{ name: 'ReporterNews' }"
    >
      <v-img
        src="@/assets/images/events-white-icon.png"
        width="20"
        cover
      ></v-img>
      <v-tooltip activator="parent" location="right">
        اخبار پویش خبرنگار
      </v-tooltip>
    </v-btn>
    <v-btn
      icon
      color="#8cca54"
      size="small"
      class="menu-item"
      style="position: absolute; right: 155px; bottom: 80px"
      :to="{ name: 'MultiMedia' }"
      disabled
    >
      <v-img
        src="@/assets/images/multimedia-white-icon.png"
        width="20"
        cover
      ></v-img>
      <v-tooltip activator="parent" location="right"> چند رسانه ای </v-tooltip>
    </v-btn>
    <h1>سازمان هیئت و تشکل های دینی</h1>
  </div>
</template>

<script setup>
import { useDisplay } from "vuetify/lib/framework.mjs";
</script>
