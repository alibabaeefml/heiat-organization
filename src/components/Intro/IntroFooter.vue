<template>
  <v-footer
    color="primary"
    class="d-flex flex-sm-row flex-column align-center justify-space-between"
  >
    <ul class="d-flex justify-center align-center flex-wrap">
      <li class="pa-0">
        <v-btn
          variant="text"
          class="pa-0"
          color="#aaca54"
          style="min-width: unset"
          :to="{ name: 'Home' }"
          :active="false"
          >صفحه اصلی</v-btn
        >
      </li>
      <span class="mx-1" style="color: #aaca54">|</span>

      <li class="pa-0">
        <v-btn
          variant="text"
          class="pa-0"
          color="#aaca54"
          style="min-width: unset"
          :to="{ name: 'ReporterNews' }"
          :active="false"
          >اخبار پویش خبرنگار</v-btn
        >
      </li>
      <span class="mx-1" style="color: #aaca54">|</span>
      <li class="pa-0">
        <v-btn
          variant="text"
          class="pa-0"
          color="#aaca54"
          style="min-width: unset"
          :to="{ name: 'News' }"
          :active="false"
          >اخبار</v-btn
        >
      </li>
      <!-- <li class="pa-0">
        
        <v-btn
          variant="text"
          class="pa-0"
          color="#aaca54"
          style="min-width: unset"
          :to="{ name: 'Intro' }"
          :active="false"
          >استان ها</v-btn
        >
      </li>
      <span class="mx-1" style="color: #aaca54">|</span>
      <li class="pa-0">
        <v-btn
          variant="text"
          class="pa-0"
          color="#aaca54"
          style="min-width: unset"
          :to="{ name: 'Intro' }"
          :active="false"
          >مجامع میان تخصصی</v-btn
        >
      </li>
      <span class="mx-1" style="color: #aaca54">|</span>
      <li class="pa-0">
        <v-btn
          variant="text"
          class="pa-0"
          color="#aaca54"
          style="min-width: unset"
          >رویدادها</v-btn
        >
      </li>
      <span class="mx-1" style="color: #aaca54">|</span>
      <li class="pa-0">
        <v-btn
          variant="text"
          class="pa-0"
          color="#aaca54"
          style="min-width: unset"
          >خدمات الکترونیک</v-btn
        >
      </li>
      
      <span class="mx-1" style="color: #aaca54">|</span>
      <li class="pa-0">
        <v-btn
          variant="text"
          class="pa-0"
          color="#aaca54"
          style="min-width: unset"
          :to="{ name: 'Intro' }"
          :active="false"
          >معرفی سازمان</v-btn
        >
      </li>
      <span class="mx-1" style="color: #aaca54">|</span>
      <li class="pa-0">
        <v-btn
          variant="text"
          class="pa-0"
          color="#aaca54"
          style="min-width: unset"
          :to="{ name: 'Intro' }"
          :active="false"
          >چندرسانه ای</v-btn
        >
      </li>
       -->
      <span class="mx-1" style="color: #aaca54">|</span>
      <li class="pa-0">
        <v-btn
          variant="text"
          class="pa-0"
          color="#aaca54"
          style="min-width: unset"
          :to="{ name: 'ContactUs' }"
          :active="false"
          >تماس با ما</v-btn
        >
      </li>
    </ul>
    <p style="color: #aaca54">
      کلیه حقوق این سایت متعلق به سازمان هیأت و تشکل های دینی می باشد.
    </p>
  </v-footer>
</template>
<script setup></script>