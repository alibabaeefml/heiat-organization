<template>
  <div
    :style="{
      'min-width': '600px',
      position: 'relative',
      scale: useDisplay().xs.value ? 0.5 : 1,
    }"
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
      style="position: absolute; left: 2rem; bottom: 5rem"
      :to="{ name: 'Provinces' }"
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
      style="position: absolute; left: 6.5rem; bottom: 4rem"
      :to="{ name: 'InterprofessionalOrganizationsCategorizedNews' }"
    >
      <v-img src="@/assets/images/ipo-white-icon.png" width="20" cover></v-img>
      <v-tooltip activator="parent"> مجامع میان تخصصی </v-tooltip>
    </v-btn>
    <v-btn
      icon
      color="#8cca54"
      size="small"
      class="menu-item"
      style="position: absolute; left: 11rem; bottom: 3rem"
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
      style="position: absolute; right: 2rem; bottom: 5rem"
      :to="{ name: 'CategorizedNews' }"
    >
      <v-img
        src="@/assets/images/news-white-icon.png"
        width="20"
        cover
      ></v-img>
      <v-tooltip activator="parent" location="right"> اخبار </v-tooltip>
    </v-btn>
    <v-btn
      icon
      color="#8cca54"
      size="small"
      class="menu-item"
      style="position: absolute; right: 6.5rem; bottom: 4rem"
    >
      <v-img
        src="@/assets/images/events-white-icon.png"
        width="20"
        cover
      ></v-img>
      <v-tooltip activator="parent" location="right"> رویداد ها </v-tooltip>
    </v-btn>
    <v-btn
      icon
      color="#8cca54"
      size="small"
      class="menu-item"
      style="position: absolute; right: 11rem; bottom: 3rem"
      :to="{ name: 'MultiMedia' }"
    >
      <v-img
        src="@/assets/images/multimedia-white-icon.png"
        width="20"
        cover
      ></v-img>
      <v-tooltip activator="parent" location="right"> چند رسانه ای </v-tooltip>
    </v-btn>
  </div>
</template>

<script setup>
import { useDisplay } from "vuetify/lib/framework.mjs";
</script>
