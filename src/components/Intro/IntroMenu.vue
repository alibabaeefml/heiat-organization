<template>
  <v-list
    rounded="lg"
    
    style="position: absolute; top: 20%; right:0; z-index: 10"
    bg-color="#007033"
    class="pa-0 d-flex flex-column align-center"
  >
    <v-btn icon variant="text" class="menu-item" :to="{ name: 'Home' }">
      <v-icon color="#ddebb6">mdi-home</v-icon>
      <v-tooltip activator="parent"> صفحه اصلی </v-tooltip>
    </v-btn>
    <v-btn icon variant="text" class="menu-item" :to="{ name: 'Provinces' }">
      <v-img src="@/assets/images/provinces-icon.png" width="20" cover></v-img>
      <v-tooltip activator="parent"> استان ها </v-tooltip>
    </v-btn>

    <v-btn
      icon
      variant="text"
      class="menu-item"
      :to="{ name: 'IPOCategorizedNews' }"
    >
      <v-img src="@/assets/images/ipo-icon.png" width="20" cover></v-img>
      <v-tooltip activator="parent"> مجامع میان تخصصی </v-tooltip>
    </v-btn>

    <v-btn icon variant="text" class="menu-item">
      <v-img src="@/assets/images/events-icon.png" width="20" cover></v-img>
      <v-tooltip activator="parent"> رویدادها </v-tooltip>
    </v-btn>

    <v-btn icon variant="text" class="menu-item">
      <v-img src="@/assets/images/e-services-icon.png" width="20" cover></v-img>
      <v-tooltip activator="parent"> خدمات الکترونیک </v-tooltip>
    </v-btn>

    <v-btn
      icon
      variant="text"
      class="menu-item"
      :to="{ name: 'CategorizedNews' }"
    >
      <v-img src="@/assets/images/news-icon.png" width="20" cover></v-img>
      <v-tooltip activator="parent"> اخبار </v-tooltip>
    </v-btn>

    <v-btn icon variant="text" class="menu-item" :to="{ name: 'AboutUs' }">
      <v-img src="@/assets/images/about-us-icon.png" width="20" cover></v-img>
      <v-tooltip activator="parent"> معرفی سازمان </v-tooltip>
    </v-btn>

    <v-btn icon variant="text" class="menu-item" :to="{ name: 'MultiMedia' }">
      <v-img src="@/assets/images/multimedia-icon.png" width="20" cover></v-img>
      <v-tooltip activator="parent"> چندرسانه ای </v-tooltip>
    </v-btn>

    <v-btn icon variant="text" class="menu-item" :to="{ name: 'ContactUs' }">
      <v-img src="@/assets/images/contact-us-icon.png" width="20" cover></v-img>
      <v-tooltip activator="parent"> تماس با ما </v-tooltip>
    </v-btn>
  </v-list>
</template>

<script setup></script>
