<template>
    <v-list
      rounded="lg"
      style="
        position: absolute;
        top: 20%;
        right: 0;
        z-index: 9999;
        /* animation: slide-left 0.5s; */
      "
      bg-color="#007033"
      class="pa-0 d-flex flex-column align-center"
    >
      <v-btn icon variant="text" class="menu-item" @click="$emit('hideMenu')">
        <v-icon color="#ddebb6">mdi-arrow-right</v-icon>
        <v-tooltip activator="parent"> بستن منو</v-tooltip>
      </v-btn>
      <v-btn icon variant="text" class="menu-item" :to="{ name: 'Home' }">
        <v-icon color="#ddebb6">mdi-home</v-icon>
        <v-tooltip activator="parent"> صفحه اصلی </v-tooltip>
      </v-btn>
      <v-btn
        icon
        variant="text"
        disabled
        class="menu-item"
        :to="{ name: 'Provinces' }"
      >
        <v-img
          src="@/assets/images/provinces-icon.png"
          width="20"
          cover
        ></v-img>
        <v-tooltip activator="parent"> استان ها </v-tooltip>
      </v-btn>
      <v-btn
        icon
        variant="text"
        class="menu-item"
        :to="{ name: 'Organizations' }"
        disabled
      >
        <v-img src="@/assets/images/ipo-icon.png" width="20" cover></v-img>
        <v-tooltip activator="parent"> مجامع میان تخصصی </v-tooltip>
      </v-btn>

      <v-btn
        icon
        variant="text"
        class="menu-item"
        :to="{ name: 'ReporterNews' }"
      >
        <v-img src="@/assets/images/events-icon.png" width="20" cover></v-img>
        <v-tooltip activator="parent"> اخبار پویش خبرنگار</v-tooltip>
      </v-btn>

      <v-btn icon variant="text" class="menu-item" disabled>
        <v-img
          src="@/assets/images/e-services-icon.png"
          width="20"
          cover
        ></v-img>
        <v-tooltip activator="parent"> خدمات الکترونیک </v-tooltip>
      </v-btn>
      <v-btn icon variant="text" class="menu-item" :to="{ name: 'News' }">
        <v-img src="@/assets/images/news-icon.png" width="20" cover></v-img>
        <v-tooltip activator="parent"> اخبار </v-tooltip>
      </v-btn>
      <v-btn
        icon
        variant="text"
        disabled
        class="menu-item"
        :to="{ name: 'AboutUs' }"
      >
        <v-img src="@/assets/images/about-us-icon.png" width="20" cover></v-img>
        <v-tooltip activator="parent"> معرفی سازمان </v-tooltip>
      </v-btn>
      <v-btn
        icon
        variant="text"
        disabled
        class="menu-item"
        :to="{ name: 'MultiMedia' }"
      >
        <v-img
          src="@/assets/images/multimedia-icon.png"
          width="20"
          cover
        ></v-img>
        <v-tooltip activator="parent"> چندرسانه ای </v-tooltip>
      </v-btn>
      <v-btn icon variant="text" class="menu-item" :to="{ name: 'ContactUs' }">
        <v-img
          src="@/assets/images/contact-us-icon.png"
          width="20"
          cover
        ></v-img>
        <v-tooltip activator="parent"> تماس با ما </v-tooltip>
      </v-btn>
    </v-list>
</template>

<script setup></script>

<style>
@keyframes slide-left {
  from {
    transform: translateX(50px);
  }
  to {
    transform: translateX(0px);
  }
}
</style>
